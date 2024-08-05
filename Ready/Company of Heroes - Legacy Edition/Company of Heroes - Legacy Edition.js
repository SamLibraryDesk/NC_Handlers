/// Network
    //Ok

/// Inputs
    //Ok

/// Window manipulation
    //Ok

/// Configs
    //Ok

/// Notes
    // Not able to change the nickname.

var answers1 = ["Ultra", "High", "Medium", "Low"];
Game.AddOption("Set Graphics option", "", "GFXSET", answers1);

Game.KillMutexType = "Event";
Game.KillMutex = ["{bb6f297c-b959-4958-b993-55d9e6bfe109}"];

// Game.DirSymlinkExclusions = ["validators"];
Game.DirSymlinkCopyInstead = [ "validators" ];
Game.DirSymlinkCopyInsteadIncludeSubFolders = true;
Game.FileSymlinkExclusions = ["steam_api.dll"];
Game.GameName = "Company of Heroes - Legacy Edition";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.ExecutableName = "RelicCOH.exe";
Game.ExecutableContext = ["STLPort.5.1.dll"];
Game.SteamID = "4560";
Game.GUID = "Company of Heroes";
Game.LauncherExe = "ip.bat";
Game.LauncherExeIgnoreFileCheck = true;
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.UseGoldberg = true;
Game.UseNucleusEnvironment = true;
Game.DocumentsConfigPath = "My Games\\Company of Heroes";

Game.HideTaskbar = true;
Game.Hook.ForceFocus = true;
Game.HookFocus= false;
Game.SetWindowHook = true;
Game.Hook.ForceFocusWindowName = "Company Of Heroes";
Game.WindowStyleValues = [ "0x40000000", "~0x400000", "~0x40000" ];
// Game.ResetWindows = true;
Game.RefreshWindowAfterStart = true;

Game.Description = "Create multiplayer game and join with the others. \n" +
"Press END to lock/unlock the inputs, While input is unlocked you can press CTRL+Q to close Nucleus and all of its instances."
Game.PauseBetweenContextAndLaunch = 3;
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 15;

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

Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = false;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = true;
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
// Game.ProtoInput.XinputHook = true;
// Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [ 0x0008 ]; // Blocks WM_KILLFOCUS

Game.Play = function () {

  var Args = Context.Args = " -window" + " -nomovies";
  Context.StartArguments = Args;

  var savePath = (Context.SavePath = Context.DocumentsPlayer + "\\" + Context.DocumentsConfigPath + "\\configuration.lua");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "configuration.lua");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var gfxset = Context.Options["GFXSET"];

  if (gfxset == "Ultra") {
    var shadows = "3"
    var postprocessing = "1"
    var prevshaderquality = "0"
    var prevaamodeindex = "0"
    var ribbons = "1"
    var modeldetail = "511"
    var effectsfidelity = "3"
    var texturedetail = "0"
    var treedetail = "0"
    var physics = "3"
    var reflections = "1"
    var objectscarring = "1"
    var raindetail = "2"
    var antialiasing = "3"
    var effectsdensity = "3"
    var terraindetail = "0"
  }

  if (gfxset == "High") {
    var shadows = "3"
    var postprocessing = "1"
    var prevshaderquality = "1"
    var prevaamodeindex = "0"
    var ribbons = "1"
    var modeldetail = "334"
    var effectsfidelity = "2"
    var texturedetail = "1"
    var treedetail = "0"
    var physics = "3"
    var reflections = "1"
    var objectscarring = "1"
    var raindetail = "2"
    var antialiasing = "1"
    var effectsdensity = "2"
    var terraindetail = "1"
  }

  if (gfxset == "Medium") {
    var shadows = "2"
    var postprocessing = "0"
    var prevshaderquality = "2"
    var prevaamodeindex = "2"
    var ribbons = "0"
    var modeldetail = "185"
    var effectsfidelity = "1"
    var texturedetail = "2"
    var treedetail = "1"
    var physics = "2"
    var reflections = "0"
    var objectscarring = "0"
    var raindetail = "1"
    var antialiasing = "0"
    var effectsdensity = "1"
    var terraindetail = "2"
  }

  if (gfxset == "Low") {
    var shadows = "1"
    var postprocessing = "0"
    var prevshaderquality = "2"
    var prevaamodeindex = "3"
    var ribbons = "0"
    var modeldetail = "86"
    var effectsfidelity = "0"
    var texturedetail = "3"
    var treedetail = "2"
    var physics = "1"
    var reflections = "0"
    var objectscarring = "0"
    var raindetail = "0"
    var antialiasing = "0"
    var effectsdensity = "2"
    var terraindetail = "2"
  }

  var txtPath = Context.DocumentsPlayer + "\\" + Context.DocumentsConfigPath + "\\configuration.lua";
  var dict = [
    "138|		value = " + Context.Width + ",",
    "210|		value = " + Context.Height + ",",
    "12|		value = " + shadows + ",",
    "18|		value = " + postprocessing + ",",
    "30|		value = " + prevshaderquality + ",",
    "36|		value = " + prevaamodeindex + ",",
    "48|		value = " + ribbons + ",",
    "72|		value = " + modeldetail + ",",
    "78|		value = " + effectsfidelity + ",",
    "84|		value = " + texturedetail + ",",
    "96|		value = " + treedetail + ",",
    "102|		value = " + physics + ",",
    "114|		value = " + reflections + ",",
    "132|		value = " + objectscarring + ",",
    "192|		value = " + raindetail + ",",
    "198|		value = " + antialiasing + ",",
    "228|		value = " + effectsdensity + ",",
    "246|		value = " + terraindetail + ","
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  var id = Context.PlayerID + 1;
  var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ip.bat";
  var lines = [
    '"' +
    Context.NucleusFolder +
    '\\utils\\ForceBindIP\\ForceBindIP.exe" 127.0.0.' +id +
    ' "' +
    Context.GetFolder(Nucleus.Folder.InstancedGameFolder) +
    '\\RelicCOH.exe"+ ' + Args + ''];
    Context.WriteTextFile(Bat, lines);
  
  Game.ProtoInput.OnInputLocked = function() {
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
      // ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
    
      //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
    
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      // ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
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

  Game.ProtoInput.OnInputUnlocked = function() {
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
      // ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      // ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
    
      ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5000, true, true, true, true, true);

      // System.Threading.Thread.Sleep(1000);

      // ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
    }
  };
};
