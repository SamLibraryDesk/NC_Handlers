/// Network
    // Must use the old version of the game on steam (steam->Rise Of Nation->properties->Betas->v1_10_old - 2014 version)

/// Inputs
    //Ok

/// Window manipulation
    // resolution less than 1024x768 not supported.

/// Configs
    //Ok

/// Notes
    //Null

var answers1 = ["Yes", "No"];
var answers2 = ["Yes", "No"];
Game.AddOption("Enable VSync?", "", "FPSCAP", answers1);
Game.AddOption("Keep the files when exit?", "Wouldn't need to copy the files again when you keep them. (Default: No)", "KEEPFILE", answers2);

Game.SteamID = "287450";
Game.GUID = "Rise of Nations Extended Edition";
Game.GameName = "Rise of Nations: Extended Edition";
Game.LauncherTitle = "";
Game.MaxPlayersOneMonitor = 8;
Game.MaxPlayers = 8;
Game.FileSymlinkExclusions = [
"steam_api.dll", "steam_interfaces.txt", "bhg_game_studios1M.wmv", "ms_game_studios_1M.wmv", 
"skybox_intro_1440.wmv", "skybox_intro_1920.wmv", "opening.wmv", "d3d11.dll", "d3d11.ini"
];
Game.FileSymlinkCopyInstead = [
"avutil-ttv-51.dll", "balancerules.txt", "bestimt.txt", "bighuge.txt", "conquestmotd.txt",
"counterchart.txt", "d3d8xstub.dll", "d3dcompiler_46.dll", "d3dgl.dll", "dbghelp.dll", "dpnl.dll", 
"dssl.dll", "Eulaxp1.dll", "game.txt", "graphics.txt", "labels.txt", "libmfxsw32.dll", "libmp3lame-ttv.dll", 
"masks.txt", "motd.txt", "obsoletescriptfuncs.txt", "PidGenx.dll", "pp_unicows.dll", "rise xml.spp", 
"rise xml.spp", "rtp32cb.dll", "rules.dat", "saveobjects.txt", "soundlist.txt", "soundtypes.txt", 
"SteamNetLib.dll", "swresample-ttv-0.dll", "taunt_categories.txt", "taunts.txt", "unicows.dll", 
"wmstubber.dll"
];
Game.DirSymlinkCopyInstead = [ "terrain art", "tribes", "mapstyles", "ai" ];
Game.DirSymlinkCopyInsteadIncludeSubFolders = true;
Game.DirExclusions = ["art"];
Game.UseNucleusEnvironment = true;
Game.UseGoldberg = true;
Game.HandlerInterval = 100;
Game.ExecutableName = "rise.exe";
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\Microsoft Games\\Rise of Nations";
Game.DocumentsSavePath = "My Games\\Rise of Nations";
Game.Description =
  "Use the old version of the game on steam (open steam -> Rise Of Nation -> Properties... -> Betas -> v1_10_old - 2014 version)\n" +
  "Requires 1 GB of space for each instance.\n" +
  "The game wouldn't resize the window less than 1024x768, so if you've 1920x1080 or less resolution you can't set 2 instance on 1 monitor, the possible way is to add and use higher custom desktop resolution (2732x1536 res can with 4 instances) .\n" +
  "When the instances have repositioned press the END key to lock the input.\n" +
  "Create a game through 'Game Browser' and join with the others.\n" +
  "Press the END key again to unlock the input and you can use CTRL+Q to close Nucleus and all its instances."
Game.PauseBetweenContextAndLaunch = 8;
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 15;

Game.KeepSymLinkOnExit = true;
Game.HardcopyGame = false;
Game.HookInit = true;
Game.DontResize = true;
Game.FakeFocus = true;
Game.HookFocus = false;
Game.ForceWindowTitle = true;
Game.Hook.ForceFocusWindowName = "Rise of Nations: Extended Edition";
Game.FakeFocusInterval = 5;
Game.Hook.ForceFocus = true;
Game.DontRemoveBorders = true;
Game.HideTaskbar = true;
Game.ResetWindows = true;
Game.SetTopMostAtEnd = true;

Game.Hook.DInputForceDisable = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
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

Game.ProtoInput.InjectStartup = true;
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

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = true;
Game.ProtoInput.GetAsyncKeyStateHook = true;
Game.ProtoInput.GetKeyboardStateHook = true;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.BlockRawInputHooks = false;
Game.ProtoInput.DinputOrderHooks = false;
Game.ProtoInput.XinputHooks = false;

Game.ProtoInput.FindWindowHook = true;

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = true;
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.dinputToXinputRedirection = false;
Game.ProtoInput.useOpenXinput = false;

Game.ProtoInput.useFakeClipCursor = true;
Game.ProtoInput.drawFakeCursor = true;

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
Game.ProtoInput.BlockedMessages = [];

Game.Play = function() {
  
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d11.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d11.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d11.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d11.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\PlayerProfile\\NucleusCoop.dat");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "NucleusCoop.dat");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

   var videoConfig = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\rise2.ini"; 
   Context.ModifySaveFile(videoConfig, videoConfig, Nucleus.SaveType.INI, [ 
   new Nucleus.IniSaveInfo("RISE OF NATIONS","Fullscreen", "0"),
   new Nucleus.IniSaveInfo("RISE OF NATIONS","SkipIntroMovies", "1"),
   new Nucleus.IniSaveInfo("RISE OF NATIONS","VSync", "1")
   ]);

   var path = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\PlayerProfile\\NucleusCoop.dat";
   Context.ChangeXmlAttributeValue(path, "//PLAYER_NAME", "value", Context.Nickname);

   var path = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\PlayerProfile\\current_user.xml";
   Context.ChangeXmlAttributeValue(path, "//CURRENT_USER", "name", "NucleusCoop");
   
	var height = Context.Height;
	var width = Context.Width;
	
	if (Context.Width < 1024) {var width = "1024"} else {var width = Context.Width}
	if (Context.Height < 768) {var height = "768"} else {var height = Context.Height }
		
    var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d11.ini";
    Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Window.System","OverrideRes", width + "x" + height)
  ]);
   var videoConfig = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\rise2.ini"; 
   Context.ModifySaveFile(videoConfig, videoConfig, Nucleus.SaveType.INI, [ 
   new Nucleus.IniSaveInfo("RISE OF NATIONS","Windowed Width", width),
   new Nucleus.IniSaveInfo("RISE OF NATIONS","Windowed Height", height)
  ]);

  var fpscap = Context.Options["FPSCAP"];
  if (fpscap == "Yes") {Context.ModifySaveFile(videoConfig, videoConfig, Nucleus.SaveType.INI, [ new Nucleus.IniSaveInfo("RISE OF NATIONS","VSync", "1")]);}
  if (fpscap == "No") {Context.ModifySaveFile(videoConfig, videoConfig, Nucleus.SaveType.INI, [ new Nucleus.IniSaveInfo("RISE OF NATIONS","VSync", "0")]);}
 
  var batPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Copy.bat";
  var batLines = [
    "@echo off",
    "title RoN COPIER",
    'xcopy "' +
      (Context.RootInstallFolder + "\\art") +
      '" "' +
      Context.GetFolder(Nucleus.Folder.InstancedGameFolder) +
      '\\art\\" /S /Y /E',
  ];
  Context.WriteTextFile(batPath, batLines);

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\art\\snow\\woodcutter_6_snow.tga")) {
    Game.PauseBetweenContextAndLaunch = 40
    Context.RunAdditionalFiles(["all|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Copy.bat"], false, 0);
  }
   
  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_interfaces.txt";
  var lines = [
    "SteamClient015",
    "SteamGameServer012",
    "SteamGameServerStats001",
    "SteamUser017",
    "SteamFriends014",
    "SteamUtils007",
    "SteamMatchMaking009",
    "SteamMatchMakingServers002",
    "STEAMUSERSTATS_INTERFACE_VERSION011",
    "STEAMAPPS_INTERFACE_VERSION006",
    "SteamNetworking005",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION012",
    "STEAMSCREENSHOTS_INTERFACE_VERSION002",
    "STEAMHTTP_INTERFACE_VERSION002",
    "STEAMUNIFIEDMESSAGES_INTERFACE_VERSION001",
    "STEAMUGC_INTERFACE_VERSION002",
    "STEAMAPPLIST_INTERFACE_VERSION001",
    "STEAMMUSIC_INTERFACE_VERSION001",
    "STEAMMUSICREMOTE_INTERFACE_VERSION001",
    "STEAMCONTROLLER_INTERFACE_VERSION",
  ];
  Context.WriteTextFile(interfaces, lines);
  
  var keepfile = Context.Options["KEEPFILE"];
  var hndlrPath = Context.HandlersFolder + "\\Rise of Nations Extended Edition.js";

  if (keepfile == "Yes") {
	  var dict = [
	  Context.FindLineNumberInTextFile(hndlrPath, 'var answers2 =', Nucleus.SearchType.StartsWith) + '|var answers2 = ["Yes", "No"];',
	  Context.FindLineNumberInTextFile(hndlrPath, 'Game.KeepSymLinkOnExit =', Nucleus.SearchType.StartsWith) + '|Game.KeepSymLinkOnExit = true;'
	  ];}
  if (keepfile == "No") {
	  var dict = [
	  Context.FindLineNumberInTextFile(hndlrPath, 'var answers2 =', Nucleus.SearchType.StartsWith) + '|var answers2 = ["No", "Yes"];',
	  Context.FindLineNumberInTextFile(hndlrPath, 'Game.KeepSymLinkOnExit =', Nucleus.SearchType.StartsWith) + '|Game.KeepSymLinkOnExit = false;'
	  ];}
	  Context.ReplaceLinesInTextFile(hndlrPath, dict)
};
