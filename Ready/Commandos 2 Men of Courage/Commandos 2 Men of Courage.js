/// Network
    //Ok

/// Inputs
    //Ok

/// Window manipulation
    //Ok

/// Configs
    //Ok

/// Notes
    //Null

var answers1 = ["Enable", "Disable"];
// var answers2 = ["Native", "Destination Paris"];
Game.AddOption("HD Resolutions?", "Enable: Get rid of black borders and fit the exact monitor aspect.\n\n Disable: Good for low end PCs.", "HD", answers1);
// Game.AddOption("Mod", "The mod must be in the same folder as the native executable is.", "MOD", answers2);

Game.KillMutex = ["CerrojoCommandos 2"];

Game.UseNucleusEnvironment = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.FileSymlinkExclusions = ["DDraw.dll", "ddraw.ini", "DATAEI.pop", "DATALE00.pop", "DATARO.pop"];
Game.DirSymlinkCopyInstead = ["OUTPUT", "DATA"];
// Game.DirSymlinkCopyInsteadIncludeSubFolders = true;
Game.HardcopyGame = false;
Game.ExecutableName = "comm2.exe";
Game.SteamID = "6830";
Game.GUID = "Commandos 2 Men of Courage";
Game.GameName = "Commandos 2: Men of Courage";
Game.DocumentsConfigPath = "Commandos II\\OUTPUT";
Game.KeepSymLinkOnExit = true;
Game.MaxPlayers = 6;
Game.MaxPlayersOneMonitor = 6;

Game.FakeFocus = true;
Game.Hook.ForceFocusWindowName = "Commandos 2";
Game.Hook.ForceFocus = true;
Game.HookFocus = false;
Game.SetWindowHook = true;
Game.DontResize = true;
Game.HideTaskbar = true;
Game.Description =
  "Make sure to run the base game once before using Nucleus.\n\n" +
  "It is very recomended to use the legacy version.\n\n" +
  "Start the game and wait till the instances reposition.\n\n" +
  "Create multiplayer game and join with the rest.\n\n" +
  "Press END to lock/unlock the inputs.\n\n" +
  "You can press CTRL+Q to close Nucleus and all of its instances.";
Game.PauseBetweenContextAndLaunch = 5;
Game.PauseBetweenProcessGrab = 3;
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

  // If the exe from the steam version copy the legacy exe instead.
  if (System.IO.File.Exists(Context.OrigRootFolder + "\\steam_api.dll")) {

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\comm2.exe");
    var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder + "\\Legacy", "comm2.exe");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\DATA.PCK");
    var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder + "\\Legacy", "DATA.PCK");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\DATA2.PCK");
    var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder + "\\Legacy", "DATA2.PCK");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\OUTPUT\\COMM2.CFG");
    var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder + "\\Legacy\\OUTPUT", "COMM2.CFG");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\OUTPUT\\PERFILES.DAT");
    var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder + "\\Legacy\\OUTPUT", "PERFILES.DAT");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

  } else {

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\comm2.exe");
    var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "comm2.exe");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

  }

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

  // var mod = Context.Options["MOD"];
  /*  
   if (mod == "Native") {}
   if (mod == "Destination Paris") {
     Game.ExecutableToLaunch = "Comm2P.exe";
     Game.FileSymlinkCopyInstead = ["Comm2P.dll", "ogg.dll"];
     }
 */

  var hd = Context.Options["HD"];

  if (hd == "Enable") {
    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      "80 02 00 00 C3 B8",
      Context.Width,
      1,
      true
    );

    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      "C3 B8 20 03 00 00",
      Context.Width,
      3,
      true
    );

    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      "C3 B8 00 04 00 00 C3 B8",
      Context.Width,
      3,
      true
    );

    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      "F4 D0 4E 00 BA 80 02 00 00",
      Context.Width,
      6,
      true
    );

    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      "13 BA 20 03 00 00",
      Context.Width,
      3,
      true
    );

    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      "EB 0C BA 00 04 00 00",
      Context.Width,
      4,
      true
    );

    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      "E0 01 00 00 C3 B8",
      Context.Height,
      1,
      true
    );

    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      "C3 B8 58 02 00 00",
      Context.Height,
      3,
      true
    );

    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      "C3 B8 00 03 00 00",
      Context.Height,
      3,
      true
    );

    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      "44 24 04 B9 E0 01 00 00",
      Context.Height,
      5,
      true
    );

    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      "04 B9 58 02 00 00",
      Context.Height,
      3,
      true
    );

    Context.PatchFileFindPattern(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "comm2.exe"),
      "04 B9 00 03 00 00",
      Context.Height,
      3,
      true
    );
  }

  var cncPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ddraw.ini";
  Context.ModifySaveFile(cncPath, cncPath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("ddraw", "windowed", "true"),
    new Nucleus.IniSaveInfo("ddraw", "border", "false"),
    new Nucleus.IniSaveInfo("ddraw", "singlecpu", "false"),
    // new Nucleus.IniSaveInfo("ddraw", "devmode", "true"),
    new Nucleus.IniSaveInfo("ddraw", "maintas", "true"),
    new Nucleus.IniSaveInfo("ddraw", "height", Context.Height),
    new Nucleus.IniSaveInfo("ddraw", "width", Context.Width),
    new Nucleus.IniSaveInfo("ddraw", "posY", Context.PosY),
    new Nucleus.IniSaveInfo("ddraw", "posX", Context.PosX)
  ]);

  Game.ProtoInput.OnInputLocked = function () {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      // ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

      //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
      // ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

      // ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

    }
  };

  Game.ProtoInput.OnInputUnlocked = function () {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      // ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

      //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
      // ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

      // ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);

    }
  };
};
