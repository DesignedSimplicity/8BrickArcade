using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace _8BrickArcade.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Galaga",
                url: "galaga/{action}/{id}",
                defaults: new { controller = "Galaga", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Home",
                url: "{page}",
                defaults: new { controller = "Home", action = "Page" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
