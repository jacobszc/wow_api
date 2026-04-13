using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace WowApi.Controllers;

public class HomeController : Controller
{
    

public string Index()
    {
        
        return "Default home controller, this should return in a controller isnt specified in program.cs";


    }


}