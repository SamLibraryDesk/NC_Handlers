/// Network
    //Ok

/// Inputs
    //Ok

/// Window manipulation
    // The game crashes at 640x480 with CNC-ddraw.
    // Use SetWindowHook? causes incorrect cursor sync issue, (add Game.ProtoInput.AllowFakeCursorOutOfBounds maybe?)

/// Configs
    //Ok

/// Notes
    // The game has issue where it has the same ExecutableName as Sudden Strike (first version).
    // The game runs through BAT file unlike the first version can be launched through the EXE.

    var answers1 = ["60", "30"];
    var answers2 = ["Fast", "Normal"];
    var answers3 = ["Slow", "Normal", "Fast"];
    var answers4 = ["Slow", "Normal", "Fast"];
    Game.AddOption("Limit FPS", "For less CPU consumption use lower FPS.", "FPSCAP", answers1);
    Game.AddOption("Game Speed", "This Option can be changed in the host menu.", "GAMESPEED", answers2);
    Game.AddOption("Mouse scroll speed", "This Option can be changed in the start menu.", "MOUSESPEED", answers3);
    Game.AddOption("Keyboard scroll speed", "This Option can be changed in the start menu.", "KBSPEED", answers4);

Game.UseNucleusEnvironment = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.FileSymlinkExclusions = ["DDraw.dll", "ddraw.ini", "cdv_logo.bik"];
Game.FileSymlinkCopyInstead = ["sudtest.ini"];
Game.DirSymlinkExclusions = ["movies"];
Game.HardcopyGame = false;
Game.Description = "Use Nucleus-Coop app 2.2.1 or above, if faced a probem with starting your instances try to run Nucleus-Coop app as administer. Select your preference and start the game then wait until the instances repostin then press END to lock/unlock the inputs.";

Game.ExecutableName = "sue.exe";
Game.ExecutableToLaunch = "Sudden Strike II.bat";
Game.BinariesFolder = "";
Game.SteamID = "612520";
Game.GUID = "Sudden Strike 2 Gold";
Game.GameName = "Sudden Strike 2 Gold";
Game.MaxPlayers = 12;
Game.MaxPlayersOneMonitor = 12;

Game.FakeFocus = true;
Game.HookFocus = true;
Game.ForceWindowTitle = true;
Game.Hook.ForceFocusWindowName = "Sudden Strike version 2.0";
Game.FakeFocusInterval =  100;
Game.Hook.ForceFocus = true;
Game.DontResize = true;
//Game.DontReposition = true;
Game.HideTaskbar = true;
Game.SetTopMostAtEnd = true;
Game.PreventWindowDeactivation = true;

Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.Hook.DInputForceDisable = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;

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

Game.Play = function() {

  var fpscap = Context.Options["FPSCAP"];
  var gamespeed = Context.Options["GAMESPEED"];
  var mousespeed = Context.Options["MOUSESPEED"];
  var kbspeed = Context.Options["KBSPEED"];
  
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\code\\Release\\DDraw.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "DDraw.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\code\\Release\\ddraw.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "ddraw.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [ 
  new Nucleus.IniSaveInfo("Game","Player0", Context.Nickname)
]); 

if (fpscap == "60") {
  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\code\\Release\\ddraw.ini";
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("ddraw","maxfps", "65")
]);
}
if (fpscap == "30") {
  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\code\\Release\\ddraw.ini";
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("ddraw","maxfps", "30")
]);
}

  if (gamespeed == "Fast") {
	  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
	  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
	  new Nucleus.IniSaveInfo("Game","MultiSpeed", "7")
]);
}
  if (gamespeed == "Normal") {
	  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
	  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
	  new Nucleus.IniSaveInfo("Game","MultiSpeed", "5")
]);
}

if (mousespeed == "Fast") {
  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("Game","MouseScroll", "23")
]);
}
if (mousespeed == "Normal") {
  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("Game","MouseScroll", "17")
]);
}
if (mousespeed == "Slow") {
  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("Game","MouseScroll", "8")
]);
}

if (kbspeed == "Fast") {
  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("Game","KeyboardScroll", "25")
]);
}
if (kbspeed == "Normal") {
  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("Game","KeyboardScroll", "18")
]);
}
if (kbspeed == "Slow") {
  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("Game","KeyboardScroll", "8")
]);
}

if (Context.Width > 1024 && Context.Height > 768) {
	var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
	Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
	new Nucleus.IniSaveInfo("Game","VideoMode", "3")
	]);
} else if (Context.Width > 800 && Context.Height > 600) {
	var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
    Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
	new Nucleus.IniSaveInfo("Game","VideoMode", "2")
	]);
} else {
	var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\sudtest.ini";
	Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
	new Nucleus.IniSaveInfo("Game","VideoMode", "1")
	]);
}

  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\code\\Release\\ddraw.ini"; 
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [ 
  new Nucleus.IniSaveInfo("ddraw","windowed", "true"),
  new Nucleus.IniSaveInfo("ddraw","border", "false"),
  new Nucleus.IniSaveInfo("ddraw","width", Context.Width),
  new Nucleus.IniSaveInfo("ddraw","height", Context.Height),
  new Nucleus.IniSaveInfo("ddraw","posX", Context.PosX),
  new Nucleus.IniSaveInfo("ddraw","posY", Context.PosY),
  new Nucleus.IniSaveInfo("ddraw","singlecpu", "false")
  ]);
 
};

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
Game.ProtoInput.BlockRawInputHooks = true;
Game.ProtoInput.DinputOrderHooks = false;
Game.ProtoInput.XinputHooks = false;

Game.ProtoInput.dinputToXinputRedirection = false;
Game.ProtoInput.useOpenXinput = false;

Game.ProtoInput.showCursorWhenImageUpdated = false;
Game.ProtoInput.allowMouseOutOfBounds = true;
Game.ProtoInput.extendMouseBounds = false;
Game.ProtoInput.toggleFakeCursorVisibilityShortcut = true;

//Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.AllowFakeCursorOutOfBounds = false;
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
Game.ProtoInput.BlockedMessages = [ 0x0008]; // Blocks WM_KILLFOCUS

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