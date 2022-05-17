import React from "react";
import $ from "jquery";
const Stats = () => {
  $(function() {
    var fx = function fx() {
      $(".stat-number").each(function(i, el) {
        var data = parseInt(this.dataset.n, 10);
        var props = {
          from: {
            count: 0,
          },
          to: {
            count: data,
          },
        };
        $(props.from).animate(props.to, {
          duration: 1000 * 1,
          step: function(now, fx) {
            $(el).text(Math.ceil(now));
          },
          complete: function() {
            if (el.dataset.sym !== undefined) {
              el.textContent = el.textContent.concat(el.dataset.sym);
            }
          },
        });
      });
    };

    var reset = function reset() {
      //console.log($(this).scrollTop())
      if ($(this).scrollTop() > 1100) {
        $(this).off("scroll");
        fx();
      }
    };

    $(window).on("scroll", reset);
  });

  const data = {
    "font-family": "montserrat,sans-serif",
    "font-size": "2.5rem",
    "font-weight": "bold",
    "text-align": "center",
  };
  const info = {
    "font-family": "montserrat,sans-serif",
    "font-size": "1rem",
    "text-align": "center",
  };
  return (
    <div
      className="container-fluid  text-light p-2"
      style={{
        backgroundColor: "#13D59B",
        backgroundImage: "url(images/bg.png)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "2rem",
        opacity: "1",
        transition: "background .3s,border-radius .3s,opacity .3s",
      }}
    >
      <div className="row">
        <div className="col-md-4 align-items-center">
          <p className="my-2" style={data}>
            <div class="stat-number" data-n="200">
              <span class="Single">0</span>
            </div>
          </p>
          <p style={info}> Users</p>
        </div>
        <div className="col-md-4">
          <p className="my-2" style={data}>
            <div class="stat-number" data-n="10000">
              0
            </div>
          </p>
          <p style={info}>Downloads</p>
        </div>
        <div className="col-md-4">
          <p className="my-2" style={data}>
            <div class="stat-number" data-n="450">
              0
            </div>
          </p>
          <p style={info}>5 star Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
