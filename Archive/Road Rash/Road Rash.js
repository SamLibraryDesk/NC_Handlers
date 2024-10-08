/// Network
    //Ok

/// Inputs
    // Controllers only.

/// Window manipulation
    //Ok

/// Configs
    //Ok

/// Notes
    // The instances of the game seem shares same memory cache which will lead to sort of corrupted textures.

var answers1 = ["Yes", "Vertical & horizontal players only", "No"];
var answers2 = ["Default (Enhanced)", "PSX"];

Game.AddOption("Preserve aspect ratios?", "This option will prevent stretching windows.", "PRERATIO", answers1);
Game.AddOption("Controller Set", "Select your preferred controller set.", "GAMEPAD", answers2);

Game.FileSymlinkExclusions = ["DDraw.dll", "ddraw.ini", "RoadRash.exe", "winm2.dll", "Xidi.ini", "MANOMANO.RRI"];
Game.FileSymlinkCopyInstead = ["AWEMAN32.DLL"];
Game.DirSymlinkCopyInstead = ["DATA", "IMAGES", "AUDIO", "TEXT"];
Game.DirSymlinkCopyInsteadIncludeSubFolders = true;
Game.UseNucleusEnvironment = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "RoadRash.exe";
Game.GUID = "RoadRash";
Game.GameName = "Road Rash 95";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;

Game.HardcopyGame = false;
Game.FakeFocus = true;
Game.HookFocus = false;
//Game.ForceWindowTitle = true;
Game.Hook.ForceFocusWindowName = "Road Rash";
Game.HasDynamicWindowTitle = true;
Game.Hook.ForceFocus = true;
Game.LauncherExe = "ip.bat";
Game.LauncherExeIgnoreFileCheck = true;
Game.SetWindowHook = true;
Game.HideTaskbar = true;


Game.Hook.DInputForceDisable = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.Description = "Create a multiplayer game (Mano-A-Mano ) using Keyboard to navigate the main menu and join with the rest. \n\nPress END to lock/unlock the inputs, While input is unlocked you can press CTRL+Q to close Nucleus and all of its instances."
Game.PauseBetweenContextAndLaunch = 3;
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

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
// Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function () {

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Classes\\VirtualStore\\MACHINE\\SOFTWARE\\WOW6432Node\\Electronic Arts\\RoadRash 95", "Name", Context.Nickname, Nucleus.RegType.String);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Classes\\VirtualStore\\MACHINE\\SOFTWARE\\WOW6432Node\\Electronic Arts\\RoadRash 95", "Path", Context.GetFolder(Nucleus.Folder.InstancedGameFolder), Nucleus.RegType.String);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Classes\\VirtualStore\\MACHINE\\SOFTWARE\\WOW6432Node\\Electronic Arts\\RoadRash 95", "Controls", "% ' (  	     &  ", Nucleus.RegType.Binary);

  var preratio = Context.Options["PRERATIO"];
  var gamepad = Context.Options["GAMEPAD"];

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ddraw.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "cnc-ddraw.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ddraw.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "ddraw.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\winm2.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "winmm.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\RoadRash.exe");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "winmm.fix");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\IMAGES\\CHARS\\MANOMANO.RRI");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "MANOMANO.RRI");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  if (gamepad == "Default (Enhanced)") {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Xidi.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Xidi_def.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  if (gamepad == "PSX") {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Xidi.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Xidi_PSX.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  if (preratio == "Yes") { var prevr = "true" }
  if (preratio == "No") { var prevr = "false" }
  if (preratio == "Vertical & horizontal players only") {
    if (Context.AspectRatioDecimal >= 3.55 && Context.AspectRatioDecimal <= 3.56 || Context.AspectRatioDecimal >= 0.87 && Context.AspectRatioDecimal <= 0.89) {
      var prevr = "true"
    }
  }

  var height = Context.Height;
  var width = Context.Width;
  var posY = Context.PosY;
  var posX = Context.PosX;

  var cncPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ddraw.ini";
  Context.ModifySaveFile(cncPath, cncPath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("ddraw", "windowed", "true"),
    new Nucleus.IniSaveInfo("ddraw", "border", "false"),
    new Nucleus.IniSaveInfo("ddraw", "singlecpu", "false"),
    // new Nucleus.IniSaveInfo("ddraw", "vsync", "true"),
    // new Nucleus.IniSaveInfo("ddraw", "renderer", "opengl"),
    new Nucleus.IniSaveInfo("ddraw", "devmode", "true"),
    new Nucleus.IniSaveInfo("ddraw", "maintas", prevr),
    new Nucleus.IniSaveInfo("ddraw", "height", height),
    new Nucleus.IniSaveInfo("ddraw", "width", width),
    new Nucleus.IniSaveInfo("ddraw", "posY", posY),
    new Nucleus.IniSaveInfo("ddraw", "posX", posX)
  ]);

  var id = Context.PlayerID + 1;
  var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ip.bat";
  var lines = [
    '"' +
    Context.NucleusFolder +
    '\\utils\\ForceBindIP\\ForceBindIP.exe" 127.0.0.' +
    id +
    ' "' +
    Context.GetFolder(Nucleus.Folder.InstancedGameFolder) +
    '\\RoadRash.exe"'];
  Context.WriteTextFile(Bat, lines);
};
