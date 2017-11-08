using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ShareIT.Models;

namespace ShareIT.Controllers
{
    public class StudentsController : ApiController
    {
        private readonly ShareResourcesEntities _db = new ShareResourcesEntities();

        // GET: api/Students
        public IQueryable<Student> GetStudents()
        {
            return _db.Students;
        }

        // GET: api/Students/5
        public IHttpActionResult GetStudent(string userName, string userPassword)
        {
            var student = _db.Students
                .FirstOrDefault(s => s.UserName == userName);

            if (student == null)
                return BadRequest("Пользователь с именем "+ userName +" не найден"); 


            if (student.Password != userPassword)
                return BadRequest("Неверный пароль");

            return Ok(student);
        }

        // PUT: api/Students/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStudent(int id, Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != student.Id)
            {
                return BadRequest();
            }

            _db.Entry(student).State = EntityState.Modified;

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Students
        [ResponseType(typeof(Student))]
        public IHttpActionResult PostStudent(Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Students.Add(student);
            _db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = student.Id }, student);
        }

        // DELETE: api/Students/5
        [ResponseType(typeof(Student))]
        public IHttpActionResult DeleteStudent(int id)
        {
            Student student = _db.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }

            _db.Students.Remove(student);
            _db.SaveChanges();

            return Ok(student);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StudentExists(int id)
        {
            return _db.Students.Count(e => e.Id == id) > 0;
        }
    }
}