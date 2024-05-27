/// Network
    // Must use the old version of the game on steam (steam->Rise Of Nation->properties->Betas->v1_10_old - 2014 version)

/// Inputs
    //Ok

/// Window manipulation
    // Removes the border causes wrong offset cursor, so it needs more accurate calculation.
    // Setting window resolution less than 1024x768 causes wrong offset cursor.

/// Configs
    //Ok

/// Notes
    // This handler uses HardcopyGame. (need to discover and copy the necessary files).
    // Goldberg Emulator need Steam Interface to bypass mods files check.


Game.SteamID = "287450";
Game.GUID = "Rise of Nations Extended Edition";
Game.GameName = "Rise of Nations: Extended Edition";
Game.LauncherTitle = "";
Game.MaxPlayersOneMonitor = 8;
Game.MaxPlayers = 8;

Game.FileSymlinkExclusions = ["bhg_game_studios1M.wmv", "ms_game_studios_1M.wmv", "skybox_intro_1440.wmv", "skybox_intro_1920.wmv", "opening.wmv"];
//Game.FileSymlinkCopyInstead = ["", "", "", "", "", "", "", "", "", "", ""];
Game.UseNucleusEnvironment = true;

//Game.NeedsSteamEmulation = true;
Game.UseGoldberg = true;
Game.GoldbergNeedSteamInterface = true;
//Game.GoldbergExperimental = true;
//Game.GoldbergExperimentalSteamClient = true;

Game.HandlerInterval = 100;
Game.ExecutableName = "rise.exe";
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\Microsoft Games\\Rise of Nations";
//Game.DocumentsConfigPath = "";
Game.UserProfileSavePath = "AppData\\Roaming\\Microsoft Games\\Rise of Nations\\PlayerProfile";
Game.UserProfileSavePathNoCopy = false;
Game.Description =
  'Steam ';
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.HardcopyGame = true;

Game.HookInit = true;
//Game.DontReposition = true;
Game.DontResize = true;


Game.HasDynamicWindowTitle = true;
Game.FakeFocus = true;
Game.HookFocus = true;
Game.PreventWindowDeactivation = false;
Game.ForceWindowTitle = true;
Game.Hook.ForceFocusWindowName = "Rise of Nations: Extended Edition";
Game.SetForegroundWindowElsewhere = true;
Game.FakeFocusInterval = 5;
Game.Hook.ForceFocus = true;

Game.DontRemoveBorders = false;
Game.HideTaskbar = true;
Game.SetWindowHook = true;

Game.SetWindowHookStart = true;
Game.ResetWindows = true;

Game.EnableWindows = true;
Game.SetTopMostAtEnd = true;
Game.RefreshWindowAfterStart = true;

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



Game.Play = function() {
	
  let width;
  let height;

    width = Math.ceil(Context.Width - 20);
    height = Math.ceil(Context.Height - 32);
  
   var videoConfig = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\rise2.ini"; 
   Context.ModifySaveFile(videoConfig, videoConfig, Nucleus.SaveType.INI, [ 
   new Nucleus.IniSaveInfo("RISE OF NATIONS","Windowed Width", width),
   new Nucleus.IniSaveInfo("RISE OF NATIONS","Windowed Height", height),
   new Nucleus.IniSaveInfo("RISE OF NATIONS","Fullscreen", "0"),  
   ]);

  };

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
Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.BlockRawInputHooks = true;
Game.ProtoInput.DinputOrderHooks = false;
Game.ProtoInput.XinputHooks = false;

Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.FindWindowHook = true;
//Game.ProtoInput.CreateSingleHIDHook = true;
//Game.ProtoInput.SetWindowStyleHook = true;

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = true;
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.dinputToXinputRedirection = false;
Game.ProtoInput.useOpenXinput = false;

Game.ProtoInput.useFakeClipCursor = true;
Game.ProtoInput.showCursorWhenImageUpdated = false;
//Game.ProtoInput.drawFakeMouseCursor = true;
Game.ProtoInput.drawFakeCursor = true;
Game.ProtoInput.allowMouseOutOfBounds = false;
Game.ProtoInput.extendMouseBounds = false;
Game.ProtoInput.toggleFakeCursorVisibilityShortcut = false;


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
Game.ProtoInput.BlockedMessages = [];