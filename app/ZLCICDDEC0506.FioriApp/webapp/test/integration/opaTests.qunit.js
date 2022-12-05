sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ZLCICDDEC0506/FioriApp/test/integration/FirstJourney',
		'ZLCICDDEC0506/FioriApp/test/integration/pages/SrvBooksList',
		'ZLCICDDEC0506/FioriApp/test/integration/pages/SrvBooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, SrvBooksList, SrvBooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ZLCICDDEC0506/FioriApp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSrvBooksList: SrvBooksList,
					onTheSrvBooksObjectPage: SrvBooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);