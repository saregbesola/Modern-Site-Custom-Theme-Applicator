'use strict';

ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");

function initializePage() {
    var hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
    var siteName = hostWebUrl.split("/")[4];
    var context = SP.ClientContext.get_current();
    var user = context.get_web().get_currentUser();
    var operation = "";
    // This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
    $(document).ready(function () {

        var customSite = document.URL.split("/")[4];
        $("#btn-get").on('click', function () {
            getTheme();
            fthemePrimary();
            fthemeLighterAlt();
            fthemeLight();
            fthemeLighter();
            fthemeTertiary();
            fthemeSecondary();
            fthemeDarkAlt();
            fthemeDark();
            fthemeDarker();
            fneutralLighterAlt();
            fneutralLighter();
            fneutralLight();
            fneutralQuaternaryAlt();
            fneutralQuaternary();
            fneutralTertiaryAlt();
            fneutralTertiary();
            fneutralSecondaryAlt();
            fneutralSecondary();
            fneutralPrimary();
            fneutralDark();
            fblack();
            fwhite();
            fprimaryBackground();
            fprimaryText();
            ferror();
        });
        $("#btn-add").on('click', function () {
            $('#mssg').text("");
            if ($('#themeName').val().length === 0) {
                $('#mssg').text("Theme Name cannot be empty! Please provide a name for the theme.");
                $('#mssg').css({ "color": "red" });
                return;
            }
            operation = "applied";
            var pal = {
                "palette": {
                    "themePrimary": "#" + $('#themePrimary').val(), //buttons, document name link, hyperlinks
                    "themeLighterAlt": "#" + $('#themeLighterAlt').val(),
                    "themeLighter": "#" + $('#themeLighter').val(),
                    "themeLight": "#" + $("#themeLight").val(),
                    "themeTertiary": "#" + $("#themeTertiary").val(),
                    "themeSecondary": "#" + $("#themeSecondary").val(),
                    "themeDarkAlt": "#" + $("#themeDarkAlt").val(), //hover for themePrimary/buttons, icons
                    "themeDark": "#" + $("#themeDark").val(), //visited link
                    "themeDarker": "#" + $("#themeDarker").val(), //hover color for see all link for ducment library
                    "neutralLighterAlt": "#" + $("#neutralLighterAlt").val(), //webpart hover
                    "neutralLighter": "#" + $("#neutralLighter").val(), //webpart background, for left navigation text selected, including button for posting comment when field is empty. Also for 
                    "neutralLight": "#" + $("#neutralLight").val(), //demarcating lines
                    "neutralQuaternaryAlt": "#" + $("#neutralQuaternaryAlt").val(),
                    "neutralQuaternary": "#" + $("#neutralQuaternary").val(),
                    "neutralTertiaryAlt": "#" + $("#neutralTertiaryAlt").val(),
                    "neutralTertiary": "#" + $("#neutralTertiary").val(),
                    "neutralSecondaryAlt": "#" + $("#neutralSecondaryAlt").val(), //general text color? also affects text on app buttons
                    "neutralSecondary": "#" + $("#neutralSecondary").val(), //News text color
                    "neutralPrimary": "#" + $("#neutralPrimary").val(), //text color for header inside webpart/ for general header?
                    "neutralDark": "#" + $("#neutralDark").val(), // Documet text color for static
                    "black": "#" + $("#black").val(), //News Header on the news full page
                    "white": "#" + $("#white").val(), //background color for body content excluding lower part of left navigation.
                    "primaryBackground": "#" + $("#primaryBackground").val(), //lower part of left navigation, including comment field background.
                    "primaryText": "#" + $("#primaryText").val(), //text color inside webpart and hovering
                    "error": "#" + $("#error").val()
                }
            }
            $('#palette').text(JSON.stringify(pal));
            RestRequest("/sites/" + siteName + "/_api/thememanager/AddTenantTheme", { name: $("#themeName").val(), themeJson: JSON.stringify(pal) });


        });
        $("#btn-update").on('click', function () {
            $('#mssg').text("");
            if ($('#themeName').val().length === 0) {
                $('#mssg').text("Theme Name cannot be empty! Please provide a name for the theme.");
                $('#mssg').css({ "color": "red" });
                return;
            }
            operation = "updated";
            var pal = {
                "palette": {
                    "themePrimary": "#" + $('#themePrimary').val(), //buttons, document name link, hyperlinks
                    "themeLighterAlt": "#" + $('#themeLighterAlt').val(),
                    "themeLighter": "#" + $('#themeLighter').val(),
                    "themeLight": "#" + $("#themeLight").val(),
                    "themeTertiary": "#" + $("#themeTertiary").val(),
                    "themeSecondary": "#" + $("#themeSecondary").val(),
                    "themeDarkAlt": "#" + $("#themeDarkAlt").val(), //hover for themePrimary/buttons, icons
                    "themeDark": "#" + $("#themeDark").val(), //visited link
                    "themeDarker": "#" + $("#themeDarker").val(), //hover color for see all link for ducment library
                    "neutralLighterAlt": "#" + $("#neutralLighterAlt").val(), //webpart hover
                    "neutralLighter": "#" + $("#neutralLighter").val(), //webpart background, for left navigation text selected, including button for posting comment when field is empty. Also for 
                    "neutralLight": "#" + $("#neutralLight").val(), //demarcating lines
                    "neutralQuaternaryAlt": "#" + $("#neutralQuaternaryAlt").val(),
                    "neutralQuaternary": "#" + $("#neutralQuaternary").val(),
                    "neutralTertiaryAlt": "#" + $("#neutralTertiaryAlt").val(),
                    "neutralTertiary": "#" + $("#neutralTertiary").val(),
                    "neutralSecondaryAlt": "#" + $("#neutralSecondaryAlt").val(), //general text color? also affects text on app buttons
                    "neutralSecondary": "#" + $("#neutralSecondary").val(), //News text color
                    "neutralPrimary": "#" + $("#neutralPrimary").val(), //text color for header inside webpart/ for general header?
                    "neutralDark": "#" + $("#neutralDark").val(), // Documet text color for static
                    "black": "#" + $("#black").val(), //News Header on the news full page
                    "white": "#" + $("#white").val(), //background color for body content excluding lower part of left navigation.
                    "primaryBackground": "#" + $("#primaryBackground").val(), //lower part of left navigation, including comment field background.
                    "primaryText": "#" + $("#primaryText").val(), //text color inside webpart and hovering
                    "error": "#" + $("#error").val()
                }
            }
            RestRequest("/sites/" + siteName + "/_api/thememanager/UpdateTenantTheme", {
                name: $("#themeName").val(),
                themeJson: JSON.stringify(pal)
            });

        });

        $("#btn-add2").on('click', function () {
            $('#mssg').text("");
            if ($('#themeName').val().length === 0) {
                $('#mssg').text("Theme Name cannot be empty! Please provide a name for the theme.");
                $('#mssg').css({ "color": "red" });
                return;
            }
            operation = "updated";
            var pal = {
                "palette": {
                    "themePrimary": $('#themePrimary').val(), //buttons, document name link, hyperlinks
                    "themeLighterAlt": $('#themeLighterAlt').val(),
                    "themeLighter": $('#themeLighter').val(),
                    "themeLight": $("#themeLight").val(),
                    "themeTertiary": $("#themeTertiary").val(),
                    "themeSecondary": $("#themeSecondary").val(),
                    "themeDarkAlt": $("#themeDarkAlt").val(), //hover for themePrimary/buttons, icons
                    "themeDark": $("#themeDark").val(), //visited link
                    "themeDarker": $("#themeDarker").val(), //hover color for see all link for ducment library
                    "neutralLighterAlt": $("#neutralLighterAlt").val(), //webpart hover
                    "neutralLighter": $("#neutralLighter").val(), //webpart background, for left navigation text selected, including button for posting comment when field is empty. Also for 
                    "neutralLight": $("#neutralLight").val(), //demarcating lines
                    "neutralQuaternaryAlt": $("#neutralQuaternaryAlt").val(),
                    "neutralQuaternary": $("#neutralQuaternary").val(),
                    "neutralTertiaryAlt": $("#neutralTertiaryAlt").val(),
                    "neutralTertiary": $("#neutralTertiary").val(),
                    "neutralSecondaryAlt": $("#neutralSecondaryAlt").val(), //general text color? also affects text on app buttons
                    "neutralSecondary": $("#neutralSecondary").val(), //News text color
                    "neutralPrimary": $("#neutralPrimary").val(), //text color for header inside webpart/ for general header?
                    "neutralDark": $("#neutralDark").val(), // Documet text color for static
                    "black": $("#black").val(), //News Header on the news full page
                    "white": $("#white").val(), //background color for body content excluding lower part of left navigation.
                    "primaryBackground": $("#primaryBackground").val(), //lower part of left navigation, including comment field background.
                    "primaryText": $("#primaryText").val(), //text color inside webpart and hovering
                    "error": $("#error").val()
                }
            }
            RestRequest("/sites/" + customSite + "/_api/thememanager/UpdateTenantTheme", {
                name: $("#themeName").val(),
                themeJson: JSON.stringify(pal)
            });

        });
        $("#btn-remove").on('click', function () {
            $('#mssg').text("");
            if ($('#themeName').val().length === 0) {
                $('#mssg').text("Theme Name cannot be empty! Please provide a name for the theme.");
                $('#mssg').css({ "color": "red" });
                return;
            }
            operation = "removed";
            RestRequest("/sites/" + siteName + "/_api/thememanager/DeleteTenantTheme", { name: $("#themeName").val() });
        });
    });

    function RestRequest(url, params) {

        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState != 4) // Loaded
            {

                return;
            } else {
                if (req.status === 200) {
                    $('#mssg').text("Theme " + operation + " successfully");
                }
                else if (req.status === 204) {
                    $('#mssg').text("Theme " + operation + " successfully");
                }
                else $('#mssg').text(req.responseText);
            }
            console.log(req.status);
        };
        req.open("POST", url, true);
        req.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        req.setRequestHeader("ACCEPT", "application/json; odata.metadata=minimal");
        req.setRequestHeader("x-requestdigest", _spPageContextInfo.formDigestValue);
        req.setRequestHeader("ODATA-VERSION", "4.0");
        req.send(params ? JSON.stringify(params) : void 0);
    }
    function manageQueryStringParameter(paramToRetrieve) {

        var paramStore = "";
        var params = paramStore;
        if (params == "") {
            params = document.URL.split("?")[1].split("&");
            sessionStorage.setItem(paramStore, params);

        }
        else {
            params = paramStore;
        }
        var strParams = "";
        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split("=");
            if (singleParam[0] == paramToRetrieve) {
                return singleParam[1];
            }
        }
    }

    function customUrlQueryStringParameter(paramToRetrieve) {

        var paramStore = "";
        var params = paramStore;
        if (params == "") {
            params = document.URL.split("?")[1].split("&");
            sessionStorage.setItem(paramStore, params);

        }
        else {
            params = paramStore;
        }
        var strParams = "";
        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split("=");
            if (singleParam[0] == paramToRetrieve) {
                return singleParam[1];
            }
        }
    }

    function getTheme() {
        $('#mssg').text("");
        $.ajax({
            url: "/sites/" + siteName + "/_api/thememanager/GetTenantThemingOptions",
            type: "GET",
            headers: { "Accept": "application/json; odata=verbose" },
            success: function (data) {
                console.log(data);
               
                console.log("Length " + data.length);
                if (data) {
                    var txt = "";
                    var len = data.d.GetTenantThemingOptions.themePreviews.results.length;
                    console.log("Length1 " + len);
                    if (len > 0) {
                        for (var i = 0; i < len; i++) {
                            if ($('#themeName').val() === data.d.GetTenantThemingOptions.themePreviews.results[i].name) {
                                var theme = data.d.GetTenantThemingOptions.themePreviews.results[i].themeJson;
                                var objTheme = JSON.parse(theme);
                                console.log("The new the Primary " + objTheme.palette.themePrimary.slice(1));
                                $('#themePrimary').val(objTheme.palette.themePrimary.slice(1));
                                $('#themeLighterAlt').val(objTheme.palette.themeLighterAlt.slice(1));
                                $('#themeLighter').val(objTheme.palette.themeLighter.slice(1));
                                $("#themeLight").val(objTheme.palette.themeLight.slice(1));
                                $("#themeTertiary").val(objTheme.palette.themeTertiary.slice(1));
                                $("#themeSecondary").val(objTheme.palette.themeSecondary.slice(1));
                                $("#themeDarkAlt").val(objTheme.palette.themeDarkAlt.slice(1));
                                $("#themeDark").val(objTheme.palette.themeDark.slice(1));
                                $("#themeDarker").val(objTheme.palette.themeDarker.slice(1));
                                $("#neutralLighterAlt").val(objTheme.palette.neutralLighterAlt.slice(1));
                                $("#neutralLighter").val(objTheme.palette.neutralLighter.slice(1));
                                $("#neutralLight").val(objTheme.palette.neutralLight.slice(1));
                                $("#neutralQuaternaryAlt").val(objTheme.palette.neutralQuaternaryAlt.slice(1));
                                $("#neutralQuaternary").val(objTheme.palette.neutralQuaternary.slice(1));
                                $("#neutralTertiaryAlt").val(objTheme.palette.neutralTertiaryAlt.slice(1));
                                $("#neutralTertiary").val(objTheme.palette.neutralTertiary.slice(1));
                                $("#neutralSecondaryAlt").val(objTheme.palette.neutralSecondaryAlt.slice(1));
                                $("#neutralSecondary").val(objTheme.palette.neutralSecondary.slice(1));
                                $("#neutralPrimary").val(objTheme.palette.neutralPrimary.slice(1));
                                $("#neutralDark").val(objTheme.palette.neutralDark.slice(1));
                                $("#black").val(objTheme.palette.black.slice(1));
                                $("#white").val(objTheme.palette.white.slice(1));
                                $("#primaryBackground").val(objTheme.palette.primaryBackground.slice(1));
                                $("#primaryText").val(objTheme.palette.primaryText.slice(1));
                                $("#error").val(objTheme.palette.error.slice(1));
                                txt += '<div class="divTableRow" ><div class="divTableCell">' + data.d.GetTenantThemingOptions.themePreviews.results[i].name + '</div><div class="divTableCell">' + data.d.GetTenantThemingOptions.themePreviews.results[i].themeJson + '</div>'
                                console.log("Length2 " + len);
                            }
                        }
                        if (txt != "") {
                            console.log("Length3 " + len);
                            $("#palette").html(txt);
                            $('#mssg').text("Copy and paste color code below to their respective fields.");
                        }
                    }
                }
            },

            error: function (jqXHR, textStatus, errorThrown) {
                alert('error: ' + textStatus + ': ' + errorThrown);
            }
        });
    }

    function fthemePrimary() {
        let color = "#ffffff";
        if ($('#themePrimary').val() === "fff" || $('#themePrimary').val() == "ffffff") {
            color = "#000000";
        }
        $('#themePrimary').css({ "background": "#" + $('#themePrimary').val(), "color": color });
    }
    function fthemeLighterAlt() {
        let color = "#ffffff";
        if ($('#themeLighterAlt').val() === "fff" || $('#themeLighterAlt').val() == "ffffff") {
            color = "#000000";
        }
        $('#themeLighterAlt').css({ "background": "#" + $('#themeLighterAlt').val(), "color": color });
    }
    function fthemeLight() {
        let color = "#ffffff";
        if ($('#themeLight').val() === "fff" || $('#themeLight').val() == "ffffff") {
            color = "#000000";
        }
        $('#themeLight').css({ "background": "#" + $('#themeLight').val(), "color": color });
    }
    function fthemeLighter() {
        let color = "#ffffff";
        if ($('#themeLighter').val() === "fff" || $('#themeLighter').val() == "ffffff") {
            color = "#000000";
        }
        $('#themeLighter').css({ "background": "#" + $('#themeLighter').val(), "color": color });
    }
    function fthemeTertiary() {
        let color = "#ffffff";
        if ($('#themeTertiary').val() === "fff" || $('#themeTertiary').val() == "ffffff") {
            color = "#000000";
        }
        $('#themeTertiary').css({ "background": "#" + $('#themeTertiary').val(), "color": color });
    }
    function fthemeSecondary() {
        let color = "#ffffff";
        if ($('#themeSecondary').val() === "fff" || $('#themeSecondary').val() == "ffffff") {
            color = "#000000";
        }
        $('#themeSecondary').css({ "background": "#" + $('#themeSecondary').val(), "color": color });
    }
    function fthemeDarkAlt() {
        let color = "#ffffff";
        if ($('#themeDarkAlt').val() === "fff" || $('#themeDarkAlt').val() == "ffffff") {
            color = "#000000";
        }
        $('#themeDarkAlt').css({ "background": "#" + $('#themeDarkAlt').val(), "color": color });
    }
    function fthemeDark() {
        let color = "#ffffff";
        if ($('#themeDark').val() === "fff" || $('#themeDark').val() == "ffffff") {
            color = "#000000";
        }
        $('#themeDark').css({ "background": "#" + $('#themeDark').val(), "color": color });
    }
    function fthemeDarker() {
        let color = "#ffffff";
        if ($('#themeDarker').val() === "fff" || $('#themeDarker').val() == "ffffff") {
            color = "#000000";
        }
        $('#themeDarker').css({ "background": "#" + $('#themeDarker').val(), "color": color });
    }
    function fneutralLighterAlt() {
        let color = "#ffffff";
        if ($('#neutralLighterAlt').val() === "fff" || $('#neutralLighterAlt').val() == "ffffff") {
            color = "#000000";
        }
        $('#neutralLighterAlt').css({ "background": "#" + $('#neutralLighterAlt').val(), "color": color });
    }
    function fneutralLighter() {
        let color = "#ffffff";
        if ($('#neutralLighter').val() === "fff" || $('#neutralLighter').val() == "ffffff") {
            color = "#000000";
        }
        $('#neutralLighter').css({ "background": "#" + $('#neutralLighter').val(), "color": color });
    }
    function fneutralLight() {
        let color = "#ffffff";
        if ($('#neutralLight').val() === "fff" || $('#neutralLight').val() == "ffffff") {
            color = "#000000";
        }
        $('#neutralLight').css({ "background": "#" + $('#neutralLight').val(), "color": color });
    }
    function fneutralQuaternaryAlt() {
        let color = "#ffffff";
        if ($('#neutralQuaternaryAlt').val() === "fff" || $('#neutralQuaternaryAlt').val() == "ffffff") {
            color = "#000000";
        }
        $('#neutralQuaternaryAlt').css({ "background": "#" + $('#neutralQuaternaryAlt').val(), "color": color });
    }
    function fneutralQuaternary() {
        let color = "#ffffff";
        if ($('#neutralQuaternary').val() === "fff" || $('#neutralQuaternary').val() == "ffffff") {
            color = "#000000";
        }
        $('#neutralQuaternary').css({ "background": "#" + $('#neutralQuaternary').val(), "color": color });
    }
    function fneutralTertiaryAlt() {
        let color = "#ffffff";
        if ($('#neutralTertiaryAlt').val() === "fff" || $('#neutralTertiaryAlt').val() == "ffffff") {
            color = "#000000";
        }
        $('#neutralTertiaryAlt').css({ "background": "#" + $('#neutralTertiaryAlt').val(), "color": color });
    }
    function fneutralTertiary() {
        let color = "#ffffff";
        if ($('#neutralTertiary').val() === "fff" || $('#neutralTertiary').val() == "ffffff") {
            color = "#000000";
        }
        $('#neutralTertiary').css({ "background": "#" + $('#neutralTertiary').val(), "color": color });
    }
    function fneutralSecondaryAlt() {
        let color = "#ffffff";
        if ($('#neutralSecondaryAlt').val() === "fff" || $('#neutralSecondaryAlt').val() == "ffffff") {
            color = "#000000";
        }
        $('#neutralSecondaryAlt').css({ "background": "#" + $('#neutralSecondaryAlt').val(), "color": color });
    }
    function fneutralSecondary() {
        let color = "#ffffff";
        if ($('#neutralSecondary').val() === "fff" || $('#neutralSecondary').val() == "ffffff") {
            color = "#000000";
        }
        $('#neutralSecondary').css({ "background": "#" + $('#neutralSecondary').val(), "color": color });
    }
    function fneutralPrimary() {
        let color = "#ffffff";
        if ($('#neutralPrimary').val() === "fff" || $('#neutralPrimary').val() == "ffffff") {
            color = "#000000";
        }
        $('#neutralPrimary').css({ "background": "#" + $('#neutralPrimary').val(), "color": color });
    }
    function fneutralDark() {
        let color = "#ffffff";
        if ($('#neutralDark').val() === "fff" || $('#neutralDark').val() == "ffffff") {
            color = "#000000";
        }
        $('#neutralDark').css({ "background": "#" + $('#neutralDark').val(), "color": color });
    }
    function fblack() {
        let color = "#ffffff";
        if ($('#black').val() === "fff" || $('#black').val() == "ffffff") {
            color = "#000000";
        }
        $('#black').css({ "background": "#" + $('#black').val(), "color": color });
    }
    function fwhite() {
        let color = "#ffffff";
        if ($('#white').val() === "fff" || $('#white').val() == "ffffff") {
            color = "#000000";
        }
        $('#white').css({ "background": "#" + $('#white').val(), "color": color });
    }
    function fprimaryBackground() {
        let color = "#ffffff";
        if ($('#primaryBackground').val() === "fff" || $('#primaryBackground').val() == "ffffff") {
            color = "#000000";
        }
        $('#primaryBackground').css({ "background": "#" + $('#primaryBackground').val(), "color": color });
    }
    function fprimaryText() {
        let color = "#ffffff";
        if ($('#primaryText').val() === "fff" || $('#primaryText').val() == "ffffff") {
            color = "#000000";
        }
        $('#primaryText').css({ "background": "#" + $('#primaryText').val(), "color": color });
    }
    function ferror() {
        let color = "#ffffff";
        if ($('#error').val() === "fff" || $('#error').val() == "ffffff") {
            color = "#000000";
        }
        $('#error').css({ "background": "#" + $('#error').val(), "color": color });
    }
    // This function prepares, loads, and then executes a SharePoint query to get the current users information
    function getUserName() {
        context.load(user);
        context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
    }

    // This function is executed if the above call is successful
    // It replaces the contents of the 'message' element with the user name
    function onGetUserNameSuccess() {
        $('#message').text('Hello ' + user.get_title());
    }

    // This function is executed if the above call fails
    function onGetUserNameFail(sender, args) {
        alert('Failed to get user name. Error:' + args.get_message());
    }


}
