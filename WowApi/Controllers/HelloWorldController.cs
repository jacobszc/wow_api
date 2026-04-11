using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace WowApi.Controllers;

public class HelloWorldController : Controller
{
    // 
    // GET: /HelloWorld/
    public string Index()
    {
        return "This happened because you didnt route to any other function so index was called by defualt...";
    }
    // 
    // GET: /HelloWorld/Welcome/  
    public string Welcome()
    {
        return "This is the Welcome action method...";
    }
}