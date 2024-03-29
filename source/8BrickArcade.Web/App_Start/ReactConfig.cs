using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(_8BrickArcade.Web.ReactConfig), "Configure")]

namespace _8BrickArcade.Web
{
    public static class ReactConfig
    {
        public static void Configure()
        {
            ReactSiteConfiguration.Configuration
                .AddScript("~/Scripts/React/galaga-nav.jsx")
                .AddScript("~/Scripts/React/galaga-evo.jsx")
                .AddScript("~/Scripts/React/galaga-360.jsx")
                .AddScript("~/Scripts/React/galaga-img.jsx")
                .AddScript("~/Scripts/React/galaga-row.jsx");
        }
    }
}