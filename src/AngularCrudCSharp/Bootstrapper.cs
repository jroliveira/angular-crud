using Nancy;
using Nancy.Conventions;

namespace AngularCrudCSharp {

    public class Bootstrapper : DefaultNancyBootstrapper {

        protected override void ConfigureConventions(NancyConventions nancyConventions) {
            nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("app", @"app"));
            base.ConfigureConventions(nancyConventions);
        }
    }
}