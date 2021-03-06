﻿using System.Web;
using System.Web.Optimization;
using System.Web.Optimization.React;

namespace _8BrickArcade
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
			BundleTable.EnableOptimizations = true;

			//bundles.Add(new ScriptBundle("~/bundles/jquery").Include("~/Scripts/jquery-{version}.js"));
			//bundles.Add(new ScriptBundle("~/bundles/modernizr").Include("~/Scripts/modernizr-*"));
			//bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include("~/Scripts/bootstrap.js"));

			bundles.Add(new ScriptBundle("~/bundles/js").Include(
						"~/Scripts/jquery-{version}.js",
						"~/Scripts/modernizr-*"
						));

			bundles.Add(new BabelBundle("~/bundles/react").Include(
                        "~/Scripts/React/galaga-nav.jsx",
                        "~/Scripts/React/galaga-evo.jsx",
                        "~/Scripts/React/galaga-360.jsx",
						"~/Scripts/React/galaga-img.jsx",
						"~/Scripts/React/galaga-row.jsx"
						));
			
            bundles.Add(new StyleBundle("~/Content/css").Include(
                        "~/Content/bootstrap.css",
                        "~/Content/_main.css",
                        "~/Content/_galaga.css"));
        }
    }
}
