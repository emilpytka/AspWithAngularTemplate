using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AspWithAngularTemplate.Startup))]
namespace AspWithAngularTemplate
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
