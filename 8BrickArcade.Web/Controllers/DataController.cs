using _8BrickArcade.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;

namespace _8BrickArcade.Web.Controllers
{
    public class DataController : Controller
    {

        [OutputCache(Location = OutputCacheLocation.None)]
        public ActionResult Comments()
        {
            List<CommentModel> comments = new List<CommentModel>();

            comments.Add(new CommentModel()
            {
                Id = 1,
                Author = "Kevin",
                Text = "This is my first comment"
            });
            comments.Add(new CommentModel()
            {
                Id = 2,
                Author = "Bob",
                Text = "This is another comment"
            });

            return Json(comments, JsonRequestBehavior.AllowGet);
        }
    }
}