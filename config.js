angular.module("vibe", [])

.run(function ($rootScope) {
    $rootScope.countryName = "Taiwan"; // Your country name (Mandatory) | List of countries - http://is.gd/ZRQKky
	$rootScope.blogUrl = "//mozlinks.moztw.org"; // Community blog URL (Leave blank if you don't have one)
	$rootScope.hiveUrl = ""; // Hive URL (Leave blank if you don't have one)
	$rootScope.leaderboardUrl = ""; // Leaderboard URL (Leave blank if you don't have one)
});
