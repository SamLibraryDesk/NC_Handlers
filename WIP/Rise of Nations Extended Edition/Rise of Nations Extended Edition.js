/// Network
    // Must use the old version of the game on steam (steam->Rise Of Nation->properties->Betas->v1_10_old - 2014 version)

/// Inputs
    //Ok

/// Window manipulation
    // resolution less than 1024x768 not supported.

/// Configs
    //Ok

/// Notes
    // This handler uses HardcopyGame. (need to discover and copy the necessary files).

var answers1 = ["Yes", "No"];
Game.AddOption("Enable VSync?", "", "FPSCAP", answers1);

Game.SteamID = "287450";
Game.GUID = "Rise of Nations Extended Edition";
Game.GameName = "Rise of Nations: Extended Edition";
Game.LauncherTitle = "";
Game.MaxPlayersOneMonitor = 8;
Game.MaxPlayers = 8;

Game.FileSymlinkExclusions = ["steam_api.dll", "steam_interfaces.txt", "bhg_game_studios1M.wmv", "ms_game_studios_1M.wmv", "skybox_intro_1440.wmv", "skybox_intro_1920.wmv", "opening.wmv", "d3d11.dll", "d3d11.ini"];
//Game.FileSymlinkCopyInstead = ["", "", "", "", "", "", "", "", "", "", ""];
Game.UseNucleusEnvironment = true;
Game.UseGoldberg = true;
//Game.GoldbergNeedSteamInterface = true;

Game.HandlerInterval = 100;
Game.ExecutableName = "rise.exe";
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\Microsoft Games\\Rise of Nations";
Game.DocumentsSavePath = "Documents\\My Games\\Rise of Nations";
Game.Description =
  'Use the old version of the game on steam (open steam->Rise Of Nation->properties->Betas->v1_10_old - 2014 version).';
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.HardcopyGame = true;
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
Game.ProtoInput.BlockRawInputHooks = true;
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

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_interfaces.txt");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "steam_interfaces.txt");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\PlayerProfile\\NucleusCoop.dat");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "NucleusCoop.dat");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

   var videoConfig = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\rise2.ini"; 
   Context.ModifySaveFile(videoConfig, videoConfig, Nucleus.SaveType.INI, [ 
   new Nucleus.IniSaveInfo("RISE OF NATIONS","Fullscreen", "0"),
   new Nucleus.IniSaveInfo("RISE OF NATIONS","VSync", "1")
   ]);

   var path = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\PlayerProfile\\NucleusCoop.dat";
   Context.ChangeXmlAttributeValue(path, "//PLAYER_NAME", "value", Context.Nickname);

   var path = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\PlayerProfile\\current_user.xml";
   Context.ChangeXmlAttributeValue(path, "//CURRENT_USER", "name", "NucleusCoop");
   
	var height = Context.Height;
	var width = Context.Width;
	
	if (Context.Width < 1024) {
		var width = "1024"
	} else {
		var width = Context.Width
	}
	if (Context.Height < 768) {
		var height = "768"
	} else {
		var height = Context.Height
	}
		
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

  if (fpscap == "Yes") {
    var videoConfig = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\rise2.ini"; 
   Context.ModifySaveFile(videoConfig, videoConfig, Nucleus.SaveType.INI, [ 
    new Nucleus.IniSaveInfo("RISE OF NATIONS","VSync", "1")
  ]);
  }

  if (fpscap == "No") {
    var videoConfig = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\rise2.ini"; 
   Context.ModifySaveFile(videoConfig, videoConfig, Nucleus.SaveType.INI, [ 
    new Nucleus.IniSaveInfo("RISE OF NATIONS","VSync", "0")
  ]);
  }
};
