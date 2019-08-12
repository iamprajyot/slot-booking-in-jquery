(function($) {
  var Dates = []
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var totalDuration = 45; // total duration of particular appointment or booking
  var availabilities = {
    "mon": {
      "6:00AM": true,"6:15AM": true,"6:30AM": true,"6:45AM": true,"7:00AM": false,"7:15AM": false,"7:30AM": false,"7:45AM": false,"8:00AM": true,"8:15AM": true,"8:30AM": true,"8:45AM": true,"9:00AM": false,"9:15AM": false,"9:30AM": false,"9:45AM": false,"10:00AM": true,"10:15AM": true,"10:30AM": true,"10:45AM": true,"11:00AM": false,"11:15AM": false,"11:30AM": false,"11:45AM": false,"1:00PM": true,"1:15PM": true,"1:30PM": true,"1:45PM": true,"2:00PM": false,"2:15PM": false,"2:30PM": false,"2:45PM": false,"3:00PM": true,"3:15PM": true,"3:30PM": true,"3:45PM": true,"4:00PM": false,"4:15PM": false,"4:30PM": false,"4:45PM": false,"5:00PM": true,"5:15PM": true,"5:30PM": true,"5:45PM": true,"6:00PM": false,"6:15PM": false,"6:30PM": false,"6:45PM": false,"7:00PM": true,"7:15PM": true,"7:30PM": true,"7:45PM": true,"8:00PM": false,"8:15PM": false,"8:30PM": false,"8:45PM": false,"9:00PM": true,"9:15PM": true,"9:30PM": true,"9:45PM": true,"10:00PM": false,"10:15PM": false,"10:30PM": false,"10:45PM": false,"11:00PM": true,"11:15PM": true,"11:30PM": true,"11:45PM": true,"12:00PM": false,"12:15PM": false,"12:30PM": false,"12:45PM": false
    },
    "tue": {
      "6:00AM": false,"6:15AM": false,"6:30AM": false,"6:45AM": false,"7:00AM": true,"7:15AM": true,"7:30AM": true,"7:45AM": true,"8:00AM": false,"8:15AM": false,"8:30AM": false,"8:45AM": false,"9:00AM": true,"9:15AM": true,"9:30AM": true,"9:45AM": true,"10:00AM": false,"10:15AM": false,"10:30AM": false,"10:45AM": false,"11:00AM": true,"11:15AM": true,"11:30AM": true,"11:45AM": true,"1:00PM": false,"1:15PM": false,"1:30PM": false,"1:45PM": false,"2:00PM": true,"2:15PM": true,"2:30PM": true,"2:45PM": true,"3:00PM": false,"3:15PM": false,"3:30PM": false,"3:45PM": false,"4:00PM": true,"4:15PM": true,"4:30PM": true,"4:45PM": true,"5:00PM": false,"5:15PM": false,"5:30PM": false,"5:45PM": false,"6:00PM": true,"6:15PM": true,"6:30PM": true,"6:45PM": true,"7:00PM": false,"7:15PM": false,"7:30PM": false,"7:45PM": false,"8:00PM": true,"8:15PM": true,"8:30PM": true,"8:45PM": true,"9:00PM": false,"9:15PM": false,"9:30PM": false,"9:45PM": false,"10:00PM": true,"10:15PM": true,"10:30PM": true,"10:45PM": true,"11:00PM": false,"11:15PM": false,"11:30PM": false,"11:45PM": false,"12:00PM": true,"12:15PM": true,"12:30PM": true,"12:45PM": true
    },
    "wed": {
      "6:00AM": false,"6:15AM": false,"6:30AM": false,"6:45AM": false,"7:00AM": true,"7:15AM": true,"7:30AM": true,"7:45AM": true,"8:00AM": false,"8:15AM": false,"8:30AM": false,"8:45AM": false,"9:00AM": true,"9:15AM": true,"9:30AM": true,"9:45AM": true,"10:00AM": false,"10:15AM": false,"10:30AM": false,"10:45AM": false,"11:00AM": false,"11:15AM": false,"11:30AM": false,"11:45AM": false,"1:00PM": true,"1:15PM": true,"1:30PM": true,"1:45PM": true,"2:00PM": false,"2:15PM": false,"2:30PM": false,"2:45PM": false,"3:00PM": false,"3:15PM": false,"3:30PM": false,"3:45PM": false,"4:00PM": true,"4:15PM": true,"4:30PM": true,"4:45PM": true,"5:00PM": false,"5:15PM": false,"5:30PM": false,"5:45PM": false,"6:00PM": true,"6:15PM": true,"6:30PM": true,"6:45PM": true,"7:00PM": false,"7:15PM": false,"7:30PM": false,"7:45PM": false,"8:00PM": true,"8:15PM": true,"8:30PM": true,"8:45PM": true,"9:00PM": false,"9:15PM": false,"9:30PM": false,"9:45PM": false,"10:00PM": true,"10:15PM": true,"10:30PM": true,"10:45PM": true,"11:00PM": false,"11:15PM": false,"11:30PM": false,"11:45PM": false,"12:00PM": true,"12:15PM": true,"12:30PM": true,"12:45PM": true
    },
    "thu": {
      "6:00AM": true,"6:15AM": true,"6:30AM": true,"6:45AM": true,"7:00AM": false,"7:15AM": false,"7:30AM": false,"7:45AM": false,"8:00AM": false,"8:15AM": false,"8:30AM": false,"8:45AM": false,"9:00AM": false,"9:15AM": false,"9:30AM": false,"9:45AM": false,"10:00AM": true,"10:15AM": true,"10:30AM": true,"10:45AM": true,"11:00AM": false,"11:15AM": false,"11:30AM": false,"11:45AM": false,"1:00PM": false,"1:15PM": false,"1:30PM": false,"1:45PM": false,"2:00PM": true,"2:15PM": true,"2:30PM": true,"2:45PM": true,"3:00PM": false,"3:15PM": false,"3:30PM": false,"3:45PM": false,"4:00PM": false,"4:15PM": false,"4:30PM": false,"4:45PM": false,"5:00PM": true,"5:15PM": true,"5:30PM": true,"5:45PM": true,"6:00PM": false,"6:15PM": false,"6:30PM": false,"6:45PM": false,"7:00PM": true,"7:15PM": true,"7:30PM": true,"7:45PM": true,"8:00PM": false,"8:15PM": false,"8:30PM": false,"8:45PM": false,"9:00PM": true,"9:15PM": true,"9:30PM": true,"9:45PM": true,"10:00PM": false,"10:15PM": false,"10:30PM": false,"10:45PM": false,"11:00PM": true,"11:15PM": true,"11:30PM": true,"11:45PM": true,"12:00PM": false,"12:15PM": false,"12:30PM": false,"12:45PM": false
    },
    "fri": {
      "6:00AM": false,"6:15AM": false,"6:30AM": false,"6:45AM": false,"7:00AM": true,"7:15AM": true,"7:30AM": true,"7:45AM": true,"8:00AM": true,"8:15AM": true,"8:30AM": true,"8:45AM": true,"9:00AM": false,"9:15AM": false,"9:30AM": false,"9:45AM": false,"10:00AM": false,"10:15AM": false,"10:30AM": false,"10:45AM": false,"11:00AM": false,"11:15AM": false,"11:30AM": false,"11:45AM": false,"1:00PM": false,"1:15PM": false,"1:30PM": false,"1:45PM": false,"2:00PM": true,"2:15PM": true,"2:30PM": true,"2:45PM": true,"3:00PM": false,"3:15PM": false,"3:30PM": false,"3:45PM": false,"4:00PM": false,"4:15PM": false,"4:30PM": false,"4:45PM": false,"5:00PM": false,"5:15PM": false,"5:30PM": false,"5:45PM": false,"6:00PM": true,"6:15PM": true,"6:30PM": true,"6:45PM": true,"7:00PM": false,"7:15PM": false,"7:30PM": false,"7:45PM": false,"8:00PM": true,"8:15PM": true,"8:30PM": true,"8:45PM": true,"9:00PM": false,"9:15PM": false,"9:30PM": false,"9:45PM": false,"10:00PM": true,"10:15PM": true,"10:30PM": true,"10:45PM": true,"11:00PM": false,"11:15PM": false,"11:30PM": false,"11:45PM": false,"12:00PM": false,"12:15PM": false,"12:30PM": false,"12:45PM": false
    },
    "sat": {
      "6:00AM": false,"6:15AM": false,"6:30AM": false,"6:45AM": false,"7:00AM": false,"7:15AM": false,"7:30AM": false,"7:45AM": false,"8:00AM": true,"8:15AM": true,"8:30AM": true,"8:45AM": true,"9:00AM": false,"9:15AM": false,"9:30AM": false,"9:45AM": false,"10:00AM": true,"10:15AM": true,"10:30AM": true,"10:45AM": true,"11:00AM": false,"11:15AM": false,"11:30AM": false,"11:45AM": false,"1:00PM": true,"1:15PM": true,"1:30PM": true,"1:45PM": true,"2:00PM": false,"2:15PM": false,"2:30PM": false,"2:45PM": false,"3:00PM": false,"3:15PM": false,"3:30PM": false,"3:45PM": false,"4:00PM": false,"4:15PM": false,"4:30PM": false,"4:45PM": false,"5:00PM": false,"5:15PM": false,"5:30PM": false,"5:45PM": false,"6:00PM": false,"6:15PM": false,"6:30PM": false,"6:45PM": false,"7:00PM": true,"7:15PM": true,"7:30PM": true,"7:45PM": true,"8:00PM": false,"8:15PM": false,"8:30PM": false,"8:45PM": false,"9:00PM": true,"9:15PM": true,"9:30PM": true,"9:45PM": true,"10:00PM": false,"10:15PM": false,"10:30PM": false,"10:45PM": false,"11:00PM": false,"11:15PM": false,"11:30PM": false,"11:45PM": false,"12:00PM": false,"12:15PM": false,"12:30PM": false,"12:45PM": false
    },
    "sun": {
      "6:00AM": true,"6:15AM": true,"6:30AM": true,"6:45AM": true,"7:00AM": false,"7:15AM": false,"7:30AM": false,"7:45AM": false,"8:00AM": true,"8:15AM": true,"8:30AM": true,"8:45AM": true,"9:00AM": false,"9:15AM": false,"9:30AM": false,"9:45AM": false,"10:00AM": true,"10:15AM": true,"10:30AM": true,"10:45AM": true,"11:00AM": true,"11:15AM": true,"11:30AM": true,"11:45AM": true,"1:00PM": false,"1:15PM": false,"1:30PM": false,"1:45PM": false,"2:00PM": true,"2:15PM": true,"2:30PM": true,"2:45PM": true,"3:00PM": true,"3:15PM": true,"3:30PM": true,"3:45PM": true,"4:00PM": false,"4:15PM": false,"4:30PM": false,"4:45PM": false,"5:00PM": false,"5:15PM": false,"5:30PM": false,"5:45PM": false,"6:00PM": false,"6:15PM": false,"6:30PM": false,"6:45PM": false,"7:00PM": true,"7:15PM": true,"7:30PM": true,"7:45PM": true,"8:00PM": true,"8:15PM": true,"8:30PM": true,"8:45PM": true,"9:00PM": true,"9:15PM": true,"9:30PM": true,"9:45PM": true,"10:00PM": true,"10:15PM": true,"10:30PM": true,"10:45PM": true,"11:00PM": true,"11:15PM": true,"11:30PM": true,"11:45PM": true,"12:00PM": true,"12:15PM": true,"12:30PM": true,"12:45PM": true
    }
  };
  Date.prototype.getWeek = function(dayDate) {
    start = 0;
    var dayDate = dayDate || new Date(this.setHours(0, 0, 0, 0));
    var day = dayDate.getDay() - start;
    // Grabbing Start/End Dates
    var StartDate = new Date(dayDate);
    StartDate.setDate(dayDate.getDate() - day);
    var EndDate = new Date(StartDate);
    EndDate.setDate(StartDate.getDate() + 6);
    return [StartDate, EndDate];
  };

  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  function getWeekDates(startDate, stopDate) {
      var dateArray = new Array();
      var currentDate = startDate;
      while (currentDate <= stopDate) {
          dateArray.push(new Date (currentDate));
          currentDate = currentDate.addDays(1);
      }
      return dateArray;
  }

  $.fn.appointmentSystem = function(callerSettings) {
    var settings = $.extend({
      days: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], // Days displayed
      hours: "06:00AM-11:00PM", // Hours displyed
      fontFamily: "Montserrat", // Font used in the component
      fontColor: "black", // Font colot used in the component
      fontWeight: "100", // Font weight used in the component
      fontSize: "0.8em", // Font size used in the component
      hoverColor: "#727bad", // Background color when hovered
      selectionColor: "#9aa7ee", // Background color when selected
      headerBackgroundColor: "transparent", // Background color of headers
      onSelected: function() {}, // handler called after selection
      onRemoved: function() {} // handler called after removal
    }, callerSettings || {});
    settings.hoursParsed = parseHours(settings.hours);
    var mousedown = false;
    var devarionMode = false;
    var schedule = this;

    function getSelectedHour() {
      var dayContainer = $('.full-days-container');
      var output = {};
      for (var i = 0; i < dayContainer.length; i++) {
        var children = $(dayContainer[i]).children();
        var hoursSelected = [];
        for (var j = 0; j < children.length; j++) {
          if ($(children[j]).hasClass('selected')) {
            hoursSelected.push(children[j]);
          }
        }
        output[i] = hoursSelected;
      }
      console.log(output);
      return output;
    }

    function getCalenderIconDom(selectedDate){
      return '<input type="text" id="datepickerfrom" style="cursor:pointer;visibility:hidden;height:0;width:0;"/><div class="date" for="datepickerfrom"><span class="binds"></span><span class="year">'+ selectedDate.getFullYear() +'</span><span class="binds"></span><span class="month">'+ monthNames[selectedDate.getMonth()] +'</span><h6 class="cal-day">'+ selectedDate.getDate() +'</h6></div>'
    }

    function renderSlotSystem(settings) {
      var days = settings.days;
      var hours = settings.hoursParsed;

      /*
        selectedDate will be the todays date or date selected on calender or first day date when next week button clicked or 
        last day date when previoues week button clicked
      */
      var selectedDate = settings.selectedDate || new Date();// option
      // get the selected date's week's start date and end date
      Dates = new Date().getWeek(selectedDate);
      // get all day's date of the week from start date and end date
      var weekDateArray = getWeekDates(Dates[0], Dates[1]);

      $(schedule).addClass('schedule');
      
      // >>>>>>>>> menu block render START
      // menu block which will contains calender icon fro date selection and service info
      var menuBlock = $('<div></div>', {
        class: "menu-container"
      });
      var calenderIconDom = $('<div></div>', {
        html: getCalenderIconDom(selectedDate)
      });
      // service details dom
      var detailsOfServices = $('<div style="margin-left: 30px;"><span><h3>You selected total ' + totalDuration / 15 + ' service/s for total duration of ' + totalDuration + ' minutes</h3></span></div>', {});

      $(menuBlock).append(calenderIconDom);
      $(menuBlock).append(detailsOfServices);
      $(schedule).append(menuBlock);
      // <<<<<<<< menu block render END

      // >>>>>>>>> hour header render START
      var hourHeaderContainer = $('<div></div>', {
        class: "header hour-header-container"
      });
      var align_block = $("<div></div>", {
        class: "align-block",
        id: "calender-block",
        html: '<a href="#" class="previous round">&#8249;</a> | <a href="#" class="next round">&#8250;</a><div style="font-size: 10px;">'
      });
      hourHeaderContainer.append(align_block);
      for (var i = 0; i < hours.length; i = i + 4) {
        var hour_header = $('<div></div>', {
          class: "header-item hour-header-item " + hours[i] + "-header"
        });
        var header_title = $('<h3>' + hours[i] + '</h3>')
        hour_header.append(header_title);
        hourHeaderContainer.append(hour_header);
      }
      $(schedule).append(hourHeaderContainer);
      // <<<<<<<<  hour header render END
      
      // >>>>>>>>> All days render START
      var allDaysContainer = $('<div></div>', {
        class: "all-days-container"
      });
      
      for (var i = 0; i < days.length; i++) {
        var fullDayContainer = $('<div></div>', {
          class: "full-days-container " + days[i] + " " + weekDateArray[i].toLocaleDateString()
        });
        var day_header = $('<div></div>', {
          class: "day-header header-item hour-header-item day-header " + capitalize(days[i]) + "-header" + " " + ((selectedDate.toLocaleDateString() == weekDateArray[i].toLocaleDateString()) ? "today" : "")
        });
        var day_header_title = $('<h3><b>' + capitalize(days[i]) + '</b> ' + weekDateArray[i].toLocaleDateString() + '</h3>')
        
        day_header.append(day_header_title);
        fullDayContainer.append(day_header);
        
        for (j = 0; j < hours.length; j++) {
          var divCss = '';
          if (j % 4 == 0) {
            divCss = "firstElement"
          }
          var timeSlotDiv = $('<div></div>', {
            class: "slot-item hour " + weekDateArray[i].toLocaleDateString() + " " + hours[j] + " " + divCss + " " + (((getDateTime(weekDateArray[i], hours[j])) < (new Date())) ? "past-day-slot" : (availabilities[days[i]][hours[j]] ? "available" : "not-available")),
            title: (((getDateTime(weekDateArray[i], hours[j])) < (new Date())) ? "Slot is in past" : (availabilities[days[i]][hours[j]] ? (hours[j] + " to " + (hours[j + 1] ? hours[j + 1] : "12:00AM")) : "Slot not available for booking"))
          });
          fullDayContainer.append(timeSlotDiv);
        }
        allDaysContainer.append(fullDayContainer);
      }

      $(schedule).append(allDaysContainer);
    }

    // to generate date object from date string and time string
    function getDateTime(dateObject, timeObject){
      var dateSplit = dateObject.toLocaleDateString().split('/');
      var temp = dateSplit[0];
      dateSplit[0] = dateSplit[1];
      dateSplit[1] = temp
      var dateString = dateSplit.join('-');
      var timeStingArr = timeObject.split(':');
      if(timeStingArr[1].includes('PM') && parseInt(timeStingArr[0]) < 12){
        timeStingArr[0] = parseInt(timeStingArr[0]) + 12;
      }
      timeStingArr[1] = timeStingArr[1].slice(0,2);
      var timeString =timeStingArr.join(':');
      var newDateTimeObject = new Date(dateString + ' ' + timeString);
      return newDateTimeObject;
    }

    function slotSystemCSS(settings) {
      $('.schedule').css({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
      });
      $('.header').css({
        height: "30px",
        width: "100%",
        background: settings.headerBackgroundColor,
        marginBottom: "5px",
        display: "flex",
        flexDirection: "row"
      });

      $('.menu-container').css({
        height: "30px",
        width: "100%",
        background: settings.headerBackgroundColor,
        display: "flex",
        flexDirection: "row",
        margin: "0 0 25px 30px"
      });
      $('.align-block').css({
        minWidth: "100px",
        height: "100%",
        background: settings.headerBackgroundColor,
        margin: "3px",
        textAlign: "center",
        padding: "5px 0 0 0"
      });
      $('.day-header').css({
        minWidth: "100px",
        height: "100%",
        background: settings.headerBackgroundColor,
        margin: "3px"
      });
      // Style Header Items
      $('.header-item').css({
        width: '100%',
        height: '100%',
        margin: '2px' // option
      });
      $('.header-item h3').css({
        margin: 0,
        textAlign: 'center',
        verticalAlign: 'middle',
        position: "relative",
        top: "50%",
        color: settings.fontColor,
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        fontWeight: settings.fontWeight,
        transform: "translateY(-50%)",
        userSelect: "none"
      });
      $('.hour-header').css({
        display: 'flex',
        flexDirection: 'column',
        margin: '2px', // option
        marginRight: '1px',
        background: settings.headerBackgroundColor,
        width: '100%'
      });
      $('.days-wrapper').css({
        width: "100%",
        height: "100%",
        background: "transparent", //option
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        position: "relative"
      });
      $('.hour-header-item').css({
        width: "100%",
        height: "100%",
        border: "none", // option
        borderColor: "none", // option
        borderStyle: "none" // option
      });
      $('.hour-header-item h5').css({
        color: settings.fontColor,
        margin: "0", // option
        textAlign: "right",
        verticalAlign: "middle",
        position: "relative",
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        fontWeight: settings.fontWeight,
        paddingRight: "10%",
        userSelect: "none"
      });
      $('.day').css({
        display: "flex",
        flexDirection: "column",
        marginRight: "1px", // option
        marginBottom: "1px",
        background: "transparent", // option
        width: "100%"
      });
      $('.hour').css({
        background: "#abc", // option
        marginBottom: "1px", // option
        width: "100%",
        height: "100%",
        userSelect: "none"
      });
      $('.full-days-container').css({
        height: "30px",
        width: "100%",
        background: settings.headerBackgroundColor,
        marginBottom: "5px",
        display: "flex",
        flexDirection: "row",
        float: "left"
      });

      $('.slot-item').css({
        borderRight: "1px solid",
        borderTop: "1px solid",
        borderBottom: "1px solid"
      });

      $('.firstElement').css({
        borderLeft: "1px solid"
      });

      $('.not-available').css({
        background: "#9ff7ee"
      }).click(false);

      $('.today').css({
        background: "#999"
      });

      $('.past-day-slot').css({
        background: "#aaa"
      });
    }

    function slotSystemEvents(settings) {
      $("<style type='text/css' scoped> .hover { background: " + settings.hoverColor + " !important;} .selected { background: " + settings.selectionColor + " !important; } .disabled { pointer-events: none !important; opacity: 0.3 !important; box-shadow: none !important; }</style>").appendTo(schedule);
      // Prevent Right Click
      $('.schedule').on('contextmenu', function() {
        return false;
      });

      $('.date').on('click', function() {
        console.log('clicked');
        $('#datepickerfrom').datepicker('show');
      });

      $("#datepickerfrom").datepicker({
        onSelect: function(dateText, inst) {
          reRenderSlotSystem(new Date(dateText));
        }
      });

      $('.next').on('click', function() {
        var nextDay = new Date(Dates[1]);
        nextDay.setDate(Dates[1].getDate()+1);
        reRenderSlotSystem(nextDay);
      });

      $('.previous').on('click', function() {
        var previousDay = new Date(Dates[0]);
        previousDay.setDate(Dates[0].getDate()-1);
        reRenderSlotSystem(previousDay);
      });

      $('.available').on('mouseenter', function() {
        if (!mousedown) {
          $(this).addClass('hover');
        } else {
          if (devarionMode) {
            $(this).removeClass('selected');
          } else {
            $(this).addClass('selected');
          }
        }
      }).on('mousedown', function() {
        mousedown = true;
        focusOn($(this).parent());
        if ($(this).hasClass('selected')) {
          schedule.trigger('selectionremoved');
          $(this).removeClass('selected');
          devarionMode = true;
          getSelectedHour();
        } else {
          $('.selected').removeClass('selected');
          schedule.trigger('selectionmade');
          $(this).addClass('selected');
          console.log("*:lt(" + ((totalDuration / 15) - 1) + ")");
          var t = $(this).nextAll("*:lt(" + ((totalDuration / 15) - 1) + ")");
          for (var i = 0; i < t.length; i++) {
            $($(t[i])[0]).addClass('selected');
          }
          if ($('.selected.available').length < totalDuration / 15) {
            $('.selected').removeClass('selected');
            alert("Select valid slots\nYou need to choose " + totalDuration / 15 + " continueous available slots for duration of " + totalDuration + " minutes of service/s.");
          } else {
            getSelectedHour();
          }
        }
        $(this).removeClass('hover');
      }).on('mouseup', function() {
        devarionMode = false;
        mousedown = false;
        clearFocus();
      }).on('mouseleave', function() {
        if (!mousedown) {
          $(this).removeClass('hover');
        }
      });
    }

    function reRenderSlotSystem(dateToSelect){
      $(schedule).empty();
      settings.selectedDate = dateToSelect;
      renderSlotSystem(settings);
      slotSystemCSS(settings);
      slotSystemEvents(settings);
    }


    if (typeof callerSettings == 'string') {
      switch (callerSettings) {
        case 'getSelectedHour':
          return getSelectedHour();
          break;
        default:
          throw 'Weekly schedule method unrecognized!'
      }
    }
    // options is an object, initialize!
    else {
      reRenderSlotSystem();
    }

    function parseHours(string) {
      var output = [];
      var split = string.toUpperCase().split("-");
      var startInt = parseInt(split[0].split(":")[0]);
      var endInt = parseInt(split[1].split(":")[0]);
      var startHour = split[0].includes("PM") ? startInt + 12 : startInt;
      var endHour = split[1].includes("PM") ? endInt + 12 : endInt;
      var curHour = startHour;
      for (curHour; curHour <= endHour; curHour++) {
        var parsedStr = "";
        if (curHour > 12) {
          parsedStr += (curHour - 12).toString() + ":00PM";
        } else if (curHour == 12) {
          parsedStr += curHour.toString() + ":00PM";
        } else {
          parsedStr += curHour.toString() + ":00AM";
        }
        output.push(parsedStr);
        ['15', '30', '45'].forEach(function(element) {
          var newStr = parsedStr.replace("00", element);
          output.push(newStr);
        });
      }
      return output;
    }

    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function focusOn(day) {
      var targetDayClass = $(day).attr('class').split('\ ')[1];
      var dayContainer = $('.day');
      for (var i = 0; i < dayContainer.length; i++) {
        if ($(dayContainer[i]).hasClass(targetDayClass)) {
          continue;
        }
        var hours = $(dayContainer[i]).children();
        for (var j = 0; j < hours.length; j++) {
          $(hours[j]).addClass('disabled');
        }
      }
      $(day).on('mouseleave', function() {
        clearFocus();
        mousedown = false;
        devarionMode = false;
      });
    }

    function clearFocus() {
      var dayContainer = $('.day');
      for (var i = 0; i < dayContainer.length; i++) {
        var hours = $(dayContainer[i]).children();
        for (var j = 0; j < hours.length; j++) {
          $(hours[j]).removeClass('disabled');
        }
      }
    }
  };
}(jQuery));
