jQuery(".cite svg").click(function() {
    document.getElementById("EBwidget_inside").innerHTML = "Loading citation...", document.getElementById("EBwidget_citation").style.display = "block", document.getElementById("EBwidget_citation").style.width = "250px"
    EBwidget.update("new")
});
function EBAddEvent(a, b, c) {
    a.attachEvent ? (a["e" + b + c] = c, a[b + c] = function() {
        a["e" + b + c](window.event)
    }, a.attachEvent("on" + b, a[b + c])) : a.addEventListener(b, c, !1)
}
function EasyBib_Widget() {
    this.apiurl = "https://api-easybib-com.global.ssl.fastly.net", "production" == EBWidgetEnvironment ? (this.cdnurl = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''), this.jsurl = "/profiles/foreignaffairs/modules/custom/fa_design_objects/plugins/content_types/cite_icon/js/widget_mini.js") : this.jsurl = "/js/widget.js", this.create = function() {
        for (var a = this.getNodesByTag("script"), b = "", c = 0; c < a.length; c++)
            if (a[c].src === this.cdnurl + this.jsurl) {
                b = a[c];
                break
            }
        if (0 != b.length) {
            var d = '<div id="EBwidget_tpx" style="display:none;"></div><div id="EBwidget">';
            d += '<div style="position: relative;width: 49px; height: 0px;"><!--<a id="EBwidget_button" href="javascript:void(0);"></a>--></div>',
            d += '<div id="EBwidget_citation" style="font-style:normal;position:absolute;z-index:99999;display:none;auto; line-height:18px; border:1px solid #ccc; width: 250px; background-color: #fff;">', d += '<div style="background-color:#ffffff;border:5px solid #eee; padding: 5px; font-weight: normal; color: #000;">', d += '<div id="EBwidget_top" style="font-size:11px; padding-left:5px;"><span id="EBwidget_close" style="cursor:pointer;color:#0E65D6;float:right;font-weight:normal;">Close</span>', d += '<span style="color:#999;padding-right:3px;">Style: </span><span id="EBwidget_styles"><span id="EBmla7" style="padding-right:3px;cursor:pointer;">MLA</span> <span id="EBapa" style="padding-right:3px;cursor:pointer; color:#0E65D6;">APA</span> <span id="EBchicagob" style="padding-right:3px;cursor:pointer; color:#0E65D6;">Chicago</span></span></div>', d += '<div id="EBwidget_inside" style="overflow:auto;padding:10px;margin:5px 0px;border-top:1px solid #AFD8FF; border-bottom:1px solid #AFD8FF;background-color:#fff;"></div>', d += '<form id="EBwidget_export" target="_blank" method="post" style="padding:0px;margin:0px;text-align:right;" action="https://www.easybib.com/cite/bulk">', d += '<a href="http://easybib.com" target="_blank"><img src="https://gp1.wac.edgecastcdn.net/002DDF/citethis/easybib_logo.gif" width="80" height="24" style="border: 0px;display:block;margin:0 auto;margin-top:1em;" alt="EasyBib"></a>', d += '<input id="EBwidget_export_value" type="hidden" name="data" value="">', d += '<input style="display:none;width:auto;overflow:visible;padding:3px;background-color:#AFD8FF;font-family:Arial,Helvetica;font-size:11px;font-weight:bold;color:#0E65D6;border:1px solid #0E65D6;cursor:pointer;" type="button" id="EBwidget_export_button" value="Save this citation" onclick="this.form.action = this.form.action.replace(\'https\', \'http\');"></form>', d += "</div></div>", d += "</div>";
            var e = document.createElement("style");
            e.setAttribute("type", "text/css");
            var f = "https://gp1.wac.edgecastcdn.net/002DDF/citethis/citethis.png", g = "49", h = "20", i = "-20";
            void 0 !== EBcitation.image && void 0 !== EBcitation.image.url && void 0 !== EBcitation.image.width && void 0 !== EBcitation.image.height && (f = EBcitation.image.url, g = EBcitation.image.width, h = EBcitation.image.height, i = "0");
            var j = "#EBwidget {position:relative;display:inline-block;*display:inline;background-color:#fff;padding:0;margin:0;line-height:12px;font-family:Arial,Helvetica;font-weight:normal;font-size:13px;color:#000;}";
            if (j += "#EBwidget #EBwidget_button {position: absolute; display:block;background-image:url(" + f + ");background-position:0px 0px; width: " + g + "px; height: " + h + "px; }", j += "#EBwidget #EBwidget_button:hover { background-position: 0px " + i + "px;}", j += "#EBwidget_container {display:inline; zoom: 1;}", e.styleSheet)
                e.styleSheet.cssText = j;
            else {
                var k = document.createTextNode(j);
                e.appendChild(k)
            }
            var l = this.getNodesByTag("head")[0];
            l.appendChild(e);
            var m = document.createElement("div");
            m.id = "EBwidget_container", m.innerHTML = d, b.parentNode.insertBefore(m, b.nextSibling)
        }
    }, this.update = function() {
        var a = "";
        "undefined" != typeof document.domain && (a = "/site/" + document.domain);
        var b = this.buildUrl(a, "EBUpdateCitation", EBcitation);
        this.jsonp(b)
    }, this.selectStyle = function(a) {
        var b = this.getNodesByTag("span", this.getNode("EBwidget_styles"));
        for (i = 0; i < b.length; i++)
            b[i].style.color = "#0E65D6";
        this.getNode("EB" + a).style.color = "#000"
    }, this.getNodesByTag = function(a, b) {
        if (void 0 === b && (b = document), !b)throw "no such parent";
        var c = b.getElementsByTagName(a);
        if (!c)
            throw "no such tags: " + a;
        return c
    }, this.getNode = function(a) {
        if (void 0 === document)
            throw "no document";
        if (document.getElementById)
            var b = document.getElementById(a);
        else if (document.all)
            var b = document.all[a];
        else if (document.layers)
            var b = document.layers[a];
        if (!b)
            throw "no such element: " + a;
        return b
    }, this.close = function() {
        /*this.getNode("EBwidget_button").style.display = "block",*/ this.getNode("EBwidget_citation").style.display = "none"
    }, this.buildUrl = function(a, b, c) {
        var d = this.apiurl + "/rest/widget" + a;
        return d += d.indexOf("?")>-1 ? "&callback=" : "?callback=", d += b + "&", d += "cachebuster=" + (new Date).getTime().toString(), param = JSON.stringify(c), param && (d += "&data=" + encodeURIComponent(param)), d
    }, this.jsonp = function(a) {
        /*console.log(a);jQuery.ajax({headers:{'Host':'api.easybib.com'},type:'GET',url:a,jsonp:false,dataType:'jsonp',success:function(result){console.dir(result);},error:function(e){console.log(e.message);}});*/
        var b = document.createElement("script");
        b.setAttribute("src", a), b.setAttribute("type", "text/javascript"), document.body.appendChild(b)
    }
}
function EBUpdateCitation(a) {
    document.getElementById("EBwidget_inside").innerHTML = "error" === a.status ? "Error." : a.data.citation, EBExportJson = JSON.stringify(a.data.data), document.getElementById("EBwidget_citation").style.display = "block", document.getElementById("EBwidget_citation").style.width = "250px"
}
function EBBlankFire(a) {
    document.getElementById("EBwidget_tpx").innerHTML = '<img src="' + a + '" style="display:none;" />'
}
function EBExportCitation() {
    setTimeout("EBFormSubmit();", 1e3)
}
function EBFormSubmit() {
    EBwidget.getNode("EBwidget_export_value").value = "[" + JSON.stringify(EBExportJson) + "]", EBwidget.getNode("EBwidget_export").submit()
}
var EBWidgetEnvironment = "production";
if (this.JSON || (this.JSON = {}), function() {
    function f(a) {
        return 10 > a ? "0" + a : a
    }
    function quote(a) {
        return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
            var b = meta[a];
            return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"' : '"' + a + '"'
    }
    function str(a, b) {
        var c, d, e, f, g, h = gap, i = b[a];
        switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
        case"string":
            return quote(i);
        case"number":
            return isFinite(i) ? String(i) : "null";
        case"boolean":
        case"null":
            return String(i);
        case"object":
            if (!i)
                return "null";
            if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                for (f = i.length, c = 0; f > c; c += 1)
                    g[c] = str(c, i) || "null";
                return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
            }
            if (rep && "object" == typeof rep)
                for (f = rep.length, c = 0; f > c; c += 1)
                    d = rep[c], "string" == typeof d && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
            else 
                for (d in i)
                    Object.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
            return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
        var d;
        if (gap = "", indent = "", "number" == typeof c)
            for (d = 0; c > d; d += 1)
                indent += " ";
        else 
            "string" == typeof c && (indent = c);
        if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length))
            throw new Error("JSON.stringify");
        return str("", {
            "": a
        })
    }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(a, b) {
            var c, d, e = a[b];
            if (e && "object" == typeof e)
                for (c in e)
                    Object.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
            return reviver.call(a, b, e)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), void 0 === EBcitation)
    var EBcitation = {};
if (void 0 === EBversion)
    var EBversion = "1.0";
if (void 0 === EBDisplay)
    var EBDisplay = "";
var EBPopupTimer = "", EBExportJson = "";
try {
    var EBwidget = new EasyBib_Widget;
    EBwidget.create();
    var EBstyles = EBwidget.getNode("EBwidget_styles"), EBstyle = EBwidget.getNodesByTag("span", EBstyles);
    for (i = 0; i < EBstyle.length; i++)
        EBAddEvent(EBstyle[i], "click", function() {
            var a = this.getAttribute("id").substring(2);
            EBcitation.style = a, EBwidget.update(), EBwidget.selectStyle(a)
        });
    "box" == EBDisplay ? (/*EBwidget.getNode("EBwidget_button").style.display = "none",*/ EBwidget.getNode("EBwidget_close").style.display = "none", EBwidget.getNode("EBwidget_citation").style.position = "relative", EBwidget.update("new"), EBAddEvent(EBwidget.getNode("EBwidget_export_button"), "click", function() {
        EBExportCitation(EBwidget)
    })) : (/*EBAddEvent(EBwidget.getNode("EBwidget"), "mouseover", function() {
        clearTimeout(EBPopupTimer), EBPopupTimer = setTimeout("EBwidget.close()", 5e3)
    }), EBAddEvent(EBwidget.getNode("EBwidget_button"), "click", function() {
        EBwidget.update("new")
    }), */EBAddEvent(EBwidget.getNode("EBwidget_export_button"), "click", function() {
        EBExportCitation(EBwidget)
    }), EBAddEvent(EBwidget.getNode("EBwidget_close"), "click", function() {
        EBwidget.close()
    }))
} catch (Err) {}
"undefined" != typeof module && this.module !== module && (module.exports = EasyBib_Widget);
