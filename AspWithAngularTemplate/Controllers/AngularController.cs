using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspWithAngularTemplate.Controllers
{
    public class AngularController : Controller
    {
        // GET: Angular
        public ActionResult Index(string id)
        {
            ViewBag.Path = id;
            return View();
        }
    }
}