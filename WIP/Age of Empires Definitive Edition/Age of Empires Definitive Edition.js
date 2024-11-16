/// Network
    //Ok

/// Inputs
    //Ok

/// Window manipulation
    // Window resolution doesn't support less than 1280x720

/// Configs
    //Ok

/// Notes
    //Null

var answers1 = ["Default", "30 FPS"];
Game.AddOption("Limit Frame Rate", "Limit to 30 FPS", "LIMITFPS", answers1);

Game.KillMutex = ["Age of Empires: Definitive Edition - Nov 10 2023 - Build 97381", "DarwinEntryBlocker"];
Game.FileSymlinkExclusions = ["steamclient.dll", "steamclient64.dll", "steamclient_loader_x64.exe", "ColdClientLoader.ini", "HostLauncher.bat"];
Game.FileSymlinkCopyInstead = ["steam_api64.dll"];
// Game.DirSymlinkCopyInstead = [];
// Game.KeepSymLinkOnExit = true;
Game.UseNucleusEnvironment = true;
// Game.UseGoldberg = true;
Game.HandlerInterval = 100;
Game.ExecutableName = "AoEDE_s.exe";
Game.SteamID = "1017900";
Game.GUID = "Age of Empires Definitive Edition";
Game.GameName = "Age of Empires: Definitive Edition";
Game.LauncherExe = "Launcher.bat";
Game.LauncherExeIgnoreFileCheck = true;
// Game.LauncherTitle = "";
Game.MaxPlayersOneMonitor = 8;
Game.MaxPlayers = 8;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.UserProfileConfigPath = "Games\\Age of Empires DE";
Game.ForceUserProfileConfigCopy = true;

// Game.SetWindowHookStart = true;
Game.HideTaskbar = true;
Game.SetWindowHook = true;
// Game.WindowStyleValues = ["~0x40000", "~0x400000"];
// Game.WindowStyleEndChanges = ["~0x400000"];
Game.ResetWindows = true;
// Game.DPIHandling = Nucleus.DPIHandling.InvScaled;
// Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Age of Empires: Definitive Edition - Nov 10 2023 - Build 97381";
Game.HasDynamicWindowTitle = true;

Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.SupportsKeyboard = false;
Game.Hook.CustomDllEnabled = false;
Game.Description =
  ".";
Game.PauseBetweenContextAndLaunch = 5;
Game.PauseBetweenProcessGrab = 15;
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

//ProtoInput:

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
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
Game.ProtoInput.SetWindowStyleHook = true;
//Game.ProtoInput.SetWindowPosHook = true;

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = true; //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = false;
Game.ProtoInput.UseOpenXinput = false;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.WindowActivateFilter = false;
Game.ProtoInput.BlockedMessages = [0x0008];

Game.Play = function () {

  // Set start launcher for the players.
  var StartGame = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Launcher.bat";
  if (Context.PlayerID == 0) {
    Game.PauseBetweenProcessGrab = 40;

    var lines = [
      "ageLANServer_full_1.6.0_win_x86-64\\launcher\\launcher_aoe1.bat"
    ];
  } else {
    var lines = [
      "start steamclient_loader_x64.exe"
    ];
  }
  Context.WriteTextFile(StartGame, lines);

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  // Settings for first instance.
  var svrtxtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ageLANServer_full_1.6.0_win_x86-64\\launcher\\resources\\config.aoe1.toml";
  Context.ModifySaveFile(svrtxtPath, svrtxtPath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Client", "Executable", "'" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steamclient_loader_x64.exe" + "'")
  ]);

  // steamclient_loader settings.
  var ldiniPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ColdClientLoader.ini";
  Context.ModifySaveFile(ldiniPath, ldiniPath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("SteamClient", "Exe", "AoEDE_s.exe"),
    new Nucleus.IniSaveInfo("SteamClient", "ExeCommandLine", "NOSTARTUP"),
    new Nucleus.IniSaveInfo("SteamClient", "AppId", "1017900"),
    // new Nucleus.IniSaveInfo("Injection", "DllsToInjectFolder", "dlls") // Needed with AOE2&3
  ]);

  // General GoldBerg settings.
  var iniPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(iniPath, iniPath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
    new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
    // new Nucleus.IniSaveInfo("user::general", "language", lang),
    // new Nucleus.IniSaveInfo("user::general", "ip_country", IP)
  ]);

  var limitfps = Context.Options["LIMITFPS"];
  if (limitfps == "30 FPS") { var fps = "1" } else { var fps = "0" };
    
  // Game config
  var txtPath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Config\\settings.ini";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "LimitFrameRate", Nucleus.SearchType.StartsWith) + "|LimitFrameRate = " + fps,
    Context.FindLineNumberInTextFile(txtPath, "Clamp Pointer", Nucleus.SearchType.StartsWith) + "|Clamp Pointer = 1",
    Context.FindLineNumberInTextFile(txtPath, "PreferFullscreen", Nucleus.SearchType.StartsWith) + "|PreferFullscreen = 0",
    Context.FindLineNumberInTextFile(txtPath, "PreferredWindowedWidth", Nucleus.SearchType.StartsWith) + "|PreferredWindowedWidth = " + Context.Width,
    Context.FindLineNumberInTextFile(txtPath, "PreferredWindowedHeight", Nucleus.SearchType.StartsWith) + "|PreferredWindowedHeight = " + Context.Height
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  Game.ProtoInput.OnInputLocked = function () {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 0, true, true, true, true, true);

      System.Threading.Thread.Sleep(1000);

      ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
    }
  };
};
