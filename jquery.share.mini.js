﻿(function (c, b, d) {
    var a = b.document; c.fn.share = function (g) {
        var e = { init: function (q) {
            this.share.settings = c.extend({}, this.share.defaults, q); var k = this.share.settings, p = this.share.settings.networks, n = this.share.settings.theme, h = this.share.settings.orientation, m = this.share.settings.affix, l = this.share.settings.margin, tu = this.share.settings.twitterUser, ls = this.share.settings.linkedinSource, o = c(a).attr("title"), j = this.share.settings.urlToShare || c(location).attr("href"), i = ""; c.each(c(a).find('meta[name="description"]'),
function (r, s) { i = c(s).attr("content") }); return this.each(function () {
    var r = c(this), y = r.attr("id"), v = encodeURIComponent(j), w = o, x = i.substring(0, 250), s; p.forEach(function (t) {
        s = f.networkDefs[t].url; s = s.replace("|u|", v).replace("|t|", w).replace("|d|", x).replace("|140|", w.substring(0, 139)); s = s.replace("|tu|", tu).replace("|ls|", ls); if (t == "email") c("<a href='" + s + "' title='Share this page on " + t + "' class='share-" + n + " share-" + n + "-" + t + "'></a>").appendTo(r); else c("<a href='" + s + "' title='Share this page on " + t +
"' class='pop share-" + n + " share-" + n + "-" + t + "'></a>").appendTo(r)
    }); c("#" + y + ".share-" + n).css("margin", l); if (h != "horizontal") c("#" + y + " a.share-" + n).css("display", "block"); else c("#" + y + " a.share-" + n).css("display", "inline-block"); if (typeof m != "undefined") {
        r.addClass("share-affix"); if (m.indexOf("right") != -1) { r.css("left", "auto"); r.css("right", "0px"); if (m.indexOf("center") != -1) r.css("top", "40%") } else if (m.indexOf("left center") != -1) r.css("top", "40%"); if (m.indexOf("bottom") != -1) {
            r.css("bottom", "0px"); r.css("top",
"auto"); if (m.indexOf("center") != -1) r.css("left", "40%")
        } 
    } c(".pop").click(function () { b.open(c(this).attr("href"), "t", "toolbar=0,resizable=1,status=0,width=640,height=528"); return false })
})
        } 
        }; var f = { networkDefs: { facebook: { url: "http://www.facebook.com/share.php?u=|u|" }, twitter: { url: "https://twitter.com/share?via=|tu|&text=|140|" }, linkedin: { url: "http://www.linkedin.com/shareArticle?mini=true&url=|u|&title=|t|&summary=|d|&source=|ls|" }, tumblr: { url: "http://www.tumblr.com/share?v=3&u=|u|" }, digg: { url: "http://digg.com/submit?url=|u|&title=|t|" },
            googleplus: { url: "https://plusone.google.com/_/+1/confirm?hl=en&url=|u|" }, pinterest: { url: "http://pinterest.com/pin/create/button/?url=|u|&media=&description=|d|" }, stumbleupon: { url: "http://www.stumbleupon.com/submit?url=|u|&title=|t|" }, email: { url: "mailto:?subject=|t|"}
        }
        }; if (e[g]) return e[g].apply(this, Array.prototype.slice.call(arguments, 1)); else if (typeof g === "object" || !g) return e.init.apply(this, arguments); else c.error('Method "' + g + '" does not exist in social plugin')
    }; c.fn.share.defaults = { networks: ["facebook",
"twitter", "linkedin", "googleplus"], theme: "icon", margin: "13px", orientation: "horizontal"
    }; c.fn.share.settings = {}
})(jQuery, window);
