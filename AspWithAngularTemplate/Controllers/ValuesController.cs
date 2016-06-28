using System.Collections.Generic;
using System.Web.Http;

namespace AspWithAngularTemplate.Controllers
{
    [Authorize]
    public class ValuesController : ApiController
    {
        // GET: api/Callendar
        public IEnumerable<string> Get()
        {
            return new string[] { User.Identity.Name, "value1", "value2" };
        }

        // GET: api/Callendar/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Callendar
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Callendar/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Callendar/5
        public void Delete(int id)
        {
        }
    }
}
