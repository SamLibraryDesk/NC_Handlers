/// Network
    //Ok

/// Inputs
    //Ok

/// Window manipulation
    // The game does't support resolution less than 1024x768, using wrapper like dgvoodoo causes incorrect cursor sync issue.
    // Need to add custom resolutions.

/// Configs
    //Ok

/// Notes
    // Need more workaround.
    // medieval2.preference.cfg file does't has line 116.


var answers1 = ["None", "Americas", "Britannia", "Crusades", "Teutonic"];
var answers2 = ["Low", "Medium", "Best"];
var answers3 = ["XGA", "HD", "FHD", "QHD", "4K UHD", "Auto"];
var answers4 = ["Yes", "No"];
var answers5 = ["No", "Yes"];
var wrappanswer = ["Dgvoodoo2", "None"];
Game.AddOption("Select DLC.", "", "DLC", answers1);
Game.AddOption("Video Setting.", "", "VIDEO", answers2);
Game.AddOption("Resolution.", "", "RES", answers3);
Game.AddOption("Enable V-sync?", "", "V-SYNC", answers4);
Game.AddOption("Draw Fake Cursor?", "Set yes if your cursor not visible.", "DRAWCUR", answers5);
Game.AddOption("Wrapper", "", "WRAPP", wrappanswer);

Game.KillMutex = ["Rome: Total War instance verification mutex"];

Game.SteamID = "4700";
Game.GUID = "Medieval II Total War";
Game.GameName = "Total War: MEDIEVAL II – Definitive Edition";
Game.MaxPlayersOneMonitor = 8;
Game.MaxPlayers = 8;

Game.NeedsSteamEmulation = true;

Game.ExecutableName = "medieval2.exe";
Game.FileSymlinkExclusions = ["dgVoodoo.conf", "D3DImm.dll", "D3D9.dll"];
Game.FileSymlinkCopyInstead = ["medieval2.preference.cfg", "steam_api.dll"];
Game.DirExclusions = ["saves"];
Game.DirSymlinkCopyInstead = ["preferences", "miles"];
Game.KeepSymLinkOnExit = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
//Game.StartArguments = "";
Game.KeepSymLinkOnExit = false;
Game.Description =
  "Description.";
Game.PauseBetweenProcessGrab = 0;
Game.PauseBetweenStarts = 15;


Game.FakeFocus = true;
Game.HookFocus = true;
Game.PreventWindowDeactivation = false;
Game.HasDynamicWindowTitle = true;
Game.ForceWindowTitle = true;
Game.SetForegroundWindowElsewhere = true;
Game.FakeFocusSendActivate = true;
Game.FakeFocusInterval = 1000;
Game.EnableWindows = true;
Game.Hook.ForceFocusWindowName = "Medieval 2";
Game.Hook.ForceFocus = true;

//Game.DontResize = true;
Game.HideTaskbar = true;
Game.ResetWindows = true;
//Game.SetWindowHook = true;
Game.SetTopMostAtEnd = true;

Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.SupportsKeyboard = false;
Game.Hook.CustomDllEnabled = false;

//USS deprecated options:

Game.HookSetCursorPos = false;
Game.HookGetCursorPos = false;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = false;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = false;
Game.SendNormalKeyboardInput = false;
Game.SendScrollWheel = false;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = false;
Game.HookReRegisterRawInputMouse = false;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = false;

//ProtoInput

Game.SupportsMultipleKeyboardsAndMice = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.MessageFilterHook = true;

Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.BlockRawInputHooks = false;
Game.ProtoInput.DinputOrderHooks = false;
Game.ProtoInput.XinputHooks = false;

Game.ProtoInput.dinputToXinputRedirection = false;
Game.ProtoInput.useOpenXinput = false;

Game.ProtoInput.showCursorWhenImageUpdated = false;
//Game.ProtoInput.allowMouseOutOfBounds = true;
Game.ProtoInput.extendMouseBounds = false;
Game.ProtoInput.toggleFakeCursorVisibilityShortcut = true;

//Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.AllowFakeCursorOutOfBounds = true;
Game.ProtoInput.ExtendFakeCursorBounds = false;

Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
//Game.ProtoInput.BlockedMessages = [ 0x0008, 0x00FF ]; // Blocks WM_KILLFOCUS

Game.Play = function() {

//Answ:

  var dlc = Context.Options["DLC"];
  var video = Context.Options["VIDEO"];
  var res = Context.Options["RES"];
  var vsync = Context.Options["V-SYNC"];
  var drawcur = Context.Options["DRAWCUR"];
  var wrapp = Context.Options["WRAPP"];
  
//Answ1:

  if (dlc == "None") {
   Context.StartArguments = "";
    }
	
  if (dlc == "Americas") {
   Context.StartArguments = "--features.mod=mods/americas";
    }
	  
  if (dlc == "Britannia") {
   Context.StartArguments = "--features.mod=mods/british_isles";
    }
	  
  if (dlc == "Crusades") {
   Context.StartArguments = "--features.mod=mods/crusades";
    }
	  
  if (dlc == "Teutonic") {
   Context.StartArguments = "--features.mod=mods/teutonic";
    }
	
//Answ2:
 
var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\medieval2.preference.cfg";

 if (video == "Low") {
  var dict = [
 "76|anisotropic_level = 4",
 "78|antialiasing = 0",
 "82|bloom = 0",
 "83|building_detail = low",
 "87|effect_quality = lowest",
 "90|grass_distance = 20",
 "98|shader = 1",
 "100|show_package_litter = 0",
 "101|skip_mip_levels = 2",
 "104|stencil_shadows = 0",
 "107|texture_filtering = 0",
 "108|unit_detail = low",
 "110|vegetation_quality = low"
];
   }

 if (video == "Medium") {
  var dict = [
 "76|anisotropic_level = 4",
 "78|antialiasing = 2",
 "82|bloom = 0",
 "83|building_detail = high",
 "87|effect_quality = normal",
 "90|grass_distance = 50",
 "98|shader = 1",
 "100|show_package_litter = 1",
 "101|skip_mip_levels = 1",
 "104|stencil_shadows = 1",
 "107|texture_filtering = 1",
 "108|unit_detail = normal",
 "110|vegetation_quality = normal"
];
   }
   
 if (video == "Best") {
  var dict = [
    "76|anisotropic_level = 2",
    "78|antialiasing = 4",
    "82|bloom = 1",
    "83|building_detail = high",
    "87|effect_quality = high",
    "90|grass_distance = 75",
    "98|shader = 2",
    "100|show_package_litter = 1",
    "101|skip_mip_levels = 0",
    "104|stencil_shadows = 1",
    "107|texture_filtering = 2",
    "108|unit_detail = high",
    "110|vegetation_quality = high"
];
   }
   Context.ReplaceLinesInTextFile(txtPath, dict);

//Answ3:

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\medieval2.preference.cfg";

if (res == "XGA") {
  var dict = [
    "81|battle_resolution = 1024 768",
    "84|campaign_resolution = 1024 768"
  ];
}

if (res == "HD") {
  var dict = [
    "81|battle_resolution = 1366 768",
    "84|campaign_resolution = 1366 768"
  ];
}

if (res == "FHD") {
  var dict = [
    "81|battle_resolution = 1920 1080",
    "84|campaign_resolution = 1920 1080"
  ];
}

if (res == "QHD") {
  var dict = [
    "81|battle_resolution = 2560 1440",
    "84|campaign_resolution = 2560 1440"
  ];
}

if (res == "4K UHD") {
  var dict = [
    "81|battle_resolution = 3840 2160",
    "84|campaign_resolution = 3840 2160"
  ];
}  
if (res == "Auto") {
  var dict = [
    "81|battle_resolution = " + Context.Width + " " + Context.Height,
    "84|campaign_resolution = " + Context.Width + " " + Context.Height
  ];
}
Context.ReplaceLinesInTextFile(txtPath, dict);

//Answ4:

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\medieval2.preference.cfg";
if (vsync == "Yes") {
  var dict = ["111|vsync = 1"];
   }

if (vsync == "No") {
  var dict = ["111|vsync = 0"];
     }
   Context.ReplaceLinesInTextFile(txtPath, dict);

//WrappAnsw:
/*
    if (wrapp == "Dgvoodoo2") {
		
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dgVoodoo.conf");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dgVoodoo\\dgVoodoo.conf");
      System.IO.File.Copy(savePkgOrigin, savePath, true);

      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\D3D9.dll");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dgVoodoo\\MS\\x86\\D3D9.dll");
      System.IO.File.Copy(savePkgOrigin, savePath, true);

      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\D3DImm.dll");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dgVoodoo\\MS\\x86\\D3DImm.dll");
      System.IO.File.Copy(savePkgOrigin, savePath, true);

        var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dgVoodoo.conf";
        var dict = [
            "117|FreeMouse                            = true",
            "118|WindowedAttributes                   = borderless",
            "198|Resolution                          = h:" + Context.Width + ", v:" + Context.Height
        ];
        Context.ReplaceLinesInTextFile(txtPath, dict);

  }
*/
    if (wrapp == "None") {
		
        var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\medieval2.preference.cfg";

        var dict = [
            "115|windowed = true",
            "116|borderless_window = true"
        ];
  }
        Context.ReplaceLinesInTextFile(txtPath, dict);

//General Settings:

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\medieval2.preference.cfg";
  
  var dict = [
    "5|music_vol = 0",
    "113|widescreen = 1",
    "114|movies = 0"
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);


   Game.ProtoInput.OnInputLocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      //ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

      //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
      //ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

      if (drawcur == "No") {
      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
     }
	 
      if (drawcur == "Yes") {
	  ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);
   }

      ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 0, true, true, true, true, true);

      System.Threading.Thread.Sleep(1000);

      ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
    }
  };

  Game.ProtoInput.OnInputUnlocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      //ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

      //ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);

      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);

      ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5000, true, true, true, true, true);
    }
  };
 
};
