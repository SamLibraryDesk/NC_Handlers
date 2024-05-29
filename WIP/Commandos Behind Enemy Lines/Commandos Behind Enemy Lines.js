/// Network
    //Ok

/// Inputs
    // Mouse double click doesn't work which makes the game kinda unplayable.

/// Window manipulation
    //Ok

/// Configs
    //Ok

/// Notes
    //Null

Game.UseNucleusEnvironment = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.FileSymlinkExclusions = ["DDraw.dll", "ddraw.ini", "H_Intro.avi"];
//Game.FileSymlinkCopyInstead = [""];
//Game.DirSymlinkExclusions = ["movies"];
Game.DirSymlinkCopyInstead = ["Legacy"];
Game.HardcopyGame = false;
Game.Description = "If you've steam version change 'Comandos.exe' to 'commandos.exe' in your game directory '\Commandos Behind Enemy Lines\Legacy'. Start the game and wait until the instances reposition then press END to lock/unlock the inputs.";

Game.ExecutableName = "Comandos.exe";
Game.ExecutableToLaunch = "Legacy\\commandos.exe";
Game.SteamID = "6800";
Game.GUID = "Commandos Behind Enemy Lines";
Game.GameName = "Commandos: Behind Enemy Lines";
Game.DocumentsConfigPath = "Pyro Studios\\Commandos";
//Game.BinariesFolder = "Legacy";
//Game.UseGoldberg = true;
Game.MaxPlayers = 6;
Game.MaxPlayersOneMonitor = 6;

Game.FakeFocus = true;
Game.HookFocus = false;
Game.ForceWindowTitle = true;
Game.Hook.ForceFocusWindowName = "COMMANDOS";
Game.FakeFocusInterval =  5;
Game.Hook.ForceFocus = true;
Game.DontResize = true;
Game.DontReposition = true;
Game.HideTaskbar = true;
Game.SetTopMostAtEnd = true;

//Game.PauseBetweenProcessGrab = 10;
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

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Legacy\\DDraw.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "DDraw.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Legacy\\ddraw.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "ddraw.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var txtPath = Context.DocumentsPlayer + "\\" + Context.DocumentsConfigPath + "\\OUTPUT\\COMANDO.CFG";
  
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, ".NETGAMEPLAYER", Nucleus.SearchType.StartsWith) + "|.NETGAMEPLAYER " + Player.Nickname,
    Context.FindLineNumberInTextFile(txtPath, ".SERVERADDRESS", Nucleus.SearchType.StartsWith) + "|.SERVERADDRESS 127.0.0.1"
  ];	
Context.ReplaceLinesInTextFile(txtPath, dict);

  var txtPath = Context.DocumentsPlayer + "\\" + Context.DocumentsConfigPath + "\\OUTPUT\\COMANDO.CFG";
	if (Context.Width > 1024 && Context.Height > 768) {
	Context.FindLineNumberInTextFile(txtPath, ".SIZE [ .INITSIZE", Nucleus.SearchType.StartsWith) + "|.SIZE [ .INITSIZE 4 ]"
} else if (Context.Width > 800 && Context.Height > 600) {
	Context.FindLineNumberInTextFile(txtPath, ".SIZE [ .INITSIZE", Nucleus.SearchType.StartsWith) + "|.SIZE [ .INITSIZE 3 ]"
} else if (Context.Width > 640 && Context.Height > 480) {
	Context.FindLineNumberInTextFile(txtPath, ".SIZE [ .INITSIZE", Nucleus.SearchType.StartsWith) + "|.SIZE [ .INITSIZE 2 ]"
} else {
	Context.FindLineNumberInTextFile(txtPath, ".SIZE [ .INITSIZE", Nucleus.SearchType.StartsWith) + "|.SIZE [ .INITSIZE 1 ]"
}

Context.ReplaceLinesInTextFile(txtPath, dict);


let HWidth = Math.ceil(Context.Width / 2);
let HPosX = Math.ceil(Context.Width / 4);

if (Context.AspectRatioDecimal >= 3.55 && Context.AspectRatioDecimal <= 3.56) {
  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Legacy\\DDraw.ini";
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("ddraw","width", HWidth),
  new Nucleus.IniSaveInfo("ddraw","posX", HPosX)
  ]);
} else {
  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Legacy\\DDraw.ini"; 
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [ 
  new Nucleus.IniSaveInfo("ddraw","width", Context.Width),
  new Nucleus.IniSaveInfo("ddraw","posX", Context.PosX)
  ]);
}
 
  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Legacy\\DDraw.ini"; 
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [ 
  new Nucleus.IniSaveInfo("ddraw","windowed", "true"),
  new Nucleus.IniSaveInfo("ddraw","border", "false"),
  new Nucleus.IniSaveInfo("ddraw","height", Context.Height),
  new Nucleus.IniSaveInfo("ddraw","posY", Context.PosY),
  new Nucleus.IniSaveInfo("ddraw","singlecpu", "false")
  ]);
 
 Context.RunAdditionalFiles(["1|" + Game.Folder + "\\StartMultInsCtrller.bat"], false, 0);
 Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Legacy\\mpserver.exe"], false, 0);

};

//ProtoInput

Game.SupportsMultipleKeyboardsAndMice = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
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
Game.ProtoInput.allowMouseOutOfBounds = false;
Game.ProtoInput.extendMouseBounds = false;
Game.ProtoInput.toggleFakeCursorVisibilityShortcut = true;

//Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.AllowFakeCursorOutOfBounds = false;
Game.ProtoInput.ExtendFakeCursorBounds = true;

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
//Game.ProtoInput.BlockedMessages = [ 0x0008]; // Blocks WM_KILLFOCUS

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

    }
  };
