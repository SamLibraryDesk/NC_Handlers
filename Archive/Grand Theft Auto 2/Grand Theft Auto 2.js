/// Network
    //Ok

/// Inputs
    // Controllers only.

/// Window manipulation
    // WidescreenFix cannot be used with DxWnd, Dxwnd needed to use the focus called (Do not notify on task switch).

/// Configs
    //Ok

/// Notes
    // Since there are already splitscreen project for GTA 2 this handler not going to be continued https://github.com/Bytewerk/gta2-hackers-remix/issues/1

var answers1 = ["Yes", "No"];
var answers2 = ["Dusk", "Noon"];
var answers3 = ["PSX:A"];
var answers4 = ["Yes", "Vertical & horizontal players only", "No"];

Game.AddOption("Show Player Name", "", "SHOWNAME", answers1);
Game.AddOption("Lighting", "", "LIGHTING", answers2);
Game.AddOption("Controller Set", "Select your preferred controller set.", "GAMEPAD", answers3);
Game.AddOption("Keep Aspect Ratio", "", "KEEPASPECT", answers4);

Game.FileSymlinkExclusions = ["Xidi.ini", "dinput.dll", "dinput8.dll", "dxwnd.dll", "dxwnd.ini", "dxwrapper.dll", "dxwrapper.ini", "ddraw.dll"];
Game.FileSymlinkCopyInstead = ["d3ddll.dll", "d3dpoly.dll", "dmavideo.dll"];
// Game.UseNucleusEnvironment = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "gta2.exe";
Game.GUID = "Grand Theft Auto 2";
Game.GameName = "Grand Theft Auto 2";
Game.MaxPlayers = 6;
Game.MaxPlayersOneMonitor = 6;

Game.HardcopyGame = false;
// Game.FakeFocus = true;
Game.HookFocus = false;
// Game.ForceWindowTitle = true;
Game.Hook.ForceFocusWindowName = "GTA2";
// Game.HasDynamicWindowTitle = true;
// Game.Hook.ForceFocus = true;
Game.ResetWindows = true;
Game.SetWindowHook = true;
// Game.HideTaskbar = true;
Game.KillProcessesOnClose = ["AutoHotkeyA32"];
Game.IgnoreWindowBordercheck = true;
Game.DontRemoveBorders = true;
Game.Description =
  "Create a multiplayer game and join with the rest and start the game. When the game starts Press F1 to activa the focus to all the instances.\n" +
  "You can press END to lock/unlock the inputs, while inputs are unlocked you can press CTRL+Q to close Nucleus and all of its instances."
Game.PauseBetweenContextAndLaunch = 3;
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 7;

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

// Game.SupportsMultipleKeyboardsAndMice = true;

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
Game.ProtoInput.MessageFilterHook = false;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = false;
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

Game.ProtoInput.BlockRawInputHook = false;

Game.ProtoInput.SendMouseMovementMessages = false;
Game.ProtoInput.SendMouseButtonMessages = false;
Game.ProtoInput.SendMouseWheelMessages = false;
Game.ProtoInput.SendKeyboardButtonMessages = false;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
// Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function () {

  Context.StartArguments = " -N";

  Context.CopyFolder(Game.Folder + "\\ddraw", Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dinput8.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dinput8.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);



  var showname = Context.Options["SHOWNAME"];
  var lighting = Context.Options["LIGHTING"];
  var gamepad = Context.Options["GAMEPAD"];
  var keepaspect = Context.Options["KEEPASPECT"];

  if (showname == "Yes") { var shwname = "1" }
  if (showname == "No") { var shwname = "0" }

  if (lighting == "Noon") { var light = "0" }
  if (lighting == "Dusk") { var light = "1" }

  if (gamepad == "PSX:A") {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Xidi.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Xidi_PSX_A.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  if (keepaspect == "Yes") {
    var height = "0"
    var width = "0"
    var kar = "1275068432"
  }

  if (keepaspect == "Vertical & horizontal players only") {
    if (Context.AspectRatioDecimal >= 3.55 && Context.AspectRatioDecimal <= 3.56 || Context.AspectRatioDecimal >= 0.87 && Context.AspectRatioDecimal <= 0.89) {
      var height = "0"
      var width = "0"
      var kar = "1275068432"
    } else {
      var height = Context.Height
      var width = Context.Width
      var kar = "1275068416"
    }
  }

  if (keepaspect == "No") {
    var height = Context.Height
    var width = Context.Width
    var kar = "1275068416"
  }

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Screen", "window_width", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Screen", "window_height", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Screen", "full_width", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Screen", "full_height", Context.Height, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Network", "show_player_names", shwname, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Screen", "lighting", light, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Screen", "start_mode", "1", Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Network", "PlayerName", Context.Nickname, Nucleus.RegType.String);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Control", "0", "32994", Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Control", "1", "32995", Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Control", "2", "32992", Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Control", "3", "32993", Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Control", "4", "32775", Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Control", "5", "32771", Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Control", "6", "32773", Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Control", "7", "32774", Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Control", "8", "32772", Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Control", "9", "32769", Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Control", "10", "32777", Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\DMA Design Ltd\\GTA2\\Control", "11", "32776", Nucleus.RegType.DWord);

  var dxwndPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dxwnd.ini";
  Context.ModifySaveFile(dxwndPath, dxwndPath, Nucleus.SaveType.INI, [
    // new Nucleus.IniSaveInfo("window", "sizy", Context.Height),
    // new Nucleus.IniSaveInfo("window", "sizx", Context.Width),
    // new Nucleus.IniSaveInfo("window", "posy", Context.PosY),
    // new Nucleus.IniSaveInfo("window", "posx", Context.PosX),
    new Nucleus.IniSaveInfo("target", "sizy0", height),
    new Nucleus.IniSaveInfo("target", "sizx0", width),
    new Nucleus.IniSaveInfo("target", "posy0", Context.PosY),
    new Nucleus.IniSaveInfo("target", "posx0", Context.PosX),
    new Nucleus.IniSaveInfo("target", "flagg0", kar) //KeepAspectRatio 1275068432, Disable 1275068416
  ]);

  var icoPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\WinActivate.ahk" // Change AHK icon
  var icodict = [Context.FindLineNumberInTextFile(icoPath, "Game_Icon = ", Nucleus.SearchType.StartsWith) + "|Game_Icon = " + Context.RootInstallFolder + "\\gta2.exe"]
  Context.ReplaceLinesInTextFile(icoPath, icodict);

  Context.RunAdditionalFiles(["2|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\WinActivate.bat"], false, 0);


};
