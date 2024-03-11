using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using _8BrickArcade.Web.Models;

namespace _8BrickArcade.Web.Controllers
{
    public class GalagaController : Controller
    {
        // landing page for 8brick vs lego ideas picker
        public ActionResult Index()
        {
            var m = new GalagaViewModel();
            return View(m);
        }

        // detailed pages for each character with character type landing pages
        public ActionResult Characters(GalagaCharacter? id)
        {
            var m = new GalagaViewModel(id);
            var v = id.HasValue ? "Character" : "Characters";
            return View(v, m);
        }





        // LDD -> 1x1 tiles -> pick-a-brick
        public ActionResult Inspiration()
        {
            var m = new GalagaViewModel();
            return View(m);
        }

        // tile -> legobyte -> 4th dimension
        public ActionResult Philosophy()
        {
            var m = new GalagaViewModel();
            return View(m);
        }

        // incomplete versions, renders and behind the scenes pictures
        public ActionResult Progress()
        {
            var m = new GalagaViewModel();
            return View(m);
        }

        // origional pick-a-brick versions with story
        public ActionResult Flatlanders()
        {
            var m = new GalagaViewModel();
            return View(m);
        }

        // origional pick-a-brick versions with story
        public ActionResult Prototypes()
        {
            var m = new GalagaViewModel();
            return View(m);
        }

        // compares versions and characters in a pivot table like viewer
        public ActionResult Evolution()
        {
            var m = new GalagaViewModel();
            return View(m);
        }
    }
}