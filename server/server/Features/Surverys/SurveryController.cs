

using Microsoft.AspNetCore.Mvc;
using server.Features.Projects.Models;
using server.Features.Surverys.Models;
using server.Features.Surverys.Services;
using System.Runtime.InteropServices;

namespace server.Features.Surverys
{
    [ApiController]
    [Route("/api/[controller]")]
    public class PageviewController : ControllerBase
    {
        private readonly IPageviewService _service;

        public PageviewController(IPageviewService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var pageviews = await _service.GetAllAsync();
            return Ok(pageviews);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var pageview = await _service.GetByIdAsync(id);
            return pageview == null ? NotFound():Ok(pageview);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Pageview pageview)
        {
            var created = await _service.CreateAsync(pageview);
            return Ok(created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStaingtime(int id, [FromBody] UpdateStayingtime updateStayingtime)
        {
            var updatePageview = await _service.UpdateAsync(id, updateStayingtime);
            if (updatePageview == null)
            {
                return NotFound();
            }

            return Ok(updatePageview);
        }
    }

    [ApiController]
    [Route("/api/[controller]")]
    public class ClickeventController : ControllerBase
    {
        private readonly IClickeventService _service;
        public ClickeventController(IClickeventService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var clickevents = await _service.GetAllAsync();
            return Ok(clickevents);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Clickevent clickevent)
        {
            var created = await _service.CreateAsync(clickevent);
            return Ok(created);
        }
    }

    [ApiController]
    [Route("/api/[controller]")]
    public class Hover_eventController : ControllerBase
    {
        private readonly IHover_eventService _service;
        public Hover_eventController(IHover_eventService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var hover_events = await _service.GetAllAsync();
            return Ok(hover_events);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Hover_event hover_event)
        {
            var created = await _service.CreateAsync(hover_event);
            return Ok(created);
        }
    }

    [ApiController]
    [Route("/api/[controller]")]
    public class ScrollController : ControllerBase
    {
        private readonly IScrollService _service;
        public ScrollController(IScrollService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var scrolls = await _service.GetAllAsync();
            return Ok(scrolls);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Scroll scroll)
        {
            var created = await _service.CreateAsync(scroll);
           return Ok(created);
        }
    }


    [ApiController]
    [Route("/api/[controller]")]
    public class TaskresultController : ControllerBase
    {
        private readonly ITaskresultService _service;
        public TaskresultController(ITaskresultService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var taskresults = await _service.GetAllAsync();
            return Ok(taskresults);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Taskresult taskresult)
        {
            var created =  await _service.CreateAsync(taskresult);
            return Ok(created);
        }
    }

    [ApiController]
    [Route("/api/[controller]")]
    public class User_trialController : ControllerBase
    {
        private readonly IUser_trialService _service;
        public User_trialController(IUser_trialService service)
        {
            _service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var user_trials = await _service.GetAllAsync(); 
            return Ok(user_trials);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]User_trial user_Trial)
        {
            var created = await _service.CreateAsync(user_Trial);
            return Ok(created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id)
        {

            var updated = await _service.UpdateAsync(id);
            return updated ==null ? NotFound() : Ok(updated);
        }
    }

  
}