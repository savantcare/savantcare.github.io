# Pharmacy 
Left card
------------
![Pharmacy left card](../../assets/img/pharmacy/left-card.png)

There should be a serach box and loggedin user should be able to search pharmacies from that search box using google map api. Search result should give us list of pharmacies and 'Add' button beside each pharmacy. You can refer to the picture shown above. Clicking on 'Add' button should add respective pharmacy to the patient.

----------------------------------- 

Right card
-----------
![Pharmacy right card](../../assets/img/pharmacy/right-card.png)

It should contain list of pharmacies added to the patient. Columns should be 'Name', 'Address line 1', 'Address line 2', 'City', 'State' etc. 

There will be change and discontinue buttons/icons for each row.

----------------------------------- 

2nd layer - add pharmacy 
----------------------------------------------

There will be a select box in the very beginning of the add pharmacy popup. Name of that select box will be 'Type' and it will have two options: 'Not on surescripts' and 'On surescripts'. Default value will be 'Not on surescripts'.

Based on the selected values, ie. 'Not on surescripts' and 'On surescripts', a bunch of fields will be enabled and disabled in the same add popup. You can refer the following pictures for better visualization.

1. If option 1(Not on surescripts) is selected
![Add pharmacy type 1](../../assets/img/pharmacy/2nd-layer-add-pharmacy-1.png)

2. If option 2(On surescripts) is selected
![Add pharmacy type 2](../../assets/img/pharmacy/2nd-layer-add-pharmacy-2.png)

Additional note:

1. For option 1 mentioned above, you need to fetch 'City' and 'State' values from our database.
2. Full functionality for option 1 should be done by you but for option 2 (type = 'On surescripts') you have to create the UI part along with an api call only. Our team will create that api later.
