/// Network
    //Ok

/// Inputs
    //Ok

/// Window manipulation
    //Ok
    
/// Configs
    //Ok

/// Notes
    //Ok

var answers0 = ["Yes", "No"];
var answers1 = ["60", "30"];
var answers2 = ["Normal", "Fast"];
var answers3 = ["Normal", "Slow", "Fast"];
var answers4 = ["Normal", "Slow", "Fast"];
var answers5 = ["Automatic", "640x480", "800x600", "960x1080", "1024x768", "1152x864", "1280x720", "1280x960", "1280x1024", "1366x768", "1600x1024", "1920x1080"];
var answers6 = ["Automatic", "640x480", "800x600", "960x1080", "1024x768", "1152x864", "1280x720", "1280x960", "1280x1024", "1366x768", "1600x1024", "1920x1080"];
var answers7 = ["Automatic", "640x480", "800x600", "960x1080", "1024x768", "1152x864", "1280x720", "1280x960", "1280x1024", "1366x768", "1600x1024", "1920x1080"];
var answers8 = ["Automatic", "640x480", "800x600", "960x1080", "1024x768", "1152x864", "1280x720", "1280x960", "1280x1024", "1366x768", "1600x1024", "1920x1080"];
var answers9 = ["Automatic", "640x480", "800x600", "960x1080", "1024x768", "1152x864", "1280x720", "1280x960", "1280x1024", "1366x768", "1600x1024", "1920x1080"];
var answers10 = ["Automatic", "640x480", "800x600", "960x1080", "1024x768", "1152x864", "1280x720", "1280x960", "1280x1024", "1366x768", "1600x1024", "1920x1080"];
var answers11 = ["Automatic", "640x480", "800x600", "960x1080", "1024x768", "1152x864", "1280x720", "1280x960", "1280x1024", "1366x768", "1600x1024", "1920x1080"];
var answers12 = ["Automatic", "640x480", "800x600", "960x1080", "1024x768", "1152x864", "1280x720", "1280x960", "1280x1024", "1366x768", "1600x1024", "1920x1080"];
var answers13 = ["Automatic", "640x480", "800x600", "960x1080", "1024x768", "1152x864", "1280x720", "1280x960", "1280x1024", "1366x768", "1600x1024", "1920x1080"];
var answers14 = ["Automatic", "640x480", "800x600", "960x1080", "1024x768", "1152x864", "1280x720", "1280x960", "1280x1024", "1366x768", "1600x1024", "1920x1080"];
var answers15 = ["Automatic", "640x480", "800x600", "960x1080", "1024x768", "1152x864", "1280x720", "1280x960", "1280x1024", "1366x768", "1600x1024", "1920x1080"];
var answers16 = ["Automatic", "640x480", "800x600", "960x1080", "1024x768", "1152x864", "1280x720", "1280x960", "1280x1024", "1366x768", "1600x1024", "1920x1080"];
Game.AddOption("Preserve aspect ratios?", "This option will prevent stretching windows.", "PRERATIO", answers0);
Game.AddOption("Limit FPS", "For less CPU consumption use lower FPS.", "FPSCAP", answers1);
Game.AddOption("Game Speed", "This Option can be changed in the host menu.", "GAMESPEED", answers2);
Game.AddOption("Mouse scroll speed", "This Option can be changed in the start menu.", "MOUSESPEED", answers3);
Game.AddOption("Keyboard scroll speed", "This Option can be changed in the start menu.", "KBSPEED", answers4);
Game.AddOption("Select your resolution for Player 1:", "Choose a resolution that is smaller or equal to each instance's view space.", "P1Res", answers5);
Game.AddOption("Select your resolution for Player 2:", "", "P2Res", answers6);
Game.AddOption("Select your resolution for Player 3:", "", "P3Res", answers7);
Game.AddOption("Select your resolution for Player 4:", "", "P4Res", answers8);
Game.AddOption("Select your resolution for Player 5:", "", "P5Res", answers9);
Game.AddOption("Select your resolution for Player 6:", "", "P6Res", answers10);
Game.AddOption("Select your resolution for Player 7:", "", "P7Res", answers11);
Game.AddOption("Select your resolution for Player 8:", "", "P8Res", answers12);
Game.AddOption("Select your resolution for Player 9:", "", "P9Res", answers13);
Game.AddOption("Select your resolution for Player 10:", "", "P10Res", answers14);
Game.AddOption("Select your resolution for Player 11:", "", "P11Res", answers15);
Game.AddOption("Select your resolution for Player 12:", "", "P12Res", answers16);

Game.ExecutableContext = ["Game_Dll.dll"];
Game.FileSymlinkExclusions = ["DDraw.dll", "ddraw.ini", "dinput.dll", "cdv_logo.bik", "sudtest.ini", "Game_Dll.dll", "menu.sue", "menu_dll.dll", "menu01.sue"];
Game.DirSymlinkExclusions = ["movies", "SaveGames"];
Game.DirSymlinkCopyInstead = ["XCHNG"];
Game.DirSymlinkCopyInsteadIncludeSubFolders = true;
Game.UseNucleusEnvironment = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "GAME_EXE.EXE";
Game.GUID = "Sudden Strike";
Game.GameName = "Sudden Strike";
Game.SteamID = "612300";
Game.MaxPlayers = 12;
Game.MaxPlayersOneMonitor = 12;
Game.FakeFocus = true;
Game.FakeFocusInterval =  100;
Game.HookFocus = false;
Game.ForceWindowTitle = true;
Game.Hook.ForceFocusWindowName = "Sudden Strike Forever";
Game.Hook.ForceFocus = true;
Game.DontResize = true;
//Game.DontReposition = true;
Game.ResetWindows = true;
Game.IgnoreWindowBordercheck = true;
Game.DontRemoveBorders = true;
Game.SetTopMostAtEnd = true;
Game.HideTaskbar = true;
Game.Hook.DInputForceDisable = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.Description = "Create a multiplayer game with one and join with the others without setting any IP, if the hosted game not showing set IP by pressing type 127.0.0.1  \n" +
"Press END to lock/unlock the inputs, While input is unlocked you can press CTRL+Q to close Nucleus and all of its instances."
Game.PauseBetweenProcessGrab = 3;
Game.PauseBetweenStarts = 10;

//USS deprecated options:

Game.SupportsMultipleKeyboardsAndMice = false;
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

Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = false;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;

Game.ProtoInput.RawInputFilter = false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = false;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = false;
Game.ProtoInput.MouseButtonFilter = false;
Game.ProtoInput.KeyboardButtonFilter = false;

Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.UseOpenXinput = false;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [ 0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function() {
  var preratio = Context.Options["PRERATIO"];
  var fpscap = Context.Options["FPSCAP"];
  var gamespeed = Context.Options["GAMESPEED"];
  var mousespeed = Context.Options["MOUSESPEED"];
  var kbspeed = Context.Options["KBSPEED"];
  var res0 = Context.Options["P1Res"];
  var res1 = Context.Options["P2Res"];
  var res2 = Context.Options["P3Res"];
  var res3 = Context.Options["P4Res"];
  var res4 = Context.Options["P5Res"];
  var res5 = Context.Options["P6Res"];
  var res6 = Context.Options["P7Res"];
  var res7 = Context.Options["P8Res"];
  var res8 = Context.Options["P9Res"];
  var res9 = Context.Options["P10Res"];
  var res10 = Context.Options["P11Res"];
  var res11 = Context.Options["P12Res"];

  if (Context.PlayerID == 0) {var res = res0}
  if (Context.PlayerID == 1) {var res = res1}
  if (Context.PlayerID == 2) {var res = res2}
  if (Context.PlayerID == 3) {var res = res3}
  if (Context.PlayerID == 4) {var res = res4}
  if (Context.PlayerID == 5) {var res = res5}
  if (Context.PlayerID == 6) {var res = res6}
  if (Context.PlayerID == 7) {var res = res7}
  if (Context.PlayerID == 8) {var res = res8}
  if (Context.PlayerID == 9) {var res = res9}
  if (Context.PlayerID == 10) {var res = res10}
  if (Context.PlayerID == 11) {var res = res11}

  var userPath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\resolutions");
  System.IO.Directory.CreateDirectory(userPath);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\DDraw.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "DDraw.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ddraw.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "ddraw.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dinput.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dinput.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "sudtest.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Game_Dll.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Game_Dll.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\menu.sue");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "menu.sue");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\menu_dll.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "menu_dll.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\menu01.sue");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "menu01.sue");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\resolutions\\cad640.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "cad640.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\resolutions\\cad800.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "cad800.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\resolutions\\cad960x1080.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "cad960x1080.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\resolutions\\cad1024.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "cad1024.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\resolutions\\cad1152x864.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "cad1152x864.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\resolutions\\cad1280x720.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "cad1280x720.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\resolutions\\cad1280x960.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "cad1280x960.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\resolutions\\cad1280x1024.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "cad1280x1024.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\resolutions\\cad1366x768.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "cad1366x768.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\resolutions\\cad1600x1024.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "cad1600x1024.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\resolutions\\cad1920x1080.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "cad1920x1080.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var sudPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
  var cncPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ddraw.ini";

  if (preratio == "Yes") {
	Context.ModifySaveFile(cncPath, cncPath, Nucleus.SaveType.INI, [new Nucleus.IniSaveInfo("ddraw","maintas", "true")]);

	var height = Context.Height;
	var width = Context.Width;
	var posY = Context.PosY;
	var posX = Context.PosX;	
  }

  if (preratio == "No") {
	Context.HideDesktop();

	let HWidth = Math.ceil(Context.Width / 1.8);
	let HPosX = Math.ceil((Context.Width - HWidth) / 2);

	if (Context.AspectRatioDecimal >= 3.55 && Context.AspectRatioDecimal <= 3.56) {
	  var height = Context.Height;
	  var width = HWidth;
	  var posY = Context.PosY;
	  var posX = HPosX;
	} else {
	  var height = Context.Height;
	  var width = Context.Width;
	  var posY = Context.PosY;
	  var posX = Context.PosX;
	}
  }

  Context.ModifySaveFile(cncPath, cncPath, Nucleus.SaveType.INI, [
	new Nucleus.IniSaveInfo("ddraw","windowed", "true"),
	new Nucleus.IniSaveInfo("ddraw","border", "false"),
	new Nucleus.IniSaveInfo("ddraw","singlecpu", "false"),
	new Nucleus.IniSaveInfo("ddraw","maxfps", fpscap),
	new Nucleus.IniSaveInfo("ddraw","height", height),
	new Nucleus.IniSaveInfo("ddraw","width", width),
	new Nucleus.IniSaveInfo("ddraw","posY", posY),
	new Nucleus.IniSaveInfo("ddraw","posX", posX)
  ]);

  if (gamespeed == "Fast") {var gS = "8";}
  if (gamespeed == "Normal") {var gS = "5";}
  if (mousespeed == "Fast") {var mS = "23";}
  if (mousespeed == "Normal") {var mS = "17";}
  if (mousespeed == "Slow") {var mS = "8";}
  if (kbspeed == "Fast") {var kS = "25";}
  if (kbspeed == "Normal") {var kS = "18";}
  if (kbspeed == "Slow") {var kS = "8";}

  if (res == "Automatic") {
    if (Context.Width >= 1920 && Context.Height >= 1080) {
      var cad = '1920x1080';
    } else if (Context.Width >= 1600 && Context.Height >= 1024) {
      var cad = '1600x1024';
    } else if (Context.Width >= 1366 && Context.Height >= 768) {
      var cad = '1366x768';
    } else if (Context.Width >= 1280 && Context.Height >= 1024) {
      var cad = '1280x1024';
    } else if (Context.Width >= 1280 && Context.Height >= 960) {
      var cad = '1280x960';
    } else if (Context.Width >= 1280 && Context.Height >= 720) {
      var cad = '1280x720';
    } else if (Context.Width >= 1152 && Context.Height >= 864) {
      var cad = '1152x864';
    } else if (Context.Width >= 1024 && Context.Height >= 768) {
      var cad = '1024';
    } else if (Context.Width >= 960 && Context.Height >= 1080) {
      var cad = '960x1080';
    } else if (Context.Width >= 800 && Context.Height >= 600) {
      var cad = '800';
    } else {
      var cad = '640';
    }

    if (Context.AspectRatioDecimal >= 0.87 && Context.AspectRatioDecimal <= 0.89 && Context.Width >= 960 && Context.Height >= 1080) {
      var cad = '960x1080';
    }
  } else if (res == "640x480") {
    var cad = '640';
  } else if (res == "800x600") {
    var cad = '800';
  } else if (res == "1024x768") {
    var cad = '1024';
  } else {
    var cad = res
  }

  Context.ModifySaveFile(sudPath, sudPath, Nucleus.SaveType.INI, [
	new Nucleus.IniSaveInfo("Game", "SSDraw3", "resolutions\\cad" + cad + ".dll"),
	new Nucleus.IniSaveInfo("Game", "KeyboardScroll", kS),
	new Nucleus.IniSaveInfo("Game", "MouseScroll", mS),
	new Nucleus.IniSaveInfo("Game", "MultiSpeed", gS),
	new Nucleus.IniSaveInfo("Game", "VideoMode", "3"),
	new Nucleus.IniSaveInfo("Game", "Player0", Context.Nickname)
  ]); 

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

      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

      ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5000, true, true, true, true, true);
    }
  };
};
