$(".featured .HTML .widget-content").each(function() {
    var e = $(this).find("span").attr("data-label"),
        t = $(this).find("span").attr("data-type");
    t.match("recent") ? $.ajax({
        url: "/feeds/posts/default?alt=json-in-script&max-results=4",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = "<ul>", r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].category[0].term,
                    l = e.feed.entry[r].author[0].name.$t,
                    c = e.feed.entry[r].published.$t,
                    d = c.substring(0, 4),
                    f = c.substring(5, 7),
                    o = c.substring(8, 10),
                    h = month_format[parseInt(f, 10)] + " " + o + ", " + d,
                    u = e.feed.entry[r].content.$t,
                    p = $("<div>").html(u);
                if (u.indexOf("//www.youtube.com/embed/") > -1) var m = e.feed.entry[r].media$thumbnail.url,
                    g = m;
                else if (u.indexOf("<img") > -1) var v = p.find("img:first").attr("src"),
                    g = v;
                else var g = no_image;
                a += '<li><div class="featured-inner"><a href="/search/label/' + i + '" class="post-tag icon ' + i + '">' + i + '</a><a class="rcp-thumb" href="' + t + '" style="background:url(' + g + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + t + '">' + s + '</a></h3><div class="featured-meta"><span class="featured-author idel">' + l + '</span><span class="featured-date">' + h + "</span></div></div></div></li>"
            }
            a += "</ul>", $(".featured .HTML .widget-content").each(function() {
                $(this).html(a), $(this).find(".rcp-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                })
            })
        }
    }) : t.match("label") && $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=4",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = "<ul>", r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].category[0].term,
                    l = e.feed.entry[r].author[0].name.$t,
                    c = e.feed.entry[r].published.$t,
                    d = c.substring(0, 4),
                    f = c.substring(5, 7),
                    o = c.substring(8, 10),
                    h = month_format[parseInt(f, 10)] + " " + o + ", " + d,
                    u = e.feed.entry[r].content.$t,
                    p = $("<div>").html(u);
                if (u.indexOf("//www.youtube.com/embed/") > -1) var m = e.feed.entry[r].media$thumbnail.url,
                    g = m;
                else if (u.indexOf("<img") > -1) var v = p.find("img:first").attr("src"),
                    g = v;
                else var g = no_image;
                a += '<li><div class="featured-inner"><a href="/search/label/' + i + '" class="post-tag icon ' + i + '">' + i + '</a><a class="rcp-thumb" href="' + t + '" style="background:url(' + g + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + t + '">' + s + '</a></h3><div class="featured-meta"><span class="featured-author idel">' + l + '</span><span class="featured-date">' + h + "</span></div></div></div></li>"
            }
            a += "</ul>", $(".featured .HTML .widget-content").each(function() {
                $(this).html(a), $(this).find(".rcp-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                })
            })
        }
    })
}), $(".ready-widget .HTML .widget-content span.recentcomments").each(function() {
    var e = $(this).attr("data-no");
    $.ajax({
        url: "/feeds/comments/default?alt=json-in-script&max-results=" + e,
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var a = "", r = '<ul class="cmm-widget">', n = 0; n < t.feed.entry.length && n != t.feed.entry.length; n++) {
                for (var s = 0; s < t.feed.entry[n].link.length; s++)
                    if ("alternate" == t.feed.entry[n].link[s].rel) {
                        a = t.feed.entry[n].link[s].href;
                        break
                    }
                if ("content" in t.feed.entry[n]) var i = t.feed.entry[n].content.$t;
                else if ("summary" in b_rc) var i = t.feed.entry[n].summary.$t;
                else var i = "";
                var l = /<\S[^>]*>/g;
                i = i.replace(l, ""), i.length > 70 && (i = "" + i.substring(0, 50) + "...");
                var c = t.feed.entry[n].author[0].name.$t,
                    d = t.feed.entry[n].author[0].gd$image.src;
                if (d.match("http://img1.blogblog.com/img/blank.gif")) var f = "http://img1.blogblog.com/img/anon36.png";
                else if (d.match("http://img2.blogblog.com/img/b16-rounded.gif")) var f = "http://img1.blogblog.com/img/anon36.png";
                else var f = d;
                r += '<li><div class="cmm-avatar"><img class="cmm-img" src="' + f + '"/></div><a href="' + a + '">' + c + '</a><span>"' + i + '"</span></li>'
            }
            r += '</ul><div class="clear"/>', $(".ready-widget .HTML .widget-content span.recentcomments").each(function() {
                var t = $(this).attr("data-no");
                t == e && $(this).parent().html(r)
            })
        }
    })
}), $(".ready-widget .HTML .widget-content span.recentposts").each(function() {
    var e = $(this).attr("data-no");
    $.ajax({
        url: "/feeds/posts/default?alt=json-in-script&max-results=" + e,
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var a = "", r = '<ul class="custom-widget">', n = 0; n < t.feed.entry.length; n++) {
                for (var s = 0; s < t.feed.entry[n].link.length; s++)
                    if ("alternate" == t.feed.entry[n].link[s].rel) {
                        a = t.feed.entry[n].link[s].href;
                        break
                    }
                var i = t.feed.entry[n].title.$t,
                    l = (t.feed.entry[n].category[0].term, t.feed.entry[n].author[0].name.$t),
                    c = t.feed.entry[n].published.$t,
                    d = c.substring(0, 4),
                    f = c.substring(5, 7),
                    o = c.substring(8, 10),
                    h = month_format[parseInt(f, 10)] + " " + o + ", " + d,
                    u = t.feed.entry[n].content.$t,
                    p = $("<div>").html(u);
                if (u.indexOf("//www.youtube.com/embed/") > -1) var m = t.feed.entry[n].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg"),
                    g = m;
                else if (u.indexOf("<img") > -1) var v = p.find("img:first").attr("src").replace("s72-c", "s1600"),
                    g = v;
                else var g = no_image;
                r += '<li><a class="rcthumb" href="' + a + '" style="background:url(' + g + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + a + '">' + i + '</a></h3><span class="recent-author">' + l + '</span><span class="recent-date">' + h + "</span></div></li>"
            }
            r += "</ul>", $(".ready-widget .HTML .widget-content span.recentposts").each(function() {
                var t = $(this).attr("data-no");
                t == e && $(this).parent().html(r)
            })
        }
    })
}), $(".ready-widget .HTML .widget-content span.labelpost").each(function() {
    var e = $(this).attr("data-label"),
        t = $(this).attr("data-no");
    $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=" + t,
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var a = "", r = '<ul class="custom-widget">', n = 0; n < t.feed.entry.length; n++) {
                for (var s = 0; s < t.feed.entry[n].link.length; s++)
                    if ("alternate" == t.feed.entry[n].link[s].rel) {
                        a = t.feed.entry[n].link[s].href;
                        break
                    }
                var i = t.feed.entry[n].title.$t,
                    l = (t.feed.entry[n].category[0].term, t.feed.entry[n].author[0].name.$t),
                    c = t.feed.entry[n].published.$t,
                    d = c.substring(0, 4),
                    f = c.substring(5, 7),
                    o = c.substring(8, 10),
                    h = month_format[parseInt(f, 10)] + " " + o + ", " + d,
                    u = t.feed.entry[n].content.$t,
                    p = $("<div>").html(u);
                if (u.indexOf("//www.youtube.com/embed/") > -1) var m = t.feed.entry[n].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg"),
                    g = m;
                else if (u.indexOf("<img") > -1) var v = p.find("img:first").attr("src").replace("s72-c", "s1600"),
                    g = v;
                else var g = no_image;
                r += '<li><a class="rcthumb" href="' + a + '" style="background:url(' + g + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + a + '">' + i + '</a></h3><span class="recent-author">' + l + '</span><span class="recent-date">' + h + "</span></div></li>"
            }
            r += "</ul>", $(".ready-widget .HTML .widget-content span.labelpost").each(function() {
                var t = $(this).attr("data-label");
                t == e && $(this).parent().html(r)
            })
        }
    })
}), $(".recent-boxes .HTML .widget-content").each(function() {
    var e = $(this).find("span").attr("data-label"),
        t = $(this).find("span").attr("data-no"),
        a = $(this).prev("h2").text(),
        r = $(this).parent().attr("id"),
        n = $(this).find("span").attr("data-type");
    n.match("feat") && $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var n = "", s = "<ul>", i = 0; i < t.feed.entry.length; i++) {
                for (var l = 0; l < t.feed.entry[i].link.length; l++)
                    if ("alternate" == t.feed.entry[i].link[l].rel) {
                        n = t.feed.entry[i].link[l].href;
                        break
                    }
                var c = t.feed.entry[i].title.$t,
                    d = t.feed.entry[i].category[0].term,
                    f = t.feed.entry[i].author[0].name.$t,
                    o = t.feed.entry[i].published.$t,
                    h = o.substring(0, 4),
                    u = o.substring(5, 7),
                    p = o.substring(8, 10),
                    m = month_format[parseInt(u, 10)] + " " + p + ", " + h,
                    g = t.feed.entry[i].content.$t,
                    v = $("<div>").html(g);
                if (g.indexOf("//www.youtube.com/embed/") > -1) var b = t.feed.entry[i].media$thumbnail.url,
                    y = b;
                else if (g.indexOf("<img") > -1) var x = v.find("img:first").attr("src"),
                    y = x;
                else var y = no_image;
                s += 0 == i ? '<div class="bx-first"><div class="bx-item"><div class="box-thumbnail"><a class="bf-thumb" href="' + n + '" style="background:url(' + y + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="first-tag"><a class="icon ' + d + '" href="/search/label/' + d + '">' + d + '</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="' + n + '">' + c + '</a></h3><span class="recent-author">' + f + '</span><span class="recent-date">' + m + "</span></div></div></div>" : '<li><div class="box-thumbnail"><a class="box-image" href="' + n + '" style="background:url(' + y + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + n + '">' + c + '</a></h3><span class="recent-author">' + f + '</span><span class="recent-date">' + m + '</span></div><div class="clear"/></li>'
            }
            s += "</ul>", $(".recent-boxes .HTML .widget-content").each(function() {
                var t = $(this).parent().attr("id");
                t == r && ($(this).html(s), $(this).parent().addClass("feat"), $(this).parent().addClass("boxes"), $(this).prev("h2").html('<a href="/search/label/' + e + '">' + a + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + e + '">' + more_text + "</a>"), $(this).find(".box-image,.bf-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }))
            })
        }
    }), n.match("columnleft") && $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=" + t,
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var n = "", s = "<ul>", i = 0; i < t.feed.entry.length; i++) {
                for (var l = 0; l < t.feed.entry[i].link.length; l++)
                    if ("alternate" == t.feed.entry[i].link[l].rel) {
                        n = t.feed.entry[i].link[l].href;
                        break
                    }
                var c = t.feed.entry[i].title.$t,
                    d = t.feed.entry[i].category[0].term,
                    f = t.feed.entry[i].author[0].name.$t,
                    o = t.feed.entry[i].published.$t,
                    h = o.substring(0, 4),
                    u = o.substring(5, 7),
                    p = o.substring(8, 10),
                    m = month_format[parseInt(u, 10)] + " " + p + ", " + h,
                    g = t.feed.entry[i].content.$t,
                    v = $("<div>").html(g);
                if (g.indexOf("//www.youtube.com/embed/") > -1) var b = t.feed.entry[i].media$thumbnail.url,
                    y = b;
                else if (g.indexOf("<img") > -1) var x = v.find("img:first").attr("src"),
                    y = x;
                else var y = no_image;
                s += 0 == i ? '<div class="bx-first"><div class="box-thumbnail"><a class="bf-thumb" href="' + n + '" style="background:url(' + y + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="first-tag"><a class="icon ' + d + '" href="/search/label/' + d + '">' + d + '</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="' + n + '">' + c + '</a></h3><span class="recent-author">' + f + '</span><span class="recent-date">' + m + "</span></div></div>" : '<li><div class="box-thumbnail"><a class="box-image" href="' + n + '" style="background:url(' + y + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + n + '">' + c + '</a></h3><span class="recent-author">' + f + '</span><span class="recent-date">' + m + '</span></div><div class="clear"/></li>'
            }
            s += "</ul>", $(".recent-boxes .HTML .widget-content").each(function() {
                var t = $(this).parent().attr("id");
                t == r && ($(this).html(s), $(this).parent().addClass("column"), $(this).parent().addClass("columnleft"), $(this).parent().addClass("boxes"), $(this).prev("h2").html('<a href="/search/label/' + e + '">' + a + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + e + '">' + more_text + "</a>"), $(this).find(".box-image,.bf-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }))
            })
        }
    }), n.match("columnright") && $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=" + t,
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var n = "", s = "<ul>", i = 0; i < t.feed.entry.length; i++) {
                for (var l = 0; l < t.feed.entry[i].link.length; l++)
                    if ("alternate" == t.feed.entry[i].link[l].rel) {
                        n = t.feed.entry[i].link[l].href;
                        break
                    }
                var c = t.feed.entry[i].title.$t,
                    d = t.feed.entry[i].category[0].term,
                    f = t.feed.entry[i].author[0].name.$t,
                    o = t.feed.entry[i].published.$t,
                    h = o.substring(0, 4),
                    u = o.substring(5, 7),
                    p = o.substring(8, 10),
                    m = month_format[parseInt(u, 10)] + " " + p + ", " + h,
                    g = t.feed.entry[i].content.$t,
                    v = $("<div>").html(g);
                if (g.indexOf("//www.youtube.com/embed/") > -1) var b = t.feed.entry[i].media$thumbnail.url,
                    y = b;
                else if (g.indexOf("<img") > -1) var x = v.find("img:first").attr("src"),
                    y = x;
                else var y = no_image;
                s += 0 == i ? '<div class="bx-first"><div class="box-thumbnail"><a class="bf-thumb" href="' + n + '" style="background:url(' + y + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="first-tag"><a class="icon ' + d + '" href="/search/label/' + d + '">' + d + '</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="' + n + '">' + c + '</a></h3><span class="recent-author">' + f + '</span><span class="recent-date">' + m + "</span></div></div>" : '<li><div class="box-thumbnail"><a class="box-image" href="' + n + '" style="background:url(' + y + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + n + '">' + c + '</a></h3><span class="recent-author">' + f + '</span><span class="recent-date">' + m + '</span></div><div class="clear"/></li>'
            }
            s += "</ul>", $(".recent-boxes .HTML .widget-content").each(function() {
                var t = $(this).parent().attr("id");
                t == r && ($(this).html(s), $(this).parent().addClass("column"), $(this).parent().addClass("columnright"), $(this).parent().addClass("boxes"), $(this).prev("h2").html('<a href="/search/label/' + e + '">' + a + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + e + '">' + more_text + "</a>"), $(this).find(".box-image,.bf-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }))
            })
        }
    }), n.match("videos") && $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=3",
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var n = "", s = "<ul>", i = 0; i < t.feed.entry.length; i++) {
                for (var l = 0; l < t.feed.entry[i].link.length; l++)
                    if ("alternate" == t.feed.entry[i].link[l].rel) {
                        n = t.feed.entry[i].link[l].href;
                        break
                    }
                var c = t.feed.entry[i].title.$t,
                    d = t.feed.entry[i].author[0].name.$t,
                    f = t.feed.entry[i].content.$t,
                    o = $("<div>").html(f);
                if (f.indexOf("//www.youtube.com/embed/") > -1) var h = t.feed.entry[i].media$thumbnail.url,
                    u = h;
                else if (f.indexOf("<img") > -1) var p = o.find("img:first").attr("src"),
                    u = p;
                else var u = no_image;
                s += '<li><div class="videos-item"><a class="box-image" href="' + n + '" style="background:url(' + u + ') no-repeat center center;background-size: cover"><span class="videos-overlay"/></a><div class="recent-content"><h3 class="recent-title"><a href="' + n + '">' + c + '</a></h3><span class="recent-author">' + d + '</span></div><div class="clear"/></div></li>'
            }
            s += "</ul>", $(".recent-boxes .HTML .widget-content").each(function() {
                var t = $(this).parent().attr("id");
                t == r && ($(this).html(s), $(this).parent().addClass("videos"), $(this).prev("h2").html('<a href="/search/label/' + e + '">' + a + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + e + '">' + more_text + "</a>"), $(this).find(".box-image").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }))
            })
        }
    })
});

/*! Adblock */
var mql = window.matchMedia('screen and (min-width: 60em)');
if (mql.matches) {
    (function(w, u) {
        var d = w.document,
            z = typeof u;

        function unblocker() {
            function c(c, i) {
                var e = d.createElement('div'),
                    b = d.body,
                    s = b.style,
                    l = b.childNodes.length;
                if (typeof i != z) {
                    e.setAttribute('id', i);
                    s.margin = s.padding = 0;
                    s.height = '100%';
                    l = Math.floor(Math.random() * l) + 1
                }
                e.innerHTML = c;
                b.insertBefore(e, b.childNodes[l - 1])
            }

            function g(i, t) {
                return !t ? d.getElementById(i) : d.getElementsByTagName(t)
            };

            function f(v) {
                if (!g('unblocker')) {
                    c('<p>Please disable your Adblocker to access this site! Thanks.<br/>Please disable your Adblocker to access this site! Thanks.</p>', 'unblocker')
                }
            };
            (function() {
                var a = ['ad', 'ads', 'adsense'],
                    l = a.length,
                    i, s = '',
                    e;
                for (i = 0; i < l; i++) {
                    if (!g(a[i])) {
                        s += '<a id="' + a[i] + '"></a>'
                    }
                }
                c(s);
                l = a.length;
                setTimeout(function() {
                    for (i = 0; i < l; i++) {
                        e = g(a[i]);
                        if (e.offsetParent == null || (w.getComputedStyle ? d.defaultView.getComputedStyle(e, null).getPropertyValue('display') : e.currentStyle.display) == 'none') {
                            return f('#' + a[i])
                        }
                    }
                }, 250)
            }());
            (function() {
                var t = g(0, 'img'),
                    a = ['/adsales/ad', '/adsenceSearch.', '/adtools2.', '/adv2.', '/partner_ads_', '_ads.html', '.468x60-'],
                    i;
                if (typeof t[0] != z && typeof t[0].src != z) {
                    i = new Image();
                    i.onload = function() {
                        this.onload = z;
                        this.onerror = function() {
                            f(this.src)
                        };
                        this.src = t[0].src + '#' + a.join('')
                    };
                    i.src = t[0].src
                }
            }());
            (function() {
                var o = {
                        'http://pagead2.googlesyndication.com/pagead/show_ads.js': 'google_ad_client'
                    },
                    S = g(0, 'script'),
                    l = S.length - 1,
                    n, r, i, v, s;
                d.write = null;
                for (i = l; i >= 0; --i) {
                    s = S[i];
                    if (typeof o[s.src] != z) {
                        n = d.createElement('script');
                        n.type = 'text/javascript';
                        n.src = s.src;
                        v = o[s.src];
                        w[v] = u;
                        r = S[0];
                        n.onload = n.onreadystatechange = function() {
                            if (typeof w[v] == z && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                                n.onload = n.onreadystatechange = null;
                                r.parentNode.removeChild(n);
                                w[v] = null
                            }
                        };
                        r.parentNode.insertBefore(n, r);
                        setTimeout(function() {
                            if (w[v] === u) {
                                f(n.src)
                            }
                        }, 2000);
                        break
                    }
                }
            }())
        }
        if (d.addEventListener) {
            w.addEventListener('load', unblocker, false)
        } else {
            w.attachEvent('onload', unblocker)
        }
    })(window);
};

var randomRelatedIndex, showRelatedPost;
(function(n, m, k) {
    var d = {
        widgetTitle: "<h4>Artikel Terkait:</h4>",
        widgetStyle: 1,
        homePage: "http://www.dte.web.id",
        numPosts: 7,
        summaryLength: 370,
        titleLength: "auto",
        thumbnailSize: 72,
        noImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",
        containerId: "related-post",
        newTabLink: false,
        moreText: "Baca Selengkapnya",
        callBack: function() {}
    };
    for (var f in relatedPostConfig) {
        d[f] = (relatedPostConfig[f] == "undefined") ? d[f] : relatedPostConfig[f]
    }
    var j = function(a) {
            var b = m.createElement("script");
            b.type = "text/javascript";
            b.src = a;
            k.appendChild(b)
        },
        o = function(b, a) {
            return Math.floor(Math.random() * (a - b + 1)) + b
        },
        l = function(a) {
            var p = a.length,
                c, b;
            if (p === 0) {
                return false
            }
            while (--p) {
                c = Math.floor(Math.random() * (p + 1));
                b = a[p];
                a[p] = a[c];
                a[c] = b
            }
            return a
        },
        e = (typeof labelArray == "object" && labelArray.length > 0) ? "/-/" + l(labelArray)[0] : "",
        h = function(b) {
            var c = b.feed.openSearch$totalResults.$t - d.numPosts,
                a = o(1, (c > 0 ? c : 1));
            j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + e + "?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + d.numPosts + "&callback=showRelatedPost")
        },
        g = function(z) {
            var s = document.getElementById(d.containerId),
                x = l(z.feed.entry),
                A = d.widgetStyle,
                c = d.widgetTitle + '<ul class="related-post-style-' + A + '">',
                b = d.newTabLink ? ' target="_blank"' : "",
                y = '<span style="display:block;clear:both;"></span>',
                v, t, w, r, u;
            if (!s) {
                return
            }
            for (var q = 0; q < d.numPosts; q++) {
                if (q == x.length) {
                    break
                }
                t = x[q].title.$t;
                w = (d.titleLength !== "auto" && d.titleLength < t.length) ? t.substring(0, d.titleLength) + "&hellip;" : t;
                r = ("media$thumbnail" in x[q] && d.thumbnailSize !== false) ? x[q].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, "/s" + d.thumbnailSize + "-c") : d.noImage;
                u = ("summary" in x[q] && d.summaryLength > 0) ? x[q].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, d.summaryLength) + "&hellip;" : "";
                for (var p = 0, a = x[q].link.length; p < a; p++) {
                    v = (x[q].link[p].rel == "alternate") ? x[q].link[p].href : "#"
                }
                if (A == 2) {
                    c += '<li><img alt="thumbnail" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '" title="' + t + '"><a class="related-post-item-title" title="' + t + '" href="' + v + '"' + b + ">" + w + '</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">' + u + '</span> <a href="' + v + '" class="related-post-item-more"' + b + ">" + d.moreText + "</a></span>" + y + "</li>"
                } else {
                    if (A == 3 || A == 4) {
                        c += '<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="' + v + '"' + b + '><img alt="thumbnail" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '" title="' + t + '"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="' + t + '" href="' + v + '"' + b + ">" + w + "</a></div>" + y + "</li>"
                    } else {
                        if (A == 5) {
                            c += '<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="' + v + '" title="' + t + '"' + b + '><img alt="thumbnail" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '" title="' + t + '"><span class="related-post-item-tooltip">' + w + "</span></a>" + y + "</li>"
                        } else {
                            if (A == 6) {
                                c += '<li><a class="related-post-item-title" title="' + t + '" href="' + v + '"' + b + ">" + w + '</a><div class="related-post-item-tooltip"><img alt="thumbnail" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '" title="' + t + '"><span class="related-post-item-summary"><span class="related-post-item-summary-text">' + u + "</span></span>" + y + "</div></li>"
                            } else {
                                c += '<li><a title="' + t + '" href="' + v + '"' + b + ">" + w + "</a></li>"
                            }
                        }
                    }
                }
            }
            s.innerHTML = c += "</ul>" + y;
            d.callBack()
        };
    randomRelatedIndex = h;
    showRelatedPost = g;
    j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + e + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
})(window, document, document.getElementsByTagName("head")[0]);
