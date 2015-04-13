;
(function() {
    'use strict';
    angular.module('oss', [])
        .controller("typeaheadController", [function() {
            var self = this;
            
            self.getDemoData = [
            	{
                    "key": "552a7ea92e8d0ae223c66194",
                    "value": "506 Elm Place, Coventry, North Carolina, 2516"
                }, {
                    "key": "552a7ea97ba9e7c9362b218e",
                    "value": "525 Bayview Avenue, Dellview, Louisiana, 9429"
                }, {
                    "key": "552a7ea96b28c17e87626a08",
                    "value": "263 Oak Street, Geyserville, Michigan, 8215"
                }, {
                    "key": "552a7ea95f55b7524045f434",
                    "value": "740 Grand Avenue, Edneyville, Puerto Rico, 8589"
                }, {
                    "key": "552a7ea906d39f5d078489a9",
                    "value": "200 Lloyd Court, Eggertsville, Delaware, 6470"
                }, {
                    "key": "552a7ea9c4cb365d1812fbb0",
                    "value": "163 Verona Place, Canby, Northern Mariana Islands, 2355"
                }, {
                    "key": "552a7ea921ed60c196bf10e6",
                    "value": "136 Doughty Street, Hobucken, Wisconsin, 2311"
                }, {
                    "key": "552a7ea9002154d465fa2e6f",
                    "value": "146 Seaview Avenue, Rosine, Tennessee, 9845"
                }, {
                    "key": "552a7ea97268e3a37e71f387",
                    "value": "192 Chauncey Street, Tecolotito, California, 6599"
                }, {
                    "key": "552a7ea9c6650753961b71e8",
                    "value": "862 Devon Avenue, Topaz, Utah, 3375"
                }, {
                    "key": "552a7ea9a3a32356d01ecec9",
                    "value": "381 Caton Place, Leyner, Minnesota, 6149"
                }, {
                    "key": "552a7ea9c2094aa95897cc40",
                    "value": "890 Colonial Road, Grimsley, Texas, 3135"
                }, {
                    "key": "552a7ea955f537d756d64602",
                    "value": "178 Schermerhorn Street, Celeryville, Montana, 3309"
                }, {
                    "key": "552a7ea9aa30df7684b7c790",
                    "value": "465 Dunne Court, Haring, North Dakota, 5977"
                }, {
                    "key": "552a7ea97829730ac4fdaa72",
                    "value": "755 Banker Street, Watrous, Maine, 5002"
                }, {
                    "key": "552a7ea95508ae2e37518547",
                    "value": "674 Covert Street, Glendale, Hawaii, 3268"
                }, {
                    "key": "552a7ea96913bbbc578640d8",
                    "value": "992 Olive Street, Brogan, New Hampshire, 9699"
                }, {
                    "key": "552a7ea986d7bf62654dad67",
                    "value": "483 Montieth Street, Sexton, New Jersey, 3511"
                }, {
                    "key": "552a7ea9eada458c1e7b6486",
                    "value": "771 Stuyvesant Avenue, Dante, Maryland, 5652"
                }, {
                    "key": "552a7ea9ffcef14f020f93ec",
                    "value": "590 Summit Street, Chesapeake, South Dakota, 6784"
                }, {
                    "key": "552a7ea9dbd301144433503d",
                    "value": "667 Love Lane, Gwynn, District Of Columbia, 1912"
                }, {
                    "key": "552a7ea9ff34f1038f5cf9f3",
                    "value": "339 Hendrickson Place, Morgandale, Guam, 7416"
                }, {
                    "key": "552a7ea9f766adde109d86ef",
                    "value": "373 Kingsway Place, Enetai, New Mexico, 7212"
                }, {
                    "key": "552a7ea9457f650a1b6f2dc1",
                    "value": "971 Schroeders Avenue, Kraemer, Indiana, 6160"
                }, {
                    "key": "552a7ea95d0b585787673e6d",
                    "value": "299 Hoyt Street, Sussex, Alabama, 9238"
                }, {
                    "key": "552a7ea9af3192251aee9f89",
                    "value": "852 Engert Avenue, Gouglersville, Mississippi, 8079"
                }, {
                    "key": "552a7ea9ba09455f2fa67ef6",
                    "value": "986 Greene Avenue, Gambrills, American Samoa, 8267"
                }, {
                    "key": "552a7ea902022ae94cba6990",
                    "value": "822 Hunts Lane, Lund, Kentucky, 5095"
                }, {
                    "key": "552a7ea9ea5e6f5cf5e5ceab",
                    "value": "901 Tehama Street, Holcombe, South Carolina, 7213"
                }, {
                    "key": "552a7ea9751f2443a50f12d0",
                    "value": "743 Stone Avenue, Advance, Nevada, 3274"
                }, {
                    "key": "552a7ea93ab934a0678a7ee2",
                    "value": "536 Prospect Street, Albrightsville, Connecticut, 2183"
                }, {
                    "key": "552a7ea946fdd1e41d8e8d1d",
                    "value": "396 Willow Place, Dubois, Nebraska, 9759"
                }, {
                    "key": "552a7ea98554ead71220ac1c",
                    "value": "300 Balfour Place, Benson, Arizona, 6385"
                }, {
                    "key": "552a7ea9bc86dc0add43ecd7",
                    "value": "698 Irving Avenue, Rosewood, Idaho, 3304"
                }, {
                    "key": "552a7ea9bfed096ec9de92ef",
                    "value": "176 Frank Court, Calverton, New York, 2534"
                }, {
                    "key": "552a7ea92c7c9890f66924ef",
                    "value": "273 Willmohr Street, Emison, West Virginia, 5680"
                }, {
                    "key": "552a7ea982875b00da76e0aa",
                    "value": "132 Dewey Place, Crown, Marshall Islands, 6183"
                }, {
                    "key": "552a7ea984aca20f5cc47174",
                    "value": "855 Opal Court, Vandiver, Missouri, 309"
                }, {
                    "key": "552a7ea925309f95062c01d8",
                    "value": "221 Louise Terrace, Snyderville, Federated States Of Micronesia, 2849"
                }, {
                    "key": "552a7ea9af94cd30bc4f0769",
                    "value": "616 Stuart Street, Chumuckla, Wyoming, 8671"
                }, {
                    "key": "552a7ea9a9a1f7796c9662f6",
                    "value": "211 Emerald Street, Gorst, Massachusetts, 6435"
                }, {
                    "key": "552a7ea956d6792b04bc6f51",
                    "value": "467 Montgomery Place, Waumandee, Rhode Island, 3622"
                }, {
                    "key": "552a7ea9f0ab71806ba9f74f",
                    "value": "361 Woodruff Avenue, Dragoon, Kansas, 4794"
                }, {
                    "key": "552a7ea9a69ba6d7f30b67d7",
                    "value": "805 Malbone Street, Croom, Palau, 5238"
                }, {
                    "key": "552a7ea938dddd17a88d3c65",
                    "value": "581 Jefferson Avenue, Suitland, Pennsylvania, 4338"
                }, {
                    "key": "552a7ea9e3cb4a68737f89b1",
                    "value": "825 Metrotech Courtr, Allamuchy, Florida, 1064"
                }, {
                    "key": "552a7ea96ef3f349ecbdaf62",
                    "value": "936 Devoe Street, Valmy, Ohio, 2443"
                }, {
                    "key": "552a7ea94551d6be90879038",
                    "value": "146 Elmwood Avenue, Salvo, Washington, 4714"
                }, {
                    "key": "552a7ea9b0fdf6d52fd9bd15",
                    "value": "881 Battery Avenue, Thermal, Iowa, 7014"
                }, {
                    "key": "552a7ea9603431147fe1d8ad",
                    "value": "685 Lake Place, Newry, Alaska, 8554"
                }
            ];

            self.itemSelected = function(item){
            	console.log(item);
            }
            


        }])


}());
