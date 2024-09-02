/// Network
    //Ok

/// Inputs
    // Controllers only

/// Window manipulation
    //Ok

/// Configs
    //Ok

/// Notes
    //Null

var answers0 = ["Yes", "No"];
var answers1 = ["60", "30"];
var answers2 = ["Normal", "Fast"];
var answers3 = ["Normal", "Slow", "Fast"];

Game.AddOption("Preserve aspect ratios?", "This option will prevent stretching windows.", "PRERATIO", answers0);
Game.AddOption("Limit FPS", "For less CPU consumption use lower FPS.", "FPSCAP", answers1);
Game.AddOption("Game Speed", "This Option can be changed in the host menu.", "GAMESPEED", answers2);
Game.AddOption("Mouse scroll speed", "This Option can be changed in the start menu.", "MOUSESPEED", answers3);


Game.FileSymlinkExclusions = ["DDraw.dll", "ddraw.ini", "dinput.dll"/*,"Xidi.ini"*/];
Game.FileSymlinkCopyInstead = ["messages.dll", "a3dapi.dll"];
//Game.DirSymlinkExclusions = ["movies", "SaveGames"];
//Game.DirSymlinkCopyInstead = ["XCHNG"];
//Game.DirSymlinkCopyInsteadIncludeSubFolders = true;
Game.UseNucleusEnvironment = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "Recoil.exe";
Game.GUID = "Recoil";
Game.GameName = "Recoil";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;


Game.HookInit = true;
// Game.ChangeExe = true;
// Game.IdInWindowTitle = true;
// Game.LaunchAsDifferentUsers = true;
// Game.LaunchAsDifferentUsersAlt = true;

// Game.FakeFocus = true;
Game.HookFocus = false;
//Game.ForceWindowTitle = true;
Game.Hook.ForceFocusWindowName = "RECOIL";
Game.HasDynamicWindowTitle = true;
// Game.Hook.ForceFocus = true;
// Game.SetTopMostAtEnd = false;
//Game.SetWindowHook = true;
Game.DontResize = true;
//Game.DontReposition = true;
//Game.SetTopMostAtEnd = true;
//Game.HideTaskbar = true;


// Game.UseForceBindIP = true;
// Game.ForceBindIPDelay = 10000;
// Game.ForceBindIPNoDummy = true;

Game.XInputPlusDll = ["xinput1_3.dll", "dinput.dll"];
Game.XInputPlusOldDll = true;

Game.XInputPlusDll = ["xinput1_3.dll", "Dinput8.dll", "Dinput.dll"];
Game.Hook.DInputForceDisable = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.Description = "Create a multiplayer game with one and join with the others without setting any IP, if the hosted game not showing set IP by pressing F5 or set 127.0.0.1  \n\nPress END to lock/unlock the inputs, While input is unlocked you can press CTRL+Q to close Nucleus and all of its instances."
Game.PauseBetweenContextAndLaunch = 3;
// Game.PauseBetweenProcessGrab = 2;
Game.PauseBetweenStarts = 20;

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
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
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
Game.ProtoInput.MessageFilterHook = false;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = false;
// Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;
Game.ProtoInput.BlockRawInputHook = true;

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
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
// Game.ProtoInput.DinputDeviceHook = true;
// Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = true;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x00FF]; // Blocks WM_KILLFOCUS

Game.Play = function () {
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

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\DDraw.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "DDraw.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ddraw.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "ddraw.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "XInputPlus.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var cncPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ddraw.ini";

  if (preratio == "Yes") {
    Context.ModifySaveFile(cncPath, cncPath, Nucleus.SaveType.INI, [new Nucleus.IniSaveInfo("ddraw", "maintas", "true")]);

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
    new Nucleus.IniSaveInfo("ddraw", "windowed", "true"),
    new Nucleus.IniSaveInfo("ddraw", "border", "false"),
    new Nucleus.IniSaveInfo("ddraw", "singlecpu", "false"),
    new Nucleus.IniSaveInfo("ddraw", "maxgameticks", "60"),
    new Nucleus.IniSaveInfo("ddraw", "maxfps", fpscap),
    new Nucleus.IniSaveInfo("ddraw", "height", height),
    new Nucleus.IniSaveInfo("ddraw", "width", width),
    new Nucleus.IniSaveInfo("ddraw", "posY", posY),
    new Nucleus.IniSaveInfo("ddraw", "posX", posX)
  ]);
  /*
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
      ]);
  */
  if (Context.PlayerID < 0) {
    Game.LauncherExe = "ip.bat";
    Game.LauncherExeIgnoreFileCheck = true;
    var id = Context.PlayerID + 1;
    var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ip.bat";
    var lines = [
      '"' +
      Context.NucleusFolder +
      '\\utils\\ForceBindIP\\ForceBindIP.exe" ' + Context.LocalIP + ':080' + id +
      ' "' +
      Context.GetFolder(Nucleus.Folder.InstancedGameFolder) +
      '\\Recoil.exe"+ ' + ''];
    Context.WriteTextFile(Bat, lines);
  }

  Game.ProtoInput.OnInputLocked = function () {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      // ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
      // ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.BlockRawInputHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.DinputOrderHookID);

      //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
      //ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

      ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 0, true, true, true, true, true);

      System.Threading.Thread.Sleep(1000);

      ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
    }
  };

  Game.ProtoInput.OnInputUnlocked = function () {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      // ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
      // ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.BlockRawInputHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.DinputOrderHookID);

      //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
      //ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
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
