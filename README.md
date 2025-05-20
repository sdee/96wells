# 96wells

![Screenshot](/96wells.gif "Screenshot")

The goal of this project is to automate the placement of samples on 96 well plates<sup>[1](#myfootnote1)</sup>. Samples can be loaded as a list along with metadata for each samples. 

Layouts can be used to optimize for constraints such as ordering samples by time points and spacing samples out to avoid contamination. 

The code is designed to be modular so that custom layouts can be easily added. 

Note: This is a work in progress and currently exists as a proof concept for combining d3, svg, and react/redux to develop interfaces for LIMS components.

Features:

* Sample layouts that assign experiments to well to optimize for specific criteria.
* Automatically assign colors to samples, showing how samples are distributed across the plate.
* Ability to overlay wells with attributes parsed from sample list (any column that is not Sample Name)
* Import data via Google Sheets
* Optional step for manually editing well locations
* Easy export as .csv or .tsv

Upcoming features:


* Templates for layout (assign plate regions for controls, sample types, etc)
* Additional plate sizes (eg 384 wells)
* Support for multiple plates


Colors are from http://www.paletton.com/, customized for visualizations. 

<a name="myfootnote1">1</a>: A research tool commonly used in molecular biology consisting of a rectangular matrix with 96 wells, each of which can hold a sample or mixture. 
