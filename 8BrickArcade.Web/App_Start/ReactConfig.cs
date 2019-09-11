using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;
using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(_8BrickArcade.Web.ReactConfig), "Configure")]

namespace _8BrickArcade.Web
{
	public static class ReactConfig
	{
		public static void Configure()
		{
			ReactSiteConfiguration.Configuration.LoadBabel = true;

			ReactSiteConfiguration.Configuration.DisableServerSideRendering();



			ReactSiteConfiguration.Configuration
				.AddScript("~/Scripts/React/GalagaFlatlanders.jsx")
				.AddScript("~/Scripts/React/GalagaNavigation.jsx")
				.AddScript("~/Scripts/React/GalagaNavigationNode.jsx")
				.AddScript("~/Scripts/React/GalagaPrototypes.jsx")
				.AddScript("~/Scripts/React/GalagaStates.jsx")
				.AddScript("~/Scripts/React/GalagaCharacterRow.jsx")
				.AddScript("~/Scripts/React/GalagaCharacterList.jsx")
				.AddScript("~/Scripts/React/GalagaCharacterPage.jsx")
				.AddScript("~/Scripts/React/GalagaEvolutionCell.jsx")
				.AddScript("~/Scripts/React/GalagaEvolutionRow.jsx")
				.AddScript("~/Scripts/React/GalagaEvolutionGrid.jsx")
				.AddScript("~/Scripts/React/GalagaViewer.jsx")
				.AddScript("~/Scripts/React/GalagaViewerAngle.jsx")
				.AddScript("~/Scripts/React/GalagaViewerAngleImage.jsx");

			JsEngineSwitcher.Current.DefaultEngineName = V8JsEngine.EngineName;
			JsEngineSwitcher.Current.EngineFactories.AddV8();
		}
	}
}