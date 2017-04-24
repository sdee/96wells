# 96wells

The goal of this project is to automate the placement of samples on 96 well plates<sup>[1](#myfootnote1)</sup>. Samples can be loaded as a list along with metadata for each samples. 

Layouts can be used to optimize for constraints such as ordering samples by time points and spacing samples out to avoid contamination. 

The code is designed to be modular so that custom layouts can be easily added. 

Note: This is a work in progress and currently exists as a proof concept for combining d3, redux, and react. 

Proposed features:

* Better labelling of wells
* Ability to overlay wells with attributes parsed from sample list
* Layouts for grouping like wells and ones for keeping like wells apart (based on attributes such as time point and sample type)
* Export and synchronization with Google Sheets 

![Screenshot](/example.png "Screenshot")

<a name="myfootnote1">1</a>: A research tool commonly used in molecular biology consisting of a rectangular matrix with 96 wells, each of which can hold a sample or mixture. 
