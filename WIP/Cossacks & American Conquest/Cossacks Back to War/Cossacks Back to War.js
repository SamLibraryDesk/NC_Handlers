/// Network
    //Ok

/// Inputs
    //Ok

/// Window manipulation
    //Ok
    
/// Configs
    //Ok

/// Notes
    // Use multiplayer speed fix https://github.com/FunkyFr3sh/cnc-ddraw/wiki

var answers0 = ["Slow Mode", "Fast Mode"];
var answers1 = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
var answers2 = ["50", "60", "70", "80", "90", "100"];

Game.AddOption("Game Mode", "", "GAMEMODE", answers0);
Game.AddOption("Scrolling Speed", "", "SCROLSPEED", answers1);
Game.AddOption("Game Speed", "", "GAMESPEED", answers2);

Game.ExecutableName = "dmcr.exe";
Game.ExecutableContext = ["csbtw.exe"];
// Game.ExecutableToLaunch = "csbtw.exe";
Game.SteamID = "4850";
Game.GUID = "Cossacks Back to War";
Game.GameName = "Cossacks Back to War";
Game.MaxPlayers = 7;
Game.MaxPlayersOneMonitor = 7;
Game.FileSymlinkExclusions = ["DDraw.dll", "ddraw.ini", "dplayx.dll"];
// Game.UseNucleusEnvironment = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.FileSymlinkCopyInstead = ["mode.dat", "players.txt"];
Game.HardcopyGame = false;
Game.KillProcessesOnClose = ["AutoHotkeyA32"]; //Close AHK app
Game.Description =
  "Create a multiplayer game (TCP/IP Lan connection) with one and join with the others without setting any IP.\n" +
  "Press END to lock/unlock the inputs, While input is unlocked you can press CTRL+Q to close Nucleus and all of its instances.\n\n" +
  "PS: If the bottom instances have cutoff press middile mouse button on the window (this will work on 1080 or 768 height screens)."
Game.PauseBetweenContextAndLaunch = 3;
Game.PauseBetweenProcessGrab = 3;
Game.PauseBetweenStarts = 10;

Game.FakeFocus = true;
Game.Hook.ForceFocus = true;
Game.HookFocus = false;
Game.ForceWindowTitle = true;
Game.Hook.ForceFocusWindowName = "Cossacks";
Game.DontResize = true;
// Game.DontReposition = true;
Game.ResetWindows = true;
// Game.SetWindowHook = true;
Game.IgnoreWindowBordercheck = true;
Game.DontRemoveBorders = true;
Game.HideTaskbar = true;
Game.NotTopMost = true;

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

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = true;
Game.ProtoInput.GetAsyncKeyStateHook = true;
Game.ProtoInput.GetKeyboardStateHook = true;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.ClipCursorHook = false;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

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
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function () {

  var gamemode = Context.Options["GAMEMODE"];
  var scrolspeed = Context.Options["SCROLSPEED"];
  var gamespeed = Context.Options["GAMESPEED"];

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\DDraw.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "DDraw.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ddraw.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "ddraw.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dplayx.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dplayx.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var modPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mode.dat";
  var plrPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players.txt";
  var cncPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ddraw.ini";

  Context.ModifySaveFile(cncPath, cncPath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("ddraw", "maintas", "true"),
    new Nucleus.IniSaveInfo("ddraw", "windowed", "true"),
    new Nucleus.IniSaveInfo("ddraw", "border", "false"),
    new Nucleus.IniSaveInfo("ddraw", "devmode", "true"),
    // new Nucleus.IniSaveInfo("ddraw", "maxfps", "30"),
    new Nucleus.IniSaveInfo("ddraw", "maxgameticks", "250"),
    new Nucleus.IniSaveInfo("ddraw", "singlecpu", "false"),
    // new Nucleus.IniSaveInfo("ddraw", "center_window", "0"),
    new Nucleus.IniSaveInfo("ddraw", "height", Context.Height),
    new Nucleus.IniSaveInfo("ddraw", "width", Context.Width),
    new Nucleus.IniSaveInfo("ddraw", "posY", Context.PosY),
    new Nucleus.IniSaveInfo("ddraw", "posX", Context.PosX),
    // new Nucleus.IniSaveInfo("ddraw", "inject_resolution", Context.Width + "x" + Context.Height),
    new Nucleus.IniSaveInfo("ddraw", "custom_width", Context.Width),
    new Nucleus.IniSaveInfo("ddraw", "custom_height", Context.Height),
  ]);

  var plrdict = [Context.Nickname];
  Context.WriteTextFile(plrPath, plrdict);

  if (gamemode == "Slow Mode") { var gmmod = "0"; }
  if (gamemode == "Fast Mode") { var gmmod = "1"; }
  if (scrolspeed == "2") { var scrlspd = "2"; }
  if (scrolspeed == "3") { var scrlspd = "3"; }
  if (scrolspeed == "4") { var scrlspd = "4"; }
  if (scrolspeed == "5") { var scrlspd = "5"; }
  if (scrolspeed == "6") { var scrlspd = "6"; }
  if (scrolspeed == "7") { var scrlspd = "7"; }
  if (scrolspeed == "8") { var scrlspd = "8"; }
  if (scrolspeed == "9") { var scrlspd = "9"; }
  if (scrolspeed == "10") { var scrlspd = "10"; }
  if (gamespeed == "100") { var gmspd = "0"; }
  if (gamespeed == "90") { var gmspd = "10"; }
  if (gamespeed == "80") { var gmspd = "20"; }
  if (gamespeed == "70") { var gmspd = "30"; }
  if (gamespeed == "60") { var gmspd = "40"; }
  if (gamespeed == "50") { var gmspd = "50"; }

  var moddict = [
    "1|" + Context.Width + " " + Context.Height + " " + "100" + " " + "0" + " " + "0" + " " + "0" + " " + gmspd + " " + scrlspd + " " + gmmod + " " + "0"
  ];
  Context.ReplaceLinesInTextFile(modPath, moddict);

  var icoPath = Game.Folder + "\\WinDAHK.ahk" // Change AHK icon
  var icodict = [Context.FindLineNumberInTextFile(icoPath, "Game_Icon = ", Nucleus.SearchType.StartsWith) + "|Game_Icon = " + Context.RootInstallFolder + "\\dmcr.exe"]
  Context.ReplaceLinesInTextFile(icoPath, icodict);

  if (Context.PosY <= 540 && Context.PosY >= 300) {
    Context.RunAdditionalFiles(["all|" + Game.Folder + "\\WinDAHK.bat"], false, 0); // Run AHK script
  }
};
