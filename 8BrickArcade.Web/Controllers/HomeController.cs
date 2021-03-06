﻿using _8BrickArcade.Web.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace _8BrickArcade.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Page(string page)
        {
            if (String.IsNullOrWhiteSpace(page)) return View("Index");
            return View(page);
        }
    }
}