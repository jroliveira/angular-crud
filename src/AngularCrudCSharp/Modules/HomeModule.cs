using Nancy;

namespace AngularCrudCSharp.Modules {

    public class HomeModule : NancyModule {

        public HomeModule() {
            Get["/"] = _ => View["app/index.html"];
        }
    }
}