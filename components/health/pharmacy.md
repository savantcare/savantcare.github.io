# Pharmacy

DB name: DB_SC_Pharmacy_CT_V20
------------------------------

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

Furthermore rows can be sorted by drag-and-drop. It will set the priorities of pharmacy for that patient. 

----------------------------------- 

2nd layer - add pharmacy 
----------------------------------------------

There will be a select box in the very beginning of the add pharmacy popup. Name of that select box will be 'Type' and it will have two options: 'Not on surescripts' and 'On surescripts'. Default value will be 'On surescripts'.

Based on the selected values, ie. 'Not on surescripts' and 'On surescripts', a bunch of fields will be enabled and disabled in the same add popup. You can refer the following pictures for better visualization.

1. If option 1(Not on surescripts) is selected
![Add pharmacy type 1](../../assets/img/pharmacy/2nd-layer-add-pharmacy-1.png)

2. If option 2(On surescripts) is selected
![Add pharmacy type 2](../../assets/img/pharmacy/2nd-layer-add-pharmacy-2.png)


-----------------------
Additional info:
1. For option 1 mentioned above, you need to fetch 'City' and 'State' values from our database. Clicking on save button will add pharmacy to that patient.

2. For option 2 (On surescripts), 'Name' field should like typeahead drop-down. Typing on 'Name' field should search data from database table: masterPharmacyFromSurescripts and it will show fetched data in drop-down. User can select one from the drop-down and save. It will add respective pharmacy to that patient. 
The logic for searching of 'Name' field:
User can search any combination of following fields in comma separated manner. The fields are 'OrganizationName', 'AddressLine1', 'AddressLine2', 'City', 'State' and 'Zip'.