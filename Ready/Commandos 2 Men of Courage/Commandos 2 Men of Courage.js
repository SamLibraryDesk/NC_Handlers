/// Network
    //Ok

/// Inputs
    //Ok

/// Window manipulation
    // It's ok to use CNC-ddraw settings but in game resolutions optins could be found in cfg file.

/// Configs
    //Ok

/// Notes
    //The handler uses shared game saves, so each player should create his own profile to play.

var answers1 = ["Yes", "No"];
// var answers2 = ["Native", "Destination Paris"];
Game.AddOption("Preserve aspect ratios?", "This option will prevent stretching windows.", "PRERATIO", answers1);
// Game.AddOption("Mod", "The mod must be in the same folder as the native executable is.", "MOD", answers2);

Game.KillMutex = ["CerrojoCommandos 2"];

Game.UseNucleusEnvironment = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.FileSymlinkExclusions = ["DDraw.dll", "ddraw.ini", "DATAEI.pop", "DATALE00.pop", "DATARO.pop"];
//Game.FileSymlinkCopyInstead = [];
//Game.DirSymlinkExclusions = [];
Game.DirSymlinkCopyInstead = ["OUTPUT"];
Game.HardcopyGame = false;
Game.ExecutableName = "comm2.exe";
Game.SteamID = "6830";
Game.GUID = "Commandos 2 Men of Courage";
Game.GameName = "Commandos 2: Men of Courage";
Game.DocumentsConfigPath = "Commandos II\\OUTPUT";
Game.MaxPlayers = 6;
Game.MaxPlayersOneMonitor = 6;

Game.FakeFocus = true;
// Game.ForceWindowTitle = true;
Game.Hook.ForceFocusWindowName = "Commandos 2";
Game.Hook.ForceFocus = true;
Game.HookFocus = false;
Game.SetWindowHookStart = true;
Game.DontResize = true;
Game.DontReposition = true;
Game.HideTaskbar = true;
Game.SetTopMostAtEnd = true;
Game.Description = "Start the game and wait till the instances reposition. Press END to lock/unlock the input.";
Game.PauseBetweenProcessGrab = 3;
Game.PauseBetweenStarts = 10;

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

Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.drawFakeCursor = false;
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
Game.ProtoInput.XinputHook = false;
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
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS


Game.Play = function () {

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\DDraw.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "DDraw.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ddraw.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "ddraw.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  if (Context.Width >= 1024 && Context.Height >= 768) {
    var mv = "2";
  } else if (Context.Width >= 800 && Context.Height >= 600) {
    var mv = "1";
  } else {
    var mv = "0";
  }

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\OUTPUT\\COMM2.CFG";
  var dict = [Context.FindLineNumberInTextFile(txtPath, "  .MODOVIDEO ", Nucleus.SearchType.StartsWith) + "|  .MODOVIDEO " + mv];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  var preratio = Context.Options["PRERATIO"];
  // var mod = Context.Options["MOD"];

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

    let VHeight = Math.ceil(Context.Height / 1.3);
    let VPosY = Math.ceil((Context.Height - VHeight) / 2);

    if (Context.AspectRatioDecimal >= 3.55 && Context.AspectRatioDecimal <= 3.56) {
      var height = Context.Height;
      var width = HWidth;
      var posY = Context.PosY;
      var posX = HPosX;
    } else if (Context.AspectRatioDecimal >= 0.87 && Context.AspectRatioDecimal <= 0.89) {
      var height = VHeight;
      var width = Context.Width;
      var posY = VPosY;
      var posX = Context.PosX;
    } else {
      var height = Context.Height;
      var width = Context.Width;
      var posY = Context.PosY;
      var posX = Context.PosX;
    }
  }
  /*
   if (mod == "Native") {}
   if (mod == "Destination Paris") {
     Game.ExecutableToLaunch = "Comm2P.exe";
     Game.FileSymlinkCopyInstead = ["Comm2P.dll", "ogg.dll"];
     }
 */
  Context.ModifySaveFile(cncPath, cncPath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("ddraw", "windowed", "true"),
    new Nucleus.IniSaveInfo("ddraw", "border", "false"),
    new Nucleus.IniSaveInfo("ddraw", "singlecpu", "false"),
    new Nucleus.IniSaveInfo("ddraw", "height", height),
    new Nucleus.IniSaveInfo("ddraw", "width", width),
    new Nucleus.IniSaveInfo("ddraw", "posY", posY),
    new Nucleus.IniSaveInfo("ddraw", "posX", posX)
  ]);

  Game.ProtoInput.OnInputLocked = function () {
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

      //ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

    }
  };

  Game.ProtoInput.OnInputUnlocked = function () {
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

      //ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);

      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

    }
  };
};
