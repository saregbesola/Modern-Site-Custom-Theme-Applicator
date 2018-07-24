<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
     <script type="text/javascript" src="../Scripts/bootstrap.min.js"></script>
    <%--<SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />--%>
      <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script> 
  <script type="text/javascript" src="/_layouts/15/sp.js"></script> 
    <meta name="WebPartPageExpansion" content="full" />

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
     <link href="../Content/bootstrap.min.css" rel="stylesheet" />

    <!-- Add your JavaScript to the following file -->
    <script type="text/javascript" src="../Scripts/App.js"></script>
    <script type="text/javascript">
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
    </script>
</asp:Content>
<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Custom Theme Applicator
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
     <br />  <br />
    <div class="container">
        <p id="message">
            
        </p>

        <div class="row">
            <div class="col-lg-12">
                <div class="form-horizontal FormStyle">
                <div class="form-group">
                   <p class="control-label col-sm-8">This tool helps you to try different shades of color to create custom theme and apply it to your modern sites.
                </div>
                    <div class="form-group">
                        <label for="themeName" class="control-label col-sm-4">Theme Name</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="text" id="themeName" />
                        </div>
                        <p ><i>//Provide a name for your theme</i></p>
                    </div>
                    <div class="form-group">
                        <label for="themePrimary" class="control-label col-sm-4">themePrimary</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="themePrimary"   />
                        </div>
                         <p class="col-sm-4"><i>//buttons, document name link, hyperlinks,Edit button/link, toggle switch, text color when left nav item is elected, apps icon, plus icon for adding webpart.</i></p>
                    </div>
                    <div class="form-group">
                        <label for="themeLighterAlt" class="control-label col-sm-4">themeLighterAlt</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="themeLighterAlt" />
                        </div>
                          <p ><i></i></p>
                    </div>
                     <div class="form-group">
                        <label for="themeLighter" class="control-label col-sm-4">themeLighter</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="themeLighter"  />
                        </div>
                          <p ><i>//hovering color when seraching for web part</i></p>
                    </div>
                    <div class="form-group">
                        <label for="themeLight" class="control-label col-sm-4">themeLight</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="themeLight"   />
                        </div>
                          <p ><i></i></p>
                    </div>
                   
                    <div class="form-group">
                        <label for="themeTertiary" class="control-label col-sm-4">themeTertiary</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="themeTertiary"  />
                        </div>
                          <p ><i></i></p>
                    </div>
                    <div class="form-group">
                        <label for="themeSecondary" class="control-label col-sm-4">themeSecondary</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="themeSecondary"  />
                        </div>
                          <p ><i></i></p>
                    </div>
                    <div class="form-group">
                        <label for="themeDarkAlt" class="control-label col-sm-4">themeDarkAlt</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="themeDarkAlt"  />
                        </div>
                          <p ><i>//hover for themePrimary/buttons, icons</i></p>
                    </div>
                    <div class="form-group">
                        <label for="themeDark" class="control-label col-sm-4">themeDark</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="themeDark"  />
                        </div>
                          <p ><i>//The icons color beside New/command bar</i></p>
                    </div>
                    <div class="form-group">
                        <label for="themeDarker" class="control-label col-sm-4">themeDarker</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="themeDarker"  />
                        </div>
                          <p ><i>//hovering color for <b>see all</b> link for ducment library</i></p>
                    </div>
                    <div class="form-group">
                        <label for="neutralLighterAlt" class="control-label col-sm-4">neutralLighterAlt</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="neutralLighterAlt"  />
                        </div>
                          <p ><i>//webpart hover</i></p>
                    </div>
                    <div class="form-group">
                        <label for="neutralLighter" class="control-label col-sm-4">neutralLighter</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="neutralLighter" />
                        </div>
                          <p class="col-sm-4"><i>//News webpart background, News command bar, for left navigation text selected, Cancel button, including button for posting comment when field is empty.</i></p>
                    </div>
                    <div class="form-group">
                        <label for="neutralLight" class="control-label col-sm-4">neutralLight</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="neutralLight"  />
                        </div>
                          <p ><i>//demarcating or border lines. </i></p>
                    </div>
                    <div class="form-group">
                        <label for="neutralQuaternaryAlt" class="control-label col-sm-4">neutralQuaternaryAlt</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="neutralQuaternaryAlt"  />
                        </div>
                          <p ><i></i></p>
                    </div>
                    <div class="form-group">
                        <label for="neutralQuaternary" class="control-label col-sm-4">neutralQuaternary</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="neutralQuaternary"  />
                        </div>
                          <p ><i></i></p>
                    </div>
                    <div class="form-group">
                        <label for="neutralTertiaryAlt" class="control-label col-sm-4">neutralTertiaryAlt</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="neutralTertiaryAlt"  />
                        </div>
                          <p ><i></i></p>
                    </div>
                    <div class="form-group">
                        <label for="neutralTertiary" class="control-label col-sm-4">neutralTertiary</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="neutralTertiary"  />
                        </div>
                          <p ><i></i></p>
                    </div>
                    <div class="form-group">
                        <label for="neutralSecondaryAlt" class="control-label col-sm-4">neutralSecondaryAlt</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="neutralSecondaryAlt"  />
                        </div>
                          <p ><i>//general text color. also affects text on app buttons</i></p>
                    </div>
                    <div class="form-group">
                        <label for="neutralSecondary" class="control-label col-sm-4">neutralSecondary</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="neutralSecondary"/>
                        </div>
                          <p ><i>//News text color</i></p>
                    </div>
                    <div class="form-group">
                        <label for="neutralPrimary" class="control-label col-sm-4">neutralPrimary</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="neutralPrimary"  />
                        </div>
                          <p ><i>//text color for header inside webpart/ for general header?</i></p>
                    </div>
                    <div class="form-group">
                        <label for="neutralDark" class="control-label col-sm-4">neutralDark</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="neutralDark"  />
                        </div>
                          <p ><i>// Documet text color for static</i></p>
                    </div>
                    <div class="form-group">
                        <label for="black" class="control-label col-sm-4">black</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="black"  />
                        </div>
                          <p ><i>//News Header on the news full page</i></p>
                    </div>
                    <div class="form-group">
                        <label for="white" class="control-label col-sm-4">white</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="white"  />
                        </div>
                          <p ><i>//body background color excluding lower part of left navigation.</i></p>
                    </div>
                    <div class="form-group">
                        <label for="primaryBackground" class="control-label col-sm-4">primaryBackground</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="primaryBackground"  />
                        </div>
                          <p ><i>//lower part of left navigation, including comment field background.</i></p>
                    </div>
                    <div class="form-group">
                        <label for="primaryText" class="control-label col-sm-4">primaryText</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="primaryText"  />
                        </div>
                          <p ><i>//text color inside webpart and hovering</i></p>
                    </div>
                    <div class="form-group">
                        <label for="error" class="control-label col-sm-4">error</label>
                        <div class="col-sm-4">
                            <input class="form-control c1" type="color" id="error"  />
                        </div>
                          <p ><i></i></p>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-4">
                            <input type="button" value="Apply/Update Theme" id="btn-add2" class="btn btn-default" />
                            <input type="button" value="Remove Theme" id="btn-remove" class="btn btn-default" />
                             <br />
                    <div id="mssg"></div>
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    </div>
    <p id="palette">
    </p>
</asp:Content>
