export default function(sGis) {

    const CIRCLE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsSAAALEgHS3X78AAABD0lEQVRYw+2Y0RGDIAyGf7qAdIOO4ggdwREcxRF0g47gKN2gOMHflzx5vSIgKF7+uzwJ+F0gIcGQRA26oRIpqIIq6ElALYAewAuAA8CVOfnWy9h4kYwxS3JkuEaZG/zPGMgnScd4OVkjK+jA/TTkAt0TMhg2ZLtzadMxMBuKEgvgDaDJlHkWAA/JEEnpacgICVl78A3yedQC+BTK6fd/XvV5tCt4+XQpW98WBG1Ttt5lPp/roLKxoKX7FFNL9fRQj56lHl0KsiwpoHNB0PkSoJe5Qh2AqQDk5KueLlXmuczFSeeDDO1Cq2hFqmruqmqXD3uAMIkvzlaCoRVrfkT0LDZuCpqE9KSveQqqoAp6gL4/FFLAHJLrjgAAAABJRU5ErkJggg==";
    
    const HOUSE_MASK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsSAAALEgHS3X78AAADyElEQVRYw+2ZMW/bRhTH393JMsmCBSyUomxDgLXJ/ghFnE/QoUsQLw6QufAcIMiWKejUIUOSxUCRoPXSxZ/AQbMTsABPMk6yBbAUZQGEdYxs3etyNgjXInkS4zaoH/AmEXc/PL7j/f9PBBHhawgKX0ncg/5vQUsFrEESeVtgIu8cNAnHVNLEb5AAkwAwUTkzdGnGdmEAUOp2u5Wzs7NtRHxoGMZDSuk3yQellOdxHB8QQg6WlpZ+rdfrgwS01AEmGt9RoiBLJycnThiGP1uWteW67qlt2xVCiHnre0cUURQNfN9fHY1GvzmO82xlZaUPABcJ4MJAr6q4cHh4+COl9E2j0RibplnReRVCiMHx8XEZAH7a2Nj4AwA+A8BlLlhEzEqKiGVEtD3Pe8M5H0kpRzhjSClHnHPhed5bRPxWrU2zOLIgCSIuKMi3nPOZAW9GAtZWe5B5QBkiWq1W6wnnXGDBwTkXrVbrCSJaaq+pLDTj8LBer/cdALyu1+uFqxe15mu1B0v5FqeCUgAoBUHwqtFojKed6rluCkLMRqMxDoLglfpUUl3Q62palrWVcbqTtxIHgKcqeR5Y0zQrlmVtZVU1FTQMw23XdU9zFugpAKwBwK7KtbzAruuehmG4PSsolVI+sG07rZpJiN1bfs8FbNt2RUr5QPEQ3R4FwzA2M3pzLWe1d9OeJYSYhmFsznrX4827e4oyKkZvZuxVKgCC5Hwuz3pU5T8EC834fIzuShiXy2UAgIVpB4pm6ABLY6+bOlNLd47H45mtCJFSnt9VRdVel9N0aipoHMcHiCg0Vb92IKKI4/ijgtQGBcbYpyiKBl+6mlEUDRhjf6a1C03pN+k4zgff91dz9iZO8USZver7/qrjOB/S7Eka6MR13VAIsSeE+GJVFUIMhBB7ruuGCQOoBwoAF7Va7Xm73V7U6FWt3my324u1Wu15wkOh7qmXAHBZrVb7jLGdbrdbeDW73S4wxnaq1Wo/yzvRjN6bAMBFs9ncHw6H7zudTmFV7XQ6Yjgcvm82m/tZ1cxj7q49EyJWPc97p8zd+Rzm7pxzPvI87x0iVvN6pjx2mSpNYACAcXR09IOU8pd57DIhZGd9fX1f2eVcllnH15cAYBEAjH6/X+n1ei9N03ykM4AQQuwtLy+/cBznL/W6cw8hdCYl10OIqwyCoOL7/uPJZPK9YRibV1KNEDJCREuNdD4yxj65rvu74zgDVcFx2nU5L2hyrMNu5MIUdY4K5iIxc7rUGeXMCvqvTfNIAX82/KfnozCr7ryf4d+Dasbfwi3YO7zZwmUAAAAASUVORK5CYII=";
    const OFFICE_MASK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsSAAALEgHS3X78AAADr0lEQVRYw+2ZMW/bRhTH393JMsmCBSyUOtmGBm2yP0IR5xN06FLUi/MFCs8FgmyZgkwdMiQZiwStly7+BA6anYAFeJJB0RbAUpQFEOaxsnUvy9lgXYvUUVLboH7AGyQKvB/e3bv3/k8EEeFzMAqfiT2A/m9BKwt4B8n4fYYZ/8dBs3BMOc08gwyYBICJ8tLQlZLHhQFAxff92sXFxR4iPjYM4zGl9IvsD6WUl2maHhFCjtbW1n5uNpvDDLTUASYa9yhRkJWzszMniqKXlmXtcs7PbduuEULMe/cdUcRxPAyCYDNJkl8cx/lxY2NjAABXGeCFgd5EceX4+PhbSunrVqs1Nk2zprMVQojh6elpFQB+2N7e/g0A/gSA65lgEbHIKSJWEdF2Xfe153mJlDLBkialTDzPE67rvkHEL9W7aRFHESRBxBUF+cbzvNKAdy0Da6s1yDygDBGtTqfzxPM8gQs2z/NEp9N5goiWWmsqCy1IHtbv978CgFfNZnPh3Yt65yu1Bsu5i3NBKQBUwjB80Wq1xtOyeq5KQYjZarXGYRi+UFcl1QW9jaZlWbu62a1jpmnWLMvaLYpqLmgURXuc8/MS1aqorP7FOOfnURTtlQWlUspHtm3rRBPLlEnbtmtSykeKh2iXUMMwdgrOJin4fPc7nHZWDcPYKdvm4d3avdR+s2AtWrCNZWyelo5O235acH0kmmcSZ3z2N6tWqwAAK9MSqlLQB1gzZPq0nSA6uzQej0tLESKlvJyjqdYytdb1tD41FzRN0yNEFMtOJEQUaZp+UJDaoMAY+xjH8XDZoHEcDxljv+edZZqTJNJxnPdBEGxqJlOe32tBEGw6jvM+T57kgU4455EQ4kAIsbSoCiGGQogDznmUEYB6oABw1Wg0nna73dVlnFVEFN1ud7XRaDzNaCjUzXoJANf1en3AGNv3fX/h0fR9Hxhj+/V6fVCknYoq0wQArtrt9uFoNHrX6/UWFtVerydGo9G7drt9WBTNWcTdrWZCxLrrum+VuLucQ9xdep6XuK77FhHrs2qmWeQyVRXMAADj5OTkGynlT/PIZULI/tbW1qGSyzNJZh1dXwGAVQAwBoNBrd/vPzdN8zudAYQQ4mB9ff2Z4zh/qO2eeQihMym5HULceBiGtSAIvp9MJl8bhrFz06oRQhJEtNRI5wNj7CPn/FfHcYYqguO8cjkvaHasw+74ypT2DBXMVWbmdK0zyikL+q9N88gC/mz4T89HF9XRP8zwH0CL7BNvFN0s6X6ZngAAAABJRU5ErkJggg==";
    const AGGR_MASK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsSAAALEgHS3X78AAAEbElEQVRYw+2ZTWgbRxTH/7Mjy5LMuraotLKLQkQxyL4055Im7r0HX0p7cei9mDinQijUpafQS3rIIcnFpQRaX3rxvcahOXvBAiFT2StZKqo+rFi1RpWteb2MwmKs/ZCVtqF+8ED7dpn5MW/em3lPjIjwJoiGN0SuQP+3oIERjMFsepGQTf9xUDscV6rZ3sEGJgH0lA4NHRhyu3AAgWKxGD06OlomoluhUOiWpmkT9g+llCedTmebMbY9PT39QzKZbNigpR9g5iOPMgUZODw8jNXr9W8jkcinhmGUdF2PMsbCF/qdSLRarUalUnmn3W7/GIvFvpidna0BOLUBjwy0v4pju7u7S5qmPU6lUt1wOBz14wohRGN/fz8I4POFhYWfAfwF4MwTLBG5qUZEQSLSTdN8bFlWW0rZpiFFStm2LEuYpvmEiCbV2JobhxskI6IxBfnEsqyhAc+LDVZXc7DLgHIiimQymTuWZQkasViWJTKZzB0iiqi5BrJoLsHDy+Xy2wAeJZPJkd9e1JiP1BzcIRc7gmoAAtVq9UEqleoOiuoL5Gul7pHMWDiVSnWr1eoDlSo1v8HEiChYKpWu5XI5Nw/uEFHT9jyltC9N9c1AyeVyVCqVrqnAYn5czwDwer2+bBhGyWVh1gBMAbinnpu2d/fUuzWnAQzDKNXr9WUn9zuBalLKm7quRz2AAsBDAN8D+AzAkvr9UL1bdRpA1/WolPKm4mF+XM+JaCKbzf7pMYC3iGiJiBaJ6EDporJteRlAzTUxKPqdzno6f3Y7BM8UgHUAbwH4UNl/AfBS2bcAfOV49LnM5RT1ftLRKoBFBbal9KWyrZ7bt248F7pfc0kfbY+QNwDsnAuaNWW74RZMABAMBgFgbFBAaS73gIgH0AO1gusArtvs121uP3AbpNvtDl2KMCnliQfQfnraAXDXZr+rbFNeVlTNdTbonuoI2ul0tolI+ExPffGcnohIdDqd5wrSNyg45y9arVbDBfQ95d4l5eq+rCvbFoDbTgO0Wq0G5/xXpzJl0MVZAzBeqVRmjo+Pf5ubm/NbT/nKGnt7e5icnHzXMIzf1WVael1RAtAzDKMuhNgQQjTwmkQI0RBCbBiGUbcVgPAFCuA0kUjcz+fz4x72al/6edRLdSHy+fx4IpG4b6uhyG/USwBn8Xi8xjlfKRaLXhfpttue7EuxWATnfCUej9fcaie3k6kH4DSdTm82m81nhUJBjMrlhUJBNJvNZ+l0etNtNb0Ud69qJiKKm6b5VBV3J5co7k4sy2qbpvmUiOJeayYv5bKmbt8hAKFsNvuRlPK7y5TLjLGV+fn5TRXhnkpmP3V9AMA4gFCtVouWy+VvwuHwx34aEEKIjZmZmS9jsdgfyt2emxB+OiWvmhB9rVar0Uql8kmv13s/FAp90L+qMcbaRBRRLZ3nnPMXhmH8FIvFGmoFu07H5WVB7W0dfk7HBlzPSMGc2npOZ35aOcOC/mvdPDaCPxv+0/3Ri0CuWuNXoK9D/gZrrQ0yO4AbfQAAAABJRU5ErkJggg==";
    const LAND_MASK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsSAAALEgHS3X78AAADo0lEQVRYw+2ZMW/bVhDH770nyyQLFrBQirINDdxkf4Qizifo0CWIF+cLFJ4LBN06BZk6ZEgyFgkaL138CRw0OwEL8CTjibYAlqIsgDAfK1vvsjwbhCGRIiU5CeoDbpLA98PdPd79jwQR4VswCt+IPYD+b0ErC3gGSfkkw5TfO2gajimnqd8gBSYBYKy8NHSlZLkwAKh4nle7uLjYQ8THmqY9ppR+l/6jlPIySZIjQsjR2tran81mc5CClkWASYH3KFGQlbOzMysMw5eGYezatn1ummaNEKJPzDuiiKJo4Pv+ZhzHf1mW9evGxkYfAK5SwAsDvYniyvHx8c+U0teO44x0Xa8VSYUQYnB6eloFgF+2t7f/BoD/AOB6JlhEzHOKiFVENF3Xfc05j6WUMZY0KWXMOReu675BxO/Vs2keRx4kQcQVBfmGc14a8K6lYE11BpkHlCGi0W63n3HOBS7YOOei3W4/Q0RDnTWVheZcHtbr9X4AgFfNZnPh04t65it1Bst4F2eCUgCoBEHwwnGc0bRbPVenIER3HGcUBMEL9aqkRUFvo2kYxm7O7SY5nmm6rtcMw9jNi2omaBiGe7Ztn88QHJziM5lt2+dhGO6VBaVSykemadZgyWaaZk1K+UjxkKI1Cpqm7SyjNifVqqZpO2XHPLzbu5c6b+acRXPq7kvMxxPTT3NSEt/DvAoAANVqFQBgZdqFquTMAcackHgHeKqNRqPSUoRIKS/vK+fqrOtpc2omaJIkR4golg2JiCJJko8KsjAoMMY+RVE0KFiHhTtUFEUDxtg/WY2CZtSWtCzrve/7myW70sydyvf9Tcuy3mfJkyzQsW3boRDiQAgxWFbahRADIcSBbdthSgAWAwWAq0aj8bzT6awuo1YRUXQ6ndVGo/E8paGw6K2XAHBdr9f7jLF9z/MWHk3P84Axtl+v1/t52imvM40B4KrVah0Oh8N33W53YVHtdrtiOBy+a7Vah3nRnEXc3WomRKy7rvtWibvLOcTdJec8dl33LSLWZ9VMs8hlqjqYBgDaycnJT1LKP+aRy4SQ/a2trUMll2eSzEV0fQUAVgFA6/f7tV6v97uu60+KLCCEEAfr6+u/WZb1r0r3zEuIIpuS2yXEjQdBUPN9/+l4PP5R07Sdm1GNEBIjoqFWOh8ZY59s2/5gWdZARXCU1S7nBU2vddgdX5kynqGCuUrtnK6LrHLKgn6xbR5ZwMeGr3o/OgnkYTX+ALoM+wx+2dA/W406IwAAAABJRU5ErkJggg==";
    const INDUSTRY_MASK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsSAAALEgHS3X78AAADzElEQVRYw+2Zz2sbRxTH38zI8u6WLVh0NbKNIHuTfeq5xPkLeuil1BcHei4+B0JuOYWeesghybEktL704r/AobkvWOCTzEi2YCutLFi8o8jWvF7GZlG0vyS5bagfPBhYMfPhzcyb930iiAifg1H4TOwe9H8LWlrCHCTmswxj/o+DxuGYdhr7BjEwBQAT7XNDl+Y8LgwASp1Op3JxcbGHiI8Mw3hEKf0i/kOl1OVoNDoihBytra39Wq/XBzFoVQSYFMijREOWzs7OnCAIfrYsa5dzfm7bdoUQYs7cd0QZhuHA9/3NKIp+cxznycbGRh8ArmLASwO9ieLK8fHxd5TSV67rjk3TrBTZCinl4PT0tAwAP21vb/8BAB8B4DoXLCJmOUXEMiLanue9EkJESqkI5zSlVCSEkJ7nvUbEL/XcNIsjC5Ig4oqGfC2EmBtw2mKwtl6DLALKENFqNpuPhRASl2xCCNlsNh8joqXXSmShGZeHdbvdrwDgZb1eX3r1oud8qddgKbk4FZQCQKnX671wXXecdKsL5NxPPxBiuq477vV6L3SqpEVBb6NpWdZu0dud8DLNNNM0K5Zl7WZFNRU0CII9zvn5kp7YROOcnwdBsDcvKFVKPbRtuwJ3bLZtV5RSDzUPKXpGwTCMnRxnU+QYp4ecENMwjJ15yzycfrtnAP4IAA9SxvkLiPS1UouSrHT0NQAM9TgO9WDqCMXHWXNS7Z8ULDRjS6KUz8OpG51nnGjlchkAYCXpQpUy6gArx40uMk608Xg8txQhSqnLAjlyoYjqta6T6tRU0NFodISIMmeOzDNO2jk5Go3ea8jCoMAY+xCG4eCu82gYhgPG2J9p0acpW6ocx3nn+/5mDtGW12ea7/ubjuO8S5MnaaATznkgpTyQUt5ZVKWUAynlAec8iAnAYqAAcFWr1Z62Wq3VjLM6X7WCKFut1mqtVnsa01BY9NYrALiuVqt9xth+p9NZejQ7nQ4wxvar1Wo/SzvRjNQzAYCrRqNxOBwO37bb7aVFtd1uy+Fw+LbRaBxmRTOPuLvVTIhY9TzvjRZ3lwuIu0shROR53htErObVTHnkMtUvmAEAxsnJybdKqV8WkcuEkP2tra1DLZdzSeYiur4EAKsAYPT7/Uq3231umub3RRoQUsqD9fX1Z47j/KW3O3cTokin5LYJceO9Xq/i+/4Pk8nkG8Mwdm5KNUJIhIiWbum8Z4x94Jz/7jjOQEdwnPZcLgoab+uwKV9JqM5Rw1zFek7XRVo584L+a908soQ/G/7T/dHccvi+h38PuqD9DU8X6UXBdqg6AAAAAElFTkSuQmCC";


    const COLORS = {
        "1" : "#64c76c",
        "2" : "#ffad2b",
        "3" : "#ff4057",
        "4" : "#98a1ab",
        "5" : "#df5dff"
    };

    const TYPES = {
        "Жилая недвижимость": HOUSE_MASK,
        "Коммерческая недвижимость": OFFICE_MASK,
        "Права собственности и аренды на земельные участки": LAND_MASK,
        "Промышленная недвижимость": INDUSTRY_MASK,
        "Сельскохозяйственная недвижимость": AGGR_MASK
    };

    class SberObjectSymbol extends sGis.Symbol {
        constructor(aggregationIndex, typeAggregationIndex) {
            super();

            this._aggregationIndex = aggregationIndex;
            this._typeAggregationIndex = typeAggregationIndex;

            this._symbols = {};

            Object.keys(TYPES).forEach(type => {
                this._symbols[type] = {};

                let symbol = new sGis.symbol.point.MaskedImage({
                    imageSource: CIRCLE,
                    maskSource: TYPES[type],
                    width: 42,
                    height: 42,
                    anchorPoint: {x: 21, y: 21}
                });

                Object.keys(COLORS).forEach(status => {
                    let copy = symbol.clone();
                    copy.maskColor = COLORS[status];
                    this._symbols[type][status] = copy;
                });
            });
        }

        renderFunction(feature, resolution, crs) {
            if (!feature.aggregations || !feature.aggregations[this._aggregationIndex] || !feature.aggregations[this._typeAggregationIndex] || !feature.aggregations[this._aggregationIndex][0] || !feature.aggregations[this._typeAggregationIndex][0]) return [];

            let status = feature.aggregations[this._aggregationIndex][0].value;
            let type = feature.aggregations[this._typeAggregationIndex][0].value;

            return this._symbols[type] && this._symbols[type][status] ? this._symbols[type][status].renderFunction(feature, resolution, crs) : [];
        }
    }

    sGis.serializer.symbolSerializer.registerSymbol(SberObjectSymbol, 'sberObject', ['_aggregationIndex', '_typeAggregationIndex']);

    return SberObjectSymbol;

};
