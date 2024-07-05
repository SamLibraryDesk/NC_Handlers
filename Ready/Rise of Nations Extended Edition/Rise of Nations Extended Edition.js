/// Network
    // Must use the old version of the game on steam (steam->Rise Of Nation->properties->Betas->v1_10_old - 2014 version)

/// Inputs
    //Ok

/// Window manipulation
    // resolution less than 1024x768 not supported.

/// Configs
    //Ok

/// Notes
    //Null

var answers1 = ["Yes", "No"];
//var answers2 = ["No", "Yes"];;
Game.AddOption("Enable VSync?", "", "FPSCAP", answers1);
//Game.AddOption("Keep the files when exit?", "Wouldn't need to copy the files again when you keep them. (Default: No)", "KEEPFILE", answers2);

Game.UseNucleusEnvironment = true;
Game.SteamID = "287450";
Game.GUID = "Rise of Nations Extended Edition";
Game.GameName = "Rise of Nations: Extended Edition";
Game.LauncherTitle = "";
Game.MaxPlayersOneMonitor = 8;
Game.MaxPlayers = 8;
Game.FileSymlinkExclusions = [
"steam_api.dll", "steam_interfaces.txt", "bhg_game_studios1M.wmv", "ms_game_studios_1M.wmv", 
"skybox_intro_1440.wmv", "skybox_intro_1920.wmv", "opening.wmv", "d3d11.dll", "d3d11.ini"
];
Game.FileSymlinkCopyInstead = [
"avutil-ttv-51.dll", "balancerules.txt", "bestimt.txt", "bighuge.txt", "conquestmotd.txt",
"counterchart.txt", "d3d8xstub.dll", "d3dcompiler_46.dll", "d3dgl.dll", "dbghelp.dll", "dpnl.dll", 
"dssl.dll", "Eulaxp1.dll", "game.txt", "graphics.txt", "labels.txt", "libmfxsw32.dll", "libmp3lame-ttv.dll", 
"masks.txt", "motd.txt", "obsoletescriptfuncs.txt", "PidGenx.dll", "pp_unicows.dll", "rise xml.spp", 
"rise xml.spp", "rtp32cb.dll", "rules.dat", "saveobjects.txt", "soundlist.txt", "soundtypes.txt", 
"SteamNetLib.dll", "swresample-ttv-0.dll", "taunt_categories.txt", "taunts.txt", "unicows.dll", 
"wmstubber.dll"
];
Game.DirSymlinkCopyInstead = [ "terrain art", "tribes", "mapstyles", "ai" ];
Game.DirSymlinkCopyInsteadIncludeSubFolders = true;
Game.DirExclusions = ["art"];
Game.UseGoldberg = true;
Game.HandlerInterval = 100;
Game.ExecutableName = "rise.exe";
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\Microsoft Games\\Rise of Nations";
Game.DocumentsSavePath = "My Games\\Rise of Nations";
Game.Description =
  "Use the old version of the game on steam (open steam -> Rise Of Nation -> Properties... -> Betas -> v1_10_old - 2014 version)\n" +
  "Requires 950 MB of space for each instance.\n" +
  "The game wouldn't resize the window less than 1024x768, so if you've 1920x1080 or less resolution you can't set 2 instance on 1 monitor, the possible way is to add and use higher custom desktop resolution (2732x1536 res can with 4 instances) .\n" +
  "When the instances have repositioned press the END key to lock the input.\n" +
  "Create a game through 'Game Browser' and join with the others.\n" +
  "Press the END key again to unlock the input and you can use CTRL+Q to close Nucleus and all its instances."
Game.PauseBetweenContextAndLaunch = 3;
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.KeepSymLinkOnExit = false;
Game.HardcopyGame = false;
Game.HookInit = true;
Game.DontResize = true;
Game.FakeFocus = true;
Game.HookFocus = false;
Game.ForceWindowTitle = true;
Game.Hook.ForceFocusWindowName = "Rise of Nations: Extended Edition";
Game.FakeFocusInterval = 5;
Game.Hook.ForceFocus = true;
Game.DontRemoveBorders = true;
Game.HideTaskbar = true;
Game.ResetWindows = true;
Game.SetTopMostAtEnd = true;

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
Game.ProtoInput.BlockRawInputHooks = false;
Game.ProtoInput.DinputOrderHooks = false;
Game.ProtoInput.XinputHooks = false;

Game.ProtoInput.FindWindowHook = true;

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
Game.ProtoInput.drawFakeCursor = true;

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

Game.Play = function() {
  
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d11.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d11.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d11.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d11.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  if (!System.IO.File.Exists(Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\PlayerProfile\\NucleusCoop.dat")) {
  var Profile = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\PlayerProfile\\NucleusCoop.dat";
  var lines = [
    '<?xml version="1.0"?>',
    '<ROOT profile_version="192" keymap_version="62"><GAMESPY mp_host_port="34987" mp_local_port="19574"><EMAIL/><NICK/><PASS/><LAST_GAME_NAME/><SAVE_PASS>0</SAVE_PASS><FIREWALL>1</FIREWALL><QM_MAP_STYLE>-2</QM_MAP_STYLE><QM_TEAM_STYLE>0</QM_TEAM_STYLE><QM_GAME_RULES>0</QM_GAME_RULES><QM_NUM_PLAYERS>-2</QM_NUM_PLAYERS><XPACK_QM_TRIBE>24</XPACK_QM_TRIBE><QM_MIN_RATING>1000</QM_MIN_RATING><QM_MAX_RATING>2600</QM_MAX_RATING><QM_STRICT>0</QM_STRICT><QM_PREVENT_HOSTING>0</QM_PREVENT_HOSTING><LASTGROUPCAT>Unrated</LASTGROUPCAT><LASTGROUPINDEX>0</LASTGROUPINDEX><SETTINGS><TEAM_STYLE>1</TEAM_STYLE><MAP_STYLE>14</MAP_STYLE><MAP_SIZE>3</MAP_SIZE><MAX_PLAYERS>2</MAX_PLAYERS><CANNON_TIMES>0</CANNON_TIMES><GAME_RULES>0</GAME_RULES><GAME_SPEED>2</GAME_SPEED><TOURNAMENT_PLAY>0</TOURNAMENT_PLAY><REQUIRE_RANDOM_TEAMS>0</REQUIRE_RANDOM_TEAMS><REQUIRE_RANDOM_NATIONS>0</REQUIRE_RANDOM_NATIONS><TURBO_RESOURCES>0</TURBO_RESOURCES><FREE_PAUSE>0</FREE_PAUSE></SETTINGS><FILTERS><TEAM_STYLES><F0>0</F0><F1>0</F1><F2>0</F2><F3>0</F3><F4>0</F4><F5>0</F5><F6>0</F6><F7>0</F7><F8>0</F8><F9>0</F9><F10>0</F10><F11>0</F11><F12>0</F12><F13>0</F13></TEAM_STYLES><MAP_STYLES><F0>0</F0><F1>0</F1><F2>0</F2><F3>0</F3><F4>0</F4><F5>0</F5><F6>0</F6><F7>0</F7><F8>0</F8><F9>0</F9><F10>0</F10><F11>0</F11><F12>0</F12><F13>0</F13><F14>0</F14><F15>0</F15><F16>0</F16><F17>0</F17><F18>0</F18><F19>0</F19><F20>0</F20><F21>0</F21><F22>0</F22></MAP_STYLES><MAP_SIZES><F0>0</F0><F1>0</F1><F2>0</F2><F3>0</F3><F4>0</F4><F5>0</F5><F6>0</F6></MAP_SIZES><CANNONTIMES><F0>0</F0><F1>0</F1><F2>0</F2><F3>0</F3><F4>0</F4></CANNONTIMES><GAME_RULES><F0>0</F0><F1>0</F1><F2>0</F2><F3>0</F3><F4>0</F4><F5>0</F5><F6>0</F6><F7>0</F7><F8>0</F8><F9>0</F9><F10>0</F10><F11>0</F11></GAME_RULES><GAME_SPEEDS><F0>0</F0><F1>0</F1><F2>0</F2><F3>0</F3></GAME_SPEEDS><MISC_FLAGS><F0>0</F0><F1>0</F1><F2>0</F2><F3>0</F3><F4>0</F4><F5>0</F5><F6>0</F6></MISC_FLAGS></FILTERS><IGNORELIST/></GAMESPY><INTERFACE main_open="1" market_open="0" resource_open="1" infra_open="0" mini_lib_open="0"/><SHOW_TIPS value="1"/><TIP_INDEX value="0"/><NOTIFICATIONS><NOTICE_ENEMY_NEW_AGE value="1"/><NOTICE_ALLY_NEW_AGE value="0"/><NOTICE_I_NEW_AGE value="1"/><NOTICE_FUTURE_TECH_RESEARCHED value="1"/><NOTICE_NUKES_RESEARCHED value="1"/><NOTICE_NUKE_LAUNCHED value="1"/><NOTICE_CITY_UNDER_ATTACK value="1"/><NOTICE_ALLY_CITY_UNDER_ATTACK value="0"/><NOTICE_WE_CAPTURE_CITY value="0"/><NOTICE_WE_LOSE_CITY value="0"/><NOTICE_PLAYER_STARTS_WONDER value="1"/><NOTICE_PLAYER_FINISHES_WONDER value="1"/><NOTICE_VICTORY_TIMER value="1"/><NOTICE_ARMAGEDDON value="0"/><NOTICE_PLAYER_LEAVES value="1"/><NOTICE_REINFORCEMENTS value="1"/><NOTICE_CAPITAL_UNDER_ATTACK value="1"/><NOTICE_ALLY_CAPITAL_UNDER_ATTACK value="0"/><NOTICE_CANNON_TIME_BEGIN value="0"/><NOTICE_CANNON_TIME_END value="0"/><NOTICE_CAPITAL_MOVED value="0"/></NOTIFICATIONS><LAST_SLOT0 value="0"/><XPACK_LAST_TRIBE0 value="24"/><LAST_WHO0 value="0"/><LAST_DIFF0 value="0"/><LAST_TEAM0 value="8"/><LAST_SLOT1 value="1"/><XPACK_LAST_TRIBE1 value="24"/><LAST_WHO1 value="1"/><LAST_DIFF1 value="0"/><LAST_TEAM1 value="8"/><LAST_SLOT2 value="1"/><XPACK_LAST_TRIBE2 value="24"/><LAST_WHO2 value="2"/><LAST_DIFF2 value="0"/><LAST_TEAM2 value="8"/><LAST_SLOT3 value="1"/><XPACK_LAST_TRIBE3 value="24"/><LAST_WHO3 value="3"/><LAST_DIFF3 value="0"/><LAST_TEAM3 value="8"/><LAST_SLOT4 value="1"/><XPACK_LAST_TRIBE4 value="24"/><LAST_WHO4 value="4"/><LAST_DIFF4 value="0"/><LAST_TEAM4 value="8"/><LAST_SLOT5 value="1"/><XPACK_LAST_TRIBE5 value="24"/><LAST_WHO5 value="5"/><LAST_DIFF5 value="0"/><LAST_TEAM5 value="8"/><LAST_SLOT6 value="1"/><XPACK_LAST_TRIBE6 value="24"/><LAST_WHO6 value="6"/><LAST_DIFF6 value="0"/><LAST_TEAM6 value="8"/><LAST_SLOT7 value="1"/><XPACK_LAST_TRIBE7 value="24"/><LAST_WHO7 value="7"/><LAST_DIFF7 value="0"/><LAST_TEAM7 value="8"/><PLAYED_GAME value="0"/><LAST_IP/><PLAYER_PREFS><PREFS value="523128917"/><FLAGS value="289"/><TRIBE value="24"/><STATWIN_MODE value="0"/><STAT_MODE value="0"/><VERBOSITY value="3"/><ZOOM_IN value="6"/><ZOOM_OUT value="4"/><DETAIL value="2"/><RES value="0"/><MUSIC_VOL value="128"/><SOUND_VOL value="192"/><MESSAGE_LENGTH value="5"/><SCROLL_SPEED value="6"/><PEASANT_STANCE value="0"/><PEASANTS_WAIT value="2"/><BUILDING_STANCE value="0"/><TAUNT_VOL value="192"/><FULLSCREEN value="1"/></PLAYER_PREFS><GAME_INFO><SOLO><TEAM_STYLE value="1"/><MAP_STYLE value="14"/><MAP_SIZE value="2"/><PLAYERS value="1"/><MAX_OBSERVERS value="0"/><GAME_SPEED value="2"/><GAME_RULES value="0"/><DIFFICULTY value="0"/><STARTING_TOWN value="2"/><STARTING_RESOURCES value="1"/><STARTING_RESOURCES2 value="1"/><TECH_COST value="3"/><REVEAL_MAP value="1"/><POP_LIMIT value="5"/><RUSH_RULES value="0"/><CANNON_TIMES value="0"/><STARTING_TECHNOLOGY value="0"/><STARTING_TECHNOLOGY2 value="1"/><ENDING_TECHNOLOGY value="7"/><ELIMINATION value="1"/><VICTORY value="0"/><WONDERWIN value="5"/><SCORE_GOAL value="4"/><POPWIN value="8"/><TIME_LIMIT value="1"/><CHAIRS value="3"/><ECONWIN value="2"/><SCENARIO_TYPE value="0"/><SCRIPT_TYPE value="0"/><MODS value="0"/></SOLO><MULTI><TEAM_STYLE value="1"/><MAP_STYLE value="14"/><MAP_SIZE value="2"/><PLAYERS value="1"/><MAX_OBSERVERS value="0"/><GAME_SPEED value="2"/><GAME_RULES value="0"/><DIFFICULTY value="0"/><STARTING_TOWN value="2"/><STARTING_RESOURCES value="1"/><STARTING_RESOURCES2 value="1"/><TECH_COST value="3"/><REVEAL_MAP value="1"/><POP_LIMIT value="5"/><RUSH_RULES value="0"/><CANNON_TIMES value="0"/><STARTING_TECHNOLOGY value="0"/><STARTING_TECHNOLOGY2 value="1"/><ENDING_TECHNOLOGY value="7"/><ELIMINATION value="1"/><VICTORY value="0"/><WONDERWIN value="5"/><SCORE_GOAL value="4"/><POPWIN value="8"/><TIME_LIMIT value="1"/><CHAIRS value="3"/><ECONWIN value="2"/><SCENARIO_TYPE value="0"/><SCRIPT_TYPE value="0"/><MODS value="0"/></MULTI></GAME_INFO><GRAPHICSOPTIONS mask="33554431" mem_grade="0" cpu_grade="0" gpu_grade="0"/><CAMPAIGNS><CAMPAIGN><SCENARIO/></CAMPAIGN></CAMPAIGNS><CTW_XPACK_CONTINUE_FILE/><PLAYER_NAME value="NickName" current="1"/><KEYS/></ROOT>'
  ];
  Context.WriteTextFile(Profile, lines);
}
  
  var videoConfig = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\rise2.ini"; 
  Context.ModifySaveFile(videoConfig, videoConfig, Nucleus.SaveType.INI, [ 
    new Nucleus.IniSaveInfo("RISE OF NATIONS","Fullscreen", "0"),
    new Nucleus.IniSaveInfo("RISE OF NATIONS","SkipIntroMovies", "1"),
  ]);

  var path = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\PlayerProfile\\NucleusCoop.dat";
  Context.ChangeXmlAttributeValue(path, "//PLAYER_NAME", "value", Context.Nickname);

  var path = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\PlayerProfile\\current_user.xml";
  Context.ChangeXmlAttributeValue(path, "//CURRENT_USER", "name", "NucleusCoop");
   
  var height = Context.Height;
  var width = Context.Width;
	
  if (Context.Width < 1024) {var width = "1024"} else {var width = Context.Width}
  if (Context.Height < 768) {var height = "768"} else {var height = Context.Height}
		
  var Config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d11.ini";
  Context.ModifySaveFile(Config, Config, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Window.System","OverrideRes", width + "x" + height)
  ]);
  var videoConfig = Context.EnvironmentPlayer + "\\" + Context.UserProfileConfigPath + "\\rise2.ini"; 
  Context.ModifySaveFile(videoConfig, videoConfig, Nucleus.SaveType.INI, [ 
    new Nucleus.IniSaveInfo("RISE OF NATIONS","Windowed Width", width),
    new Nucleus.IniSaveInfo("RISE OF NATIONS","Windowed Height", height)
  ]);

  var fpscap = Context.Options["FPSCAP"];
  if (fpscap == "Yes") {Context.ModifySaveFile(videoConfig, videoConfig, Nucleus.SaveType.INI, [ new Nucleus.IniSaveInfo("RISE OF NATIONS","VSync", "1")]);}
  if (fpscap == "No") {Context.ModifySaveFile(videoConfig, videoConfig, Nucleus.SaveType.INI, [ new Nucleus.IniSaveInfo("RISE OF NATIONS","VSync", "0")]);}
 
  var batPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Copy.bat";
  var batLines = [
    "@echo off",
    "title RoN COPIER",
    'xcopy "' +
      (Context.RootInstallFolder + "\\art") +
      '" "' +
      Context.GetFolder(Nucleus.Folder.InstancedGameFolder) +
      '\\art\\" /S /Y /E',
  ];
  Context.WriteTextFile(batPath, batLines);

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\art\\snow\\woodcutter_6_snow.tga")) {
    Game.PauseBetweenContextAndLaunch = 45
    Context.RunAdditionalFiles(["all|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Copy.bat"], false, 0);
  }
   
  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_interfaces.txt";
  var lines = [
    "SteamClient015",
    "SteamGameServer012",
    "SteamGameServerStats001",
    "SteamUser017",
    "SteamFriends014",
    "SteamUtils007",
    "SteamMatchMaking009",
    "SteamMatchMakingServers002",
    "STEAMUSERSTATS_INTERFACE_VERSION011",
    "STEAMAPPS_INTERFACE_VERSION006",
    "SteamNetworking005",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION012",
    "STEAMSCREENSHOTS_INTERFACE_VERSION002",
    "STEAMHTTP_INTERFACE_VERSION002",
    "STEAMUNIFIEDMESSAGES_INTERFACE_VERSION001",
    "STEAMUGC_INTERFACE_VERSION002",
    "STEAMAPPLIST_INTERFACE_VERSION001",
    "STEAMMUSIC_INTERFACE_VERSION001",
    "STEAMMUSICREMOTE_INTERFACE_VERSION001",
    "STEAMCONTROLLER_INTERFACE_VERSION",
  ];
  Context.WriteTextFile(interfaces, lines);
/*
  var keepfile = Context.Options["KEEPFILE"];
  var hndlrPath = Context.HandlersFolder + "\\Rise of Nations Extended Edition.js";

  if (keepfile == "Yes") {
	  var dict = [
	  Context.FindLineNumberInTextFile(hndlrPath, 'var answers2 =', Nucleus.SearchType.StartsWith) + '|var answers2 = ["Yes", "No"];',
	  Context.FindLineNumberInTextFile(hndlrPath, 'Game.KeepSymLinkOnExit =', Nucleus.SearchType.StartsWith) + '|Game.KeepSymLinkOnExit = true;'
	  ];}
  if (keepfile == "No") {
	  var dict = [
	  Context.FindLineNumberInTextFile(hndlrPath, 'var answers2 =', Nucleus.SearchType.StartsWith) + '|var answers2 = ["No", "Yes"];',
	  Context.FindLineNumberInTextFile(hndlrPath, 'Game.KeepSymLinkOnExit =', Nucleus.SearchType.StartsWith) + '|Game.KeepSymLinkOnExit = false;'
	  ];}
	  Context.ReplaceLinesInTextFile(hndlrPath, dict)
*/
};
