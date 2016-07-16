// Auto-generated from make depends; all changes here will be lost. CellMaster
var SocialCalc;
SocialCalc || (SocialCalc = {});
SocialCalc.Constants = {cellDataType:{v:"value", n:"value", t:"text", f:"formula", c:"constant"}, textdatadefaulttype:"t", s_BrowserNotSupported:"Browser not supported.", s_InternalError:"Internal SocialCalc error (probably an internal bug): ", s_pssUnknownColType:"Unknown col type item", s_pssUnknownRowType:"Unknown row type item", s_pssUnknownLineType:"Unknown line type", s_cfspUnknownCellType:"Unknown cell type item", doCanonicalizeSheet:!0, s_escUnknownSheetCmd:"Unknown sheet command: ", s_escUnknownSetCoordCmd:"Unknown set coord command: ", 
s_escUnknownCmd:"Unknown command: ", s_caccCircRef:"Circular reference to ", defaultRowNameWidth:"30", defaultAssumedRowHeight:15, defaultCellIDPrefix:"cell_", defaultCellLayout:"padding:2px 2px 1px 2px;vertical-align:top;", defaultCellFontStyle:"normal normal", defaultCellFontSize:"small", defaultCellFontFamily:"Verdana,Arial,Helvetica,sans-serif", defaultPaneDividerWidth:"3", defaultPaneDividerHeight:"3", defaultGridCSS:"1px solid #C0C0C0;", defaultCommentClass:"", defaultCommentStyle:"background-repeat:no-repeat;background-position:top right;background-image:url(images/sc-commentbg.gif);", 
defaultCommentNoGridClass:"", defaultCommentNoGridStyle:"", defaultReadonlyClass:"", defaultReadonlyStyle:"background-repeat:no-repeat;background-position:top right;background-image:url(images/sc-lockbg.gif);", defaultReadonlyNoGridClass:"", defaultReadonlyNoGridStyle:"", defaultReadonlyComment:"Locked cell", defaultColWidth:"80", defaultMinimumColWidth:10, defaultHighlightTypeCursorClass:"", defaultHighlightTypeCursorStyle:"color:#FFF;backgroundColor:#A6A6A6;", defaultHighlightTypeRangeClass:"", 
defaultHighlightTypeRangeStyle:"color:#000;backgroundColor:#E5E5E5;", defaultColnameClass:"", defaultColnameStyle:"overflow:visible;font-size:small;text-align:center;color:#FFFFFF;background-color:#808080;", defaultSelectedColnameClass:"", defaultSelectedColnameStyle:"overflow:visible;font-size:small;text-align:center;color:#FFFFFF;background-color:#404040;", defaultRownameClass:"", defaultRownameStyle:"position:relative;overflow:visible;font-size:small;text-align:right;color:#FFFFFF;background-color:#808080;", 
defaultSelectedRownameClass:"", defaultSelectedRownameStyle:"position:relative;overflow:visible;font-size:small;text-align:right;color:#FFFFFF;background-color:#404040;", defaultUpperLeftClass:"", defaultUpperLeftStyle:"font-size:small;", defaultSkippedCellClass:"", defaultSkippedCellStyle:"font-size:small;background-color:#CCC", defaultPaneDividerClass:"", defaultPaneDividerStyle:"font-size:small;background-color:#C0C0C0;padding:0px;", defaultUnhideLeftClass:"", defaultUnhideLeftStyle:"float:right;width:9px;height:12px;cursor:pointer;background-image:url(images/sc-unhideleft.gif);padding:0;", 
defaultUnhideRightClass:"", defaultUnhideRightStyle:"float:left;width:9px;height:12px;cursor:pointer;background-image:url(images/sc-unhideright.gif);padding:0;", defaultUnhideTopClass:"", defaultUnhideTopStyle:"float:left;left:1px;position:absolute;bottom:-4px;width:12px;height:9px;cursor:pointer;background-image:url(images/sc-unhidetop.gif);padding:0;", defaultUnhideBottomClass:"", defaultUnhideBottomStyle:"float:left;width:12px;height:9px;cursor:pointer;background-image:url(images/sc-unhidebottom.gif);padding:0;", 
defaultColResizeBarClass:"col-resize-bar", defaultRowResizeBarClass:"row-resize-bar", s_rcMissingSheet:"Render Context must have a sheet object", defaultLinkFormatString:'<span style="font-size:smaller;text-decoration:none !important;background-color:#66B;color:#FFF;">Link</span>', defaultPageLinkFormatString:'<span style="font-size:smaller;text-decoration:none !important;background-color:#66B;color:#FFF;">Page</span>', defaultFormatp:"#,##0.0%", defaultFormatc:"[$$]#,##0.00", defaultFormatdt:"d-mmm-yyyy h:mm:ss", 
defaultFormatd:"d-mmm-yyyy", defaultFormatt:"[h]:mm:ss", defaultDisplayTRUE:"TRUE", defaultDisplayFALSE:"FALSE", defaultImagePrefix:"images/sc_", defaultTableEditorIDPrefix:"te_", defaultPageUpDnAmount:15, AllowCtrlS:!0, defaultTableControlThickness:20, cteGriddivClass:"", s_statusline_executing:"Executing...", s_statusline_displaying:"Displaying...", s_statusline_ordering:"Ordering...", s_statusline_calculating:"Calculating...", s_statusline_calculatingls:"Calculating... Loading Sheet...", s_statusline_doingserverfunc:"doing server function ", 
s_statusline_incell:" in cell ", s_statusline_calcstart:"Calculation start...", s_statusline_sum:"SUM", s_statusline_recalcneeded:'<span style="color:#999;">(Recalc needed)</span>', s_statusline_circref:'<span style="color:red;">Circular reference: ', s_statusline_sendemail:"Sending Email ", s_inputboxdisplaymultilinetext:"[Multi-line text: Click icon on right to edit]", defaultInputEchoClass:"", defaultInputEchoStyle:"filter:alpha(opacity=90);opacity:.9;backgroundColor:#FFD;border:1px solid #884;fontSize:small;padding:2px 10px 1px 2px;cursor:default;", 
defaultInputEchoPromptClass:"", defaultInputEchoPromptStyle:"filter:alpha(opacity=90);opacity:.9;backgroundColor:#FFD;borderLeft:1px solid #884;borderRight:1px solid #884;borderBottom:1px solid #884;fontSize:small;fontStyle:italic;padding:2px 10px 1px 2px;cursor:default;", defaultInputEchoHintClass:"", defaultInputEchoHintStyle:"filter:alpha(opacity=80);opacity:.8;backgroundColor:#884;border:1px solid #884;fontSize:small;fontWeight:bold;padding:2px 2px 2px 2px;color:#FFF;position:absolute;top:-20px;cursor:default;", 
ietUnknownFunction:"Unknown function ", CH_radius1:29, CH_radius2:41, s_CHfillAllTooltip:"Fill Contents and Formats Down/Right", s_CHfillContentsTooltip:"Fill Contents Only Down/Right", s_CHmovePasteAllTooltip:"Move Contents and Formats", s_CHmovePasteContentsTooltip:"Move Contents Only", s_CHmoveInsertAllTooltip:"Slide Contents and Formats within Row/Col", s_CHmoveInsertContentsTooltip:"Slide Contents within Row/Col", s_CHindicatorOperationLookup:{Fill:"Fill", FillC:"Fill Contents", Move:"Move", 
MoveI:"Slide", MoveC:"Move Contents", MoveIC:"Slide Contents"}, s_CHindicatorDirectionLookup:{Down:" Down", Right:" Right", Horizontal:" Horizontal", Vertical:" Vertical"}, defaultTCSliderThickness:9, defaultTCButtonThickness:20, defaultTCThumbThickness:15, TCmainStyle:"backgroundColor:#EEE;", TCmainClass:"", TCendcapStyle:"backgroundColor:#FFF;", TCendcapClass:"", TCpanesliderClass:"tc-paneslider", s_panesliderTooltiph:"Drag to lock pane vertically", s_panesliderTooltipv:"Drag to lock pane horizontally", 
TClessbuttonStyle:"backgroundColor:#AAA;", TClessbuttonClass:"", TClessbuttonRepeatWait:300, TClessbuttonRepeatInterval:20, TCmorebuttonStyle:"backgroundColor:#AAA;", TCmorebuttonClass:"", TCmorebuttonRepeatWait:300, TCmorebuttonRepeatInterval:20, TCscrollareaStyle:"backgroundColor:#DDD;", TCscrollareaClass:"", TCscrollareaRepeatWait:500, TCscrollareaRepeatInterval:100, TCthumbClass:"", TCthumbStyle:"backgroundColor:#CCC;", TCPStrackinglineClass:"tracklingine", TCPStrackinglineStyle:"overflow:hidden;position:absolute;zIndex:100;", 
TCPStrackinglineThickness:"2px", TCTDFSthumbstatusvClass:"", TCTDFSthumbstatusvStyle:"height:20px;width:auto;border:3px solid #808080;overflow:hidden;backgroundColor:#FFF;fontSize:small;position:absolute;zIndex:100;", TCTDFSthumbstatushClass:"", TCTDFSthumbstatushStyle:"height:20px;width:auto;border:1px solid black;padding:2px;backgroundColor:#FFF;fontSize:small;position:absolute;zIndex:100;", TCTDFSthumbstatusrownumClass:"", TCTDFSthumbstatusrownumStyle:"color:#FFF;background-color:#808080;font-size:small;white-space:nowrap;padding:3px;", 
TCTDFStopOffsetv:0, TCTDFSleftOffsetv:-80, s_TCTDFthumbstatusPrefixv:"Row ", TCTDFStopOffseth:-30, TCTDFSleftOffseth:0, s_TCTDFthumbstatusPrefixh:"Col ", TooltipOffsetX:2, TooltipOffsetY:10, TDpopupElementClass:"", TDpopupElementStyle:"border:1px solid black;padding:1px 2px 2px 2px;textAlign:center;backgroundColor:#FFF;fontSize:7pt;fontFamily:Verdana,Arial,Helvetica,sans-serif;position:absolute;width:auto;zIndex:110;", SCToolbarbackground:"background-color:#404040;", SCTabbackground:"background-color:#CCC;", 
SCTabselectedCSS:"font-size:small;padding:6px 30px 6px 8px;color:#FFF;background-color:#404040;cursor:default;border-right:1px solid #CCC;", SCTabplainCSS:"font-size:small;padding:6px 30px 6px 8px;color:#FFF;background-color:#808080;cursor:default;border-right:1px solid #CCC;", SCToolbartext:"font-size:x-small;font-weight:bold;color:#FFF", SCFormulabarheight:30, SCStatuslineheight:20, SCStatuslineCSS:"font-size:10px;padding:3px 0px;", SCFormatNumberFormats:"[cancel]:|[break]:|%loc!Default!:|[custom]:|%loc!Automatic!:general|%loc!Auto w/ commas!:[,]General|[break]:|00:00|000:000|0000:0000|00000:00000|[break]:|%loc!Formula!:formula|%loc!Hidden!:hidden|[newcol]:1234:0|1,234:#,##0|1,234.5:#,##0.0|1,234.56:#,##0.00|1,234.567:#,##0.000|1,234.5678:#,##0.0000|[break]:|1,234%:#,##0%|1,234.5%:#,##0.0%|1,234.56%:#,##0.00%|[newcol]:|$1,234:$#,##0|$1,234.5:$#,##0.0|$1,234.56:$#,##0.00|[break]:|(1,234):#,##0_);(#,##0)|(1,234.5):#,##0.0_);(#,##0.0)|(1,234.56):#,##0.00_);(#,##0.00)|[break]:|($1,234):$#,##0_);($#,##0)|($1,234.5):$#,##0.0_);($#,##0.0)|($1,234.56):$#,##0.00_);($#,##0.00)|[newcol]:|1/4/06:m/d/yy|01/04/2006:mm/dd/yyyy|2006-01-04:yyyy-mm-dd|4-Jan-06:d-mmm-yy|04-Jan-2006:dd-mmm-yyyy|January 4, 2006:mmmm d, yyyy|[break]:|1\\c23:h:mm|1\\c23 PM:h:mm AM/PM|1\\c23\\c45:h:mm:ss|01\\c23\\c45:hh:mm:ss|26\\c23 (h\\cm):[hh]:mm|69\\c45 (m\\cs):[mm]:ss|69 (s):[ss]|[newcol]:|2006-01-04 01\\c23\\c45:yyyy-mm-dd hh:mm:ss|January 4, 2006:mmmm d, yyyy hh:mm:ss|Wed:ddd|Wednesday:dddd|", 
SCFormatTextFormats:"[cancel]:|[break]:|%loc!Default!:|[custom]:|%loc!Automatic!:general|%loc!Plain Text!:text-plain|HTML:text-html|%loc!Wikitext!:text-wiki|%loc!Link!:text-link|%loc!Formula!:formula|%loc!Hidden!:hidden|", SCFormatPadsizes:"[cancel]:|[break]:|%loc!Default!:|[custom]:|%loc!No padding!:0px|[newcol]:|1 pixel:1px|2 pixels:2px|3 pixels:3px|4 pixels:4px|5 pixels:5px|6 pixels:6px|7 pixels:7px|8 pixels:8px|[newcol]:|9 pixels:9px|10 pixels:10px|11 pixels:11px|12 pixels:12px|13 pixels:13px|14 pixels:14px|16 pixels:16px|18 pixels:18px|[newcol]:|20 pixels:20px|22 pixels:22px|24 pixels:24px|28 pixels:28px|36 pixels:36px|", 
SCFormatFontsizes:"[cancel]:|[break]:|%loc!Default!:|[custom]:|X-Small:x-small|Small:small|Medium:medium|Large:large|X-Large:x-large|[newcol]:|6pt:6pt|7pt:7pt|8pt:8pt|9pt:9pt|10pt:10pt|11pt:11pt|12pt:12pt|14pt:14pt|16pt:16pt|[newcol]:|18pt:18pt|20pt:20pt|22pt:22pt|24pt:24pt|28pt:28pt|36pt:36pt|48pt:48pt|72pt:72pt|[newcol]:|8 pixels:8px|9 pixels:9px|10 pixels:10px|11 pixels:11px|12 pixels:12px|13 pixels:13px|14 pixels:14px|[newcol]:|16 pixels:16px|18 pixels:18px|20 pixels:20px|22 pixels:22px|24 pixels:24px|28 pixels:28px|36 pixels:36px|", 
SCFormatFontfamilies:"[cancel]:|[break]:|%loc!Default!:|[custom]:|Verdana:Verdana,Arial,Helvetica,sans-serif|Arial:arial,helvetica,sans-serif|Courier:'Courier New',Courier,monospace|", SCFormatFontlook:"[cancel]:|[break]:|%loc!Default!:|%loc!Normal!:normal normal|%loc!Bold!:normal bold|%loc!Italic!:italic normal|%loc!Bold Italic!:italic bold", SCFormatTextAlignhoriz:"[cancel]:|[break]:|%loc!Default!:|%loc!Left!:left|%loc!Center!:center|%loc!Right!:right|", SCFormatNumberAlignhoriz:"[cancel]:|[break]:|%loc!Default!:|%loc!Left!:left|%loc!Center!:center|%loc!Right!:right|", 
SCFormatAlignVertical:"[cancel]:|[break]:|%loc!Default!:|%loc!Top!:top|%loc!Middle!:middle|%loc!Bottom!:bottom|", SCFormatColwidth:"[cancel]:|[break]:|%loc!Default!:|[custom]:|[newcol]:|20 pixels:20|40:40|60:60|80:80|100:100|120:120|140:140|160:160|[newcol]:|180 pixels:180|200:200|220:220|240:240|260:260|280:280|300:300|", SCFormatRecalc:"[cancel]:|[break]:|%loc!Auto!:|%loc!Manual!:off|", SCFormatUserMaxCol:"[cancel]:|[break]:|%loc!Default!:|[custom]:|[newcol]:|Unlimited:0|10:10|20:20|30:30|40:40|50:50|60:60|80:80|100:100|", 
SCFormatUserMaxRow:"[cancel]:|[break]:|%loc!Default!:|[custom]:|[newcol]:|Unlimited:0|10:10|20:20|30:30|40:40|50:50|60:60|80:80|100:100|", ISCButtonBorderNormal:"#404040", ISCButtonBorderHover:"#999", ISCButtonBorderDown:"#FFF", ISCButtonDownBackground:"#888", s_PopupListCancel:"[Cancel]", s_PopupListCustom:"Custom", s_loc_align_center:"Align Center", s_loc_align_left:"Align Left", s_loc_align_right:"Align Right", s_loc_alignment:"Alignment", s_loc_audit:"Audit", s_loc_audit_trail_this_session:"Audit Trail This Session", 
s_loc_auto:"Auto", s_loc_auto_sum:"Auto Sum", s_loc_auto_wX_commas:"Auto w/ commas", s_loc_automatic:"Automatic", s_loc_background:"Background", s_loc_bold:"Bold", s_loc_bold_XampX_italics:"Bold &amp; Italics", s_loc_bold_italic:"Bold Italic", s_loc_borders:"Borders", s_loc_borders_off:"Borders Off", s_loc_borders_on:"Borders On", s_loc_bottom:"Bottom", s_loc_bottom_border:"Bottom Border", s_loc_cell_settings:"CELL SETTINGS", s_loc_csv_format:"CSV format", s_loc_cancel:"Cancel", s_loc_category:"Category", 
s_loc_center:"Center", s_loc_clear:"Clear", s_loc_clear_socialcalc_clipboard:"Clear SocialCalc Clipboard", s_loc_clipboard:"Clipboard", s_loc_color:"Color", s_loc_column_:"Column ", s_loc_comment:"Comment", s_loc_copy:"Copy", s_loc_custom:"Custom", s_loc_cut:"Cut", s_loc_default:"Default", s_loc_default_alignment:"Default Alignment", s_loc_default_column_width:"Default Column Width", s_loc_default_font:"Default Font", s_loc_default_format:"Default Format", s_loc_default_padding:"Default Padding", 
s_loc_delete:"Delete", s_loc_delete_column:"Delete Column", s_loc_delete_contents:"Delete Cell Contents", s_loc_delete_row:"Delete Row", s_loc_description:"Description", s_loc_display_clipboard_in:"Display Clipboard in", s_loc_down:"Down", s_loc_edit:"Edit", s_loc_existing_names:"Existing Names", s_loc_family:"Family", s_loc_fill_down:"Fill Down", s_loc_fill_right:"Fill Right", s_loc_font:"Font", s_loc_format:"Format", s_loc_formula:"Formula", s_loc_function_list:"Function List", s_loc_functions:"Functions", 
s_loc_grid:"Grid", s_loc_hidden:"Hidden", s_loc_hide_column:"Hide Column", s_loc_hide_row:"Hide Row", s_loc_horizontal:"Horizontal", s_loc_insert_column:"Insert Column Before", s_loc_insert_row:"Insert Row Before", s_loc_italic:"Italic", s_loc_last_sort:"Last Sort", s_loc_left:"Left", s_loc_left_border:"Left Border", s_loc_link:"Link", s_loc_link_input_box:"Link Input Box", s_loc_list:"List", s_loc_load_socialcalc_clipboard_with_this:"Load SocialCalc Clipboard With This", s_loc_lock_cell:"Lock Cell", 
s_loc_major_sort:"Major Sort", s_loc_manual:"Manual", s_loc_merge_cells:"Merge/Unmerge Cells", s_loc_middle:"Middle", s_loc_minor_sort:"Minor Sort", s_loc_move_insert:"Move Insert", s_loc_move_paste:"Move Paste", s_loc_multiXline_input_box:"Multi-line Input Box", s_loc_name:"Name", s_loc_names:"Names", s_loc_no_padding:"No padding", s_loc_normal:"Normal", s_loc_number:"Number", s_loc_number_horizontal:"Number Horizontal", s_loc_ok:"OK", s_loc_padding:"Padding", s_loc_page_name:"Page Name", s_loc_paste:"Paste", 
s_loc_paste_formats:"Paste Formats", s_loc_plain_text:"Plain Text", s_loc_recalc:"Recalc", s_loc_recalculation:"Recalculation", s_loc_redo:"Redo", s_loc_right:"Right", s_loc_right_border:"Right Border", s_loc_sheet_settings:"SHEET SETTINGS", s_loc_save:"Save", s_loc_save_to:"Save to", s_loc_set_cell_contents:"Set Cell Contents", s_loc_set_cells_to_sort:"Set Cells To Sort", s_loc_set_value_to:"Set Value To", s_loc_set_to_link_format:"Set to Link format", s_loc_setXclear_move_from:"Set/Clear Move From", 
s_loc_show_cell_settings:"Show Cell Settings", s_loc_show_sheet_settings:"Show Sheet Settings", s_loc_show_in_new_browser_window:"Show in new browser window", s_loc_size:"Size", s_loc_socialcalcXsave_format:"SocialCalc-save format", s_loc_sort:"Sort", s_loc_sort_:"Sort ", s_loc_sort_cells:"Sort Cells", s_loc_swap_colors:"Swap Colors", s_loc_tabXdelimited_format:"Tab-delimited format", s_loc_text:"Text", s_loc_text_horizontal:"Text Horizontal", s_loc_this_is_aXbrXsample:"This is a<br>sample", s_loc_top:"Top", 
s_loc_top_border:"Top Border", s_loc_undone_steps:"UNDONE STEPS", s_loc_url:"URL", s_loc_undo:"Undo", s_loc_unlock_cell:"Unlock Cell", s_loc_unmerge_cells:"Unmerge Cells", s_loc_up:"Up", s_loc_value:"Value", s_loc_vertical:"Vertical", s_loc_wikitext:"Wikitext", s_loc_workspace:"Workspace", s_loc_XnewX:"[New]", s_loc_XnoneX:"[None]", s_loc_Xselect_rangeX:"[select range]", SVStatuslineheight:20, SVStatuslineCSS:"font-size:10px;padding:3px 0px;", FormatNumber_separatorchar:",", FormatNumber_decimalchar:".", 
FormatNumber_defaultCurrency:"$", s_FormatNumber_daynames:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), s_FormatNumber_daynames3:"Sun Mon Tue Wed Thu Fri Sat".split(" "), s_FormatNumber_monthnames:"January February March April May June July August September October November December".split(" "), s_FormatNumber_monthnames3:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), s_FormatNumber_am:"AM", s_FormatNumber_am1:"A", s_FormatNumber_pm:"PM", s_FormatNumber_pm1:"P", 
s_parseerrexponent:"Improperly formed number exponent", s_parseerrchar:"Unexpected character in formula", s_parseerrstring:"Improperly formed string", s_parseerrspecialvalue:"Improperly formed special value", s_parseerrtwoops:"Error in formula (two operators inappropriately in a row)", s_parseerrmissingopenparen:"Missing open parenthesis in list with comma(s). ", s_parseerrcloseparennoopen:"Closing parenthesis without open parenthesis. ", s_parseerrmissingcloseparen:"Missing close parenthesis. ", 
s_parseerrmissingoperand:"Missing operand. ", s_parseerrerrorinformula:"Error in formula.", s_calcerrerrorvalueinformula:"Error value in formula", s_parseerrerrorinformulabadval:"Error in formula resulting in bad value", s_formularangeresult:"Formula results in range value:", s_calcerrnumericnan:"Formula results in an bad numeric value", s_calcerrnumericoverflow:"Numeric overflow", s_sheetunavailable:"Sheet unavailable:", s_calcerrcellrefmissing:"Cell reference missing when expected.", s_calcerrsheetnamemissing:"Sheet name missing when expected.", 
s_circularnameref:"Circular name reference to name", s_calcerrunknownname:"Unknown name", s_calcerrincorrectargstofunction:"Incorrect arguments to function", s_sheetfuncunknownfunction:"Unknown function", s_sheetfunclnarg:"LN argument must be greater than 0", s_sheetfunclog10arg:"LOG10 argument must be greater than 0", s_sheetfunclogsecondarg:"LOG second argument must be numeric greater than 0", s_sheetfunclogfirstarg:"LOG first argument must be greater than 0", s_sheetfuncroundsecondarg:"ROUND second argument must be numeric", 
s_sheetfuncddblife:"DDB life must be greater than 1", s_sheetfuncslnlife:"SLN life must be greater than 1", s_fdef_ABS:"Absolute value function. ", s_fdef_ACOS:"Trigonometric arccosine function. ", s_fdef_AND:"True if all arguments are true. ", s_fdef_ASIN:"Trigonometric arcsine function. ", s_fdef_ATAN:"Trigonometric arctan function. ", s_fdef_ATAN2:"Trigonometric arc tangent function (result is in radians). ", s_fdef_AVERAGE:"Averages the values. ", s_fdef_CHOOSE:"Returns the value specified by the index. The values may be ranges of cells. ", 
s_fdef_COLUMNS:"Returns the number of columns in the range. ", s_fdef_COS:"Trigonometric cosine function (value is in radians). ", s_fdef_COUNT:"Counts the number of numeric values, not blank, text, or error. ", s_fdef_COUNTA:"Counts the number of non-blank values. ", s_fdef_COUNTBLANK:'Counts the number of blank values. (Note: "" is not blank.) ', s_fdef_COUNTIF:'Counts the number of number of cells in the range that meet the criteria. The criteria may be a value ("x", 15, 1+3) or a test (>25). ', 
s_fdef_DATE:'Returns the appropriate date value given numbers for year, month, and day. For example: DATE(2006,2,1) for February 1, 2006. Note: In this program, day "1" is December 31, 1899 and the year 1900 is not a leap year. Some programs use January 1, 1900, as day "1" and treat 1900 as a leap year. In both cases, though, dates on or after March 1, 1900, are the same. ', s_fdef_DAVERAGE:"Averages the values in the specified field in records that meet the criteria. ", s_fdef_DAY:"Returns the day of month for a date value. ", 
s_fdef_DCOUNT:"Counts the number of numeric values, not blank, text, or error, in the specified field in records that meet the criteria. ", s_fdef_DCOUNTA:"Counts the number of non-blank values in the specified field in records that meet the criteria. ", s_fdef_DDB:"Returns the amount of depreciation at the given period of time (the default factor is 2 for double-declining balance).   ", s_fdef_DEGREES:"Converts value in radians into degrees. ", s_fdef_DGET:"Returns the value of the specified field in the single record that meets the criteria. ", 
s_fdef_DMAX:"Returns the maximum of the numeric values in the specified field in records that meet the criteria. ", s_fdef_DMIN:"Returns the maximum of the numeric values in the specified field in records that meet the criteria. ", s_fdef_DPRODUCT:"Returns the result of multiplying the numeric values in the specified field in records that meet the criteria. ", s_fdef_DSTDEV:"Returns the sample standard deviation of the numeric values in the specified field in records that meet the criteria. ", s_fdef_DSTDEVP:"Returns the standard deviation of the numeric values in the specified field in records that meet the criteria. ", 
s_fdef_DSUM:"Returns the sum of the numeric values in the specified field in records that meet the criteria. ", s_fdef_DVAR:"Returns the sample variance of the numeric values in the specified field in records that meet the criteria. ", s_fdef_DVARP:"Returns the variance of the numeric values in the specified field in records that meet the criteria. ", s_fdef_EVEN:"Rounds the value up in magnitude to the nearest even integer. ", s_fdef_EXACT:'Returns "true" if the values are exactly the same, including case, type, etc. ', 
s_fdef_EXP:"Returns e raised to the value power. ", s_fdef_FACT:"Returns factorial of the value. ", s_fdef_FALSE:'Returns the logical value "false". ', s_fdef_FIND:'Returns the starting position within string2 of the first occurrence of string1 at or after "start". If start is omitted, 1 is assumed. ', s_fdef_FV:"Returns the future value of repeated payments of money invested at the given rate for the specified number of periods, with optional present value (default 0) and payment type (default 0 = at end of period, 1 = beginning of period). ", 
s_fdef_HLOOKUP:"Look for the matching value for the given value in the range and return the corresponding value in the cell specified by the row offset. If rangelookup is 1 (the default) and not 0, match if within numeric brackets (match<=value) instead of exact match. ", s_fdef_HOUR:"Returns the hour portion of a time or date/time value. ", s_fdef_IF:"Results in true-value if logical-expression is TRUE or non-zero, otherwise results in false-value. ", s_fdef_INDEX:"Returns a cell or range reference for the specified row and column in the range. If range is 1-dimensional, then only one of rownum or colnum are needed. If range is 2-dimensional and rownum or colnum are zero, a reference to the range of just the specified column or row is returned. You can use the returned reference value in a range, e.g., sum(A1:INDEX(A2:A10,4)). ", 
s_fdef_INT:"Returns the value rounded down to the nearest integer (towards -infinity). ", s_fdef_IRR:"Returns the interest rate at which the cash flows in the range have a net present value of zero. Uses an iterative process that will return #NUM! error if it does not converge. There may be more than one possible solution. Providing the optional guess value may help in certain situations where it does not converge or finds an inappropriate solution (the default guess is 10%). ", s_fdef_ISBLANK:'Returns "true" if the value is a reference to a blank cell. ', 
s_fdef_ISERR:'Returns "true" if the value is of type "Error" but not "NA". ', s_fdef_ISERROR:'Returns "true" if the value is of type "Error". ', s_fdef_ISLOGICAL:'Returns "true" if the value is of type "Logical" (true/false). ', s_fdef_ISNA:'Returns "true" if the value is the error type "NA". ', s_fdef_ISNONTEXT:'Returns "true" if the value is not of type "Text". ', s_fdef_ISNUMBER:'Returns "true" if the value is of type "Number" (including logical values). ', s_fdef_ISTEXT:'Returns "true" if the value is of type "Text". ', 
s_fdef_LEFT:"Returns the specified number of characters from the text value. If count is omitted, 1 is assumed. ", s_fdef_LEN:"Returns the number of characters in the text value. ", s_fdef_LN:"Returns the natural logarithm of the value. ", s_fdef_LOG:"Returns the logarithm of the value using the specified base. ", s_fdef_LOG10:"Returns the base 10 logarithm of the value. ", s_fdef_LOWER:"Returns the text value with all uppercase characters converted to lowercase. ", s_fdef_MATCH:"Look for the matching value for the given value in the range and return position (the first is 1) in that range. If rangelookup is 1 (the default) and not 0, match if within numeric brackets (match<=value) instead of exact match. If rangelookup is -1, act like 1 but the bracket is match>=value. ", 
s_fdef_MAX:"Returns the maximum of the numeric values. ", s_fdef_MID:"Returns the specified number of characters from the text value starting from the specified position. ", s_fdef_MIN:"Returns the minimum of the numeric values. ", s_fdef_MINUTE:"Returns the minute portion of a time or date/time value. ", s_fdef_MOD:"Returns the remainder of the first value divided by the second. ", s_fdef_MONTH:"Returns the month part of a date value. ", s_fdef_N:"Returns the value if it is a numeric value otherwise an error. ", 
s_fdef_NA:"Returns the #N/A error value which propagates through most operations. ", s_fdef_NOT:"Returns FALSE if value is true, and TRUE if it is false. ", s_fdef_NOW:"Returns the current date/time. ", s_fdef_NPER:"Returns the number of periods at which payments invested each period at the given rate with optional future value (default 0) and payment type (default 0 = at end of period, 1 = beginning of period) has the given present value. ", s_fdef_NPV:"Returns the net present value of cash flows (which may be individual values and/or ranges) at the given rate. The flows are positive if income, negative if paid out, and are assumed at the end of each period. ", 
s_fdef_ODD:"Rounds the value up in magnitude to the nearest odd integer. ", s_fdef_OR:"True if any argument is true ", s_fdef_PI:"The value 3.1415926... ", s_fdef_PMT:"Returns the amount of each payment that must be invested at the given rate for the specified number of periods to have the specified present value, with optional future value (default 0) and payment type (default 0 = at end of period, 1 = beginning of period). ", s_fdef_POWER:"Returns the first value raised to the second value power. ", 
s_fdef_PRODUCT:"Returns the result of multiplying the numeric values. ", s_fdef_PROPER:"Returns the text value with the first letter of each word converted to uppercase and the others to lowercase. ", s_fdef_PV:"Returns the present value of the given number of payments each invested at the given rate, with optional future value (default 0) and payment type (default 0 = at end of period, 1 = beginning of period). ", s_fdef_RADIANS:"Converts value in degrees into radians. ", s_fdef_RATE:"Returns the rate at which the given number of payments each invested at the given rate has the specified present value, with optional future value (default 0) and payment type (default 0 = at end of period, 1 = beginning of period). Uses an iterative process that will return #NUM! error if it does not converge. There may be more than one possible solution. Providing the optional guess value may help in certain situations where it does not converge or finds an inappropriate solution (the default guess is 10%). ", 
s_fdef_REPLACE:"Returns text1 with the specified number of characters starting from the specified position replaced by text2. ", s_fdef_REPT:"Returns the text repeated the specified number of times. ", s_fdef_RIGHT:"Returns the specified number of characters from the text value starting from the end. If count is omitted, 1 is assumed. ", s_fdef_ROUND:"Rounds the value to the specified number of decimal places. If precision is negative, then round to powers of 10. The default precision is 0 (round to integer). ", 
s_fdef_ROWS:"Returns the number of rows in the range. ", s_fdef_SECOND:"Returns the second portion of a time or date/time value (truncated to an integer). ", s_fdef_SIN:"Trigonometric sine function (value is in radians) ", s_fdef_SLN:"Returns the amount of depreciation at each period of time using the straight-line method. ", s_fdef_SQRT:"Square root of the value ", s_fdef_STDEV:"Returns the sample standard deviation of the numeric values. ", s_fdef_STDEVP:"Returns the standard deviation of the numeric values. ", 
s_fdef_SUBSTITUTE:'Returns text1 with the all occurrences of oldtext replaced by newtext. If "occurrence" is present, then only that occurrence is replaced. ', s_fdef_SUM:"Adds the numeric values. The values to the sum function may be ranges in the form similar to A1:B5. ", s_fdef_SUMIF:'Sums the numeric values of cells in the range that meet the criteria. The criteria may be a value ("x", 15, 1+3) or a test (>25). If range2 is present, then range1 is tested and the corresponding range2 value is summed. ', 
s_fdef_SYD:"Depreciation by Sum of Year's Digits method. ", s_fdef_T:"Returns the text value or else a null string. ", s_fdef_TAN:"Trigonometric tangent function (value is in radians) ", s_fdef_TIME:"Returns the time value given the specified hour, minute, and second. ", s_fdef_TODAY:'Returns the current date (an integer). Note: In this program, day "1" is December 31, 1899 and the year 1900 is not a leap year. Some programs use January 1, 1900, as day "1" and treat 1900 as a leap year. In both cases, though, dates on or after March 1, 1900, are the same. ', 
s_fdef_TRIM:"Returns the text value with leading, trailing, and repeated spaces removed. ", s_fdef_TRUE:'Returns the logical value "true". ', s_fdef_TRUNC:"Truncates the value to the specified number of decimal places. If precision is negative, truncate to powers of 10. ", s_fdef_UPPER:"Returns the text value with all lowercase characters converted to uppercase. ", s_fdef_VALUE:"Converts the specified text value into a numeric value. Various forms that look like numbers (including digits followed by %, forms that look like dates, etc.) are handled. This may not handle all of the forms accepted by other spreadsheets and may be locale dependent. ", 
s_fdef_VAR:"Returns the sample variance of the numeric values. ", s_fdef_VARP:"Returns the variance of the numeric values. ", s_fdef_VLOOKUP:"Look for the matching value for the given value in the range and return the corresponding value in the cell specified by the column offset. If rangelookup is 1 (the default) and not 0, match if within numeric brackets (match>=value) instead of exact match. ", s_fdef_WEEKDAY:"Returns the day of week specified by the date value. If type is 1 (the default), Sunday is day and Saturday is day 7. If type is 2, Monday is day 1 and Sunday is day 7. If type is 3, Monday is day 0 and Sunday is day 6. ", 
s_fdef_YEAR:"Returns the year part of a date value. ", s_fdef_SUMPRODUCT:"Sums the pairwise products of 2 or more ranges. The ranges must be of equal length.", s_fdef_CEILING:"Rounds the given number up to the nearest integer or multiple of significance. Significance is the value to whose multiple of ten the value is to be rounded up (.01, .1, 1, 10, etc.)", s_fdef_FLOOR:"Rounds the given number down to the nearest multiple of significance. Significance is the value to whose multiple of ten the number is to be rounded down (.01, .1, 1, 10, etc.)", 
s_farg_v:"value", s_farg_vn:"value1, value2, ...", s_farg_xy:"valueX, valueY", s_farg_choose:"index, value1, value2, ...", s_farg_range:"range", s_farg_rangec:"range, criteria", s_farg_date:"year, month, day", s_farg_dfunc:"databaserange, fieldname, criteriarange", s_farg_ddb:"cost, salvage, lifetime, period, [factor]", s_farg_find:"string1, string2, [start]", s_farg_fv:"rate, n, payment, [pv, [paytype]]", s_farg_hlookup:"value, range, row, [rangelookup]", s_farg_iffunc:"logical-expression, true-value, [false-value]", 
s_farg_index:"range, rownum, colnum", s_farg_irr:"range, [guess]", s_farg_tc:"text, count", s_farg_log:"value, base", s_farg_match:"value, range, [rangelookup]", s_farg_mid:"text, start, length", s_farg_nper:"rate, payment, pv, [fv, [paytype]]", s_farg_npv:"rate, value1, value2, ...", s_farg_pmt:"rate, n, pv, [fv, [paytype]]", s_farg_pv:"rate, n, payment, [fv, [paytype]]", s_farg_rate:"n, payment, pv, [fv, [paytype, [guess]]]", s_farg_replace:"text1, start, length, text2", s_farg_vp:"value, [precision]", 
s_farg_valpre:"value, precision", s_farg_csl:"cost, salvage, lifetime", s_farg_cslp:"cost, salvage, lifetime, period", s_farg_subs:"text1, oldtext, newtext, [occurrence]", s_farg_sumif:"range1, criteria, [range2]", s_farg_hms:"hour, minute, second", s_farg_txt:"text", s_farg_vlookup:"value, range, col, [rangelookup]", s_farg_weekday:"date, [type]", s_farg_dt:"date", s_farg_rangen:"range1, range2, ...", s_farg_vsig:"value, [significance]", function_classlist:"all stat lookup datetime financial test math text gui action".split(" "), 
s_fclass_all:"All", s_fclass_stat:"Statistics", s_fclass_lookup:"Lookup", s_fclass_datetime:"Date & Time", s_fclass_financial:"Financial", s_fclass_test:"Test", s_fclass_math:"Math", s_fclass_text:"Text", s_fclass_action:"Email & Copy", s_fclass_gui:"Button & Input", lastone:null};
SocialCalc.ConstantsDefaultClasses = {defaultComment:"", defaultCommentNoGrid:"", defaultHighlightTypeCursor:"", defaultHighlightTypeRange:"", defaultColname:"", defaultSelectedColname:"", defaultRowname:"", defaultSelectedRowname:"", defaultUpperLeft:"", defaultSkippedCell:"", defaultPaneDivider:"", cteGriddiv:"", defaultInputEcho:{classname:"", style:"filter:alpha(opacity=90);opacity:.9;"}, TCmain:"", TCendcap:"", TCpaneslider:"", TClessbutton:"", TCmorebutton:"", TCscrollarea:"", TCthumb:"", TCPStrackingline:"", 
TCTDFSthumbstatus:"", TDpopupElement:""};
SocialCalc.ConstantsSetClasses = function(a) {
  var b = SocialCalc.ConstantsDefaultClasses, c = SocialCalc.Constants, d;
  a = a || "";
  for (d in b) {
    "string" == typeof b[d] ? (c[d + "Class"] = a + (b[d] || d), void 0 !== c[d + "Style"] && (c[d + "Style"] = "")) : "object" == typeof b[d] && (c[d + "Class"] = a + (b[d].classname || d), c[d + "Style"] = b[d].style);
  }
};
SocialCalc.ConstantsSetImagePrefix = function(a) {
  var b = SocialCalc.Constants, c;
  for (c in b) {
    "string" == typeof b[c] && (b[c] = b[c].replace(b.defaultImagePrefix, a));
  }
  b.defaultImagePrefix = a;
};
SocialCalc || (SocialCalc = {});
SocialCalc.Callbacks = {expand_wiki:null, expand_markup:function(a, b, c) {
  return SocialCalc.default_expand_markup(a, b, c);
}, MakePageLink:null, NormalizeSheetName:null};
SocialCalc.Cell = function(a) {
  this.coord = a;
  this.datavalue = "";
  this.datatype = null;
  this.formula = "";
  this.valuetype = "b";
  this.readonly = !1;
};
SocialCalc.CellProperties = {coord:1, datavalue:1, datatype:1, formula:1, valuetype:1, errors:1, comment:1, readonly:1, bt:2, br:2, bb:2, bl:2, layout:2, font:2, color:2, bgcolor:2, cellformat:2, nontextvalueformat:2, textvalueformat:2, colspan:2, rowspan:2, cssc:2, csss:2, mod:2, displaystring:3, parseinfo:3, hcolspan:3, hrowspan:3};
SocialCalc.CellPropertiesTable = {bt:"borderstyle", br:"borderstyle", bb:"borderstyle", bl:"borderstyle", layout:"layout", font:"font", color:"color", bgcolor:"color", cellformat:"cellformat", nontextvalueformat:"valueformat", textvalueformat:"valueformat"};
SocialCalc.Sheet = function() {
  SocialCalc.ResetSheet(this);
  this.statuscallbackparams = this.statuscallback = null;
};
SocialCalc.ResetSheet = function(a, b) {
  a.cells = {};
  a.attribs = {lastcol:1, lastrow:1, defaultlayout:0, usermaxcol:0, usermaxrow:0};
  a.rowattribs = {hide:{}, height:{}};
  a.colattribs = {width:{}, hide:{}};
  a.names = {};
  a.layouts = [];
  a.layouthash = {};
  a.fonts = [];
  a.fonthash = {};
  a.colors = [];
  a.colorhash = {};
  a.borderstyles = [];
  a.borderstylehash = {};
  a.cellformats = [];
  a.cellformathash = {};
  a.valueformats = [];
  a.valueformathash = {};
  a.matched_cells = [];
  a.selected_search_cell = void 0;
  a.copiedfrom = "";
  a.changes = new SocialCalc.UndoStack;
  a.renderneeded = !1;
  a.changedrendervalues = !0;
  a.recalcchangedavalue = !1;
  a.hiddencolrow = "";
  a.sci = new SocialCalc.SheetCommandInfo(a);
  a.ioEventTree = {};
  a.ioParameterList = {};
};
SocialCalc.Sheet.prototype.ResetSheet = function() {
  SocialCalc.ResetSheet(this);
};
SocialCalc.Sheet.prototype.AddCell = function(a) {
  return this.cells[a.coord] = a;
};
SocialCalc.Sheet.prototype.LastCol = function() {
  var a = 1, b;
  for (b in this.cells) {
    var c = SocialCalc.coordToCr(b);
    c.col > a && (a = c.col);
  }
  return a;
};
SocialCalc.Sheet.prototype.LastRow = function() {
  var a = 1, b;
  for (b in this.cells) {
    var c = SocialCalc.coordToCr(b);
    c.row > a && (a = c.row);
  }
  return a;
};
SocialCalc.Sheet.prototype.GetAssuredCell = function(a) {
  return this.cells[a] || this.AddCell(new SocialCalc.Cell(a));
};
SocialCalc.Sheet.prototype.ParseSheetSave = function(a) {
  SocialCalc.ParseSheetSave(a, this);
};
SocialCalc.Sheet.prototype.CellFromStringParts = function(a, b, c) {
  return SocialCalc.CellFromStringParts(this, a, b, c);
};
SocialCalc.Sheet.prototype.CreateSheetSave = function(a, b) {
  return SocialCalc.CreateSheetSave(this, a, b);
};
SocialCalc.Sheet.prototype.CellToString = function(a) {
  return SocialCalc.CellToString(this, a);
};
SocialCalc.Sheet.prototype.CanonicalizeSheet = function(a) {
  return SocialCalc.CanonicalizeSheet(this, a);
};
SocialCalc.Sheet.prototype.EncodeCellAttributes = function(a) {
  return SocialCalc.EncodeCellAttributes(this, a);
};
SocialCalc.Sheet.prototype.EncodeSheetAttributes = function() {
  return SocialCalc.EncodeSheetAttributes(this);
};
SocialCalc.Sheet.prototype.DecodeCellAttributes = function(a, b, c) {
  return SocialCalc.DecodeCellAttributes(this, a, b, c);
};
SocialCalc.Sheet.prototype.DecodeSheetAttributes = function(a) {
  return SocialCalc.DecodeSheetAttributes(this, a);
};
SocialCalc.Sheet.prototype.ScheduleSheetCommands = function(a, b) {
  return SocialCalc.ScheduleSheetCommands(this, a, b);
};
SocialCalc.Sheet.prototype.SheetUndo = function() {
  return SocialCalc.SheetUndo(this);
};
SocialCalc.Sheet.prototype.SheetRedo = function() {
  return SocialCalc.SheetRedo(this);
};
SocialCalc.Sheet.prototype.CreateAuditString = function() {
  return SocialCalc.CreateAuditString(this);
};
SocialCalc.Sheet.prototype.GetStyleNum = function(a, b) {
  return SocialCalc.GetStyleNum(this, a, b);
};
SocialCalc.Sheet.prototype.GetStyleString = function(a, b) {
  return SocialCalc.GetStyleString(this, a, b);
};
SocialCalc.Sheet.prototype.RecalcSheet = function() {
  return SocialCalc.RecalcSheet(this);
};
SocialCalc.ParseSheetSave = function(a, b) {
  var c = a.split(/\r\n|\n/), d = [], e, f, g, l, h = SocialCalc.Constants;
  for (e = 0;e < c.length;e++) {
    switch(d = c[e], d = d.split(":"), d[0]) {
      case "cell":
        g = b.GetAssuredCell(d[1]);
        f = 2;
        b.CellFromStringParts(g, d, f);
        break;
      case "col":
        l = d[1];
        for (f = 2;g = d[f++];) {
          switch(g) {
            case "w":
              b.colattribs.width[l] = d[f++];
              break;
            case "hide":
              b.colattribs.hide[l] = d[f++];
              break;
            default:
              throw h.s_pssUnknownColType + " '" + g + "'";;
          }
        }
        break;
      case "row":
        l = d[1] - 0;
        for (f = 2;g = d[f++];) {
          switch(g) {
            case "h":
              b.rowattribs.height[l] = d[f++] - 0;
              break;
            case "hide":
              b.rowattribs.hide[l] = d[f++];
              break;
            default:
              throw h.s_pssUnknownRowType + " '" + g + "'";;
          }
        }
        break;
      case "sheet":
        l = b.attribs;
        for (f = 1;g = d[f++];) {
          switch(g) {
            case "c":
              l.lastcol = d[f++] - 0;
              break;
            case "r":
              l.lastrow = d[f++] - 0;
              break;
            case "w":
              l.defaultcolwidth = d[f++] + "";
              break;
            case "h":
              l.defaultrowheight = d[f++] - 0;
              break;
            case "tf":
              l.defaulttextformat = d[f++] - 0;
              break;
            case "ntf":
              l.defaultnontextformat = d[f++] - 0;
              break;
            case "layout":
              l.defaultlayout = d[f++] - 0;
              break;
            case "font":
              l.defaultfont = d[f++] - 0;
              break;
            case "tvf":
              l.defaulttextvalueformat = d[f++] - 0;
              break;
            case "ntvf":
              l.defaultnontextvalueformat = d[f++] - 0;
              break;
            case "color":
              l.defaultcolor = d[f++] - 0;
              break;
            case "bgcolor":
              l.defaultbgcolor = d[f++] - 0;
              break;
            case "circularreferencecell":
              l.circularreferencecell = d[f++];
              break;
            case "recalc":
              l.recalc = d[f++];
              break;
            case "needsrecalc":
              l.needsrecalc = d[f++];
              break;
            case "usermaxcol":
              l.usermaxcol = d[f++] - 0;
              break;
            case "usermaxrow":
              l.usermaxrow = d[f++] - 0;
              break;
            default:
              f += 1;
          }
        }
        break;
      case "name":
        f = SocialCalc.decodeFromSave(d[1]).toUpperCase();
        b.names[f] = {desc:SocialCalc.decodeFromSave(d[2])};
        b.names[f].definition = SocialCalc.decodeFromSave(d[3]);
        break;
      case "layout":
        d = c[e].match(/^layout\:(\d+)\:(.+)$/);
        b.layouts[d[1] - 0] = d[2];
        b.layouthash[d[2]] = d[1] - 0;
        break;
      case "font":
        b.fonts[d[1] - 0] = d[2];
        b.fonthash[d[2]] = d[1] - 0;
        break;
      case "color":
        b.colors[d[1] - 0] = d[2];
        b.colorhash[d[2]] = d[1] - 0;
        break;
      case "border":
        b.borderstyles[d[1] - 0] = d[2];
        b.borderstylehash[d[2]] = d[1] - 0;
        break;
      case "cellformat":
        f = SocialCalc.decodeFromSave(d[2]);
        b.cellformats[d[1] - 0] = f;
        b.cellformathash[f] = d[1] - 0;
        break;
      case "valueformat":
        f = SocialCalc.decodeFromSave(d[2]);
        b.valueformats[d[1] - 0] = f;
        b.valueformathash[f] = d[1] - 0;
        break;
      case "version":
        break;
      case "copiedfrom":
        b.copiedfrom = d[1] + ":" + d[2];
        break;
      case "clipboardrange":
      ;
      case "clipboard":
        break;
      case "":
        break;
      default:
        throw alert(h.s_pssUnknownLineType + " '" + d[0] + "'"), h.s_pssUnknownLineType + " '" + d[0] + "'";;
    }
  }
};
SocialCalc.CellFromStringParts = function(a, b, c, d) {
  for (;a = c[d++];) {
    switch(a) {
      case "v":
        b.datavalue = SocialCalc.decodeFromSave(c[d++]) - 0;
        b.datatype = "v";
        b.valuetype = "n";
        break;
      case "t":
        b.datavalue = SocialCalc.decodeFromSave(c[d++]);
        b.datatype = "t";
        b.valuetype = SocialCalc.Constants.textdatadefaulttype;
        break;
      case "vt":
        a = c[d++];
        b.valuetype = a;
        "n" == a.charAt(0) ? (b.datatype = "v", b.datavalue = SocialCalc.decodeFromSave(c[d++]) - 0) : (b.datatype = "t", b.datavalue = SocialCalc.decodeFromSave(c[d++]));
        break;
      case "vtf":
        a = c[d++];
        b.valuetype = a;
        "n" == a.charAt(0) ? b.datavalue = SocialCalc.decodeFromSave(c[d++]) - 0 : b.datavalue = SocialCalc.decodeFromSave(c[d++]);
        b.formula = SocialCalc.decodeFromSave(c[d++]);
        b.datatype = "f";
        break;
      case "vtc":
        a = c[d++];
        b.valuetype = a;
        "n" == a.charAt(0) ? b.datavalue = SocialCalc.decodeFromSave(c[d++]) - 0 : b.datavalue = SocialCalc.decodeFromSave(c[d++]);
        b.formula = SocialCalc.decodeFromSave(c[d++]);
        b.datatype = "c";
        break;
      case "ro":
        ro = SocialCalc.decodeFromSave(c[d++]);
        b.readonly = "yes" == ro.toLowerCase();
        break;
      case "e":
        b.errors = SocialCalc.decodeFromSave(c[d++]);
        break;
      case "b":
        b.bt = c[d++] - 0;
        b.br = c[d++] - 0;
        b.bb = c[d++] - 0;
        b.bl = c[d++] - 0;
        break;
      case "l":
        b.layout = c[d++] - 0;
        break;
      case "f":
        b.font = c[d++] - 0;
        break;
      case "c":
        b.color = c[d++] - 0;
        break;
      case "bg":
        b.bgcolor = c[d++] - 0;
        break;
      case "cf":
        b.cellformat = c[d++] - 0;
        break;
      case "ntvf":
        b.nontextvalueformat = c[d++] - 0;
        break;
      case "tvf":
        b.textvalueformat = c[d++] - 0;
        break;
      case "colspan":
        b.colspan = c[d++] - 0;
        break;
      case "rowspan":
        b.rowspan = c[d++] - 0;
        break;
      case "cssc":
        b.cssc = c[d++];
        break;
      case "csss":
        b.csss = SocialCalc.decodeFromSave(c[d++]);
        break;
      case "mod":
        d += 1;
        break;
      case "comment":
        b.comment = SocialCalc.decodeFromSave(c[d++]);
        break;
      default:
        throw SocialCalc.Constants.s_cfspUnknownCellType + " '" + a + "'";;
    }
  }
};
SocialCalc.sheetfields = "defaultrowheight defaultcolwidth circularreferencecell recalc needsrecalc usermaxcol usermaxrow".split(" ");
SocialCalc.sheetfieldsshort = "h w circularreferencecell recalc needsrecalc usermaxcol usermaxrow".split(" ");
SocialCalc.sheetfieldsxlat = "defaulttextformat defaultnontextformat defaulttextvalueformat defaultnontextvalueformat defaultcolor defaultbgcolor defaultfont defaultlayout".split(" ");
SocialCalc.sheetfieldsxlatshort = "tf ntf tvf ntvf color bgcolor font layout".split(" ");
SocialCalc.sheetfieldsxlatxlt = "cellformat cellformat valueformat valueformat color color font layout".split(" ");
SocialCalc.CreateSheetSave = function(a, b, c) {
  var d, e, f, g, l, h = [];
  a.CanonicalizeSheet(c || SocialCalc.Constants.doCanonicalizeSheet);
  var p = a.xlt;
  e = b ? SocialCalc.ParseRange(b) : {cr1:{row:1, col:1}, cr2:{row:p.maxrow, col:p.maxcol}};
  c = e.cr1;
  e = e.cr2;
  h.push("version:1.5");
  for (f = c.row;f <= e.row;f++) {
    for (g = c.col;g <= e.col;g++) {
      if (l = SocialCalc.crToCoord(g, f), d = a.cells[l]) {
        d = a.CellToString(d), 0 != d.length && (d = "cell:" + l + d, h.push(d));
      }
    }
  }
  for (g = 1;g <= p.maxcol;g++) {
    l = SocialCalc.rcColname(g), a.colattribs.width[l] && h.push("col:" + l + ":w:" + a.colattribs.width[l]), a.colattribs.hide[l] && h.push("col:" + l + ":hide:" + a.colattribs.hide[l]);
  }
  for (f = 1;f <= p.maxrow;f++) {
    a.rowattribs.height[f] && h.push("row:" + f + ":h:" + a.rowattribs.height[f]), a.rowattribs.hide[f] && h.push("row:" + f + ":hide:" + a.rowattribs.hide[f]);
  }
  d = "sheet:c:" + p.maxcol + ":r:" + p.maxrow;
  for (f = 0;f < SocialCalc.sheetfields.length;f++) {
    (g = SocialCalc.encodeForSave(a.attribs[SocialCalc.sheetfields[f]])) && (d += ":" + SocialCalc.sheetfieldsshort[f] + ":" + g);
  }
  for (f = 0;f < SocialCalc.sheetfieldsxlat.length;f++) {
    (g = a.attribs[SocialCalc.sheetfieldsxlat[f]]) && (d += ":" + SocialCalc.sheetfieldsxlatshort[f] + ":" + p[SocialCalc.sheetfieldsxlatxlt[f] + "sxlat"][g]);
  }
  h.push(d);
  for (f = 1;f < p.newborderstyles.length;f++) {
    h.push("border:" + f + ":" + p.newborderstyles[f]);
  }
  for (f = 1;f < p.newcellformats.length;f++) {
    h.push("cellformat:" + f + ":" + SocialCalc.encodeForSave(p.newcellformats[f]));
  }
  for (f = 1;f < p.newcolors.length;f++) {
    h.push("color:" + f + ":" + p.newcolors[f]);
  }
  for (f = 1;f < p.newfonts.length;f++) {
    h.push("font:" + f + ":" + p.newfonts[f]);
  }
  for (f = 1;f < p.newlayouts.length;f++) {
    h.push("layout:" + f + ":" + p.newlayouts[f]);
  }
  for (f = 1;f < p.newvalueformats.length;f++) {
    h.push("valueformat:" + f + ":" + SocialCalc.encodeForSave(p.newvalueformats[f]));
  }
  for (f = 0;f < p.namesorder.length;f++) {
    d = p.namesorder[f], h.push("name:" + SocialCalc.encodeForSave(d).toUpperCase() + ":" + SocialCalc.encodeForSave(a.names[d].desc) + ":" + SocialCalc.encodeForSave(a.names[d].definition));
  }
  b && h.push("copiedfrom:" + SocialCalc.crToCoord(c.col, c.row) + ":" + SocialCalc.crToCoord(e.col, e.row));
  h.push("");
  delete a.xlt;
  return h.join("\n");
};
SocialCalc.CellToString = function(a, b) {
  var c, d, e, f, g, l;
  c = "";
  if (!b) {
    return c;
  }
  d = SocialCalc.encodeForSave(b.datavalue);
  "v" == b.datatype ? c = "n" == b.valuetype ? c + (":v:" + d) : c + (":vt:" + b.valuetype + ":" + d) : "t" == b.datatype ? c = b.valuetype == SocialCalc.Constants.textdatadefaulttype ? c + (":t:" + d) : c + (":vt:" + b.valuetype + ":" + d) : (e = SocialCalc.encodeForSave(b.formula), "f" == b.datatype ? c += ":vtf:" + b.valuetype + ":" + d + ":" + e : "c" == b.datatype && (c += ":vtc:" + b.valuetype + ":" + d + ":" + e));
  b.readonly && (c += ":ro:yes");
  b.errors && (c += ":e:" + SocialCalc.encodeForSave(b.errors));
  d = b.bt || "";
  e = b.br || "";
  f = b.bb || "";
  g = b.bl || "";
  if (a.xlt) {
    l = a.xlt;
    if (d || e || f || g) {
      c += ":b:" + l.borderstylesxlat[d || 0] + ":" + l.borderstylesxlat[e || 0] + ":" + l.borderstylesxlat[f || 0] + ":" + l.borderstylesxlat[g || 0];
    }
    b.layout && (c += ":l:" + l.layoutsxlat[b.layout]);
    b.font && (c += ":f:" + l.fontsxlat[b.font]);
    b.color && (c += ":c:" + l.colorsxlat[b.color]);
    b.bgcolor && (c += ":bg:" + l.colorsxlat[b.bgcolor]);
    b.cellformat && (c += ":cf:" + l.cellformatsxlat[b.cellformat]);
    b.textvalueformat && (c += ":tvf:" + l.valueformatsxlat[b.textvalueformat]);
    b.nontextvalueformat && (c += ":ntvf:" + l.valueformatsxlat[b.nontextvalueformat]);
  } else {
    if (d || e || f || g) {
      c += ":b:" + d + ":" + e + ":" + f + ":" + g;
    }
    b.layout && (c += ":l:" + b.layout);
    b.font && (c += ":f:" + b.font);
    b.color && (c += ":c:" + b.color);
    b.bgcolor && (c += ":bg:" + b.bgcolor);
    b.cellformat && (c += ":cf:" + b.cellformat);
    b.textvalueformat && (c += ":tvf:" + b.textvalueformat);
    b.nontextvalueformat && (c += ":ntvf:" + b.nontextvalueformat);
  }
  b.colspan && (c += ":colspan:" + b.colspan);
  b.rowspan && (c += ":rowspan:" + b.rowspan);
  b.cssc && (c += ":cssc:" + b.cssc);
  b.csss && (c += ":csss:" + SocialCalc.encodeForSave(b.csss));
  b.mod && (c += ":mod:" + b.mod);
  b.comment && (c += ":comment:" + SocialCalc.encodeForSave(b.comment));
  return c;
};
SocialCalc.CanonicalizeSheet = function(a, b) {
  var c, d, e, f, g, l, h, p = 0, q = 0, w = "borderstyle cellformat color font layout valueformat".split(" "), v = {namesorder:[]};
  for (g in a.names) {
    v.namesorder.push(g);
  }
  v.namesorder.sort();
  if (SocialCalc.Constants.doCanonicalizeSheet && b) {
    for (f = 0;f < w.length;f++) {
      g = w[f], v[g + "sUsed"] = {};
    }
    h = v.colorsUsed;
    l = v.borderstylesUsed;
    var s = v.fontsUsed, t = v.layoutsUsed, x = v.cellformatsUsed, m = v.valueformatsUsed;
    for (d in a.cells) {
      e = SocialCalc.coordToCr(d), f = a.cells[d], g = !1, f.valuetype && "b" != f.valuetype && (g = !0), f.color && (h[f.color] = 1, g = !0), f.bgcolor && (h[f.bgcolor] = 1, g = !0), f.bt && (l[f.bt] = 1, g = !0), f.br && (l[f.br] = 1, g = !0), f.bb && (l[f.bb] = 1, g = !0), f.bl && (l[f.bl] = 1, g = !0), f.layout && (t[f.layout] = 1, g = !0), f.font && (s[f.font] = 1, g = !0), f.cellformat && (x[f.cellformat] = 1, g = !0), f.textvalueformat && (m[f.textvalueformat] = 1, g = !0), f.nontextvalueformat && 
      (m[f.nontextvalueformat] = 1, g = !0), g && (e.row > p && (p = e.row), e.col > q && (q = e.col));
    }
    for (h = 0;h < SocialCalc.sheetfieldsxlat.length;h++) {
      (c = a.attribs[SocialCalc.sheetfieldsxlat[h]]) && (v[SocialCalc.sheetfieldsxlatxlt[h] + "sUsed"][c] = 1);
    }
    g = {height:1, hide:1};
    for (c in g) {
      for (e in a.rowattribs[c]) {
        e > p && (p = e);
      }
    }
    g = {hide:1, width:1};
    for (c in g) {
      for (d in a.colattribs[c]) {
        e = SocialCalc.coordToCr(d + "1"), e.col > q && (q = e.col);
      }
    }
    for (f = 0;f < w.length;f++) {
      g = w[f];
      d = [];
      e = v[g + "sUsed"];
      for (c in e) {
        d.push(a[g + "s"][c]);
      }
      d.sort();
      d.unshift("");
      e = [""];
      l = a[g + "hash"];
      for (h = 1;h < d.length;h++) {
        e[l[d[h]]] = h;
      }
      v[g + "sxlat"] = e;
      v["new" + g + "s"] = d;
    }
    v.maxrow = p || 1;
    v.maxcol = q || 1;
  } else {
    for (f = 0;f < w.length;f++) {
      g = w[f];
      v["new" + g + "s"] = a[g + "s"];
      c = a[g + "s"].length;
      e = Array(c);
      e[0] = "";
      for (h = 1;h < c;h++) {
        e[h] = h;
      }
      v[g + "sxlat"] = e;
    }
    v.maxrow = a.attribs.lastrow;
    v.maxcol = a.attribs.lastcol;
  }
  a.xlt = v;
};
SocialCalc.EncodeCellAttributes = function(a, b) {
  var c, d, e = {}, f = function(a) {
    e[a] = {def:!0, val:""};
  }, g = function(a) {
    for (var b = 0;b < a.length;b++) {
      f(a[b]);
    }
  }, l = function(a, b) {
    e[a].def = !1;
    e[a].val = b || "";
  };
  c = function(a, b) {
    "*" != b && (e[a].def = !1, e[a].val = b);
  };
  var h = a.GetAssuredCell(b);
  f("alignhoriz");
  h.cellformat && l("alignhoriz", a.cellformats[h.cellformat]);
  g(["alignvert", "padtop", "padright", "padbottom", "padleft"]);
  h.layout && (parts = a.layouts[h.layout].match(/^padding:\s*(\S+)\s+(\S+)\s+(\S+)\s+(\S+);vertical-align:\s*(\S+);/), c("padtop", parts[1]), c("padright", parts[2]), c("padbottom", parts[3]), c("padleft", parts[4]), c("alignvert", parts[5]));
  g(["fontfamily", "fontlook", "fontsize"]);
  h.font && (parts = a.fonts[h.font].match(/^(\*|\S+? \S+?) (\S+?) (\S.*)$/), c("fontfamily", parts[3]), c("fontsize", parts[2]), c("fontlook", parts[1]));
  f("textcolor");
  h.color && l("textcolor", a.colors[h.color]);
  f("bgcolor");
  h.bgcolor && l("bgcolor", a.colors[h.bgcolor]);
  g(["numberformat", "textformat"]);
  h.nontextvalueformat && l("numberformat", a.valueformats[h.nontextvalueformat]);
  h.textvalueformat && l("textformat", a.valueformats[h.textvalueformat]);
  g(["colspan", "rowspan"]);
  l("colspan", h.colspan || 1);
  l("rowspan", h.rowspan || 1);
  for (c = 0;4 > c;c++) {
    d = "trbl".charAt(c), d = "b" + d, f(d), l(d, h[d] ? a.borderstyles[h[d]] : ""), f(d + "thickness"), f(d + "style"), f(d + "color"), h[d] && (parts = a.borderstyles[h[d]].match(/(\S+)\s+(\S+)\s+(\S.+)/), l(d + "thickness", parts[1]), l(d + "style", parts[2]), l(d + "color", parts[3]));
  }
  g(["cssc", "csss", "mod"]);
  l("cssc", h.cssc || "");
  l("csss", h.csss || "");
  l("mod", h.mod || "n");
  return e;
};
SocialCalc.EncodeSheetAttributes = function(a) {
  var b = a.attribs, c = {}, d = function(a) {
    c[a] = {def:!0, val:""};
  }, e = function(a) {
    for (var b = 0;b < a.length;b++) {
      d(a[b]);
    }
  }, f = function(a, b) {
    c[a].def = !1;
    c[a].val = b || void 0;
  }, g = function(a, b) {
    "*" != b && (c[a].def = !1, c[a].val = b);
  };
  d("colwidth");
  b.defaultcolwidth && f("colwidth", b.defaultcolwidth);
  d("rowheight");
  b.rowheight && f("rowheight", b.defaultrowheight);
  d("textalignhoriz");
  b.defaulttextformat && f("textalignhoriz", a.cellformats[b.defaulttextformat]);
  d("numberalignhoriz");
  b.defaultnontextformat && f("numberalignhoriz", a.cellformats[b.defaultnontextformat]);
  e(["alignvert", "padtop", "padright", "padbottom", "padleft"]);
  b.defaultlayout && (parts = a.layouts[b.defaultlayout].match(/^padding:\s*(\S+)\s+(\S+)\s+(\S+)\s+(\S+);vertical-align:\s*(\S+);/), g("padtop", parts[1]), g("padright", parts[2]), g("padbottom", parts[3]), g("padleft", parts[4]), g("alignvert", parts[5]));
  e(["fontfamily", "fontlook", "fontsize"]);
  b.defaultfont && (parts = a.fonts[b.defaultfont].match(/^(\*|\S+? \S+?) (\S+?) (\S.*)$/), g("fontfamily", parts[3]), g("fontsize", parts[2]), g("fontlook", parts[1]));
  d("textcolor");
  b.defaultcolor && f("textcolor", a.colors[b.defaultcolor]);
  d("bgcolor");
  b.defaultbgcolor && f("bgcolor", a.colors[b.defaultbgcolor]);
  e(["numberformat", "textformat"]);
  b.defaultnontextvalueformat && f("numberformat", a.valueformats[b.defaultnontextvalueformat]);
  b.defaulttextvalueformat && f("textformat", a.valueformats[b.defaulttextvalueformat]);
  d("recalc");
  b.recalc && f("recalc", b.recalc);
  d("usermaxcol");
  b.usermaxcol && f("usermaxcol", b.usermaxcol);
  d("usermaxrow");
  b.usermaxrow && f("usermaxrow", b.usermaxrow);
  return c;
};
SocialCalc.DecodeCellAttributes = function(a, b, c, d) {
  var e, f = a.GetAssuredCell(b), g = !1, l = function(a, b, d) {
    c[a] && (a = c[a].def ? "" : c[a].val, a != (b || "") && p(d + " " + a));
  }, h = "", p = function(a) {
    h && (h += "\n");
    h += "set " + (d || b) + " " + a;
    g = !0;
  };
  l("alignhoriz", a.cellformats[f.cellformat], "cellformat");
  e = c.alignvert.def && c.padtop.def && c.padright.def && c.padbottom.def && c.padleft.def ? "" : "padding:" + (c.padtop.def ? "* " : c.padtop.val + " ") + (c.padright.def ? "* " : c.padright.val + " ") + (c.padbottom.def ? "* " : c.padbottom.val + " ") + (c.padleft.def ? "*" : c.padleft.val) + ";vertical-align:" + (c.alignvert.def ? "*;" : c.alignvert.val + ";");
  e != (a.layouts[f.layout] || "") && p("layout " + e);
  e = c.fontlook.def && c.fontsize.def && c.fontfamily.def ? "" : (c.fontlook.def ? "* " : c.fontlook.val + " ") + (c.fontsize.def ? "* " : c.fontsize.val + " ") + (c.fontfamily.def ? "*" : c.fontfamily.val);
  e != (a.fonts[f.font] || "") && p("font " + e);
  l("textcolor", a.colors[f.color], "color");
  l("bgcolor", a.colors[f.bgcolor], "bgcolor");
  l("numberformat", a.valueformats[f.nontextvalueformat], "nontextvalueformat");
  l("textformat", a.valueformats[f.textvalueformat], "textvalueformat");
  for (i = 0;4 > i;i++) {
    e = "trbl".charAt(i), e = "b" + e, l(e, a.borderstyles[f[e]], e);
  }
  l("cssc", f.cssc, "cssc");
  l("csss", f.csss, "csss");
  c.mod && (e = c.mod.def ? "n" : c.mod.val, e != (f.mod || "n") && ("n" == e && (e = ""), p("mod " + e)));
  return g ? h : null;
};
SocialCalc.DecodeSheetAttributes = function(a, b) {
  var c, d = a.attribs, e = !1, f = function(a, c, d) {
    b[a] && (a = b[a].def ? "" : b[a].val, a != (c || "") && l(d + " " + a));
  }, g = "", l = function(a) {
    g && (g += "\n");
    g += "set sheet " + a;
    e = !0;
  };
  f("colwidth", d.defaultcolwidth, "defaultcolwidth");
  f("rowheight", d.defaultrowheight, "defaultrowheight");
  f("textalignhoriz", a.cellformats[d.defaulttextformat], "defaulttextformat");
  f("numberalignhoriz", a.cellformats[d.defaultnontextformat], "defaultnontextformat");
  c = b.alignvert.def && b.padtop.def && b.padright.def && b.padbottom.def && b.padleft.def ? "" : "padding:" + (b.padtop.def ? "* " : b.padtop.val + " ") + (b.padright.def ? "* " : b.padright.val + " ") + (b.padbottom.def ? "* " : b.padbottom.val + " ") + (b.padleft.def ? "*" : b.padleft.val) + ";vertical-align:" + (b.alignvert.def ? "*;" : b.alignvert.val + ";");
  c != (a.layouts[d.defaultlayout] || "") && l("defaultlayout " + c);
  c = b.fontlook.def && b.fontsize.def && b.fontfamily.def ? "" : (b.fontlook.def ? "* " : b.fontlook.val + " ") + (b.fontsize.def ? "* " : b.fontsize.val + " ") + (b.fontfamily.def ? "*" : b.fontfamily.val);
  c != (a.fonts[d.defaultfont] || "") && l("defaultfont " + c);
  f("textcolor", a.colors[d.defaultcolor], "defaultcolor");
  f("bgcolor", a.colors[d.defaultbgcolor], "defaultbgcolor");
  f("numberformat", a.valueformats[d.defaultnontextvalueformat], "defaultnontextvalueformat");
  f("textformat", a.valueformats[d.defaulttextvalueformat], "defaulttextvalueformat");
  f("recalc", a.attribs.recalc, "recalc");
  f("usermaxcol", a.attribs.usermaxcol, "usermaxcol");
  f("usermaxrow", a.attribs.usermaxrow, "usermaxrow");
  return e ? g : null;
};
SocialCalc.SheetCommandInfo = function(a) {
  this.sheetobj = a;
  this.timerobj = null;
  this.firsttimerdelay = 50;
  this.timerdelay = 1;
  this.maxtimeslice = 100;
  this.saveundo = !1;
  this.CmdExtensionCallbacks = {};
};
SocialCalc.ScheduleSheetCommands = function(a, b, c) {
  var d = a.sci, e = new SocialCalc.Parse(b);
  d.sheetobj.statuscallback && a.statuscallback(d, "cmdstart", "", d.sheetobj.statuscallbackparams);
  c && d.sheetobj.changes.PushChange("");
  d.timerobj = window.setTimeout(function() {
    SocialCalc.SheetCommandsTimerRoutine(d, e, c);
  }, d.firsttimerdelay);
};
SocialCalc.SheetCommandsTimerRoutine = function(a, b, c) {
  var d, e = new Date;
  for (a.timerobj = null;!b.EOF();) {
    if ((d = SocialCalc.ExecuteSheetCommand(a.sheetobj, b, c)) && ("function" == typeof alert ? alert(d) : console.log(d)), b.NextLine(), new Date - e >= a.maxtimeslice) {
      a.timerobj = window.setTimeout(function() {
        SocialCalc.SheetCommandsTimerRoutine(a, b, c);
      }, a.timerdelay);
      return;
    }
  }
  a.sheetobj.statuscallback && a.sheetobj.statuscallback(a, "cmdend", "", a.sheetobj.statuscallbackparams);
};
SocialCalc.ExecuteSheetCommand = function(a, b, c) {
  var d, e, f, g, l, h, p, q, w, v, s, t, x, m, r, u, y, z, A, C, J, O, F, K, I, D, E = a.attribs;
  D = a.changes;
  J = SocialCalc.CellProperties;
  r = SocialCalc.Constants;
  var W = !1;
  v = function() {
    var a = SocialCalc.ParseRange(g);
    q = a.cr1;
    w = a.cr2;
    w.col > E.lastcol && (E.lastcol = w.col);
    w.row > E.lastrow && (E.lastrow = w.row);
  };
  p = "";
  d = b.RestOfStringNoMove();
  c && a.changes.AddDo(d);
  e = b.NextToken();
  switch(e) {
    case "set":
      g = b.NextToken();
      l = b.NextToken();
      f = b.RestOfString();
      b = "set " + g + " " + l;
      if ("sheet" == g) {
        switch(a.renderneeded = !0, l) {
          case "defaultcolwidth":
            c && D.AddUndo(b, E[l]);
            E[l] = f;
            break;
          case "defaultcolor":
          ;
          case "defaultbgcolor":
            c && D.AddUndo(b, a.GetStyleString("color", E[l]));
            E[l] = a.GetStyleNum("color", f);
            break;
          case "defaultlayout":
            c && D.AddUndo(b, a.GetStyleString("layout", E[l]));
            E[l] = a.GetStyleNum("layout", f);
            break;
          case "defaultfont":
            c && D.AddUndo(b, a.GetStyleString("font", E[l]));
            "* * *" == f && (f = "");
            E[l] = a.GetStyleNum("font", f);
            break;
          case "defaulttextformat":
          ;
          case "defaultnontextformat":
            c && D.AddUndo(b, a.GetStyleString("cellformat", E[l]));
            E[l] = a.GetStyleNum("cellformat", f);
            break;
          case "defaulttextvalueformat":
          ;
          case "defaultnontextvalueformat":
            c && D.AddUndo(b, a.GetStyleString("valueformat", E[l]));
            E[l] = a.GetStyleNum("valueformat", f);
            for (h in a.cells) {
              delete a.cells[h].displaystring;
            }
            break;
          case "lastcol":
          ;
          case "lastrow":
            c && D.AddUndo(b, E[l] - 0);
            c = f - 0;
            "number" == typeof c && (E[l] = 0 < c ? c : 1);
            break;
          case "recalc":
            c && D.AddUndo(b, E[l]);
            "off" == f ? E.recalc = f : delete E.recalc;
            break;
          case "usermaxcol":
          ;
          case "usermaxrow":
            c && D.AddUndo(b, E[l] - 0);
            c = f - 0;
            "number" == typeof c && (E[l] = 0 < c ? c : 0);
            break;
          default:
            p = r.s_escUnknownSheetCmd + d;
        }
      } else {
        if (/^[a-z]{1,2}(:[a-z]{1,2})?$/i.test(g)) {
          for (a.renderneeded = !0, g = g.toUpperCase(), h = g.indexOf(":"), 0 <= h ? (q = SocialCalc.coordToCr(g.substring(0, h) + "1"), w = SocialCalc.coordToCr(g.substring(h + 1) + "1")) : w = q = SocialCalc.coordToCr(g + "1"), v = q.col;v <= w.col;v++) {
            "width" == l ? (h = SocialCalc.rcColname(v), c && D.AddUndo("set " + h + " width", a.colattribs.width[h]), 0 < f.length ? a.colattribs.width[h] = f : delete a.colattribs.width[h]) : "hide" == l && (a.hiddencolrow = "col", h = SocialCalc.rcColname(v), c && D.AddUndo("set " + h + " hide", a.colattribs.hide[h]), 0 < f.length ? a.colattribs.hide[h] = f : delete a.colattribs.hide[h]);
          }
        } else {
          if (/^\d+(:\d+)?$/i.test(g)) {
            for (a.renderneeded = !0, g = g.toUpperCase(), h = g.indexOf(":"), 0 <= h ? (q = SocialCalc.coordToCr("A" + g.substring(0, h)), w = SocialCalc.coordToCr("A" + g.substring(h + 1))) : w = q = SocialCalc.coordToCr("A" + g), b = q.row;b <= w.row;b++) {
              "height" == l ? (c && D.AddUndo("set " + b + " height", a.rowattribs.height[b]), 0 < f.length ? a.rowattribs.height[b] = f : delete a.rowattribs.height[b]) : "hide" == l && (a.hiddencolrow = "row", c && D.AddUndo("set " + b + " hide", a.rowattribs.hide[b]), 0 < f.length ? a.rowattribs.hide[b] = f : delete a.rowattribs.hide[b]);
            }
          } else {
            if (/^[a-z]{1,2}\d+(:[a-z]{1,2}\d+)?$/i.test(g)) {
              for (W = !0, v(), q.row != w.row || q.col != w.col || a.celldisplayneeded || a.renderneeded ? (a.renderneeded = !0, a.celldisplayneeded = "") : a.celldisplayneeded = SocialCalc.crToCoord(q.col, q.row), b = q.row;b <= w.row;b++) {
                for (v = q.col;v <= w.col;v++) {
                  h = SocialCalc.crToCoord(v, b), s = a.GetAssuredCell(h), s.readonly && "readonly" != l || (c && D.AddUndo("set " + h + " all", a.CellToString(s)), "value" == l ? (h = f.indexOf(" "), s.datavalue = f.substring(h + 1) - 0, delete s.errors, s.datatype = "v", s.valuetype = f.substring(0, h), delete s.displaystring, delete s.parseinfo, E.needsrecalc = "yes") : "text" == l ? (h = f.indexOf(" "), s.datavalue = SocialCalc.decodeFromSave(f.substring(h + 1)), delete s.errors, s.datatype = 
                  "t", s.valuetype = f.substring(0, h), delete s.displaystring, delete s.parseinfo, E.needsrecalc = "yes") : "formula" == l ? (s.datavalue = 0, delete s.errors, s.datatype = "f", SocialCalc._app && "e#N/A" != s.valuetype && (s.prevvaluetype = s.valuetype), s.valuetype = "e#N/A", s.formula = f, delete s.displaystring, delete s.parseinfo, E.needsrecalc = "yes") : "constant" == l ? (h = f.indexOf(" "), e = f.substring(h + 1).indexOf(" "), s.datavalue = f.substring(h + 1, h + 1 + e) - 
                  0, s.valuetype = f.substring(0, h), "e" == s.valuetype.charAt(0) ? s.errors = s.valuetype.substring(1) : delete s.errors, s.datatype = "c", s.formula = f.substring(h + e + 2), delete s.displaystring, delete s.parseinfo, E.needsrecalc = "yes") : "empty" == l ? (s.datavalue = "", delete s.errors, s.datatype = null, s.formula = "", s.valuetype = "b", delete s.displaystring, delete s.parseinfo, E.needsrecalc = "yes") : "all" == l ? (0 < f.length ? (s = new SocialCalc.Cell(h), a.CellFromStringParts(s, 
                  f.split(":"), 1), a.cells[h] = s) : delete a.cells[h], E.needsrecalc = "yes") : /^b[trbl]$/.test(l) ? (s[l] = a.GetStyleNum("borderstyle", f), a.renderneeded = !0) : "color" == l || "bgcolor" == l ? s[l] = a.GetStyleNum("color", f) : "layout" == l || "cellformat" == l ? s[l] = a.GetStyleNum(l, f) : "font" == l ? ("* * *" == f && (f = ""), s[l] = a.GetStyleNum("font", f)) : "textvalueformat" == l || "nontextvalueformat" == l ? (s[l] = a.GetStyleNum("valueformat", f), delete s.displaystring) : 
                  "cssc" == l ? (f = f.replace(/[^a-zA-Z0-9\-]/g, ""), s.cssc = f) : "csss" == l ? (f = f.replace(/\n/g, ""), s.csss = f) : "mod" == l ? (f = f.replace(/[^yY]/g, "").toLowerCase(), s.mod = f) : "comment" == l ? s.comment = SocialCalc.decodeFromSave(f) : "readonly" == l ? s.readonly = "yes" == f.toLowerCase() : p = r.s_escUnknownSetCoordCmd + d);
                }
              }
            }
          }
        }
      }
      break;
    case "merge":
      a.renderneeded = !0;
      g = b.NextToken();
      f = b.RestOfString();
      v();
      s = a.GetAssuredCell(q.coord);
      if (s.readonly) {
        break;
      }
      c && D.AddUndo("unmerge " + q.coord);
      w.col > q.col ? s.colspan = w.col - q.col + 1 : delete s.colspan;
      w.row > q.row ? s.rowspan = w.row - q.row + 1 : delete s.rowspan;
      a.changedrendervalues = !0;
      break;
    case "unmerge":
      a.renderneeded = !0;
      g = b.NextToken();
      f = b.RestOfString();
      v();
      s = a.GetAssuredCell(q.coord);
      if (s.readonly) {
        break;
      }
      c && D.AddUndo("merge " + q.coord + ":" + SocialCalc.crToCoord(q.col + (s.colspan || 1) - 1, q.row + (s.rowspan || 1) - 1));
      delete s.colspan;
      delete s.rowspan;
      a.changedrendervalues = !0;
      break;
    case "erase":
    ;
    case "cut":
      a.renderneeded = !0;
      a.changedrendervalues = !0;
      g = b.NextToken();
      f = b.RestOfString();
      v();
      c && D.AddUndo("changedrendervalues");
      "cut" == e && (c && D.AddUndo("loadclipboard", SocialCalc.encodeForSave(SocialCalc.Clipboard.clipboard)), SocialCalc.Clipboard.clipboard = SocialCalc.CreateSheetSave(a, g));
      for (b = q.row;b <= w.row;b++) {
        for (v = q.col;v <= w.col;v++) {
          h = SocialCalc.crToCoord(v, b), s = a.GetAssuredCell(h), s.readonly || (c && D.AddUndo("set " + h + " all", a.CellToString(s)), "all" == f ? delete a.cells[h] : "formulas" == f ? (s.datavalue = "", s.datatype = null, s.formula = "", s.valuetype = "b", delete s.errors, delete s.displaystring, delete s.parseinfo, s.comment && delete s.comment) : "formats" == f && (e = new SocialCalc.Cell(h), e.datavalue = s.datavalue, e.datatype = s.datatype, e.formula = s.formula, e.valuetype = s.valuetype, 
          s.comment && (e.comment = s.comment), a.cells[h] = e));
        }
      }
      E.needsrecalc = "yes";
      break;
    case "fillright":
    ;
    case "filldown":
      a.renderneeded = !0;
      a.changedrendervalues = !0;
      c && D.AddUndo("changedrendervalues");
      g = b.NextToken();
      f = b.RestOfString();
      v();
      b = function(b) {
        var c = SocialCalc.GetSpreadsheetControlObject().editor, m = c.range2, d = void 0;
        m.hasrange && (b && 1 == m.bottom - m.top && m.left == m.right ? (b = a.GetAssuredCell(SocialCalc.crToCoord(m.left, m.top)), m = a.GetAssuredCell(SocialCalc.crToCoord(m.left, m.bottom)), "v" != b.datatype && "c" != b.datatype || "v" != m.datatype && "c" != m.datatype || (d = m.datavalue - b.datavalue)) : b || m.left == m.right || (b = a.GetAssuredCell(SocialCalc.crToCoord(m.left, m.top)), m = a.GetAssuredCell(SocialCalc.crToCoord(m.right, m.top)), "v" != b.datatype && "c" != b.datatype || 
        "v" != m.datatype && "c" != m.datatype || (d = m.datavalue - b.datavalue)));
        c.Range2Remove();
        return d;
      };
      "fillright" == e ? (e = !0, t = q.row, x = q.col + 1, y = b(!1)) : (e = !1, t = q.row + 1, x = q.col, y = b(!0));
      for (b = t;b <= w.row;b++) {
        for (v = x;v <= w.col;v++) {
          if (h = SocialCalc.crToCoord(v, b), s = a.GetAssuredCell(h), !s.readonly) {
            c && D.AddUndo("set " + h + " all", a.CellToString(s));
            e ? (m = SocialCalc.crToCoord(q.col, b), r = v - x + 1, d = 0) : (m = SocialCalc.crToCoord(v, q.row), r = 0, d = b - t + 1);
            u = a.GetAssuredCell(m);
            if ("all" == f || "formats" == f) {
              for (l in J) {
                1 != J[l] && (void 0 === typeof u[l] || 3 == J[l] ? delete s[l] : s[l] = u[l]);
              }
            }
            if ("all" == f || "formulas" == f) {
              s.datavalue = void 0 !== y ? u.datavalue + (e ? r : d) * y : u.datavalue, s.datatype = u.datatype, s.valuetype = u.valuetype, s.formula = "f" == s.datatype ? SocialCalc.OffsetFormulaCoords(u.formula, r, d) : u.formula, delete s.parseinfo, s.errors = u.errors;
            }
            delete s.displaystring;
          }
        }
      }
      E.needsrecalc = "yes";
      break;
    case "copy":
      g = b.NextToken();
      f = b.RestOfString();
      c && D.AddUndo("loadclipboard", SocialCalc.encodeForSave(SocialCalc.Clipboard.clipboard));
      SocialCalc.Clipboard.clipboard = SocialCalc.CreateSheetSave(a, g);
      break;
    case "loadclipboard":
      f = b.RestOfString();
      c && D.AddUndo("loadclipboard", SocialCalc.encodeForSave(SocialCalc.Clipboard.clipboard));
      SocialCalc.Clipboard.clipboard = SocialCalc.decodeFromSave(f);
      break;
    case "clearclipboard":
      c && D.AddUndo("loadclipboard", SocialCalc.encodeForSave(SocialCalc.Clipboard.clipboard));
      SocialCalc.Clipboard.clipboard = "";
      break;
    case "paste":
      a.renderneeded = !0;
      a.changedrendervalues = !0;
      c && D.AddUndo("changedrendervalues");
      g = b.NextToken();
      f = b.RestOfString();
      v();
      if (!SocialCalc.Clipboard.clipboard) {
        break;
      }
      e = new SocialCalc.Sheet;
      e.ParseSheetSave(SocialCalc.Clipboard.clipboard);
      y = SocialCalc.ParseRange(e.copiedfrom);
      r = q.col - y.cr1.col;
      d = q.row - y.cr1.row;
      z = Math.max(w.col - q.col + 1, y.cr2.col - y.cr1.col + 1);
      A = Math.max(w.row - q.row + 1, y.cr2.row - y.cr1.row + 1);
      q.col + z - 1 > E.lastcol && (E.lastcol = q.col + z - 1);
      q.row + A - 1 > E.lastrow && (E.lastrow = q.row + A - 1);
      for (b = q.row;b < q.row + A;b++) {
        for (v = q.col;v < q.col + z;v++) {
          if (h = SocialCalc.crToCoord(v, b), s = a.GetAssuredCell(h), !s.readonly) {
            c && D.AddUndo("set " + h + " all", a.CellToString(s));
            m = SocialCalc.crToCoord(y.cr1.col + (v - q.col) % (y.cr2.col - y.cr1.col + 1), y.cr1.row + (b - q.row) % (y.cr2.row - y.cr1.row + 1));
            u = e.GetAssuredCell(m);
            if ("all" == f || "formats" == f) {
              for (l in J) {
                1 != J[l] && (void 0 === typeof u[l] || 3 == J[l] ? delete s[l] : (h = SocialCalc.CellPropertiesTable[l], s[l] = h && u[l] ? a.GetStyleNum(h, e.GetStyleString(h, u[l])) : u[l]));
              }
            }
            if ("all" == f || "formulas" == f) {
              s.datavalue = u.datavalue, s.datatype = u.datatype, s.valuetype = u.valuetype, s.formula = "f" == s.datatype ? SocialCalc.OffsetFormulaCoords(u.formula, r, d) : u.formula, delete s.parseinfo, s.errors = u.errors, u.comment ? s.comment = u.comment : s.comment && delete s.comment;
            }
            delete s.displaystring;
          }
        }
      }
      E.needsrecalc = "yes";
      break;
    case "sort":
      a.renderneeded = !0;
      a.changedrendervalues = !0;
      c && D.AddUndo("changedrendervalues");
      g = b.NextToken();
      v();
      r = [];
      O = [];
      for (v = F = 0;3 >= v;v++) {
        r[v] = b.NextToken(), O[v] = b.NextToken(), r[v] && (F = v);
      }
      d = {};
      e = [];
      K = [];
      I = [];
      for (b = q.row;b <= w.row;b++) {
        for (v = q.col;v <= w.col;v++) {
          h = SocialCalc.crToCoord(v, b), (s = a.cells[h]) ? (d[h] = a.CellToString(s), c && D.AddUndo("set " + h + " all", d[h])) : c && D.AddUndo("set " + h + " all");
        }
        e.push(e.length);
        K.push([]);
        I.push([]);
        slast = I.length - 1;
        for (v = 0;v <= F;v++) {
          h = r[v] + b, s = a.GetAssuredCell(h), h = s.datavalue, s = s.valuetype.charAt(0) || "b", "t" == s && (h = h.toLowerCase()), K[slast].push(h), I[slast].push(s);
        }
      }
      c = function(a, b) {
        var c, m, d, e, f;
        for (c = 0;c <= F;c++) {
          if ("up" == O[c] ? (m = a, d = b) : (m = b, d = a), e = I[m][c], tb = I[d][c], "t" == e ? "t" == tb ? (m = K[m][c], d = K[d][c], f = m > d ? 1 : m < d ? -1 : 0) : "n" == tb ? f = 1 : "b" == tb ? f = "up" == O[c] ? -1 : 1 : "e" == tb && (f = -1) : "n" == e ? "t" == tb ? f = -1 : "n" == tb ? (m = K[m][c] - 0, d = K[d][c] - 0, f = m > d ? 1 : m < d ? -1 : 0) : "b" == tb ? f = "up" == O[c] ? -1 : 1 : "e" == tb && (f = -1) : "e" == e ? "e" == tb ? (m = K[m][c], d = K[d][c], f = m > d ? 1 : m < 
          d ? -1 : 0) : f = "b" == tb ? "up" == O[c] ? -1 : 1 : 1 : "b" == e && (f = "b" == tb ? 0 : "up" == O[c] ? 1 : -1), f) {
            return f;
          }
        }
        return a > b ? 1 : a < b ? -1 : 0;
      };
      e.sort(c);
      for (b = q.row;b <= w.row;b++) {
        for (c = e[b - q.row], v = q.col;v <= w.col;v++) {
          h = SocialCalc.crToCoord(v, b), D = SocialCalc.crToCoord(v, c + q.row), d[D] ? (s = new SocialCalc.Cell(h), a.CellFromStringParts(s, d[D].split(":"), 1), "f" == s.datatype && (s.formula = SocialCalc.OffsetFormulaCoords(s.formula, 0, b - q.row - c)), a.cells[h] = s) : delete a.cells[h];
        }
      }
      E.needsrecalc = "yes";
      break;
    case "insertcol":
    ;
    case "insertrow":
      a.renderneeded = !0;
      a.changedrendervalues = !0;
      a.widgetsClean = !1;
      a.ioEventTree = {};
      a.ioParameterList = {};
      g = b.NextToken();
      f = b.RestOfString();
      v();
      "insertcol" == e ? (r = 1, f = q.col, d = 0, x = 1, C = t = q.col, s = 1, z = E.lastrow, c && D.AddUndo("deletecol " + q.coord)) : (r = 0, d = f = 1, x = q.row, t = 1, C = E.lastcol, z = s = q.row, c && D.AddUndo("deleterow " + q.coord));
      for (b = E.lastrow;b >= x;b--) {
        for (v = E.lastcol;v >= f;v--) {
          m = SocialCalc.crToCoord(v, b), h = SocialCalc.crToCoord(v + r, b + d), a.cells[m] ? a.cells[h] = a.cells[m] : delete a.cells[h];
        }
      }
      for (b = s;b <= z;b++) {
        for (v = t;v <= C;v++) {
          for (l in h = SocialCalc.crToCoord(v, b), s = new SocialCalc.Cell(h), a.cells[h] = s, m = SocialCalc.crToCoord(v - r, b - d), u = a.GetAssuredCell(m), J) {
            2 == J[l] && (s[l] = u[l]);
          }
        }
      }
      for (h in a.cells) {
        (s = a.cells[h]) && "f" == s.datatype && (s.formula = SocialCalc.AdjustFormulaCoords(s.formula, q.col, r, q.row, d)), s && delete s.parseinfo;
      }
      for (y in a.names) {
        a.names[y] && (v = a.names[y].definition, h = "", "=" == v.charAt(0) && (h = "=", v = v.substring(1)), a.names[y].definition = h + SocialCalc.AdjustFormulaCoords(v, q.col, r, q.row, d));
      }
      for (b = E.lastrow;b >= x && "insertrow" == e;b--) {
        for (l in c = b + d, a.rowattribs) {
          h = a.rowattribs[l][b], a.rowattribs[l][c] != h && (h ? a.rowattribs[l][c] = h : delete a.rowattribs[l][c]);
        }
      }
      for (v = E.lastcol;v >= f && "insertcol" == e;v--) {
        for (l in b = SocialCalc.rcColname(v), c = SocialCalc.rcColname(v + r), a.colattribs) {
          h = a.colattribs[l][b], a.colattribs[l][c] != h && (h ? a.colattribs[l][c] = h : delete a.colattribs[l][c]);
        }
      }
      E.lastcol += r;
      E.lastrow += d;
      E.needsrecalc = "yes";
      break;
    case "deletecol":
    ;
    case "deleterow":
      a.renderneeded = !0;
      a.changedrendervalues = !0;
      a.widgetsClean = !1;
      a.ioEventTree = {};
      a.ioParameterList = {};
      g = b.NextToken();
      f = b.RestOfString();
      f = E.lastcol;
      J = E.lastrow;
      v();
      "deletecol" == e ? (r = q.col - w.col - 1, d = 0, x = w.col + 1, t = 1) : (r = 0, d = q.row - w.row - 1, x = 1, t = w.row + 1);
      for (b = t;b <= J - d;b++) {
        for (v = x;v <= f - r;v++) {
          if (h = SocialCalc.crToCoord(v + r, b + d), (s = a.cells[h]) && s.readonly) {
            return p = "Unable to remove " + ("deletecol" == e ? "column" : "row") + ", because cell " + s.coord + " is locked";
          }
        }
      }
      for (b = t;b <= J - d;b++) {
        for (v = x;v <= f - r;v++) {
          h = SocialCalc.crToCoord(v + r, b + d), c && (b < t - d || v < x - r) && ((s = a.cells[h]) ? D.AddUndo("set " + h + " all", a.CellToString(s)) : D.AddUndo("erase " + h + " all")), m = SocialCalc.crToCoord(v, b), (s = a.cells[m]) ? a.cells[h] = s : delete a.cells[h];
        }
      }
      for (h in a.cells) {
        if (s = a.cells[h]) {
          "f" == s.datatype ? (b = s.formula, s.formula = SocialCalc.AdjustFormulaCoords(b, q.col, r, q.row, d), s.formula != b && (delete s.parseinfo, c && -1 != s.formula.indexOf("#REF!") && (v = SocialCalc.coordToCr(h), D.AddUndo("set " + SocialCalc.rcColname(v.col - r) + (v.row - d) + " formula " + b)))) : delete s.parseinfo;
        }
      }
      for (y in a.names) {
        a.names[y] && (v = a.names[y].definition, h = "", "=" == v.charAt(0) && (h = "=", v = v.substring(1)), a.names[y].definition = h + SocialCalc.AdjustFormulaCoords(v, q.col, r, q.row, d));
      }
      for (b = t;b <= J - d && "deleterow" == e;b++) {
        for (l in v = b + d, a.rowattribs) {
          h = a.rowattribs[l][b], a.rowattribs[l][v] != h && (c && D.AddUndo("set " + v + " " + l, a.rowattribs[l][v]), h ? a.rowattribs[l][v] = h : delete a.rowattribs[l][v]);
        }
      }
      for (v = x;v <= f - r && "deletecol" == e;v++) {
        for (l in b = SocialCalc.rcColname(v), s = SocialCalc.rcColname(v + r), a.colattribs) {
          h = a.colattribs[l][b], a.colattribs[l][s] != h && (c && D.AddUndo("set " + s + " " + l, a.colattribs[l][s]), h ? a.colattribs[l][s] = h : delete a.colattribs[l][s]);
        }
      }
      if (c) {
        if ("deletecol" == e) {
          for (v = q.col;v <= w.col;v++) {
            D.AddUndo("insertcol " + SocialCalc.rcColname(q.col));
          }
        } else {
          for (b = q.row;b <= w.row;b++) {
            D.AddUndo("insertrow " + q.row);
          }
        }
      }
      "deletecol" == e ? q.col <= f && (E.lastcol = w.col <= f ? E.lastcol + r : q.col - 1) : q.row <= J && (E.lastrow = w.row <= J ? E.lastrow + d : q.row - 1);
      E.needsrecalc = "yes";
      break;
    case "movepaste":
    ;
    case "moveinsert":
      var N, G;
      a.renderneeded = !0;
      a.changedrendervalues = !0;
      c && D.AddUndo("changedrendervalues");
      g = b.NextToken();
      s = b.NextToken();
      f = b.RestOfString();
      "" == f && (f = "all");
      v();
      G = SocialCalc.coordToCr(s);
      r = G.col - q.col;
      d = G.row - q.row;
      z = w.col - q.col + 1;
      A = w.row - q.row + 1;
      N = {};
      for (b = q.row;b <= w.row;b++) {
        for (v = q.col;v <= w.col;v++) {
          if (h = SocialCalc.crToCoord(v, b), s = a.GetAssuredCell(h), !s.readonly && (c && D.AddUndo("set " + h + " all", a.CellToString(s)), a.cells[h])) {
            N[h] = new SocialCalc.Cell(h);
            for (l in J) {
              void 0 !== typeof s[l] && (N[h][l] = s[l], "all" == f && delete s[l], "formulas" == f && (1 != J[l] && 3 != J[l] || delete s[l]), "formats" == f && 2 == J[l] && delete s[l]);
            }
            "formulas" == f && (s.datavalue = "", s.datatype = null, s.formula = "", s.valuetype = "b");
            "all" == f && delete a.cells[h];
          }
        }
      }
      "moveinsert" == e && (t = x = !1, 0 == d && (G.col < q.col || G.col > w.col) ? G.col < q.col ? (C = q.col - G.col, x = -1) : (G.col -= 1, r = G.col - w.col, C = G.col - w.col, x = 1) : 0 == r && (G.row < q.row || G.row > w.row) ? G.row < q.row ? (C = q.row - G.row, t = -1) : (G.row -= 1, d = G.row - w.row, C = G.row - w.row, t = 1) : e = "movepaste");
      e = {};
      if (t) {
        for (b = 0;b < C;b++) {
          for (v = q.col;v <= w.col;v++) {
            0 > t ? (m = SocialCalc.crToCoord(v, G.row + C - b - 1), h = SocialCalc.crToCoord(v, w.row - b)) : (m = SocialCalc.crToCoord(v, G.row - C + b + 1), h = SocialCalc.crToCoord(v, q.row + b));
            u = a.GetAssuredCell(m);
            c && D.AddUndo("set " + m + " all", a.CellToString(u));
            s = a.GetAssuredCell(h);
            if ("all" == f || "formats" == f) {
              for (l in J) {
                1 != J[l] && (void 0 === typeof u[l] || 3 == J[l] ? delete s[l] : s[l] = u[l]);
              }
            }
            if ("all" == f || "formulas" == f) {
              s.datavalue = u.datavalue, s.datatype = u.datatype, s.valuetype = u.valuetype, s.formula = u.formula, delete s.parseinfo, s.errors = u.errors;
            }
            delete s.displaystring;
            e[m] = h;
          }
        }
      }
      if (x) {
        for (v = 0;v < C;v++) {
          for (b = q.row;b <= w.row;b++) {
            0 > x ? (m = SocialCalc.crToCoord(G.col + C - v - 1, b), h = SocialCalc.crToCoord(w.col - v, b)) : (m = SocialCalc.crToCoord(G.col - C + v + 1, b), h = SocialCalc.crToCoord(q.col + v, b));
            u = a.GetAssuredCell(m);
            c && D.AddUndo("set " + m + " all", a.CellToString(u));
            s = a.GetAssuredCell(h);
            if ("all" == f || "formats" == f) {
              for (l in J) {
                1 != J[l] && (void 0 === typeof u[l] || 3 == J[l] ? delete s[l] : s[l] = u[l]);
              }
            }
            if ("all" == f || "formulas" == f) {
              s.datavalue = u.datavalue, s.datatype = u.datatype, s.valuetype = u.valuetype, s.formula = u.formula, delete s.parseinfo, s.errors = u.errors;
            }
            delete s.displaystring;
            e[m] = h;
          }
        }
      }
      G.col + z - 1 > E.lastcol && (E.lastcol = G.col + z - 1);
      G.row + A - 1 > E.lastrow && (E.lastrow = G.row + A - 1);
      for (b = q.row;b < q.row + A;b++) {
        for (v = q.col;v < q.col + z;v++) {
          if (h = SocialCalc.crToCoord(v + r, b + d), s = a.GetAssuredCell(h), !s.readonly) {
            if (c && D.AddUndo("set " + h + " all", a.CellToString(s)), m = SocialCalc.crToCoord(v, b), e[m] = h, "all" != f || N[m]) {
              (u = N[m]) || (u = a.GetAssuredCell(m));
              if ("all" == f || "formats" == f) {
                for (l in J) {
                  1 != J[l] && (void 0 === typeof u[l] || 3 == J[l] ? delete s[l] : s[l] = u[l]);
                }
              }
              if ("all" == f || "formulas" == f) {
                s.datavalue = u.datavalue, s.datatype = u.datatype, s.valuetype = u.valuetype, s.formula = u.formula, delete s.parseinfo, s.errors = u.errors, u.comment ? s.comment = u.comment : s.comment && delete s.comment;
              }
              delete s.displaystring;
            } else {
              delete a.cells[h];
            }
          }
        }
      }
      for (h in a.cells) {
        if (s = a.cells[h]) {
          "f" == s.datatype ? (b = s.formula, s.formula = SocialCalc.ReplaceFormulaCoords(b, e), s.formula != b && (delete s.parseinfo, c && !e[h] && D.AddUndo("set " + h + " formula " + b))) : delete s.parseinfo;
        }
      }
      for (y in a.names) {
        a.names[y] && (b = v = a.names[y].definition, h = "", "=" == v.charAt(0) && (h = "=", v = v.substring(1)), a.names[y].definition = h + SocialCalc.ReplaceFormulaCoords(v, e), c && a.names[y].definition != b && D.AddUndo("name define " + y + " " + b));
      }
      E.needsrecalc = "yes";
      break;
    case "name":
      g = b.NextToken();
      y = b.NextToken();
      f = b.RestOfString();
      y = y.toUpperCase().replace(/[^A-Z0-9_\.]/g, "");
      if ("" == y) {
        break;
      }
      if ("define" == g) {
        if ("" == f) {
          break;
        }
        a.names[y] ? (c && D.AddUndo("name define " + y + " " + a.names[y].definition), a.names[y].definition = f) : (c && D.AddUndo("name delete " + y), a.names[y] = {definition:f, desc:""});
      } else {
        "desc" == g ? a.names[y] && (c && D.AddUndo("name desc " + y + " " + a.names[y].desc), a.names[y].desc = f) : "delete" == g && (c && (a.names[y].desc && D.AddUndo("name desc " + y + " " + a.names[y].desc), D.AddUndo("name define " + y + " " + a.names[y].definition)), delete a.names[y]);
      }
      E.needsrecalc = "yes";
      break;
    case "recalc":
      E.needsrecalc = "yes";
      a.recalconce = !0;
      break;
    case "redisplay":
      a.renderneeded = !0;
      break;
    case "changedrendervalues":
      a.changedrendervalues = !0;
      break;
    case "pane":
      y = b.NextToken().toUpperCase();
      s = 1;
      h = SocialCalc.GetSpreadsheetControlObject().editor;
      if ("ROW" === y.toUpperCase()) {
        b = parseInt(b.NextToken(), 10);
        "undefined" !== typeof h.context.rowpanes[1] && "number" === typeof h.context.rowpanes[1].first && (s = h.context.rowpanes[1].first);
        for (c && D.AddUndo("pane row " + s);"yes" == h.context.sheetobj.rowattribs.hide[b];) {
          b++;
        }
        (!b || b <= h.context.rowpanes[0].first) && 1 < h.context.rowpanes.length ? h.context.rowpanes.length = 1 : (h.context.SetRowPaneFirstLast(0, h.context.rowpanes[0].first, b - 1), h.context.SetRowPaneFirstLast(1, b, b));
        h.griddiv && (c = document.getElementById("trackingline-vertical")) && (h.griddiv.removeChild(c), h.FitToEditTable());
      } else {
        v = parseInt(b.NextToken(), 10);
        "undefined" !== typeof h.context.colpanes[1] && "number" === typeof h.context.colpanes[1].first && (s = h.context.colpanes[1].first);
        for (c && D.AddUndo("pane col " + s);"yes" == h.context.sheetobj.colattribs.hide[SocialCalc.rcColname(v)];) {
          v++;
        }
        (!v || v <= h.context.colpanes[0].first) && 1 < h.context.colpanes.length ? h.context.colpanes.length = 1 : (h.context.SetColPaneFirstLast(0, h.context.colpanes[0].first, v - 1), h.context.SetColPaneFirstLast(1, v, v));
        h.griddiv && (c = document.getElementById("trackingline-horizon")) && (h.griddiv.removeChild(c), h.FitToEditTable());
      }
      a.renderneeded = !0;
      break;
    case "startcmdextension":
      y = b.NextToken();
      (D = a.sci.CmdExtensionCallbacks[y]) && D.func(y, D.data, a, b, c);
      break;
    case "settimetrigger":
    ;
    case "sendemail":
    ;
    case "submitform":
      break;
    default:
      p = r.s_escUnknownCmd + d;
  }
  SocialCalc._app && (W ? !0 == a.renderneeded && "value" != l && "text" != l && "formula" != l && "constant" != l && "empty" != l ? a.widgetsClean = !1 : "all" == l && (a.widgetsClean = !1) : !0 == a.renderneeded && (a.widgetsClean = !1));
  return p;
};
SocialCalc.SheetUndo = function(a) {
  var b, c = a.changes.TOS(), d = "";
  for (b = c ? c.undo.length - 1 : -1;0 <= b;b--) {
    d && (d += "\n"), d += c.undo[b];
  }
  a.changes.Undo();
  a.ScheduleSheetCommands(d, !1);
};
SocialCalc.SheetRedo = function(a) {
  var b, c;
  if (a.changes.Redo()) {
    b = a.changes.TOS();
    var d = "";
    for (c = 0;b && c < b.command.length;c++) {
      d && (d += "\n"), d += b.command[c];
    }
    a.ScheduleSheetCommands(d, !1);
  } else {
    a.ScheduleSheetCommands("", !1);
  }
};
SocialCalc.CreateAuditString = function(a) {
  var b, c = "", d = a.changes.stack, e = a.changes.tos;
  for (a = 0;a <= e;a++) {
    for (b = 0;b < d[a].command.length;b++) {
      c += d[a].command[b] + "\n";
    }
  }
  return c;
};
SocialCalc.GetStyleNum = function(a, b, c) {
  var d;
  if (0 == c.length) {
    return 0;
  }
  d = a[b + "hash"][c];
  d || (1 > a[b + "s"].length && a[b + "s"].push(""), d = a[b + "s"].push(c) - 1, a[b + "hash"][c] = d, a.changedrendervalues = !0);
  return d;
};
SocialCalc.GetStyleString = function(a, b, c) {
  return c ? a[b + "s"][c] : null;
};
SocialCalc.OffsetFormulaCoords = function(a, b, c) {
  var d, e, f, g, l = "";
  d = SocialCalc.Formula;
  if (!d) {
    return "Need SocialCalc.Formula";
  }
  var h = d.TokenType, p = h.op, q = h.string, h = h.coord, w = d.TokenOpExpansion;
  a = d.ParseFormulaIntoTokens(a);
  for (f = 0;f < a.length;f++) {
    if (e = a[f].type, d = a[f].text, e == h) {
      g = "";
      e = SocialCalc.coordToCr(d);
      "$" != d.charAt(0) ? e.col += b : g += "$";
      g += SocialCalc.rcColname(e.col);
      -1 == d.indexOf("$", 1) ? e.row += c : g += "$";
      g += e.row;
      if (1 > e.row || 1 > e.col) {
        g = "#REF!";
      }
      l += g;
    } else {
      l = e == q ? 0 <= d.indexOf('"') ? l + ('"' + d.replace(/"/, '""') + '"') : l + ('"' + d + '"') : e == p ? l + (w[d] || d) : l + d;
    }
  }
  return l;
};
SocialCalc.AdjustFormulaCoords = function(a, b, c, d, e) {
  var f, g, l = "", h = !1, p = SocialCalc.Formula;
  if (!p) {
    return "Need SocialCalc.Formula";
  }
  var q = p.TokenType, w = q.op, v = q.string, q = q.coord, p = p.TokenOpExpansion;
  parseinfo = SocialCalc.Formula.ParseFormulaIntoTokens(a);
  for (g = 0;g < parseinfo.length;g++) {
    f = parseinfo[g].type;
    a = parseinfo[g].text;
    f == w && ("!" == a ? h = !0 : ":" != a && (h = !1), a = p[a] || a);
    if (f == q) {
      cr = SocialCalc.coordToCr(a);
      (0 > c && cr.col >= b && cr.col < b - c || 0 > e && cr.row >= d && cr.row < d - e) && !h && (cr.col = 0, cr.row = 0);
      h || (cr.col >= b && (cr.col += c), cr.row >= d && (cr.row += e));
      f = "$" == a.charAt(0) ? "$" + SocialCalc.rcColname(cr.col) : SocialCalc.rcColname(cr.col);
      f = -1 != a.indexOf("$", 1) ? f + ("$" + cr.row) : f + cr.row;
      if (1 > cr.row || 1 > cr.col) {
        f = "#REF!";
      }
      a = f;
    } else {
      f == v && (a = 0 <= a.indexOf('"') ? '"' + a.replace(/"/, '""') + '"' : '"' + a + '"');
    }
    l += a;
  }
  return l;
};
SocialCalc.ReplaceFormulaCoords = function(a, b) {
  var c, d, e, f = "", g = !1;
  d = SocialCalc.Formula;
  if (!d) {
    return "Need SocialCalc.Formula";
  }
  var l = d.TokenType, h = l.op, p = l.string, l = l.coord, q = d.TokenOpExpansion;
  parseinfo = SocialCalc.Formula.ParseFormulaIntoTokens(a);
  for (e = 0;e < parseinfo.length;e++) {
    c = parseinfo[e].type, d = parseinfo[e].text, c == h && ("!" == d ? g = !0 : ":" != d && (g = !1), d = q[d] || d), c == l ? (cr = SocialCalc.coordToCr(d), c = SocialCalc.crToCoord(cr.col, cr.row), b[c] && !g && (cr = SocialCalc.coordToCr(b[c]), c = "$" == d.charAt(0) ? "$" + SocialCalc.rcColname(cr.col) : SocialCalc.rcColname(cr.col), d = c = -1 != d.indexOf("$", 1) ? c + ("$" + cr.row) : c + cr.row)) : c == p && (d = 0 <= d.indexOf('"') ? '"' + d.replace(/"/, '""') + '"' : '"' + d + '"'), f += 
    d;
  }
  return f;
};
SocialCalc.RecalcInfo = {sheet:null, currentState:0, state:{idle:0, start_calc:1, order:2, calc:3, start_wait:4, done_wait:5}, recalctimer:null, maxtimeslice:100, timeslicedelay:1, starttime:0, queue:[], LoadSheet:function(a) {
  return!1;
}};
SocialCalc.RecalcData = function() {
  this.inrecalc = !0;
  this.celllist = [];
  this.celllistitem = 0;
  this.calclist = null;
  this.calclistlength = 0;
  this.nextcalc = this.lastcalc = this.firstcalc = null;
  this.count = 0;
  this.checkinfo = {};
};
SocialCalc.RecalcCheckInfo = function() {
  this.oldcoord = null;
  this.parsepos = 0;
  this.inrangestart = this.inrange = !1;
  this.r = this.c = this.r2 = this.r1 = this.c2 = this.c1 = this.cr2 = this.cr1 = null;
};
SocialCalc.RecalcSheet = function(a) {
  var b = SocialCalc.RecalcInfo;
  b.currentState != b.state.idle ? b.queue.push(a) : (delete a.attribs.circularreferencecell, SocialCalc.Formula.FreshnessInfoReset(), SocialCalc.RecalcClearTimeout(), b.sheet = a, b.currentState = b.state.start_calc, b.starttime = new Date, a.statuscallback && a.statuscallback(b, "calcstart", null, a.statuscallbackparams), SocialCalc.RecalcSetTimeout());
};
SocialCalc.RecalcSetTimeout = function() {
  var a = SocialCalc.RecalcInfo;
  a.recalctimer = window.setTimeout(SocialCalc.RecalcTimerRoutine, a.timeslicedelay);
};
SocialCalc.RecalcClearTimeout = function() {
  var a = SocialCalc.RecalcInfo;
  a.recalctimer && (window.clearTimeout(a.recalctimer), a.recalctimer = null);
};
SocialCalc.RecalcLoadedSheet = function(a, b, c, d) {
  var e = SocialCalc.RecalcInfo, f = SocialCalc.Formula;
  a = SocialCalc.Formula.AddSheetToCache(a || f.SheetCache.waitingForLoading, b, d);
  c && a && "off" != a.attribs.recalc && (a.previousrecalcsheet = e.sheet, e.sheet = a, e.currentState = e.state.start_calc);
  f.SheetCache.waitingForLoading = null;
  SocialCalc.RecalcSetTimeout();
};
SocialCalc.RecalcTimerRoutine = function() {
  var a, b, c, d = new Date, e = 0, f = SocialCalc.Formula;
  if (!f) {
    return "Need SocialCalc.Formula";
  }
  var g = SocialCalc.RecalcInfo, l = g.sheet;
  if (l) {
    var h = l.recalcdata || (l.recalcdata = {}), p = function(a, b) {
      l.statuscallback && l.statuscallback(h, a, b, l.statuscallbackparams);
    };
    SocialCalc.RecalcClearTimeout();
    if (g.currentState == g.state.start_calc) {
      h = new SocialCalc.RecalcData;
      l.recalcdata = h;
      for (c in l.cells) {
        c && h.celllist.push(c);
      }
      h.calclist = {};
      g.currentState = g.state.order;
    }
    if (g.currentState == g.state.order) {
      for (;h.celllistitem < h.celllist.length;) {
        if (c = h.celllist[h.celllistitem++], SocialCalc.RecalcCheckCell(l, c), new Date - d >= g.maxtimeslice) {
          p("calcorder", {coord:c, total:h.celllist.length, count:h.celllistitem});
          SocialCalc.RecalcSetTimeout();
          return;
        }
      }
      p("calccheckdone", h.calclistlength);
      h.nextcalc = h.firstcalc;
      g.currentState = g.state.calc;
      SocialCalc.RecalcSetTimeout();
    } else {
      if (g.currentState == g.state.start_wait) {
        g.currentState = g.state.done_wait;
        if (g.LoadSheet && (a = g.LoadSheet(f.SheetCache.waitingForLoading))) {
          return;
        }
        SocialCalc.RecalcLoadedSheet(null, "", !1);
      } else {
        if (g.currentState == g.state.done_wait) {
          g.currentState = g.state.calc, SocialCalc.RecalcSetTimeout();
        } else {
          g.currentState != g.state.calc && alert("Recalc state error: " + g.currentState + ". Error in SocialCalc code.");
          for (c = l.recalcdata.nextcalc;c;) {
            b = l.cells[c];
            b.parseinfo || (b.parseinfo = f.ParseFormulaIntoTokens(b.formula));
            b.parseinfo.coord = c;
            a = f.evaluate_parsed_formula(b.parseinfo, l, !1);
            if (f.SheetCache.waitingForLoading) {
              !0 != g.firstRenderScheduled && (SocialCalc.GetSpreadsheetControlObject().editor.ScheduleRender(!1), g.firstRenderScheduled = !0);
              h.nextcalc = c;
              h.count += e;
              p("calcloading", {sheetname:f.SheetCache.waitingForLoading});
              g.currentState = g.state.start_wait;
              SocialCalc.RecalcSetTimeout();
              return;
            }
            if (f.RemoteFunctionInfo.waitingForServer) {
              h.nextcalc = c;
              h.count += e;
              p("calcserverfunc", {funcname:f.RemoteFunctionInfo.waitingForServer, coord:c, total:h.calclistlength, count:h.count});
              g.currentState = g.state.done_wait;
              return;
            }
            if (b.datavalue != a.value || b.valuetype != a.type) {
              b.datavalue = a.value, b.valuetype = a.type, delete b.displaystring, l.recalcchangedavalue = !0;
            }
            a.error && (b.errors = a.error);
            e++;
            c = l.recalcdata.calclist[c];
            if (new Date - d >= g.maxtimeslice) {
              h.nextcalc = c;
              h.count += e;
              p("calcstep", {coord:c, total:h.calclistlength, count:h.count});
              SocialCalc.RecalcSetTimeout();
              return;
            }
          }
          h.inrecalc = !1;
          l.reRenderCellList = l.recalcdata.celllist;
          delete l.recalcdata;
          delete l.attribs.needsrecalc;
          g.sheet = l.previousrecalcsheet || null;
          g.sheet ? (g.currentState = g.state.calc, SocialCalc.RecalcSetTimeout()) : (f.FreshnessInfo.recalc_completed = !0, g.currentState = g.state.idle, p("calcfinished", new Date - g.starttime), 0 < g.queue.length && (l = g.queue.shift(), l.RecalcSheet()));
        }
      }
    }
  }
};
SocialCalc.RecalcCheckCell = function(a, b) {
  var c, d, e, f, g, l, h, p, q = SocialCalc.Formula;
  if (!q) {
    return "Need SocialCalc.Formula";
  }
  f = q.TokenType;
  var w = f.op, v = f.name, s = f.coord, t = a.recalcdata, x = t.checkinfo, m = !1, r = null, u = b;
  a: for (;u;) {
    if (h = a.cells[u], p = x[u], !h || "f" != h.datatype || p && "object" != typeof p) {
      u = r, x[u] && (r = x[u].oldcoord);
    } else {
      p || (p = new SocialCalc.RecalcCheckInfo, x[u] = p);
      h.errors && delete h.errors;
      h.parseinfo || (h.parseinfo = q.ParseFormulaIntoTokens(h.formula));
      c = h.parseinfo;
      for (f = p.parsepos;f < c.length;f++) {
        if (p.inrange) {
          p.inrangestart && (p.cr1.col > p.cr2.col ? (p.c1 = p.cr2.col, p.c2 = p.cr1.col) : (p.c1 = p.cr1.col, p.c2 = p.cr2.col), p.c = p.c1 - 1, p.cr1.row > p.cr2.row ? (p.r1 = p.cr2.row, p.r2 = p.cr1.row) : (p.r1 = p.cr1.row, p.r2 = p.cr2.row), p.r = p.r1, p.inrangestart = !1);
          p.c += 1;
          if (p.c > p.c2) {
            p.r += 1;
            if (p.r > p.r2) {
              p.inrange = !1;
              continue;
            }
            p.c = p.c1;
          }
          c = SocialCalc.crToCoord(p.c, p.r);
          p.parsepos = f;
          p.oldcoord = r;
          r = u;
          u = c;
          if (x[u] && "object" == typeof x[u]) {
            return h.errors = SocialCalc.Constants.s_caccCircRef + b, x[b] = !0, t.firstcalc ? t.calclist[t.lastcalc] = b : t.firstcalc = b, t.lastcalc = b, t.calclistlength++, a.attribs.circularreferencecell = u + "|" + r, h.errors;
          }
          continue a;
        }
        e = c[f].type;
        d = c[f].text;
        e == w && ("!" == d ? m = !0 : ":" != d && (m = !1));
        if (e == v) {
          if (g = q.LookupName(a, d), "range" == g.type) {
            if (l = g.value.indexOf("|"), -1 != l) {
              p.cr1 = SocialCalc.coordToCr(g.value.substring(0, l));
              d = g.value.indexOf("|", l + 1);
              p.cr2 = SocialCalc.coordToCr(g.value.substring(l + 1, d));
              p.inrange = !0;
              p.inrangestart = !0;
              f -= 1;
              continue;
            }
          } else {
            "coord" == g.type && (e = s, d = g.value);
          }
        }
        if (e == s) {
          if (2 <= f && c[f - 1].type == w && ":" == c[f - 1].text && c[f - 2].type == s && !m) {
            p.cr1 = SocialCalc.coordToCr(c[f - 2].text), p.cr2 = SocialCalc.coordToCr(d), p.inrange = !0, p.inrangestart = !0, f -= 1;
          } else {
            if (!m) {
              -1 != d.indexOf("$") && (d = d.replace(/\$/g, ""));
              p.parsepos = f + 1;
              p.oldcoord = r;
              r = u;
              u = d;
              if (x[u] && "object" == typeof x[u]) {
                return h.errors = SocialCalc.Constants.s_caccCircRef + b, x[b] = !0, t.firstcalc ? t.calclist[t.lastcalc] = b : t.firstcalc = b, t.lastcalc = b, t.calclistlength++, a.attribs.circularreferencecell = u + "|" + r, h.errors;
              }
              continue a;
            }
          }
        }
      }
      m = !1;
      x[u] = !0;
      t.firstcalc ? t.calclist[t.lastcalc] = u : t.firstcalc = u;
      t.lastcalc = u;
      t.calclistlength++;
      u = r;
      r = x[u] ? x[u].oldcoord : null;
    }
  }
  return "";
};
SocialCalc.Parse = function(a) {
  this.str = a;
  this.pos = 0;
  this.delimiter = " ";
  this.lineEnd = a.indexOf("\n");
  0 > this.lineEnd && (this.lineEnd = a.length);
};
SocialCalc.Parse.prototype.NextToken = function() {
  if (0 > this.pos) {
    return "";
  }
  var a = this.str.indexOf(this.delimiter, this.pos), b = this.pos;
  a > this.lineEnd && (a = this.lineEnd);
  if (0 <= a) {
    return this.pos = a + 1, this.str.substring(b, a);
  }
  this.pos = this.lineEnd;
  return this.str.substring(b, this.lineEnd);
};
SocialCalc.Parse.prototype.RestOfString = function() {
  var a = this.pos;
  if (0 > this.pos || this.pos >= this.lineEnd) {
    return "";
  }
  this.pos = this.lineEnd;
  return this.str.substring(a, this.lineEnd);
};
SocialCalc.Parse.prototype.RestOfStringNoMove = function() {
  return 0 > this.pos || this.pos >= this.lineEnd ? "" : this.str.substring(this.pos, this.lineEnd);
};
SocialCalc.Parse.prototype.NextLine = function() {
  this.pos = this.lineEnd + 1;
  this.lineEnd = this.str.indexOf("\n", this.pos);
  0 > this.lineEnd && (this.lineEnd = this.str.length);
};
SocialCalc.Parse.prototype.EOF = function() {
  return 0 > this.pos || this.pos >= this.str.length ? !0 : !1;
};
SocialCalc.UndoStack = function() {
  this.stack = [];
  this.tos = -1;
  this.maxRedo = 0;
  this.maxUndo = 50;
};
SocialCalc.UndoStack.prototype.PushChange = function(a) {
  for (;0 < this.stack.length && this.stack.length - 1 > this.tos;) {
    this.stack.pop();
  }
  this.stack.push({command:[], type:a, undo:[]});
  this.maxRedo && this.stack.length > this.maxRedo && this.stack.shift();
  this.maxUndo && this.stack.length > this.maxUndo && (this.stack[this.stack.length - this.maxUndo - 1].undo = []);
  this.tos = this.stack.length - 1;
};
SocialCalc.UndoStack.prototype.AddDo = function() {
  if (this.stack[this.stack.length - 1]) {
    for (var a = [], b = 0;b < arguments.length;b++) {
      null != arguments[b] && a.push(arguments[b]);
    }
    a = a.join(" ");
    this.stack[this.stack.length - 1].command.push(a);
  }
};
SocialCalc.UndoStack.prototype.AddUndo = function() {
  if (this.stack[this.stack.length - 1]) {
    for (var a = [], b = 0;b < arguments.length;b++) {
      null != arguments[b] && a.push(arguments[b]);
    }
    a = a.join(" ");
    this.stack[this.stack.length - 1].undo.push(a);
  }
};
SocialCalc.UndoStack.prototype.TOS = function() {
  return 0 <= this.tos ? this.stack[this.tos] : null;
};
SocialCalc.UndoStack.prototype.Undo = function() {
  return 0 <= this.tos && (!this.maxUndo || this.tos > this.stack.length - this.maxUndo - 1) ? (this.tos -= 1, !0) : !1;
};
SocialCalc.UndoStack.prototype.Redo = function() {
  return this.tos < this.stack.length - 1 ? (this.tos += 1, !0) : !1;
};
SocialCalc.Clipboard = {clipboard:""};
SocialCalc.RenderContext = function(a) {
  var b = a.attribs, c = SocialCalc.Constants;
  this.sheetobj = a;
  this.showRCHeaders = this.showGrid = this.hideRowsCols = !1;
  this.rownamewidth = c.defaultRowNameWidth;
  this.pixelsPerRow = c.defaultAssumedRowHeight;
  this.cellskip = {};
  this.coordToCR = {};
  this.colwidth = [];
  this.rowheight = [];
  this.totalheight = this.totalwidth = 0;
  this.rowpanes = [];
  this.colpanes = [];
  this.colunhideleft = [];
  this.colunhideright = [];
  this.rowunhidetop = [];
  this.rowunhidebottom = [];
  this.maxrow = this.maxcol = 0;
  this.highlights = {};
  this.cursorsuffix = "";
  this.highlightTypes = {cursor:{style:c.defaultHighlightTypeCursorStyle, className:c.defaultHighlightTypeCursorClass}, range:{style:c.defaultHighlightTypeRangeStyle, className:c.defaultHighlightTypeRangeClass}, cursorinsertup:{style:"color:#FFF;backgroundColor:#A6A6A6;backgroundRepeat:repeat-x;backgroundPosition:top left;backgroundImage:url(" + c.defaultImagePrefix + "cursorinsertup.gif);", className:c.defaultHighlightTypeCursorClass}, cursorinsertleft:{style:"color:#FFF;backgroundColor:#A6A6A6;backgroundRepeat:repeat-y;backgroundPosition:top left;backgroundImage:url(" + 
  c.defaultImagePrefix + "cursorinsertleft.gif);", className:c.defaultHighlightTypeCursorClass}, range2:{style:"color:#000;backgroundColor:#FFF;backgroundImage:url(" + c.defaultImagePrefix + "range2.gif);", className:""}};
  this.cellIDprefix = c.defaultCellIDPrefix;
  this.defaultlinkstyle = null;
  this.defaultHTMLlinkstyle = {type:"html"};
  this.defaultfontstyle = c.defaultCellFontStyle;
  this.defaultfontsize = c.defaultCellFontSize;
  this.defaultfontfamily = c.defaultCellFontFamily;
  this.defaultlayout = c.defaultCellLayout;
  this.defaultpanedividerwidth = c.defaultPaneDividerWidth;
  this.defaultpanedividerheight = c.defaultPaneDividerHeight;
  this.gridCSS = c.defaultGridCSS;
  this.commentClassName = c.defaultCommentClass;
  this.commentCSS = c.defaultCommentStyle;
  this.commentNoGridClassName = c.defaultCommentNoGridClass;
  this.commentNoGridCSS = c.defaultCommentNoGridStyle;
  this.readonlyClassName = c.defaultReadonlyClass;
  this.readonlyCSS = c.defaultReadonlyStyle;
  this.readonlyNoGridClassName = c.defaultReadonlyNoGridClass;
  this.readonlyNoGridCSS = c.defaultReadonlyNoGridStyle;
  this.readonlyComment = c.defaultReadonlyComment;
  this.classnames = {colname:c.defaultColnameClass, rowname:c.defaultRownameClass, selectedcolname:c.defaultSelectedColnameClass, selectedrowname:c.defaultSelectedRownameClass, upperleft:c.defaultUpperLeftClass, skippedcell:c.defaultSkippedCellClass, panedivider:c.defaultPaneDividerClass, unhideleft:c.defaultUnhideLeftClass, unhideright:c.defaultUnhideRightClass, unhidetop:c.defaultUnhideTopClass, unhidebottom:c.defaultUnhideBottomClass, colresizebar:c.defaultColResizeBarClass, rowresizebar:c.defaultRowResizeBarClass};
  this.explicitStyles = {colname:c.defaultColnameStyle, rowname:c.defaultRownameStyle, selectedcolname:c.defaultSelectedColnameStyle, selectedrowname:c.defaultSelectedRownameStyle, upperleft:c.defaultUpperLeftStyle, skippedcell:c.defaultSkippedCellStyle, panedivider:c.defaultPaneDividerStyle, unhideleft:c.defaultUnhideLeftStyle, unhideright:c.defaultUnhideRightStyle, unhidetop:c.defaultUnhideTopStyle, unhidebottom:c.defaultUnhideBottomStyle};
  this.cellskip = null;
  this.needcellskip = !0;
  this.fonts = [];
  this.layouts = [];
  this.needprecompute = !0;
  if (b) {
    this.rowpanes[0] = {first:1, last:b.lastrow}, this.colpanes[0] = {first:1, last:b.lastcol}, this.usermaxcol = b.usermaxcol, this.usermaxrow = b.usermaxrow;
  } else {
    throw c.s_rcMissingSheet;
  }
};
SocialCalc.RenderContext.prototype.PrecomputeSheetFontsAndLayouts = function() {
  SocialCalc.PrecomputeSheetFontsAndLayouts(this);
};
SocialCalc.RenderContext.prototype.CalculateCellSkipData = function() {
  SocialCalc.CalculateCellSkipData(this);
};
SocialCalc.RenderContext.prototype.CalculateColWidthData = function() {
  SocialCalc.CalculateColWidthData(this);
};
SocialCalc.RenderContext.prototype.CalculateRowHeightData = function() {
  SocialCalc.CalculateRowHeightData(this);
};
SocialCalc.RenderContext.prototype.SetRowPaneFirstLast = function(a, b, c) {
  this.rowpanes[a] = {first:b, last:c};
};
SocialCalc.RenderContext.prototype.SetColPaneFirstLast = function(a, b, c) {
  this.colpanes[a] = {first:b, last:c};
};
SocialCalc.RenderContext.prototype.CoordInPane = function(a, b, c) {
  return SocialCalc.CoordInPane(this, a, b, c);
};
SocialCalc.RenderContext.prototype.CellInPane = function(a, b, c, d) {
  return SocialCalc.CellInPane(this, a, b, c, d);
};
SocialCalc.RenderContext.prototype.InitializeTable = function(a) {
  SocialCalc.InitializeTable(this, a);
};
SocialCalc.RenderContext.prototype.RenderSheet = function(a, b) {
  return SocialCalc.RenderSheet(this, a, b);
};
SocialCalc.RenderContext.prototype.RenderColGroup = function() {
  return SocialCalc.RenderColGroup(this);
};
SocialCalc.RenderContext.prototype.RenderColHeaders = function() {
  return SocialCalc.RenderColHeaders(this);
};
SocialCalc.RenderContext.prototype.RenderSizingRow = function() {
  return SocialCalc.RenderSizingRow(this);
};
SocialCalc.RenderContext.prototype.RenderRow = function(a, b, c) {
  return SocialCalc.RenderRow(this, a, b, c);
};
SocialCalc.RenderContext.prototype.RenderSpacingRow = function() {
  return SocialCalc.RenderSpacingRow(this);
};
SocialCalc.RenderContext.prototype.RenderCell = function(a, b, c, d, e, f) {
  return SocialCalc.RenderCell(this, a, b, c, d, e, f);
};
SocialCalc.PrecomputeSheetFontsAndLayouts = function(a) {
  var b, c, d, e, f, g, l = a.sheetobj;
  e = l.attribs;
  e.defaultfont && (b = l.fonts[e.defaultfont], b = b.replace(/^\*/, SocialCalc.Constants.defaultCellFontStyle), b = b.replace(/(.+)\*(.+)/, "$1" + SocialCalc.Constants.defaultCellFontSize + "$2"), b = b.replace(/\*$/, SocialCalc.Constants.defaultCellFontFamily), c = b.match(/^(\S+? \S+?) (\S+?) (\S.*)$/), a.defaultfontstyle = c[1], a.defaultfontsize = c[2], a.defaultfontfamily = c[3]);
  for (f = 1;f < l.fonts.length;f++) {
    c = l.fonts[f], c = c.replace(/^\*/, a.defaultfontstyle), c = c.replace(/(.+)\*(.+)/, "$1" + a.defaultfontsize + "$2"), c = c.replace(/\*$/, a.defaultfontfamily), c = c.match(/^(\S+?) (\S+?) (\S+?) (\S.*)$/), a.fonts[f] = {style:c[1], weight:c[2], size:c[3], family:c[4]};
  }
  b = /^padding:\s*(\S+)\s+(\S+)\s+(\S+)\s+(\S+);vertical-align:\s*(\S+);/;
  d = SocialCalc.Constants.defaultCellLayout.match(b);
  e = e.defaultlayout ? l.layouts[e.defaultlayout].match(b) : " * * * * *".split(" ");
  for (f = 1;f < l.layouts.length;f++) {
    c = l.layouts[f];
    c = c.match(b);
    for (g = 1;5 >= g;g++) {
      "*" == c[g] && (c[g] = "*" != e[g] ? e[g] : d[g]);
    }
    a.layouts[f] = "padding:" + c[1] + " " + c[2] + " " + c[3] + " " + c[4] + ";vertical-align:" + c[5] + ";";
  }
  a.needprecompute = !1;
};
SocialCalc.CalculateCellSkipData = function(a) {
  var b, c, d, e, f, g, l, h, p = a.sheetobj;
  a.maxrow = 0;
  a.maxcol = 0;
  a.cellskip = {};
  for (b = 1;b <= p.attribs.lastrow;b++) {
    for (c = 1;c <= p.attribs.lastcol;c++) {
      if (d = SocialCalc.crToCoord(c, b), e = p.cells[d], void 0 !== e && !a.cellskip[d] && (f = e.colspan || 1, e = e.rowspan || 1, 1 < f || 1 < e)) {
        for (g = b;g < b + e;g++) {
          for (l = c;l < c + f;l++) {
            h = SocialCalc.crToCoord(l, g), h == d ? a.coordToCR[d] = {row:b, col:c} : a.cellskip[h] = d, g > a.maxrow && (maxrow = g), l > a.maxcol && (maxcol = l);
          }
        }
      }
    }
  }
  a.needcellskip = !1;
};
SocialCalc.CalculateColWidthData = function(a) {
  var b, c, d, e = a.sheetobj;
  d = a.showRCHeaders ? a.rownamewidth - 0 : 0;
  for (colpane = 0;colpane < a.colpanes.length;colpane++) {
    for (b = a.colpanes[colpane].first;b <= a.colpanes[colpane].last;b++) {
      if (c = SocialCalc.rcColname(b), "yes" == e.colattribs.hide[c]) {
        a.colwidth[b] = 0;
      } else {
        c = e.colattribs.width[c] || e.attribs.defaultcolwidth || SocialCalc.Constants.defaultColWidth;
        if ("blank" == c || "auto" == c) {
          c = "";
        }
        a.colwidth[b] = c + "";
        d += c && 0 < c - 0 ? c - 0 : 10;
      }
    }
  }
  a.totalwidth = d;
};
SocialCalc.CalculateRowHeightData = function(a) {
  var b, c, d, e = a.sheetobj;
  d = a.showRCHeaders ? a.pixelsPerRow : 0;
  for (rowpane = 0;rowpane < a.rowpanes.length;rowpane++) {
    for (b = a.rowpanes[rowpane].first;b <= a.rowpanes[rowpane].last;b++) {
      if ("yes" === e.rowattribs.hide[b]) {
        a.rowheight[b] = 0;
      } else {
        c = e.rowattribs.height[b] || e.attribs.defaultrowheight || SocialCalc.Constants.defaultAssumedRowHeight;
        if ("blank" === c || "auto" === c) {
          c = "";
        }
        a.rowheight[b] = c + "";
        d += c && 0 < c - 0 ? c - 0 : 10;
      }
    }
  }
  a.totalheight = d;
};
SocialCalc.InitializeTable = function(a, b) {
  b.style.borderCollapse = "collapse";
  b.cellSpacing = "0";
  b.cellPadding = "0";
  b.style.width = a.totalwidth + "px";
};
SocialCalc.RenderSheet = function(a, b, c) {
  var d, e, f, g;
  a.sheetobj.changedrendervalues && (a.needcellskip = !0, a.needprecompute = !0, a.sheetobj.changedrendervalues = !1);
  a.needcellskip && a.CalculateCellSkipData();
  a.needprecompute && a.PrecomputeSheetFontsAndLayouts();
  a.CalculateColWidthData();
  a.CalculateRowHeightData();
  f = document.createElement("table");
  a.InitializeTable(f);
  d = a.RenderColGroup();
  f.appendChild(d);
  g = document.createElement("tbody");
  g.appendChild(a.RenderSizingRow());
  a.showRCHeaders && (d = a.RenderColHeaders()) && g.appendChild(d);
  for (e = 0;e < a.rowpanes.length;e++) {
    for (rownum = a.rowpanes[e].first;rownum <= a.rowpanes[e].last;rownum++) {
      d = a.RenderRow(rownum, e, c), g.appendChild(d);
    }
    e < a.rowpanes.length - 1 && (d = a.RenderSpacingRow(), g.appendChild(d));
  }
  f.appendChild(g);
  b && (a = b.parentNode) && a.replaceChild(f, b);
  return f;
};
SocialCalc.RenderRow = function(a, b, c, d) {
  var e = a.sheetobj, f = document.createElement("tr"), g, l, h;
  if (a.showRCHeaders) {
    l = document.createElement("td");
    a.classnames && (l.className = a.classnames.rowname);
    a.explicitStyles && (l.style.cssText = a.explicitStyles.rowname);
    l.width = a.rownamewidth;
    l.height = a.rowheight[b];
    l.style.verticalAlign = "top";
    l.innerHTML = b + "";
    if (b < a.rowpanes[a.rowpanes.length - 1].last && "yes" == e.rowattribs.hide[b + 1]) {
      h = document.createElement("div");
      h.style.position = "relative";
      g = document.createElement("div");
      a.classnames && (g.className = a.classnames.unhidetop);
      a.explicitStyles && (g.style.cssText = a.explicitStyles.unhidetop);
      var p = a.rowheight[b] - 0 - SocialCalc.Constants.defaultAssumedRowHeight;
      g.style.bottom = "-" + (0 === p ? 4 : p) + "px";
      a.rowunhidetop[b] = g;
      h.appendChild(g);
      l.appendChild(h);
    }
    1 < b && "yes" == e.rowattribs.hide[b - 1] && (g = document.createElement("div"), a.classnames && (g.className = a.classnames.unhidebottom), a.explicitStyles && (g.style.cssText = a.explicitStyles.unhidebottom), a.rowunhidebottom[b] = g, l.appendChild(g));
    h = document.createElement("div");
    h.className = a.classnames.rowresizebar;
    l.appendChild(h);
    f.appendChild(l);
  }
  for (h = 0;h < a.colpanes.length;h++) {
    for (g = a.colpanes[h].first;g <= a.colpanes[h].last;g++) {
      (l = a.RenderCell(b, g, c, h, null, d)) && f.appendChild(l);
    }
    h < a.colpanes.length - 1 && (l = document.createElement("td"), l.width = a.defaultpanedividerwidth, a.classnames.panedivider && (l.className = a.classnames.panedivider), a.explicitStyles.panedivider && (l.style.cssText = a.explicitStyles.panedivider), g = document.createElement("div"), g.style.width = a.defaultpanedividerwidth + "px", g.style.overflow = "hidden", l.appendChild(g), f.appendChild(l));
  }
  "yes" == e.rowattribs.hide[b] && (f.style.cssText += ";display:none");
  return f;
};
SocialCalc.RenderSpacingRow = function(a) {
  var b, c, d, e, f = document.createElement("tr");
  a.showRCHeaders && (c = document.createElement("td"), c.width = a.rownamewidth, c.height = a.defaultpanedividerheight, a.classnames.panedivider && (c.className = a.classnames.panedivider), a.explicitStyles.panedivider && (c.style.cssText = a.explicitStyles.panedivider), f.appendChild(c));
  for (d = 0;d < a.colpanes.length;d++) {
    for (b = a.colpanes[d].first;b <= a.colpanes[d].last;b++) {
      c = document.createElement("td");
      if (e = a.colwidth[b]) {
        c.width = e;
      }
      c.height = a.defaultpanedividerheight;
      a.classnames.panedivider && (c.className = a.classnames.panedivider);
      a.explicitStyles.panedivider && (c.style.cssText = a.explicitStyles.panedivider);
      c && f.appendChild(c);
    }
    d < a.colpanes.length - 1 && (c = document.createElement("td"), c.width = a.defaultpanedividerwidth, c.height = a.defaultpanedividerheight, a.classnames.panedivider && (c.className = a.classnames.panedivider), a.explicitStyles.panedivider && (c.style.cssText = a.explicitStyles.panedivider), f.appendChild(c));
  }
  return f;
};
SocialCalc.RenderColHeaders = function(a) {
  var b = a.sheetobj, c = document.createElement("tr"), d, e;
  if (!a.showRCHeaders) {
    return null;
  }
  e = document.createElement("td");
  a.classnames && (e.className = a.classnames.upperleft);
  a.explicitStyles && (e.style.cssText = a.explicitStyles.upperleft);
  e.width = a.rownamewidth;
  c.appendChild(e);
  for (colpane = 0;colpane < a.colpanes.length;colpane++) {
    for (d = a.colpanes[colpane].first;d <= a.colpanes[colpane].last;d++) {
      e = document.createElement("td");
      a.classnames && (e.className = a.classnames.colname);
      a.explicitStyles && (e.style.cssText = a.explicitStyles.colname);
      "yes" == b.colattribs.hide[SocialCalc.rcColname(d)] && (e.style.cssText += ";display:none");
      e.innerHTML = SocialCalc.rcColname(d);
      if (d < a.colpanes[a.colpanes.length - 1].last && "yes" == b.colattribs.hide[SocialCalc.rcColname(d + 1)]) {
        var f = document.createElement("div");
        a.classnames && (f.className = a.classnames.unhideleft);
        a.explicitStyles && (f.style.cssText = a.explicitStyles.unhideleft);
        a.colunhideleft[d] = f;
        e.appendChild(f);
      }
      1 < d && "yes" == b.colattribs.hide[SocialCalc.rcColname(d - 1)] && (f = document.createElement("div"), a.classnames && (f.className = a.classnames.unhideright), a.explicitStyles && (f.style.cssText = a.explicitStyles.unhideright), a.colunhideright[d] = f, e.appendChild(f));
      f = document.createElement("span");
      f.style.height = SocialCalc.Constants.defaultAssumedRowHeight + "px";
      f.className = a.classnames.colresizebar;
      e.appendChild(f);
      c.appendChild(e);
    }
    colpane < a.colpanes.length - 1 && (e = document.createElement("td"), e.width = a.defaultpanedividerwidth, a.classnames.panedivider && (e.className = a.classnames.panedivider), a.explicitStyles.panedivider && (e.style.cssText = a.explicitStyles.panedivider), c.appendChild(e));
  }
  return c;
};
SocialCalc.RenderColGroup = function(a) {
  var b, c, d, e, f = a.sheetobj, g = document.createElement("colgroup");
  a.showRCHeaders && (d = document.createElement("col"), d.width = a.rownamewidth, g.appendChild(d));
  for (b = 0;b < a.colpanes.length;b++) {
    for (c = a.colpanes[b].first;c <= a.colpanes[b].last;c++) {
      if (d = document.createElement("col"), "yes" == f.colattribs.hide[SocialCalc.rcColname(c)]) {
        d.width = "1";
      } else {
        if (e = a.colwidth[c]) {
          d.width = e;
        }
        g.appendChild(d);
      }
    }
    b < a.colpanes.length - 1 && (d = document.createElement("col"), d.width = a.defaultpanedividerwidth, g.appendChild(d));
  }
  return g;
};
SocialCalc.RenderSizingRow = function(a) {
  var b, c, d, e, f = a.sheetobj, g = document.createElement("tr");
  a.showRCHeaders && (d = document.createElement("td"), d.style.width = a.rownamewidth + "px", d.height = "1", g.appendChild(d));
  for (b = 0;b < a.colpanes.length;b++) {
    for (c = a.colpanes[b].first;c <= a.colpanes[b].last;c++) {
      d = document.createElement("td");
      if ("yes" == f.colattribs.hide[SocialCalc.rcColname(c)]) {
        d.width = "1";
      } else {
        if (e = a.colwidth[c]) {
          d.width = e;
        }
      }
      d.height = "1";
      g.appendChild(d);
    }
    b < a.colpanes.length - 1 && (d = document.createElement("td"), d.width = a.defaultpanedividerwidth, d.height = "1", g.appendChild(d));
  }
  return g;
};
SocialCalc.RenderCell = function(a, b, c, d, e, f, g) {
  var l = a.sheetobj, h, p, q, w, v, s, t = "";
  b -= 0;
  c -= 0;
  var x = SocialCalc.crToCoord(c, b);
  if (a.cellskip[x]) {
    if (a.CoordInPane(a.cellskip[x], d, e)) {
      return null;
    }
    p = f ? SocialCalc.CreatePseudoElement() : document.createElement("td");
    a.classnames.skippedcell && (p.className = a.classnames.skippedcell);
    a.explicitStyles.skippedcell && (p.style.cssText = a.explicitStyles.skippedcell);
    p.innerHTML = "&nbsp;";
    return p;
  }
  p = f ? SocialCalc.CreatePseudoElement() : document.createElement("td");
  a.cellIDprefix && (p.id = a.cellIDprefix + x);
  (w = l.cells[x]) || (w = new SocialCalc.Cell(x));
  s = l.attribs;
  scc = SocialCalc.Constants;
  if (1 < w.colspan) {
    for (h = q = 1;h < w.colspan;h++) {
      "yes" != l.colattribs.hide[SocialCalc.rcColname(c + h)] && a.CellInPane(b, c + h, d, e) && q++;
    }
    p.colSpan = q;
  }
  if (1 < w.rowspan) {
    for (h = q = 1;h < w.rowspan;h++) {
      "yes" != l.rowattribs.hide[b + h + ""] && a.CellInPane(b + h, c, d, e) && q++;
    }
    p.rowSpan = q;
  }
  if (void 0 == w.displaystring || !1 == l.widgetsClean) {
    w.displaystring = SocialCalc.FormatValueForDisplay(l, w.datavalue, x, g || a.defaultlinkstyle);
  }
  p.innerHTML = w.displaystring;
  t = (h = w.layout || s.defaultlayout) && "undefined" !== typeof a.layouts[h] ? t + a.layouts[h] : t + scc.defaultCellLayout;
  (h = w.font || s.defaultfont) && "undefined" !== typeof a.fonts[h] ? (g = a.fonts[h], t += "font-style:" + g.style + ";font-weight:" + g.weight + ";font-size:" + g.size + ";font-family:" + g.family + ";") : (scc.defaultCellFontSize && (t += "font-size:" + scc.defaultCellFontSize + ";"), scc.defaultCellFontFamily && (t += "font-family:" + scc.defaultCellFontFamily + ";"));
  (h = w.color || s.defaultcolor) && "undefined" !== typeof l.colors[h] && (t += "color:" + l.colors[h] + ";");
  (h = w.bgcolor || s.defaultbgcolor) && "undefined" !== typeof l.colors[h] && (t += "background-color:" + l.colors[h] + ";");
  (h = w.cellformat) && "undefined" !== typeof l.cellformats[h] ? t += "text-align:" + l.cellformats[h] + ";" : (g = w.valuetype.charAt(0), "t" == g ? (h = s.defaulttextformat) && "undefined" !== typeof l.cellformats[h] && (t += "text-align:" + l.cellformats[h] + ";") : "n" == g ? t = (h = s.defaultnontextformat) && "undefined" !== typeof l.cellformats[h] ? t + ("text-align:" + l.cellformats[h] + ";") : t + "text-align:right;" : t += "text-align:left;");
  if (1 < w.colspan || 1 < w.rowspan) {
    v = l.cells[SocialCalc.crToCoord(c + (w.colspan || 1) - 1, b + (w.rowspan || 1) - 1)];
  }
  (h = w.bt) && "undefined" !== typeof l.borderstyles[h] && (t += "border-top:" + l.borderstyles[h] + ";");
  (h = "undefined" != typeof v ? v.br : w.br) && "undefined" !== typeof l.borderstyles[h] ? t += "border-right:" + l.borderstyles[h] + ";" : a.showGrid && (g = a.CellInPane(b, c + (w.colspan || 1), d, e) ? SocialCalc.crToCoord(c + (w.colspan || 1), b) : "nomatch", a.cellskip[g] && (g = a.cellskip[g]), l.cells[g] && l.cells[g].bl || (t += "border-right:" + a.gridCSS));
  (h = "undefined" != typeof v ? v.bb : w.bb) && "undefined" !== typeof l.borderstyles[h] ? t += "border-bottom:" + l.borderstyles[h] + ";" : a.showGrid && (g = a.CellInPane(b + (w.rowspan || 1), c, d, e) ? SocialCalc.crToCoord(c, b + (w.rowspan || 1)) : "nomatch", a.cellskip[g] && (g = a.cellskip[g]), l.cells[g] && l.cells[g].bt || (t += "border-bottom:" + a.gridCSS));
  (h = w.bl) && "undefined" !== typeof l.borderstyles[h] && (t += "border-left:" + l.borderstyles[h] + ";");
  w.comment && (p.title = w.comment, a.showGrid ? (a.commentClassName && (p.className = (p.className ? p.className + " " : "") + a.commentClassName), t += a.commentCSS) : (a.commentNoGridClassName && (p.className = (p.className ? p.className + " " : "") + a.commentNoGridClassName), t += a.commentNoGridCSS));
  w.readonly && (w.comment || (p.title = a.readonlyComment), a.showGrid ? (a.readonlyClassName && (p.className = (p.className ? p.className + " " : "") + a.readonlyClassName), t += a.readonlyCSS) : (a.readonlyNoGridClassName && (p.className = (p.className ? p.className + " " : "") + a.readonlyNoGridClassName), t += a.readonlyNoGridCSS));
  p.style.cssText = t;
  void 0 !== w.cssc && (f ? p.className = (p.className ? p.className + " " : "") + w.cssc : p.classList.add(w.cssc));
  if (g = a.highlights[x]) {
    "cursor" == g && (g += a.cursorsuffix), a.highlightTypes[g].className && (p.className = (p.className ? p.className + " " : "") + a.highlightTypes[g].className), SocialCalc.setStyles(p, a.highlightTypes[g].style);
  }
  "yes" == l.colattribs.hide[SocialCalc.rcColname(c)] && (p.style.cssText += ";display:none");
  "yes" == l.rowattribs.hide[b] && (p.style.cssText += ";display:none");
  return p;
};
SocialCalc.CoordInPane = function(a, b, c, d) {
  var e = a.coordToCR[b];
  if (!e || !e.row || !e.col) {
    throw "Bad coordToCR for " + b;
  }
  return a.CellInPane(e.row, e.col, c, d);
};
SocialCalc.CellInPane = function(a, b, c, d, e) {
  var f = a.rowpanes[d];
  a = a.colpanes[e];
  if (!f || !a) {
    throw "CellInPane called with unknown panes " + d + "/" + e;
  }
  return b < f.first || b > f.last || c < a.first || c > a.last ? !1 : !0;
};
SocialCalc.CreatePseudoElement = function() {
  return{style:{cssText:""}, innerHTML:"", className:""};
};
SocialCalc.rcColname = function(a) {
  702 < a && (a = 702);
  1 > a && (a = 1);
  var b = (a - 1) % 26 + 65;
  return(a = Math.floor((a - 1) / 26)) ? String.fromCharCode(a + 64) + String.fromCharCode(b) : String.fromCharCode(b);
};
SocialCalc.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
SocialCalc.crToCoord = function(a, b) {
  1 > a && (a = 1);
  702 < a && (a = 702);
  1 > b && (b = 1);
  var c = (a - 1) % 26, d = Math.floor((a - 1) / 26);
  return d ? SocialCalc.letters[d - 1] + SocialCalc.letters[c] + b : SocialCalc.letters[c] + b;
};
SocialCalc.coordToCol = {};
SocialCalc.coordToRow = {};
SocialCalc.coordToCr = function(a) {
  var b, c, d, e = SocialCalc.coordToRow[a];
  if (e) {
    return{row:e, col:SocialCalc.coordToCol[a]};
  }
  for (c = e = b = 0;c < a.length;c++) {
    d = a.charCodeAt(c), 36 != d && (57 >= d ? e = 10 * e + d - 48 : 97 <= d ? b = 26 * b + d - 96 : 65 <= d && (b = 26 * b + d - 64));
  }
  SocialCalc.coordToCol[a] = b;
  SocialCalc.coordToRow[a] = e;
  return{row:e, col:b};
};
SocialCalc.ParseRange = function(a) {
  var b, c, d;
  a || (a = "A1:A1");
  a = a.toUpperCase();
  b = a.indexOf(":");
  0 <= b ? (c = a.substring(0, b), d = SocialCalc.coordToCr(c), d.coord = c, c = a.substring(b + 1), b = SocialCalc.coordToCr(c), b.coord = c) : (d = SocialCalc.coordToCr(a), d.coord = a, b = SocialCalc.coordToCr(a), b.coord = a);
  return{cr1:d, cr2:b};
};
SocialCalc.decodeFromSave = function(a) {
  if ("string" != typeof a || -1 == a.indexOf("\\")) {
    return a;
  }
  a = a.replace(/\\c/g, ":");
  a = a.replace(/\\n/g, "\n");
  return a.replace(/\\b/g, "\\");
};
SocialCalc.decodeFromAjax = function(a) {
  if ("string" != typeof a || -1 == a.indexOf("\\")) {
    return a;
  }
  a = a.replace(/\\c/g, ":");
  a = a.replace(/\\n/g, "\n");
  a = a.replace(/\\e/g, "]]");
  return a.replace(/\\b/g, "\\");
};
SocialCalc.encodeForSave = function(a) {
  if ("string" != typeof a) {
    return a;
  }
  -1 != a.indexOf("\\") && (a = a.replace(/\\/g, "\\b"));
  -1 != a.indexOf(":") && (a = a.replace(/:/g, "\\c"));
  -1 != a.indexOf("\n") && (a = a.replace(/\n/g, "\\n"));
  return a;
};
SocialCalc.special_chars = function(a) {
  /[&<>"]/.test(a) && (a = a.replace(/&/g, "&amp;"), a = a.replace(/</g, "&lt;"), a = a.replace(/>/g, "&gt;"), a = a.replace(/"/g, "&quot;"));
  return a;
};
SocialCalc.Lookup = function(a, b) {
  for (i = 0;i < b.length;i++) {
    if (b[i] > a) {
      return 0 < i ? i - 1 : null;
    }
  }
  return b.length - 1;
};
SocialCalc.setStyles = function(a, b) {
  var c, d, e, f;
  if (b) {
    for (c = b.split(";"), d = 0;d < c.length;d++) {
      e = c[d].indexOf(":"), -1 != e && (f = c[d].substring(0, e), e = c[d].substring(e + 1), f && e && (a.style[f] = e));
    }
  }
};
SocialCalc.GetViewportInfo = function() {
  var a = {};
  window.innerWidth ? (a.width = window.innerWidth, a.height = window.innerHeight, a.horizontalScroll = window.pageXOffset, a.verticalScroll = window.pageYOffset) : document.documentElement && document.documentElement.clientWidth ? (a.width = document.documentElement.clientWidth, a.height = document.documentElement.clientHeight, a.horizontalScroll = document.documentElement.scrollLeft, a.verticalScroll = document.documentElement.scrollTop) : document.body.clientWidth && (a.width = document.body.clientWidth, 
  a.height = document.body.clientHeight, a.horizontalScroll = document.body.scrollLeft, a.verticalScroll = document.body.scrollTop);
  return a;
};
SocialCalc.GetElementPosition = function(a) {
  for (var b = 0, c = 0;a && "relative" != SocialCalc.GetComputedStyle(a, "position");) {
    b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
  }
  return{left:b, top:c};
};
SocialCalc.GetElementPositionWithScroll = function(a) {
  a = a.getBoundingClientRect();
  return{left:a.left, right:a.right, top:a.top, bottom:a.bottom, width:a.width ? a.width : a.right - a.left, height:a.height ? a.height : a.bottom - a.top};
};
SocialCalc.GetElementFixedParent = function(a) {
  for (;a && "HTML" != a.tagName;) {
    if ("fixed" == SocialCalc.GetComputedStyle(a, "position")) {
      return a;
    }
    a = a.parentNode;
  }
  return!1;
};
SocialCalc.GetComputedStyle = function(a, b) {
  return("undefined" != typeof a.currentStyle ? a.currentStyle : document.defaultView.getComputedStyle(a, null))[b];
};
SocialCalc.LookupElement = function(a, b) {
  var c;
  for (c = 0;c < b.length;c++) {
    if (b[c].element == a) {
      return b[c];
    }
  }
  return null;
};
SocialCalc.AssignID = function(a, b, c) {
  a.idPrefix && (b.id = a.idPrefix + c);
};
SocialCalc.GetCellContents = function(a, b) {
  var c = "", d = a.cells[b];
  if (d) {
    switch(d.datatype) {
      case "v":
        c = d.datavalue + "";
        break;
      case "t":
        c = "'" + d.datavalue;
        break;
      case "f":
        c = "=" + d.formula;
        break;
      case "c":
        c = d.formula;
    }
  }
  return c;
};
SocialCalc.FormatValueForDisplay = function(a, b, c, d) {
  var e, f, g, l, h = a.attribs, p = a.cells[c];
  p || (p = new SocialCalc.Cell(c));
  l = b;
  f = p.valuetype || "";
  g = f.substring(1);
  valueinputwidget = f.charAt(1);
  var q = f.substring(2);
  e = b = null;
  f = f.charAt(0);
  if (p.errors || "e" == f) {
    return l = p.errors || g || "Error in cell";
  }
  if ("t" == f) {
    e = a.valueformats[p.textvalueformat - 0] || a.valueformats[h.defaulttextvalueformat - 0] || "";
    if ("formula" == e) {
      return l = "f" == p.datatype ? SocialCalc.special_chars("=" + p.formula) || "&nbsp;" : "c" == p.datatype ? SocialCalc.special_chars("'" + p.formula) || "&nbsp;" : SocialCalc.special_chars("'" + l) || "&nbsp;";
    }
    b = l;
    e = l = SocialCalc.format_text_for_display(l, p.valuetype, e, a, d, p.nontextvalueformat);
  } else {
    if ("n" == f) {
      e = p.nontextvalueformat;
      if (null == e || "" == e) {
        e = h.defaultnontextvalueformat;
      }
      e = a.valueformats[e - 0];
      if (null == e || "none" == e) {
        e = "";
      }
      if ("formula" == e) {
        return l = "f" == p.datatype ? SocialCalc.special_chars("=" + p.formula) || "&nbsp;" : "c" == p.datatype ? SocialCalc.special_chars("'" + p.formula) || "&nbsp;" : SocialCalc.special_chars("'" + l) || "&nbsp;";
      }
      if ("forcetext" == e) {
        return l = "f" == p.datatype ? SocialCalc.special_chars("=" + p.formula) || "&nbsp;" : "c" == p.datatype ? SocialCalc.special_chars(p.formula) || "&nbsp;" : SocialCalc.special_chars(l) || "&nbsp;";
      }
      b = l;
      e = l = SocialCalc.format_number_for_display(l, p.valuetype, e);
    } else {
      l = "&nbsp;";
    }
  }
  if ("i" == valueinputwidget && null != b && null != e) {
    d = a.ioParameterList[c];
    if (h = SocialCalc.Formula.FunctionList[q]) {
      h = h[5];
      h = h.replace(/<%=checked%>/g, 0 == b ? "" : "checked");
      h = h.replace(/<%=formated_value%>/g, e);
      h = h.replace(/<%=display_value%>/g, b);
      if (d) {
        for (p = 0;p < d.length;p++) {
          e = "coord" == d[p].type ? a.GetAssuredCell(d[p].value).datavalue : d[p].value, b = RegExp("<%=parameter" + p + "_value%>", "g"), h = h.replace(b, e);
        }
        if (d.html) {
          for (a = 0;a < d.html.length;a++) {
            b = RegExp("<%=html" + a + "_value%>", "g"), h = h.replace(b, d.html[a]);
          }
        }
        d.css && (h = h.replace(/^(<\w+)(\W)/, "$1 style='" + d.css + "'$2"));
      }
      return h.replace(/<%=cell_reference%>/g, c);
    }
    return "error:Widget HTML missing";
  }
  return l;
};
SocialCalc.format_text_for_display = function(a, b, c, d, e, f) {
  var g, l, h;
  g = b.substring(1);
  h = a;
  if ("none" == c || null == c) {
    c = "";
  }
  /^(text-|custom|hidden)/.test(c) || (c = "");
  if ("" == c || "General" == c) {
    "h" == g && (c = "text-html");
    if ("w" == g || "r" == g) {
      c = "text-wiki";
    }
    "l" == g && (c = "text-link");
    g || (c = "text-plain");
  }
  "text-html" != c && (SocialCalc.Callbacks.expand_wiki && /^text-wiki/.test(c) ? h = SocialCalc.Callbacks.expand_wiki(h, d, e, c) : "text-wiki" == c ? h = SocialCalc.Callbacks.expand_markup && SocialCalc.Callbacks.expand_markup(h, d, e) || SocialCalc.special_chars("wiki-text:" + h) : "text-url" == c ? (a = SocialCalc.special_chars(h), b = encodeURI(h), h = '<a href="' + b + '">' + a + "</a>") : "text-link" == c ? h = SocialCalc.expand_text_link(h, d, e, c) : "text-image" == c ? (b = encodeURI(h), 
  h = '<img src="' + b + '">') : "text-custom:" == c.substring(0, 12) ? (a = SocialCalc.special_chars(h), a = a.replace(/  /g, "&nbsp; "), a = a.replace(/\n/g, "<br>"), b = encodeURI(h), l = {}, l.r = h, l.s = a, l.u = b, h = c.substring(12), h = h.replace(/@(r|s|u)/g, function(a, b) {
    return l[b];
  })) : "custom" == c.substring(0, 6) ? (h = SocialCalc.special_chars(h), h = h.replace(/  /g, "&nbsp; "), h = h.replace(/\n/g, "<br>"), h += " (custom format)") : "hidden" == c ? h = "&nbsp;" : null != f && "" != f && "none" != d.valueformats[f - 0] && "" != d.valueformats[f - 0] ? (c = d.valueformats[f], h = SocialCalc.format_number_for_display(a, b, c)) : (h = SocialCalc.special_chars(h), h = h.replace(/  /g, "&nbsp; "), h = h.replace(/\n/g, "<br>")));
  return h;
};
SocialCalc.format_number_for_display = function(a, b, c) {
  var d, e = SocialCalc.Constants;
  d = a - 0;
  b = b.substring(1);
  if ("Auto" == c || "" == c) {
    c = "%" == b ? e.defaultFormatp : "$" == b ? e.defaultFormatc : "dt" == b ? e.defaultFormatdt : "d" == b ? e.defaultFormatd : "t" == b ? e.defaultFormatt : "l" == b ? "logical" : "General";
  }
  return "logical" == c ? d ? e.defaultDisplayTRUE : e.defaultDisplayFALSE : "hidden" == c ? "&nbsp;" : SocialCalc.FormatNumber.formatNumberWithFormat(a, c, "");
};
SocialCalc.DetermineValueType = function(a) {
  var b = a + "", c = "t", d, e, f;
  d = b.replace(/^\s+/, "");
  d = d.replace(/\s+$/, "");
  0 == b.length ? c = "" : b.match(/^\s+$/) || (d.match(/^[-+]?\d*(?:\.)?\d*(?:[eE][-+]?\d+)?$/) ? (b = d - 0, isNaN(b) ? b = a + "" : c = "n") : d.match(/^[-+]?\d*(?:\.)?\d*\s*%$/) ? (b = (d.slice(0, -1) - 0) / 100, c = "n%") : d.match(/^[-+]?\$\s*\d*(?:\.)?\d*\s*$/) && d.match(/\d/) ? (b = d.replace(/\$/, "") - 0, c = "n$") : d.match(/^[-+]?(\d*,\d*)+(?:\.)?\d*$/) ? (b = d.replace(/,/g, "") - 0, c = "n") : d.match(/^[-+]?(\d*,\d*)+(?:\.)?\d*\s*%$/) ? (b = (d.replace(/[%,]/g, "") - 0) / 100, c = 
  "n%") : d.match(/^[-+]?\$\s*(\d*,\d*)+(?:\.)?\d*$/) && d.match(/\d/) ? (b = d.replace(/[\$,]/g, "") - 0, c = "n$") : (a = b.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{1,4})\s*$/)) ? (b = a[3] - 0, b = 1E3 > b ? b + 2E3 : b, b = 0 === navigator.language.indexOf("fr") ? SocialCalc.FormatNumber.convert_date_gregorian_to_julian(b, a[2] - 0, a[1] - 0) - 2415019 : SocialCalc.FormatNumber.convert_date_gregorian_to_julian(b, a[1] - 0, a[2] - 0) - 2415019, c = "nd") : (a = b.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})\s*$/)) ? 
  (b = a[1] - 0, b = SocialCalc.FormatNumber.convert_date_gregorian_to_julian(1E3 > b ? b + 2E3 : b, a[2] - 0, a[3] - 0) - 2415019, c = "nd") : (a = b.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2}) (\d{1,2}):(\d{1,2})\s*$/)) ? (b = a[1] - 0, b = 1E3 > b ? b + 2E3 : b, d = a[4] - 0, e = a[5] - 0, b = SocialCalc.FormatNumber.convert_date_gregorian_to_julian(b, a[2] - 0, a[3] - 0) - 2415019, c = "nd", 24 > d && 60 > e && (b += d / 24 + e / 1440, c = "ndt")) : (a = b.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})\s*$/)) ? 
  (b = a[1] - 0, b = 1E3 > b ? b + 2E3 : b, d = a[4] - 0, e = a[5] - 0, f = a[6] - 0, b = SocialCalc.FormatNumber.convert_date_gregorian_to_julian(b, a[2] - 0, a[3] - 0) - 2415019, c = "nd", 24 > d && 60 > e && 60 > f && (b += d / 24 + e / 1440 + f / 86400, c = "ndt")) : (a = b.match(/^(\d{1,2}):(\d{1,2})\s*$/)) ? (d = a[1] - 0, e = a[2] - 0, 24 > d && 60 > e && (b = d / 24 + e / 1440, c = "nt")) : (a = b.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})\s*$/)) ? (d = a[1] - 0, e = a[2] - 0, f = a[3] - 0, 24 > 
  d && 60 > e && 60 > f && (b = d / 24 + e / 1440 + f / 86400, c = "nt")) : (a = b.match(/^\s*([-+]?\d+) (\d+)\/(\d+)\s*$/)) ? (e = a[1] - 0, d = a[2] - 0, (a = a[3] - 0) && 0 < a && (b = e + (0 > e ? -d / a : d / a), c = "n")) : (a = SocialCalc.InputConstants[b.toUpperCase()]) ? (d = a.indexOf(","), b = a.substring(0, d) - 0, c = a.substring(d + 1)) : 7 < d.length && "http://" == d.substring(0, 7).toLowerCase() ? (b = d, c = "tl") : d.match(/<([A-Z][A-Z0-9]*)\b[^>]*>[\s\S]*?<\/\1>/i) && (b = d, 
  c = "th"));
  return{value:b, type:c};
};
SocialCalc.InputConstants = {TRUE:"1,nl", FALSE:"0,nl", "#N/A":"0,e#N/A", "#NULL!":"0,e#NULL!", "#NUM!":"0,e#NUM!", "#DIV/0!":"0,e#DIV/0!", "#VALUE!":"0,e#VALUE!", "#REF!":"0,e#REF!", "#NAME?":"0,e#NAME?"};
SocialCalc.default_expand_markup = function(a, b, c) {
  a = SocialCalc.special_chars(a);
  a = a.replace(/  /g, "&nbsp; ");
  return a = a.replace(/\n/g, "<br>");
};
SocialCalc.expand_text_link = function(a, b, c, d) {
  var e;
  e = SocialCalc.Constants;
  b = "";
  var f = SocialCalc.ParseCellLinkText(a + "");
  e = f.desc ? SocialCalc.special_chars(f.desc) : f.pagename ? e.defaultPageLinkFormatString : e.defaultLinkFormatString;
  7 < a.length && "http://" == a.substring(0, 7).toLowerCase() && ">" != a.charAt(a.length - 1) && (e = e.substring(7));
  a = f.newwin || !c ? ' target="_blank"' : "";
  f.pagename ? SocialCalc.Callbacks.MakePageLink && (b = SocialCalc.Callbacks.MakePageLink(f.pagename, f.workspacename, c, d)) : b = encodeURI(f.url);
  return'<a href="' + b + '"' + a + ">" + e + "</a>";
};
SocialCalc.ParseCellLinkText = function(a) {
  var b = {url:"", desc:"", newwin:!1, pagename:"", workspace:""}, c = !1, d = a.length - 1, e = 0, f = a.lastIndexOf("<"), g = a.lastIndexOf("["), l = a.lastIndexOf("{"), h = -1;
  ">" == a.charAt(d) && -1 != f || "]" == a.charAt(d) && -1 != g || !("}" != a.charAt(d) || "]" != a.charAt(d - 1) || -1 == l || -1 == g || g < l) ? (">" == a.charAt(d) ? (h = f - 1, 0 < f && "<" == a.charAt(h) && ">" == a.charAt(d - 1) && (h--, d--, b.newwin = !0)) : "]" == a.charAt(d) ? (h = g - 1, c = !0, 0 < g && "[" == a.charAt(h) && "]" == a.charAt(d - 1) && (h--, d--, b.newwin = !0)) : "}" == a.charAt(d) && (h = l - 1, c = !0, wsend = g, d--, 0 < g && "[" == a.charAt(g - 1) && "]" == a.charAt(d - 
  1) && (wsend = g - 1, d--, b.newwin = !0), " " == a.charAt(wsend - 1) && wsend--, b.workspace = a.substring(l + 1, wsend) || ""), " " == a.charAt(h) && h--, '"' == a.charAt(e) && '"' == a.charAt(h) && (e++, h--)) : (d++, h = d);
  c ? b.pagename = a.substring(g + 1, d) || "" : b.url = a.substring(f + 1, d) || "";
  h >= e && (b.desc = a.substring(e, h + 1));
  return b;
};
SocialCalc.ConvertSaveToOtherFormat = function(a, b, c) {
  var d, e, f, g;
  e = "";
  if ("scsave" == b) {
    return a;
  }
  if ("" == a) {
    return "";
  }
  d = new SocialCalc.Sheet;
  d.ParseSheetSave(a);
  if (c) {
    throw "SocialCalc.ConvertSaveToOtherFormat: Not doing recalc.";
  }
  a = d.copiedfrom ? SocialCalc.ParseRange(d.copiedfrom) : {cr1:{row:1, col:1}, cr2:{row:d.attribs.lastrow, col:d.attribs.lastcol}};
  if ("html" == b) {
    return e = new SocialCalc.RenderContext(d), d.copiedfrom && (e.rowpanes[0] = {first:a.cr1.row, last:a.cr2.row}, e.colpanes[0] = {first:a.cr1.col, last:a.cr2.col}), b = document.createElement("div"), a = e.RenderSheet(null, e.defaultHTMLlinkstyle), b.appendChild(a), delete e, delete d, e = b.innerHTML, delete a, delete b, e;
  }
  for (c = a.cr1.row;c <= a.cr2.row;c++) {
    for (f = a.cr1.col;f <= a.cr2.col;f++) {
      g = SocialCalc.crToCoord(f, c), g = d.GetAssuredCell(g), g = g.errors ? g.errors : g.datavalue + "", "csv" == b ? (-1 != g.indexOf('"') && (g = g.replace(/"/g, '""')), /[, \n"]/.test(g) && (g = '"' + g + '"'), f > a.cr1.col && (g = "," + g)) : "tab" == b && (-1 != g.indexOf("\n") && (-1 != g.indexOf('"') && (g = g.replace(/"/g, '""')), g = '"' + g + '"'), f > a.cr1.col && (g = "\t" + g)), e += g;
    }
    e += "\n";
  }
  return e;
};
SocialCalc.ConvertOtherFormatToSave = function(a, b) {
  var c, d, e, f, g, l, h, p, q, w, v, s, t = "", x = function() {
    w++;
    w > s && (s = w);
    v = SocialCalc.crToCoord(w, q);
    SocialCalc.SetConvertedCell(c, v, g);
    g = "";
  };
  if ("scsave" == b) {
    return a;
  }
  c = new SocialCalc.Sheet;
  d = a.split(/\r\n|\n/);
  s = 0;
  if ("csv" == b) {
    q = 0;
    l = !1;
    for (e = 0;e < d.length && (e != d.length - 1 || "" != d[e]);e++) {
      for (l ? g += "\n" : (g = "", q++, w = 0), f = d[e], h = 0;h < f.length;h++) {
        p = f.charAt(h), '"' == p ? l ? h < f.length - 1 && '"' == f.charAt(h + 1) ? (h++, g += '"') : (l = !1, h == f.length - 1 && x()) : l = !0 : ("," != p || l ? g += p : x(), h != f.length - 1 || l || x());
      }
    }
    0 < s && (c.attribs.lastrow = q, c.attribs.lastcol = s, t = c.CreateSheetSave("A1:" + SocialCalc.crToCoord(s, q)));
  }
  if ("tab" == b) {
    q = 0;
    l = !1;
    for (e = 0;e < d.length && (e != d.length - 1 || "" != d[e]);e++) {
      for (l ? g += "\n" : (g = "", q++, w = 0), f = d[e], h = 0;h < f.length;h++) {
        p = f.charAt(h);
        if ('"' == p) {
          if (l) {
            h < f.length - 1 ? '"' == f.charAt(h + 1) ? (h++, g += '"') : "\t" == f.charAt(h + 1) && (h++, l = !1, x()) : (l = !1, x());
            continue;
          }
          if ("" == g) {
            l = !0;
            continue;
          }
        }
        "\t" != p || l ? g += p : x();
        h != f.length - 1 || l || x();
      }
    }
    0 < s && (c.attribs.lastrow = q, c.attribs.lastcol = s, t = c.CreateSheetSave("A1:" + SocialCalc.crToCoord(s, q)));
  }
  return t;
};
SocialCalc.SetConvertedCell = function(a, b, c) {
  a = a.GetAssuredCell(b);
  b = SocialCalc.DetermineValueType(c);
  "n" == b.type && b.value == c ? (a.datatype = "v", a.valuetype = "n", a.datavalue = b.value) : "t" == b.type.charAt(0) ? (a.datatype = "t", a.valuetype = b.type, a.datavalue = b.value) : (a.datatype = "c", a.valuetype = b.type, a.datavalue = b.value, a.formula = c);
};
SocialCalc || (SocialCalc = {});
SocialCalc.TableEditor = function(a) {
  var b = SocialCalc.Constants;
  this.context = a;
  this.fullgrid = this.toplevel = null;
  this.noEdit = !1;
  this.timeout = this.cellhandles = this.logo = this.horizontaltablecontrol = this.verticaltablecontrol = this.inputEcho = this.inputBox = this.tableheight = this.height = this.tablewidth = this.width = null;
  this.ensureecell = this.busy = !1;
  this.deferredCommands = [];
  this.deferredEmailCommands = [];
  this.lastvisiblecol = this.lastnonscrollingcol = this.firstscrollingcolleft = this.firstscrollingcol = this.lastvisiblerow = this.lastnonscrollingrow = this.firstscrollingrowtop = this.firstscrollingrow = this.headposition = this.gridposition = null;
  this.rowpositions = [];
  this.colpositions = [];
  this.rowheight = [];
  this.colwidth = [];
  this.ecell = null;
  this.state = "start";
  this.workingvalues = {};
  this.imageprefix = b.defaultImagePrefix;
  this.idPrefix = b.defaultTableEditorIDPrefix;
  this.pageUpDnAmount = b.defaultPageUpDnAmount;
  this.recalcFunction = function(a) {
    if (a.context.sheetobj.RecalcSheet) {
      a.context.sheetobj.RecalcSheet(SocialCalc.EditorSheetStatusCallback, a);
    } else {
      return null;
    }
  };
  this.ctrlkeyFunction = function(a, b) {
    var e, f, g, l;
    switch(b) {
      case "[ctrl-c]":
      ;
      case "[ctrl-x]":
        e = a.pasteTextarea;
        e.value = "";
        if (f = SocialCalc.GetEditorCellElement(a, a.ecell.row, a.ecell.col)) {
          f = SocialCalc.GetElementPosition(f.element), e.style.left = f.left - 1 + "px", e.style.top = f.top - 1 + "px";
        }
        l = a.range.hasrange ? SocialCalc.crToCoord(a.range.left, a.range.top) + ":" + SocialCalc.crToCoord(a.range.right, a.range.bottom) : a.ecell.coord;
        f = SocialCalc.ConvertSaveToOtherFormat(SocialCalc.CreateSheetSave(a.context.sheetobj, l), "tab");
        g = "[ctrl-c]" == b || a.noEdit || a.ECellReadonly() ? "copy " + l + " formulas" : "cut " + l + " formulas";
        a.EditorScheduleSheetCommands(g, !0, !1);
        e.style.display = "block";
        e.value = f;
        e.focus();
        e.select();
        window.setTimeout(function() {
          var b = a.pasteTextarea;
          b.blur();
          b.style.display = "none";
          SocialCalc.KeyboardFocus();
        }, 200);
        break;
      case "[ctrl-v]":
        if (a.noEdit || a.ECellReadonly()) {
          break;
        }
        e = a.pasteTextarea;
        e.value = "";
        if (f = SocialCalc.GetEditorCellElement(a, a.ecell.row, a.ecell.col)) {
          f = SocialCalc.GetElementPosition(f.element), e.style.left = f.left - 1 + "px", e.style.top = f.top - 1 + "px";
        }
        e.style.display = "block";
        e.value = "";
        e.focus();
        window.setTimeout(function() {
          var b = a.pasteTextarea, d = b.value;
          b.blur();
          b.style.display = "none";
          b = "";
          if (a.pastescclipboard) {
            a.pastescclipboard = !1;
          } else {
            var e = SocialCalc.ConvertSaveToOtherFormat(SocialCalc.Clipboard.clipboard, "tab"), d = d.replace(/\r\n/g, "\n");
            d == e || 1 == d.length - e.length && d.substring(0, d.length - 1) == e || (b = "loadclipboard " + SocialCalc.encodeForSave(SocialCalc.ConvertOtherFormatToSave(d, "tab")) + "\n");
          }
          a.range.hasrange ? (d = new SocialCalc.Sheet, d.ParseSheetSave(SocialCalc.Clipboard.clipboard), d = d.copiedfrom.match(/(.+):(.+)/), d = null !== d && d[1] === d[2] ? SocialCalc.crToCoord(a.range.left, a.range.top) + ":" + SocialCalc.crToCoord(a.range.right, a.range.bottom) : SocialCalc.crToCoord(a.range.left, a.range.top)) : d = a.ecell.coord;
          a.EditorScheduleSheetCommands(b + ("paste " + d + " formulas"), !0, !1);
          SocialCalc.KeyboardFocus();
        }, 200);
        break;
      case "[ctrl-z]":
        return a.EditorScheduleSheetCommands("undo", !0, !1), !1;
      case "[ctrl-s]":
        if (!SocialCalc.Constants.AllowCtrlS) {
          break;
        }
        window.setTimeout(function() {
          var b = a.context.sheetobj, d = b.GetAssuredCell(a.ecell.coord), b = window.prompt("Advanced Feature:\n\nCustom Numeric Format or Command", d.nontextvalueformat ? b.valueformats[d.nontextvalueformat - 0] || "" : "");
          if (null != b) {
            if (b.match(/^cmd:/)) {
              g = b.substring(4);
            } else {
              if (b.match(/^edit:/)) {
                g = b.substring(5);
                SocialCalc.CtrlSEditor && SocialCalc.CtrlSEditor(g);
                return;
              }
              l = a.range.hasrange ? SocialCalc.crToCoord(a.range.left, a.range.top) + ":" + SocialCalc.crToCoord(a.range.right, a.range.bottom) : a.ecell.coord;
              g = "set " + l + " nontextvalueformat " + b;
            }
            a.EditorScheduleSheetCommands(g, !0, !1);
          }
        }, 200);
        return!1;
    }
    return!0;
  };
  a.sheetobj.statuscallback = SocialCalc.EditorSheetStatusCallback;
  a.sheetobj.statuscallbackparams = this;
  this.StatusCallback = {};
  this.MoveECellCallback = {};
  this.RangeChangeCallback = {};
  this.SettingsCallbacks = {};
  this.ecell = {coord:"A1", row:1, col:1};
  a.highlights[this.ecell.coord] = "cursor";
  this.range = {hasrange:!1};
  this.range2 = {hasrange:!1};
};
SocialCalc.TableEditor.prototype.CreateTableEditor = function(a, b) {
  return SocialCalc.CreateTableEditor(this, a, b);
};
SocialCalc.TableEditor.prototype.ResizeTableEditor = function(a, b) {
  return SocialCalc.ResizeTableEditor(this, a, b);
};
SocialCalc.TableEditor.prototype.SaveEditorSettings = function() {
  return SocialCalc.SaveEditorSettings(this);
};
SocialCalc.TableEditor.prototype.LoadEditorSettings = function(a, b) {
  return SocialCalc.LoadEditorSettings(this, a, b);
};
SocialCalc.TableEditor.prototype.EditorRenderSheet = function() {
  SocialCalc.EditorRenderSheet(this);
};
SocialCalc.TableEditor.prototype.EditorScheduleSheetCommands = function(a, b, c) {
  SocialCalc.EditorScheduleSheetCommands(this, a, b, c);
};
SocialCalc.TableEditor.prototype.ScheduleSheetCommands = function(a, b) {
  this.context.sheetobj.ScheduleSheetCommands(a, b);
};
SocialCalc.TableEditor.prototype.SheetUndo = function() {
  this.context.sheetobj.SheetUndo();
};
SocialCalc.TableEditor.prototype.SheetRedo = function() {
  this.context.sheetobj.SheetRedo();
};
SocialCalc.TableEditor.prototype.EditorStepSet = function(a, b) {
  SocialCalc.EditorStepSet(this, a, b);
};
SocialCalc.TableEditor.prototype.GetStatuslineString = function(a, b, c) {
  return SocialCalc.EditorGetStatuslineString(this, a, b, c);
};
SocialCalc.TableEditor.prototype.EditorMouseRegister = function() {
  return SocialCalc.EditorMouseRegister(this);
};
SocialCalc.TableEditor.prototype.EditorMouseUnregister = function() {
  return SocialCalc.EditorMouseUnregister(this);
};
SocialCalc.TableEditor.prototype.EditorMouseRange = function(a) {
  return SocialCalc.EditorMouseRange(this, a);
};
SocialCalc.TableEditor.prototype.EditorProcessKey = function(a, b) {
  return SocialCalc.EditorProcessKey(this, a, b);
};
SocialCalc.TableEditor.prototype.EditorAddToInput = function(a, b) {
  return SocialCalc.EditorAddToInput(this, a, b);
};
SocialCalc.TableEditor.prototype.DisplayCellContents = function() {
  return SocialCalc.EditorDisplayCellContents(this);
};
SocialCalc.TableEditor.prototype.EditorSaveEdit = function(a) {
  return SocialCalc.EditorSaveEdit(this, a);
};
SocialCalc.TableEditor.prototype.EditorApplySetCommandsToRange = function(a, b) {
  return SocialCalc.EditorApplySetCommandsToRange(this, a, b);
};
SocialCalc.TableEditor.prototype.MoveECellWithKey = function(a) {
  return SocialCalc.MoveECellWithKey(this, a);
};
SocialCalc.TableEditor.prototype.MoveECell = function(a) {
  return SocialCalc._app ? "A1" : SocialCalc.MoveECell(this, a);
};
SocialCalc.TableEditor.prototype.ReplaceCell = function(a, b, c) {
  SocialCalc.ReplaceCell(this, a, b, c);
};
SocialCalc.TableEditor.prototype.UpdateCellCSS = function(a, b, c) {
  SocialCalc.UpdateCellCSS(this, a, b, c);
};
SocialCalc.TableEditor.prototype.SetECellHeaders = function(a) {
  SocialCalc.SetECellHeaders(this, a);
};
SocialCalc.TableEditor.prototype.EnsureECellVisible = function() {
  SocialCalc.EnsureECellVisible(this);
};
SocialCalc.TableEditor.prototype.ECellReadonly = function(a) {
  return SocialCalc.ECellReadonly(this, a);
};
SocialCalc.TableEditor.prototype.RangeAnchor = function(a) {
  SocialCalc.RangeAnchor(this, a);
};
SocialCalc.TableEditor.prototype.RangeExtend = function(a) {
  SocialCalc.RangeExtend(this, a);
};
SocialCalc.TableEditor.prototype.RangeRemove = function() {
  SocialCalc.RangeRemove(this);
};
SocialCalc.TableEditor.prototype.Range2Remove = function() {
  SocialCalc.Range2Remove(this);
};
SocialCalc.TableEditor.prototype.FitToEditTable = function() {
  SocialCalc.FitToEditTable(this);
};
SocialCalc.TableEditor.prototype.CalculateEditorPositions = function() {
  SocialCalc.CalculateEditorPositions(this);
};
SocialCalc.TableEditor.prototype.ScheduleRender = function() {
  this.ScheduleRender(!0);
};
SocialCalc.TableEditor.prototype.ScheduleRender = function(a) {
  SocialCalc._app && !0 == a && (this.context.sheetobj.widgetsClean = !1);
  SocialCalc.ScheduleRender(this);
};
SocialCalc.TableEditor.prototype.DoRenderStep = function() {
  SocialCalc.DoRenderStep(this);
};
SocialCalc.TableEditor.prototype.SchedulePositionCalculations = function() {
  SocialCalc.SchedulePositionCalculations(this);
};
SocialCalc.TableEditor.prototype.DoPositionCalculations = function() {
  SocialCalc.DoPositionCalculations(this);
};
SocialCalc.TableEditor.prototype.CalculateRowPositions = function(a, b, c) {
  return SocialCalc.CalculateRowPositions(this, a, b, c);
};
SocialCalc.TableEditor.prototype.CalculateColPositions = function(a, b, c) {
  return SocialCalc.CalculateColPositions(this, a, b, c);
};
SocialCalc.TableEditor.prototype.ScrollRelative = function(a, b) {
  SocialCalc.ScrollRelative(this, a, b);
};
SocialCalc.TableEditor.prototype.ScrollRelativeBoth = function(a, b) {
  SocialCalc.ScrollRelativeBoth(this, a, b);
};
SocialCalc.TableEditor.prototype.PageRelative = function(a, b) {
  SocialCalc.PageRelative(this, a, b);
};
SocialCalc.TableEditor.prototype.LimitLastPanes = function() {
  SocialCalc.LimitLastPanes(this);
};
SocialCalc.TableEditor.prototype.ScrollTableUpOneRow = function() {
  return SocialCalc.ScrollTableUpOneRow(this);
};
SocialCalc.TableEditor.prototype.ScrollTableDownOneRow = function() {
  return SocialCalc.ScrollTableDownOneRow(this);
};
SocialCalc.TableEditor.prototype.ScrollTableLeftOneCol = function() {
  return SocialCalc.ScrollTableLeftOneCol(this);
};
SocialCalc.TableEditor.prototype.ScrollTableRightOneCol = function() {
  return SocialCalc.ScrollTableRightOneCol(this);
};
SocialCalc.TableEditor.prototype.StopPropagation = function() {
  return SocialCalc.StopPropagation(this);
};
SocialCalc.TableEditor.prototype.SetMouseMoveUp = function() {
  return SocialCalc.SetMouseMoveUp(this);
};
SocialCalc.TableEditor.prototype.RemoveMouseMoveUp = function() {
  return SocialCalc.RemoveMouseMoveUp(this);
};
SocialCalc.CreateTableEditor = function(a, b, c) {
  var d = SocialCalc.Constants, e = SocialCalc.AssignID;
  a.toplevel = document.createElement("div");
  a.toplevel.style.position = "relative";
  e(a, a.toplevel, "toplevel");
  a.width = b;
  a.height = c;
  a.griddiv = document.createElement("div");
  a.tablewidth = Math.max(0, b - d.defaultTableControlThickness);
  a.tableheight = Math.max(0, c - d.defaultTableControlThickness);
  a.griddiv.style.width = a.tablewidth + "px";
  a.griddiv.style.height = a.tableheight + "px";
  a.griddiv.style.overflow = "hidden";
  a.griddiv.style.cursor = "default";
  d.cteGriddivClass && (a.griddiv.className = d.cteGriddivClass);
  e(a, a.griddiv, "griddiv");
  a.FitToEditTable();
  a.EditorRenderSheet();
  a.griddiv.appendChild(a.fullgrid);
  a.verticaltablecontrol = new SocialCalc.TableControl(a, !0, a.tableheight);
  a.verticaltablecontrol.CreateTableControl();
  e(a, a.verticaltablecontrol.main, "tablecontrolv");
  a.horizontaltablecontrol = new SocialCalc.TableControl(a, !1, a.tablewidth);
  a.horizontaltablecontrol.CreateTableControl();
  e(a, a.horizontaltablecontrol.main, "tablecontrolh");
  c = document.createElement("table");
  a.layouttable = c;
  c.cellSpacing = 0;
  c.cellPadding = 0;
  e(a, c, "layouttable");
  b = document.createElement("tbody");
  c.appendChild(b);
  c = document.createElement("tr");
  b.appendChild(c);
  d = document.createElement("td");
  d.appendChild(a.griddiv);
  c.appendChild(d);
  !0 != SocialCalc._app && (d = document.createElement("td"), d.appendChild(a.verticaltablecontrol.main), c.appendChild(d));
  c = document.createElement("tr");
  b.appendChild(c);
  !0 != SocialCalc._app && (d = document.createElement("td"), d.appendChild(a.horizontaltablecontrol.main), c.appendChild(d));
  d = document.createElement("td");
  d.style.background = SocialCalc._app ? "url(" + a.imageprefix + "logo.gif) no-repeat right center" : "url(" + a.imageprefix + "logo.gif) no-repeat center center";
  d.innerHTML = "<div style='cursor:pointer;font-size:1px;'><img src='" + a.imageprefix + "1x1.gif' border='0' width='18' height='18'></div>";
  c.appendChild(d);
  a.logo = d;
  e(a, a.logo, "logo");
  SocialCalc.TooltipRegister(d.firstChild.firstChild, "SocialCalc", null, a.toplevel);
  a.toplevel.appendChild(a.layouttable);
  a.noEdit || (a.inputEcho = new SocialCalc.InputEcho(a), e(a, a.inputEcho.main, "inputecho"));
  a.cellhandles = new SocialCalc.CellHandles(a);
  b = document.createElement("textarea");
  SocialCalc.setStyles(b, "display:none;position:absolute;height:1px;width:1px;opacity:0;filter:alpha(opacity=0);");
  b.value = "";
  a.pasteTextarea = b;
  e(a, a.pasteTextarea, "pastetextarea");
  navigator.userAgent.match(/Safari\//) && !navigator.userAgent.match(/Chrome\//) && (window.removeEventListener("beforepaste", SocialCalc.SafariPasteFunction, !1), window.addEventListener("beforepaste", SocialCalc.SafariPasteFunction, !1), window.removeEventListener("beforecopy", SocialCalc.SafariPasteFunction, !1), window.addEventListener("beforecopy", SocialCalc.SafariPasteFunction, !1), window.removeEventListener("beforecut", SocialCalc.SafariPasteFunction, !1), window.addEventListener("beforecut", 
  SocialCalc.SafariPasteFunction, !1));
  a.toplevel.appendChild(a.pasteTextarea);
  SocialCalc.MouseWheelRegister(a.toplevel, {WheelMove:SocialCalc.EditorProcessMouseWheel, editor:a});
  SocialCalc.KeyboardSetFocus(a);
  SocialCalc.EditorSheetStatusCallback(null, "startup", null, a);
  return a.toplevel;
};
SocialCalc.SafariPasteFunction = function(a) {
  a.preventDefault();
};
SocialCalc.ResizeTableEditor = function(a, b, c) {
  var d = SocialCalc.Constants;
  a.width = b;
  a.height = c;
  a.toplevel.style.width = b + "px";
  a.toplevel.style.height = c + "px";
  a.tablewidth = SocialCalc._app ? Math.max(0, b) : Math.max(0, b - d.defaultTableControlThickness);
  a.tableheight = Math.max(0, c - d.defaultTableControlThickness);
  a.griddiv.style.width = a.tablewidth + "px";
  a.griddiv.style.height = a.tableheight + "px";
  a.verticaltablecontrol.main.style.height = a.tableheight + "px";
  a.horizontaltablecontrol.main.style.width = a.tablewidth + "px";
  a.FitToEditTable();
  a.ScheduleRender();
};
SocialCalc.SaveEditorSettings = function(a) {
  var b, c, d = a.context, e = a.range, f;
  f = "version:1.0\n";
  for (b = 0;b < d.rowpanes.length;b++) {
    f += "rowpane:" + b + ":" + d.rowpanes[b].first + ":" + d.rowpanes[b].last + "\n";
  }
  for (b = 0;b < d.colpanes.length;b++) {
    f += "colpane:" + b + ":" + d.colpanes[b].first + ":" + d.colpanes[b].last + "\n";
  }
  a.ecell && (f += "ecell:" + a.ecell.coord + "\n");
  e.hasrange && (f += "range:" + e.anchorcoord + ":" + e.top + ":" + e.bottom + ":" + e.left + ":" + e.right + "\n");
  for (c in a.SettingsCallbacks) {
    f += a.SettingsCallbacks[c].save(a, c);
  }
  return f;
};
SocialCalc.LoadEditorSettings = function(a, b, c) {
  b = b.split(/\r\n|\n/);
  var d = [], e, f, g, l = a.context, h, p;
  l.rowpanes = [{first:1, last:1}];
  l.colpanes = [{first:1, last:1}];
  a.ecell = null;
  a.range = {hasrange:!1};
  a.range2 = {hasrange:!1};
  p = a.range;
  l.highlights = {};
  h = l.highlights;
  for (f = 0;f < b.length;f++) {
    switch(e = b[f], d = e.split(":"), g = d[0], g) {
      case "version":
        break;
      case "rowpane":
        l.rowpanes[d[1] - 0] = {first:d[2] - 0, last:d[3] - 0};
        break;
      case "colpane":
        l.colpanes[d[1] - 0] = {first:d[2] - 0, last:d[3] - 0};
        break;
      case "ecell":
        a.ecell = SocialCalc.coordToCr(d[1]);
        a.ecell.coord = d[1];
        h[d[1]] = "cursor";
        break;
      case "range":
        p.hasrange = !0;
        p.anchorcoord = d[1];
        e = SocialCalc.coordToCr(p.anchorcoord);
        p.anchorrow = e.row;
        p.anchorcol = e.col;
        p.top = d[2] - 0;
        p.bottom = d[3] - 0;
        p.left = d[4] - 0;
        p.right = d[5] - 0;
        for (d = p.top;d <= p.bottom;d++) {
          for (e = p.left;e <= p.right;e++) {
            g = SocialCalc.crToCoord(e, d), "cursor" != h[g] && (h[g] = "range");
          }
        }
        break;
      default:
        a.SettingsCallbacks[g] && a.SettingsCallbacks[g].load(a, g, e, c);
    }
  }
};
SocialCalc.EditorRenderSheet = function(a) {
  a.EditorMouseUnregister();
  var b = a.context.sheetobj;
  if (null != b.reRenderCellList && SocialCalc._app && !0 === b.widgetsClean) {
    for (var c in b.reRenderCellList) {
      var d = b.reRenderCellList[c], e = b.cells[d].valuetype;
      if ("i" != e.charAt(1) || e != b.cells[d].prevvaluetype) {
        cr = SocialCalc.coordToCr(d), cell = SocialCalc.GetEditorCellElement(a, cr.row, cr.col), null != cell && a.ReplaceCell(cell, cr.row, cr.col);
      }
    }
    b.reRenderCellList = [];
  } else {
    a.fullgrid = a.context.RenderSheet(a.fullgrid), null != b.reRenderCellList && SocialCalc._app && (b.widgetsClean = !0, b.reRenderCellList = []);
  }
  a.ecell && a.SetECellHeaders("selected");
  SocialCalc.AssignID(a, a.fullgrid, "fullgrid");
  SocialCalc._app || (a.fullgrid.className = "te_download");
  a.EditorMouseRegister();
};
SocialCalc.EditorScheduleSheetCommands = function(a, b, c, d) {
  if ("start" == a.state || d) {
    if (a.busy && !d) {
      a.deferredCommands.push({cmdstr:b, saveundo:c});
    } else {
      switch(d = b.split(" "), d[0]) {
        case "recalc":
        ;
        case "redisplay":
          a.context.sheetobj.ScheduleSheetCommands(b, !1);
          break;
        case "undo":
          SocialCalc._app && (a.context.sheetobj.widgetsClean = !1);
          a.SheetUndo();
          break;
        case "redo":
          SocialCalc._app && (a.context.sheetobj.widgetsClean = !1);
          a.SheetRedo();
          break;
        case "setemailparameters":
          SocialCalc.TriggerIoAction.Email(d[1], d[2]);
          break;
        default:
          a.context.sheetobj.ScheduleSheetCommands(b, c);
      }
    }
  }
};
SocialCalc.EditorSheetStatusCallback = function(a, b, c, d) {
  var e;
  a = d.context.sheetobj;
  var f = function(a) {
    for (e in d.StatusCallback) {
      d.StatusCallback[e].func && d.StatusCallback[e].func(d, a, c, d.StatusCallback[e].params);
    }
  };
  switch(b) {
    case "startup":
      break;
    case "cmdstart":
      d.busy = !0;
      a.celldisplayneeded = "";
      break;
    case "cmdextension":
      break;
    case "cmdend":
      f(b);
      a.changedrendervalues && (d.context.PrecomputeSheetFontsAndLayouts(), d.context.CalculateCellSkipData(), a.changedrendervalues = !1);
      a.celldisplayneeded && !a.renderneeded && a.cells[a.celldisplayneeded] && "e#N/A" != a.cells[a.celldisplayneeded].valuetype && (cr = SocialCalc.coordToCr(a.celldisplayneeded), b = SocialCalc.GetEditorCellElement(d, cr.row, cr.col), d.ReplaceCell(b, cr.row, cr.col));
      if (d.deferredCommands.length) {
        a = d.deferredCommands.shift();
        d.EditorScheduleSheetCommands(a.cmdstr, a.saveundo, !0);
        return;
      }
      a.attribs.needsrecalc && ("off" != a.attribs.recalc || a.recalconce) && d.recalcFunction ? (d.FitToEditTable(), a.renderneeded = !1, a.recalconce && delete a.recalconce, d.recalcFunction(d)) : a.renderneeded ? (d.FitToEditTable(), a.renderneeded = !1, d.ScheduleRender(!1)) : d.SchedulePositionCalculations();
      if ("col" == a.hiddencolrow && null !== d.ecell) {
        for (b = d.ecell.col;"yes" == a.colattribs.hide[SocialCalc.rcColname(b)];) {
          b++;
        }
        b = SocialCalc.crToCoord(b, d.ecell.row);
        d.MoveECell(b);
        a.hiddencolrow = "";
      }
      if ("row" == a.hiddencolrow && null !== d.ecell) {
        for (b = d.ecell.row;"yes" == a.rowattribs.hide[b];) {
          b++;
        }
        b = SocialCalc.crToCoord(d.ecell.col, b);
        d.MoveECell(b);
        a.hiddencolrow = "";
      }
      return;
    case "calcstart":
      d.busy = !0;
      break;
    case "calccheckdone":
    ;
    case "calcorder":
    ;
    case "calcstep":
    ;
    case "calcloading":
    ;
    case "calcserverfunc":
      break;
    case "calcfinished":
      f(b);
      d.ScheduleRender(!1);
      return;
    case "schedrender":
      d.busy = !0;
      break;
    case "renderdone":
      break;
    case "schedposcalc":
      d.busy = !0;
      break;
    case "doneposcalc":
      if (d.deferredEmailCommands.length) {
        f(b);
        a = d.deferredEmailCommands.shift();
        d.EditorScheduleSheetCommands(a.cmdstr, a.saveundo, !0);
        return;
      }
      d.deferredCommands.length ? (f(b), a = d.deferredCommands.shift(), d.EditorScheduleSheetCommands(a.cmdstr, a.saveundo, !0)) : (d.busy = !1, f(b), "start" == d.state && d.DisplayCellContents());
      return;
    case "emailing":
    ;
    case "confirmemailsent":
      break;
    default:
      alert("Unknown status: " + b);
  }
  f(b);
};
SocialCalc.EditorGetStatuslineString = function(a, b, c, d) {
  var e = SocialCalc.Constants, f, g, l;
  f = "";
  switch(b) {
    case "moveecell":
    ;
    case "rangechange":
    ;
    case "startup":
      break;
    case "cmdstart":
      d.command = !0;
      document.body.style.cursor = "progress";
      a.griddiv.style.cursor = "progress";
      f = e.s_statusline_executing;
      break;
    case "cmdextension":
      f = "Command Extension: " + c;
      break;
    case "cmdend":
      d.command = !1;
      break;
    case "schedrender":
      f = e.s_statusline_displaying;
      break;
    case "renderdone":
      f = " ";
      break;
    case "schedposcalc":
      f = e.s_statusline_displaying;
      break;
    case "cmdendnorender":
    ;
    case "doneposcalc":
      document.body.style.cursor = "default";
      a.griddiv.style.cursor = "default";
      "sent" == d.emailing && (f = d.emailreponse, d.emailreponse = "", d.emailing = "done");
      break;
    case "calcorder":
      f = e.s_statusline_ordering + Math.floor(100 * c.count / (c.total || 1)) + "%";
      break;
    case "calcstep":
      f = e.s_statusline_calculating + Math.floor(100 * c.count / (c.total || 1)) + "%";
      break;
    case "calcloading":
      f = e.s_statusline_calculatingls + ": " + c.sheetname;
      break;
    case "calcserverfunc":
      f = e.s_statusline_calculating + Math.floor(100 * c.count / (c.total || 1)) + "%, " + e.s_statusline_doingserverfunc + c.funcname + e.s_statusline_incell + c.coord;
      break;
    case "calcstart":
      d.calculating = !0;
      document.body.style.cursor = "progress";
      a.griddiv.style.cursor = "progress";
      f = e.s_statusline_calcstart;
      break;
    case "calccheckdone":
      break;
    case "calcfinished":
      d.calculating = !1;
      break;
    case "emailing":
      d.emailing = "sending";
      d.emailreponse = "";
      break;
    case "confirmemailsent":
      d.emailing = "sent";
      "undefined" === typeof d.emailreponse && (d.emailreponse = "");
      d.emailreponse += c;
      break;
    default:
      f = b;
  }
  "sending" == d.emailing && (f += e.s_statusline_sendemail);
  "sent" == d.emailing && (f += d.emailreponse);
  !f && d.calculating && (f = e.s_statusline_calculating);
  if (!(d.calculating || d.command || f || !a.range.hasrange || a.range.left == a.range.right && a.range.top == a.range.bottom)) {
    b = 0;
    for (c = a.range.top;c <= a.range.bottom;c++) {
      for (g = a.range.left;g <= a.range.right;g++) {
        (l = a.context.sheetobj.cells[SocialCalc.crToCoord(g, c)]) && l.valuetype && "n" == l.valuetype.charAt(0) && (b += l.datavalue - 0);
      }
    }
    b = SocialCalc.FormatNumber.formatNumberWithFormat(b, "[,]General", "");
    c = SocialCalc.crToCoord(a.range.left, a.range.top) + ":" + SocialCalc.crToCoord(a.range.right, a.range.bottom);
    f = c + " (" + (a.range.right - a.range.left + 1) + "x" + (a.range.bottom - a.range.top + 1) + ") " + e.s_statusline_sum + "=" + b + " " + f;
  }
  f = (a.ecell || {}).coord + " &nbsp; " + f;
  d.calculating || "yes" != a.context.sheetobj.attribs.needsrecalc || (f += " &nbsp; " + e.s_statusline_recalcneeded);
  if (a = a.context.sheetobj.attribs.circularreferencecell) {
    a = a.replace(/\|/, " referenced by "), f += " &nbsp; " + e.s_statusline_circref + a + "</span>";
  }
  return f + "";
};
SocialCalc.EditorMouseInfo = {registeredElements:[], editor:null, element:null, ignore:!1, mousedowncoord:"", mouselastcoord:"", mouseresizecol:"", mouseresizeclientx:null, mouseresizedisplay:null};
SocialCalc.EditorMouseRegister = function(a) {
  var b = SocialCalc.EditorMouseInfo, c = a.fullgrid, d;
  for (d = 0;d < b.registeredElements.length;d++) {
    if (b.registeredElements[d].editor == a) {
      if (b.registeredElements[d].element == c) {
        return;
      }
      break;
    }
  }
  d < b.registeredElements.length ? b.registeredElements[d].element = c : b.registeredElements.push({element:c, editor:a});
  if (c.addEventListener) {
    c.addEventListener("mousedown", SocialCalc.ProcessEditorMouseDown, !1), c.addEventListener("dblclick", SocialCalc.ProcessEditorDblClick, !1);
  } else {
    if (c.attachEvent) {
      c.attachEvent("onmousedown", SocialCalc.ProcessEditorMouseDown), c.attachEvent("ondblclick", SocialCalc.ProcessEditorDblClick);
    } else {
      throw "Browser not supported";
    }
  }
  b.ignore = !1;
};
SocialCalc.EditorMouseUnregister = function(a) {
  var b = SocialCalc.EditorMouseInfo, c;
  for (c = 0;c < b.registeredElements.length && b.registeredElements[c].editor != a;c++) {
  }
  c < b.registeredElements.length && (a = b.registeredElements[c].element, a.removeEventListener ? (a.removeEventListener("mousedown", SocialCalc.ProcessEditorMouseDown, !1), a.removeEventListener("dblclick", SocialCalc.ProcessEditorDblClick, !1)) : a.detachEvent && (a.detachEvent("onmousedown", SocialCalc.ProcessEditorMouseDown), a.detachEvent("ondblclick", SocialCalc.ProcessEditorDblClick)), b.registeredElements.splice(c, 1));
};
SocialCalc.StopPropagation = function(a) {
  a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
  a.preventDefault ? a.preventDefault() : a.returnValue = !1;
};
SocialCalc.SetMouseMoveUp = function(a, b, c, d) {
  document.addEventListener ? (document.addEventListener("mousemove", a, !0), document.addEventListener("mouseup", b, !0)) : c.attachEvent && (c.setCapture(), c.attachEvent("onmousemove", a), c.attachEvent("onmouseup", b), c.attachEvent("onlosecapture", b));
  SocialCalc.StopPropagation(d);
};
SocialCalc.RemoveMouseMoveUp = function(a, b, c, d) {
  SocialCalc.StopPropagation(d);
  document.removeEventListener ? (document.removeEventListener("mousemove", a, !0), document.removeEventListener("mouseup", b, !0)) : c.detachEvent && (c.detachEvent("onlosecapture", b), c.detachEvent("onmouseup", b), c.detachEvent("onmousemove", a), c.releaseCapture());
};
SocialCalc.ProcessEditorMouseDown = function(a) {
  var b, c, d, e = a || window.event, f = SocialCalc.EditorMouseInfo, g = e.target || e.srcElement, l = g;
  3 == l.nodeType && (l = l.parentNode);
  if (!f.ignore) {
    for (b = null;!b && g;g = g.parentNode) {
      b = SocialCalc.LookupElement(g, f.registeredElements);
    }
    if (b) {
      if (b = b.editor, f.element = g, d = b.range, c = SocialCalc.GetElementPositionWithScroll(b.toplevel), c = SocialCalc.GridMousePosition(b, e.clientX - c.left, e.clientY - c.top)) {
        if (f.editor = b, c.rowheader) {
          c.rowselect ? SocialCalc.ProcessEditorRowselectMouseDown(a, g, c) : SocialCalc.ProcessEditorRowsizeMouseDown(a, g, c);
        } else {
          if (c.colheader) {
            c.colselect ? SocialCalc.ProcessEditorColselectMouseDown(a, g, c) : SocialCalc.ProcessEditorColsizeMouseDown(a, g, c);
          } else {
            if (c.coord) {
              if (d.hasrange || a.shiftKey && b.RangeAnchor(), c = b.MoveECell(c.coord), !0 == SocialCalc._app) {
                SocialCalc.CmdGotFocus(!0);
              } else {
                var h = b.context.sheetobj.cells[c];
                h && "i" == h.valuetype.charAt(1) ? (a = h.valuetype.substring(2) + "_" + c, l && a == l.id && (l = document.getElementById(a), SocialCalc.CmdGotFocus(l))) : (d.hasrange && (a.shiftKey ? b.RangeExtend() : b.RangeRemove()), f.mousedowncoord = c, f.mouselastcoord = c, b.EditorMouseRange(c), SocialCalc.KeyboardSetFocus(b), "start" != b.state && b.inputBox && b.inputBox.element.focus(), SocialCalc.SetMouseMoveUp(SocialCalc.ProcessEditorMouseMove, SocialCalc.ProcessEditorMouseUp, g, e));
              }
            }
          }
        }
      }
    } else {
      f.editor = null;
    }
  }
};
SocialCalc.EditorMouseRange = function(a, b) {
  var c, d, e = a.range;
  switch(a.state) {
    case "input":
      c = a.inputBox.GetText();
      d = a.workingvalues;
      if (0 <= "(+-*/,:!&<>=^".indexOf(c.slice(-1)) && "=" == c.slice(0, 1) || "=" == c) {
        d.partialexpr = c;
      }
      d.partialexpr ? b && (e.hasrange ? a.inputBox.SetText(d.partialexpr + SocialCalc.crToCoord(e.left, e.top) + ":" + SocialCalc.crToCoord(e.right, e.bottom)) : a.inputBox.SetText(d.partialexpr + b)) : (a.inputBox.Blur(), a.inputBox.ShowInputBox(!1), a.state = "start", a.cellhandles.ShowCellHandles(!0), a.EditorSaveEdit(), a.inputBox.DisplayCellContents(null));
      break;
    case "inputboxdirect":
      a.inputBox.Blur(), a.inputBox.ShowInputBox(!1), a.state = "start", a.cellhandles.ShowCellHandles(!0), a.EditorSaveEdit(), a.inputBox.DisplayCellContents(null);
  }
};
SocialCalc.ProcessEditorMouseMove = function(a) {
  var b, c, d = a || window.event, e = SocialCalc.EditorMouseInfo;
  (b = e.editor) && !e.ignore && (c = SocialCalc.GetElementPositionWithScroll(b.toplevel), c = SocialCalc.GridMousePosition(b, d.clientX - c.left, d.clientY - c.top)) && (c && !c.coord ? SocialCalc.SetDragAutoRepeat(b, c) : (SocialCalc.SetDragAutoRepeat(b, null), c.coord && (c.coord != e.mouselastcoord && (a.shiftKey || b.range.hasrange || b.RangeAnchor(e.mousedowncoord), b.MoveECell(c.coord), b.RangeExtend()), e.mouselastcoord = c.coord, b.EditorMouseRange(c.coord), SocialCalc.StopPropagation(d))));
};
SocialCalc.ProcessEditorMouseUp = function(a) {
  var b, c, d = a || window.event, e = SocialCalc.EditorMouseInfo;
  if ((a = e.editor) && !e.ignore && (b = e.element, c = SocialCalc.GetElementPositionWithScroll(a.toplevel), c = SocialCalc.GridMousePosition(a, d.clientX - c.left, d.clientY - c.top), SocialCalc.SetDragAutoRepeat(a, null), c)) {
    return c.coord || (c.coord = a.ecell.coord), a.range.hasrange ? (a.MoveECell(c.coord), a.RangeExtend()) : c.coord && c.coord != e.mousedowncoord && (a.RangeAnchor(e.mousedowncoord), a.MoveECell(c.coord), a.RangeExtend()), a.EditorMouseRange(c.coord), e.editor = null, SocialCalc.RemoveMouseMoveUp(SocialCalc.ProcessEditorMouseMove, SocialCalc.ProcessEditorMouseUp, b, d), !1;
  }
};
SocialCalc.ProcessEditorColsizeMouseDown = function(a, b, c) {
  a = a || window.event;
  b = SocialCalc.EditorMouseInfo;
  var d = b.editor, e = SocialCalc.GetElementPositionWithScroll(d.toplevel), e = a.clientX - e.left;
  b.mouseresizecolnum = c.coltoresize;
  b.mouseresizecol = SocialCalc.rcColname(c.coltoresize);
  b.mousedownclientx = e;
  b.mousecoltounhide = c.coltounhide;
  c.coltoresize && (e = document.createElement("div"), b.mouseresizedisplay = e, e.style.width = "auto", e.style.position = "absolute", e.style.zIndex = 100, e.style.top = d.headposition.top + "px", e.style.left = d.colpositions[c.coltoresize] + "px", e.innerHTML = '<table cellpadding="0" cellspacing="0"><tr><td style="height:100px;border:1px dashed black;background-color:white;width:' + (d.context.colwidth[b.mouseresizecolnum] - 2) + 'px;">&nbsp;</td><td><div style="font-size:small;color:white;background-color:gray;padding:4px;">' + 
  d.context.colwidth[b.mouseresizecolnum] + "</div></td></tr></table>", SocialCalc.setStyles(e.firstChild.lastChild.firstChild.childNodes[0], "filter:alpha(opacity=85);opacity:.85;"), d.toplevel.appendChild(e));
  SocialCalc.SetMouseMoveUp(SocialCalc.ProcessEditorColsizeMouseMove, SocialCalc.ProcessEditorColsizeMouseUp, d.toplevel, a);
};
SocialCalc.ProcessEditorColsizeMouseMove = function(a) {
  a = a || window.event;
  var b = SocialCalc.EditorMouseInfo, c = b.editor;
  if (c) {
    if (b.mouseresizecolnum) {
      var d = SocialCalc.GetElementPositionWithScroll(c.toplevel), c = c.context.colwidth[b.mouseresizecolnum] - 0 + (a.clientX - d.left - b.mousedownclientx);
      c < SocialCalc.Constants.defaultMinimumColWidth && (c = SocialCalc.Constants.defaultMinimumColWidth);
      b = b.mouseresizedisplay;
      b.innerHTML = '<table cellpadding="0" cellspacing="0"><tr><td style="height:100px;border:1px dashed black;background-color:white;width:' + (c - 2) + 'px;">&nbsp;</td><td><div style="font-size:small;color:white;background-color:gray;padding:4px;">' + c + "</div></td></tr></table>";
      SocialCalc.setStyles(b.firstChild.lastChild.firstChild.childNodes[0], "filter:alpha(opacity=85);opacity:.85;");
    }
    SocialCalc.StopPropagation(a);
  }
};
SocialCalc.ProcessEditorColsizeMouseUp = function(a) {
  var b = a || window.event;
  a = SocialCalc.EditorMouseInfo;
  var c = a.editor;
  if (c) {
    element = a.element;
    var d = SocialCalc.GetElementPositionWithScroll(c.toplevel), d = b.clientX - d.left;
    SocialCalc.RemoveMouseMoveUp(SocialCalc.ProcessEditorColsizeMouseMove, SocialCalc.ProcessEditorColsizeMouseUp, c.toplevel, b);
    a.mousecoltounhide ? c.EditorScheduleSheetCommands("set " + SocialCalc.rcColname(a.mousecoltounhide) + " hide", !0, !1) : a.mouseresizecolnum && (b = c.context.colwidth[a.mouseresizecolnum] - 0 + (d - a.mousedownclientx), b < SocialCalc.Constants.defaultMinimumColWidth && (b = SocialCalc.Constants.defaultMinimumColWidth), c.EditorScheduleSheetCommands("set " + a.mouseresizecol + " width " + b, !0, !1), c.timeout && window.clearTimeout(c.timeout), c.timeout = window.setTimeout(SocialCalc.FinishColRowSize, 
    1));
    return!1;
  }
};
SocialCalc.FinishColRowSize = function() {
  var a = SocialCalc.EditorMouseInfo, b = a.editor;
  b && (b.toplevel.removeChild(a.mouseresizedisplay), a.mouseresizedisplay = null, a.editor = null);
};
SocialCalc.ProcessEditorRowselectMouseDown = function(a, b, c) {
  a = a || window.event;
  b = SocialCalc.EditorMouseInfo.editor;
  var d = SocialCalc.GetSpreadsheetControlObject().sheet;
  coord1 = SocialCalc.crToCoord(1, c.row);
  coord2 = SocialCalc.crToCoord(d.LastCol(), c.row);
  coord3 = SocialCalc.crToCoord(b.firstscrollingcol, c.row);
  b.RangeAnchor(coord1);
  b.RangeExtend(coord2);
  b.MoveECell(coord3);
  SocialCalc.SetMouseMoveUp(SocialCalc.ProcessEditorRowselectMouseMove, SocialCalc.ProcessEditorRowselectMouseUp, b.toplevel, a);
};
SocialCalc.ProcessEditorRowselectMouseMove = function(a) {
  a = a || window.event;
  var b = SocialCalc.EditorMouseInfo.editor, c = SocialCalc.GetSpreadsheetControlObject().sheet;
  if (b) {
    var d = SocialCalc.GetElementPositionWithScroll(b.toplevel);
    result = SocialCalc.GridMousePosition(b, a.clientX - d.left, a.clientY - d.top);
    coord2 = SocialCalc.crToCoord(c.LastCol(), result.row);
    coord3 = SocialCalc.crToCoord(b.firstscrollingcol, result.row);
    b.RangeExtend(coord2);
    b.MoveECell(coord3);
  }
};
SocialCalc.ProcessEditorRowselectMouseUp = function(a) {
  var b = SocialCalc.EditorMouseInfo.editor;
  b && SocialCalc.RemoveMouseMoveUp(SocialCalc.ProcessEditorRowselectMouseMove, SocialCalc.ProcessEditorRowselectMouseUp, b.toplevel, a);
};
SocialCalc.ProcessEditorColselectMouseDown = function(a, b, c) {
  a = a || window.event;
  b = SocialCalc.EditorMouseInfo.editor;
  var d = SocialCalc.GetSpreadsheetControlObject().sheet;
  coord1 = SocialCalc.crToCoord(c.col, 1);
  coord2 = SocialCalc.crToCoord(c.col, d.LastRow());
  coord3 = SocialCalc.crToCoord(c.col, b.firstscrollingrow);
  b.RangeAnchor(coord1);
  b.RangeExtend(coord2);
  b.MoveECell(coord3);
  SocialCalc.SetMouseMoveUp(SocialCalc.ProcessEditorColselectMouseMove, SocialCalc.ProcessEditorColselectMouseUp, b.toplevel, a);
};
SocialCalc.ProcessEditorColselectMouseMove = function(a) {
  a = a || window.event;
  var b = SocialCalc.EditorMouseInfo.editor, c = SocialCalc.GetSpreadsheetControlObject().sheet;
  if (b) {
    var d = SocialCalc.GetElementPositionWithScroll(b.toplevel);
    result = SocialCalc.GridMousePosition(b, a.clientX - d.left, a.clientY - d.top);
    coord2 = SocialCalc.crToCoord(result.col, c.LastRow());
    coord3 = SocialCalc.crToCoord(result.col, b.firstscrollingrow);
    b.RangeExtend(coord2);
    b.MoveECell(coord3);
  }
};
SocialCalc.ProcessEditorColselectMouseUp = function(a) {
  var b = SocialCalc.EditorMouseInfo.editor;
  b && SocialCalc.RemoveMouseMoveUp(SocialCalc.ProcessEditorColselectMouseMove, SocialCalc.ProcessEditorColselectMouseUp, b.toplevel, a);
};
SocialCalc.ProcessEditorRowsizeMouseDown = function(a, b, c) {
  a = a || window.event;
  b = SocialCalc.EditorMouseInfo;
  var d = b.editor, e = SocialCalc.GetSpreadsheetControlObject().spreadsheetDiv.firstChild.offsetHeight, e = a.clientY - e;
  b.mouseresizerownum = c.rowtoresize;
  b.mouseresizerow = c.rowtoresize;
  b.mousedownclienty = e;
  b.mouserowtounhide = c.rowtounhide;
  c.rowtoresize && (e = document.createElement("div"), b.mouseresizedisplay = e, e.style.width = d.context.totalwidth + "px", e.style.height = d.rowpositions[c.rowtoresize] + "px", e.style.position = "absolute", e.style.zIndex = 100, e.style.top = d.rowpositions[c.rowtoresize] + "px", e.style.left = d.headposition.left + "px", e.innerHTML = '<table cellpadding="0" cellspacing="0"><tr><td style="width:100pxborder:1px dashed black;background-color:white;height:' + (d.context.rowheight[b.mouseresizerownum] - 
  2) + 'px;">&nbsp;</td><td><div style="font-size:small;color:white;background-color:gray;padding:4px;">' + d.context.rowheight[b.mouseresizerownum] + "</div></td></tr></table>", SocialCalc.setStyles(e.firstChild.lastChild.firstChild.childNodes[0], "filter:alpha(opacity=85);opacity:.5;"), d.toplevel.appendChild(e));
  SocialCalc.SetMouseMoveUp(SocialCalc.ProcessEditorRowsizeMouseMove, SocialCalc.ProcessEditorRowsizeMouseUp, d.toplevel, a);
};
SocialCalc.ProcessEditorRowsizeMouseMove = function(a) {
  a = a || window.event;
  var b = SocialCalc.EditorMouseInfo, c = b.editor;
  if (c) {
    if (b.mouseresizerownum) {
      var d = SocialCalc.GetSpreadsheetControlObject().spreadsheetDiv.firstChild.offsetHeight, c = c.context.rowheight[b.mouseresizerownum] - 0 + (a.clientY - d - b.mousedownclienty);
      c < SocialCalc.Constants.defaultAssumedRowHeight && (c = SocialCalc.Constants.defaultAssumedRowHeight);
      b = b.mouseresizedisplay;
      b.innerHTML = '<table cellpadding="0" cellspacing="0"><tr><td style="width:100px;border:1px dashed black;background-color:white;height:' + (c - 2) + 'px;">&nbsp;</td><td><div style="font-size:small;color:white;background-color:gray;padding:4px;">' + c + "</div></td></tr></table>";
      SocialCalc.setStyles(b.firstChild.lastChild.firstChild.childNodes[0], "filter:alpha(opacity=85);opacity:.5;");
    }
    SocialCalc.StopPropagation(a);
  }
};
SocialCalc.ProcessEditorRowsizeMouseUp = function(a) {
  var b = a || window.event;
  a = SocialCalc.EditorMouseInfo;
  var c = a.editor;
  if (c) {
    element = a.element;
    var d = SocialCalc.GetSpreadsheetControlObject().spreadsheetDiv.firstChild.offsetHeight, d = b.clientY - d;
    SocialCalc.RemoveMouseMoveUp(SocialCalc.ProcessEditorRowsizeMouseMove, SocialCalc.ProcessEditorRowsizeMouseUp, c.toplevel, b);
    a.mouserowtounhide ? c.EditorScheduleSheetCommands("set " + a.mouserowtounhide + " hide", !0, !1) : a.mouseresizerownum && (b = c.context.rowheight[a.mouseresizerownum] - 0 + (d - a.mousedownclienty), b < SocialCalc.Constants.defaultAssumedRowHeight && (b = SocialCalc.Constants.defaultAssumedRowHeight), c.EditorScheduleSheetCommands("set " + a.mouseresizerownum + " height " + b, !0, !1), c.timeout && window.clearTimeout(c.timeout), c.timeout = window.setTimeout(SocialCalc.FinishColRowSize, 1));
    return!1;
  }
};
SocialCalc.AutoRepeatInfo = {timer:null, mouseinfo:null, repeatinterval:1E3, editor:null, repeatcallback:null};
SocialCalc.SetDragAutoRepeat = function(a, b, c) {
  var d = SocialCalc.AutoRepeatInfo;
  d.repeatcallback = c;
  if (b) {
    d.editor = a;
    d.mouseinfo && (b.rowheader || b.rowfooter ? b.row != d.mouseinfo.row && (c = SocialCalc.crToCoord(a.ecell.col, b.row), d.repeatcallback ? (a = b.row < d.mouseinfo.row ? "left" : b.row > d.mouseinfo.row ? "right" : "", d.repeatcallback(c, a)) : (a.MoveECell(c), a.MoveECell(c), a.RangeExtend(), a.EditorMouseRange(c))) : (b.colheader || b.colfooter) && b.col != d.mouseinfo.col && (c = SocialCalc.crToCoord(b.col, a.ecell.row), d.repeatcallback ? (a = b.row < d.mouseinfo.row ? "left" : b.row > d.mouseinfo.row ? 
    "right" : "", d.repeatcallback(c, a)) : (a.MoveECell(c), a.RangeExtend(), a.EditorMouseRange(c))));
    d.mouseinfo = b;
    if (5 > b.distance) {
      d.repeatinterval = 333;
    } else {
      if (10 > b.distance) {
        d.repeatinterval = 250;
      } else {
        if (25 > b.distance) {
          d.repeatinterval = 100;
        } else {
          if (35 > b.distance) {
            d.repeatinterval = 75;
          } else {
            d.timer && (window.clearTimeout(d.timer), d.timer = null);
            return;
          }
        }
      }
    }
    d.timer || (d.timer = window.setTimeout(SocialCalc.DragAutoRepeat, d.repeatinterval));
  } else {
    d.timer && (window.clearTimeout(d.timer), d.timer = null), d.mouseinfo = null;
  }
};
SocialCalc.DragAutoRepeat = function() {
  var a = SocialCalc.AutoRepeatInfo, b = a.mouseinfo, c;
  b.rowheader ? c = "left" : b.rowfooter ? c = "right" : b.colheader ? c = "up" : b.colfooter && (c = "down");
  a.repeatcallback ? (b = SocialCalc.coordToCr(a.editor.ecell.coord), "left" == c && 1 < b.col ? b.col-- : "right" == c ? b.col++ : "up" == c && 1 < b.row ? b.row-- : "down" == c && b.row++, b = SocialCalc.crToCoord(b.col, b.row), a.repeatcallback(b, c)) : (b = a.editor.MoveECellWithKey("[a" + c + "]shifted")) && a.editor.EditorMouseRange(b);
  a.timer = window.setTimeout(SocialCalc.DragAutoRepeat, a.repeatinterval);
};
SocialCalc.ProcessEditorDblClick = function(a) {
  var b, c;
  a = a || window.event;
  var d = SocialCalc.EditorMouseInfo, e = a.target || a.srcElement;
  if (!d.ignore) {
    for (b = null;!b && e;e = e.parentNode) {
      b = SocialCalc.LookupElement(e, d.registeredElements);
    }
    if (b) {
      if (b = b.editor, c = SocialCalc.GetElementPositionWithScroll(b.toplevel), (c = SocialCalc.GridMousePosition(b, a.clientX - c.left, a.clientY - c.top)) && c.coord) {
        d.editor = b;
        d.element = e;
        sheetobj = b.context.sheetobj;
        switch(b.state) {
          case "start":
            SocialCalc.EditorOpenCellEdit(b);
        }
        SocialCalc.StopPropagation(a);
      }
    } else {
      d.editor = null;
    }
  }
};
SocialCalc.EditorOpenCellEdit = function(a) {
  var b;
  if (!a.ecell || !a.inputBox || a.inputBox.element.disabled) {
    return!0;
  }
  a.inputBox.ShowInputBox(!0);
  a.inputBox.Focus();
  a.inputBox.SetText("");
  a.inputBox.DisplayCellContents();
  a.inputBox.Select("end");
  b = a.workingvalues;
  b.partialexpr = "";
  b.ecoord = a.ecell.coord;
  b.erow = a.ecell.row;
  b.ecol = a.ecell.col;
};
SocialCalc.EditorProcessKey = function(a, b, c) {
  var d, e = a.workingvalues, f = a.range;
  "string" != typeof b && (b = "");
  switch(a.state) {
    case "start":
      c.shiftKey && "[a" == b.substr(0, 2) && (b += "shifted");
      "[enter]" == b && (b = "[adown]");
      "[tab]" == b && (b = c.shiftKey ? "[aleft]" : "[aright]");
      if ("[a" == b.substr(0, 2) || "[pg" == b.substr(0, 3) || "[home]" == b) {
        return a = a.MoveECellWithKey(b), !a;
      }
      if ("[del]" == b || "[backspace]" == b) {
        a.noEdit || a.ECellReadonly() || a.EditorApplySetCommandsToRange("empty", "");
        break;
      }
      if ("[esc]" == b) {
        if (f.hasrange) {
          for (d in a.RangeRemove(), a.MoveECell(f.anchorcoord), a.StatusCallback) {
            a.StatusCallback[d].func(a, "specialkey", b, a.StatusCallback[d].params);
          }
        }
        break;
      }
      if ("[f2]" == b) {
        if (a.noEdit || a.ECellReadonly()) {
          return!0;
        }
        SocialCalc.EditorOpenCellEdit(a);
        a.state = "inputboxdirect";
        break;
      }
      if (1 < b.length && "[" == b.substr(0, 1) || 0 == b.length) {
        return a.ctrlkeyFunction && 0 < b.length ? a.ctrlkeyFunction(a, b) : !0;
      }
      if (!a.ecell || !a.inputBox || a.ECellReadonly()) {
        return!0;
      }
      a.inputBox.element.disabled = !1;
      a.state = "input";
      a.inputBox.ShowInputBox(!0);
      a.inputBox.Focus();
      a.inputBox.SetText(b);
      a.inputBox.Select("end");
      e.partialexpr = "";
      e.ecoord = a.ecell.coord;
      e.erow = a.ecell.row;
      e.ecol = a.ecell.col;
      a.RangeRemove();
      break;
    case "input":
      d = a.inputBox.GetText();
      if (a.inputBox.skipOne) {
        break;
      }
      if ("[esc]" == b || "[enter]" == b || "[tab]" == b || b && "[a" == b.substr(0, 2)) {
        if (0 <= "(+-*/,:!&<>=^".indexOf(d.slice(-1)) && "=" == d.slice(0, 1) || "=" == d) {
          e.partialexpr = d;
        }
        if (e.partialexpr && (c.shiftKey && "[a" == b.substr(0, 2) && (b += "shifted"), d = a.MoveECellWithKey(b))) {
          f.hasrange ? a.inputBox.SetText(e.partialexpr + SocialCalc.crToCoord(f.left, f.top) + ":" + SocialCalc.crToCoord(f.right, f.bottom)) : a.inputBox.SetText(e.partialexpr + d);
          break;
        }
        a.inputBox.Blur();
        a.inputBox.ShowInputBox(!1);
        a.state = "start";
        a.cellhandles.ShowCellHandles(!0);
        "[esc]" != b ? (a.EditorSaveEdit(), a.ecell.coord != e.ecoord && a.MoveECell(e.ecoord), "[enter]" == b && (b = "[adown]"), "[tab]" == b && (b = c.shiftKey ? "[aleft]" : "[aright]"), "[a" == b.substr(0, 2) && a.MoveECellWithKey(b)) : (a.inputBox.DisplayCellContents(), a.RangeRemove(), a.MoveECell(e.ecoord));
        break;
      }
      if (e.partialexpr && "[backspace]" == b) {
        a.inputBox.SetText(e.partialexpr);
        e.partialexpr = "";
        a.RangeRemove();
        a.MoveECell(e.ecoord);
        a.inputBox.ShowInputBox(!0);
        break;
      }
      if ("[f2]" == b) {
        a.state = "inputboxdirect";
        break;
      }
      f.hasrange && a.RangeRemove();
      a.MoveECell(e.ecoord);
      e.partialexpr && (a.inputBox.ShowInputBox(!0), e.partialexpr = "");
      return!0;
    case "inputboxdirect":
      a.inputBox.GetText();
      if ("[esc]" == b || "[enter]" == b || "[tab]" == b) {
        a.inputBox.Blur();
        a.inputBox.ShowInputBox(!1);
        a.state = "start";
        a.cellhandles.ShowCellHandles(!0);
        "[esc]" == b ? a.inputBox.DisplayCellContents() : (a.EditorSaveEdit(), a.ecell.coord != e.ecoord && a.MoveECell(e.ecoord), "[enter]" == b && (b = "[adown]"), "[tab]" == b && (b = c.shiftKey ? "[aleft]" : "[aright]"), "[a" == b.substr(0, 2) && a.MoveECellWithKey(b));
        break;
      }
      if ("[f2]" == b) {
        a.state = "input";
        break;
      }
      return!0;
    case "skip-and-start":
      a.state = "start";
      a.cellhandles.ShowCellHandles(!0);
      break;
    default:
      return!0;
  }
  return!1;
};
SocialCalc.EditorAddToInput = function(a, b, c) {
  var d = a.workingvalues;
  if (!a.noEdit && !a.ECellReadonly()) {
    switch(a.state) {
      case "start":
        a.state = "input";
        a.inputBox.ShowInputBox(!0);
        a.inputBox.element.disabled = !1;
        a.inputBox.Focus();
        a.inputBox.SetText((c || "") + b);
        a.inputBox.Select("end");
        d.partialexpr = "";
        d.ecoord = a.ecell.coord;
        d.erow = a.ecell.row;
        d.ecol = a.ecell.col;
        a.RangeRemove();
        break;
      case "input":
      ;
      case "inputboxdirect":
        a.inputBox.element.focus(), d.partialexpr && (a.inputBox.SetText(d.partialexpr), d.partialexpr = "", a.RangeRemove(), a.MoveECell(d.ecoord)), a.inputBox.SetText(a.inputBox.GetText() + b);
    }
  }
};
SocialCalc.EditorDisplayCellContents = function(a) {
  a.inputBox && a.inputBox.DisplayCellContents();
};
SocialCalc.EditorSaveEdit = function(a, b) {
  var c, d, e, f = a.context.sheetobj, g = a.workingvalues;
  e = "string" == typeof b ? b : a.inputBox.GetText();
  c = SocialCalc.GetCellContents(f, g.ecoord) + "";
  e != c && (c = e.charAt(0), "=" == c && -1 == e.indexOf("\n") ? (d = "formula", e = e.substring(1)) : "'" == c ? (d = "text t", e = e.substring(1), c = SocialCalc.DetermineValueType(e), "t" == c.type.charAt(0) && (d = "text " + c.type)) : 0 == e.length ? d = "empty" : (c = SocialCalc.DetermineValueType(e), d = "n" == c.type && e == c.value + "" ? "value n" : "t" == c.type.charAt(0) ? "text " + c.type : "" == c.type ? "text t" : "constant " + c.type + " " + c.value), "t" == d.charAt(0) && (e = SocialCalc.encodeForSave(e)), 
  e = "set " + g.ecoord + " " + d + " " + e, a.EditorScheduleSheetCommands(e, !0, !1), "undefined" !== typeof f.ioEventTree && "undefined" !== typeof f.ioParameterList && "undefined" !== typeof f.ioEventTree[g.ecoord] && SocialCalc.EditedTriggerCell(f.ioEventTree[g.ecoord], g.ecoord, a, f));
};
SocialCalc.EditedTriggerCell = function(a, b, c, d) {
  for (var e in a) {
    if (a = d.ioParameterList[e], "undefined" !== typeof a) {
      switch(a.function_name) {
        case "EMAILONEDIT":
        ;
        case "EMAILONEDITIF":
          cmdline = "setemailparameters " + e + " " + b, c.deferredEmailCommands.push({cmdstr:cmdline, saveundo:!1});
      }
    }
  }
};
SocialCalc.EditorApplySetCommandsToRange = function(a, b) {
  var c;
  c = a.ecell;
  var d = a.range;
  d.hasrange ? (coord = SocialCalc.crToCoord(d.left, d.top) + ":" + SocialCalc.crToCoord(d.right, d.bottom), c = "set " + coord + " " + b) : c = "set " + c.coord + " " + b;
  a.EditorScheduleSheetCommands(c, !0, !1);
  a.DisplayCellContents();
};
SocialCalc.EditorProcessMouseWheel = function(a, b, c, d) {
  d.functionobj.editor.busy || (0 < b && d.functionobj.editor.ScrollRelative(!0, Math.floor(1.5 * -b)), 0 > b && d.functionobj.editor.ScrollRelative(!0, Math.ceil(1.5 * -b)));
};
SocialCalc.GridMousePosition = function(a, b, c) {
  var d, e, f = {};
  for (d = 1;d < a.rowpositions.length && !(a.rowheight[d] && a.rowpositions[d] + a.rowheight[d] > c);d++) {
  }
  for (e = 1;e < a.colpositions.length && !(a.colwidth[e] && a.colpositions[e] + a.colwidth[e] > b);e++) {
  }
  f.row = d;
  f.col = e;
  if (a.headposition) {
    if (b < a.headposition.left && b >= a.gridposition.left) {
      f.rowheader = !0;
      f.distance = a.headposition.left - b;
      f.rowtoresize = !1;
      f.rowselect = !1;
      for (e = 1;e < a.rowpositions.length;e++) {
        if (a.rowheight[e] && a.rowpositions[e] + a.rowheight[e] - 3 <= c && a.rowpositions[e] + a.rowheight[e] + 3 >= c) {
          f.rowtoresize = e;
          break;
        }
      }
      if (unhide = a.context.rowunhidetop[d]) {
        pos = SocialCalc.GetElementPosition(unhide), b >= pos.left && b < pos.left + unhide.offsetWidth && c >= a.rowpositions[d] + a.rowheight[d] - unhide.offsetHeight && c < a.rowpositions[d] + a.rowheight[d] && (f.rowtounhide = d + 1);
      }
      if (unhide = a.context.rowunhidebottom[d]) {
        pos = SocialCalc.GetElementPosition(unhide), b >= pos.left && b < pos.left + unhide.offsetWidth && c >= a.rowpositions[d] && c < a.rowpositions[d] + unhide.offsetHeight && (f.rowtounhide = d - 1);
      }
      for (b = 0;b < a.context.rowpanes.length;b++) {
        if (f.rowtoresize >= a.context.rowpanes[b].first && f.rowtoresize <= a.context.rowpanes[b].last) {
          return f;
        }
      }
      delete f.rowtoresize;
      f.rowselect = !0;
    } else {
      if (c < a.headposition.top && c > a.gridposition.top) {
        f.colheader = !0;
        f.distance = a.headposition.top - c;
        f.coltoresize = !1;
        f.colselect = !1;
        for (d = 1;d < a.colpositions.length;d++) {
          if (a.colwidth[d] && a.colpositions[d] + a.colwidth[d] - 3 <= b && a.colpositions[d] + a.colwidth[d] + 3 >= b) {
            f.coltoresize = d;
            break;
          }
        }
        if (unhide = a.context.colunhideleft[e]) {
          pos = SocialCalc.GetElementPosition(unhide), b >= pos.left && b < pos.left + unhide.offsetWidth && c >= pos.top && c < pos.top + unhide.offsetHeight && (f.coltounhide = e + 1);
        }
        if (unhide = a.context.colunhideright[e]) {
          pos = SocialCalc.GetElementPosition(unhide), b >= pos.left && b < pos.left + unhide.offsetWidth && c >= pos.top && c < pos.top + unhide.offsetHeight && (f.coltounhide = e - 1);
        }
        for (b = 0;b < a.context.colpanes.length;b++) {
          if (f.coltoresize >= a.context.colpanes[b].first && f.coltoresize <= a.context.colpanes[b].last) {
            return f;
          }
        }
        delete f.coltoresize;
        f.colselect = !0;
      } else {
        b >= a.verticaltablecontrol.controlborder ? (f.rowfooter = !0, f.distance = b - a.verticaltablecontrol.controlborder) : c >= a.horizontaltablecontrol.controlborder ? (f.colfooter = !0, f.distance = c - a.horizontaltablecontrol.controlborder) : b < a.gridposition.left ? (f.rowheader = !0, f.distance = a.headposition.left - b) : c <= a.gridposition.top ? (f.colheader = !0, f.distance = a.headposition.top - c) : (f.coord = SocialCalc.crToCoord(f.col, f.row), a.context.cellskip[f.coord] && (f.coord = 
        a.context.cellskip[f.coord]));
      }
    }
    return f;
  }
  return null;
};
SocialCalc.GetEditorCellElement = function(a, b, c) {
  var d = 0, e = 0;
  !1 == a.context.showRCHeaders && (e = d = -1);
  var f, g, l, h, p = 0, q = 0;
  for (f = 0;f < a.context.rowpanes.length;f++) {
    if (b >= a.context.rowpanes[f].first && b <= a.context.rowpanes[f].last) {
      for (g = 0;g < a.context.colpanes.length;g++) {
        if (c >= a.context.colpanes[g].first && c <= a.context.colpanes[g].last) {
          p += b - a.context.rowpanes[f].first + 2;
          for (l = a.context.colpanes[g].first;l <= c;l++) {
            (h = a.context.cellskip[SocialCalc.crToCoord(l, b)]) && a.context.CoordInPane(h, f, g) || q++;
          }
          return{element:a.griddiv.firstChild.lastChild.childNodes[p + e].childNodes[q + d], rowpane:f, colpane:g};
        }
        for (l = a.context.colpanes[g].first;l <= a.context.colpanes[g].last;l++) {
          (h = a.context.cellskip[SocialCalc.crToCoord(l, b)]) && a.context.CoordInPane(h, f, g) || q++;
        }
        q += 1;
      }
    }
    p += a.context.rowpanes[f].last - a.context.rowpanes[f].first + 2;
  }
  return null;
};
SocialCalc.MoveECellWithKey = function(a, b) {
  var c, d, e, f = !1, g = 1;
  if (!a.ecell) {
    return null;
  }
  "shifted" == b.slice(-7) && (b = b.slice(0, -7), f = !0);
  c = a.ecell.row;
  d = a.ecell.col;
  e = a.context.sheetobj.cells[a.ecell.coord];
  switch(b) {
    case "[adown]":
      c += e && e.rowspan || 1;
      break;
    case "[aup]":
      c--;
      g = -1;
      break;
    case "[pgdn]":
      c += a.pageUpDnAmount - 1 + (e && e.rowspan || 1);
      break;
    case "[pgup]":
      c -= a.pageUpDnAmount;
      g = -1;
      break;
    case "[aright]":
      d += e && e.colspan || 1;
      break;
    case "[aleft]":
      d--;
      g = -1;
      break;
    case "[home]":
      d = c = 1;
      break;
    default:
      return null;
  }
  a.context.sheetobj.attribs.usermaxcol && (d = Math.min(a.context.sheetobj.attribs.usermaxcol, d));
  for (a.context.sheetobj.attribs.usermaxrow && (c = Math.min(a.context.sheetobj.attribs.usermaxrow, c));"yes" == a.context.sheetobj.colattribs.hide[SocialCalc.rcColname(d)];) {
    d += g, 1 > d && (g = -g, d = 1);
  }
  for (;"yes" == a.context.sheetobj.rowattribs.hide[c];) {
    c += g, 1 > c && (g = -g, c = 1);
  }
  a.range.hasrange || f && a.RangeAnchor();
  c = a.MoveECell(SocialCalc.crToCoord(d, c));
  a.range.hasrange && (f ? a.RangeExtend() : a.RangeRemove());
  return c;
};
SocialCalc.MoveECell = function(a, b) {
  var c, d, e = a.context.highlights;
  c = SocialCalc.coordToCr(b);
  a.context.sheetobj.attribs.usermaxcol && c.col > a.context.sheetobj.attribs.usermaxcol && (c.col = a.context.sheetobj.attribs.usermaxcol);
  a.context.sheetobj.attribs.usermaxrow && c.row > a.context.sheetobj.attribs.usermaxrow && (c.row = a.context.sheetobj.attribs.usermaxrow);
  b = SocialCalc.crToCoord(c.col, c.row);
  if (a.ecell) {
    if (a.ecell.coord == b) {
      return b;
    }
    c = SocialCalc.GetEditorCellElement(a, a.ecell.row, a.ecell.col);
    delete e[a.ecell.coord];
    a.range2.hasrange && a.ecell.row >= a.range2.top && a.ecell.row <= a.range2.bottom && a.ecell.col >= a.range2.left && a.ecell.col <= a.range2.right && (e[a.ecell.coord] = "range2");
    a.UpdateCellCSS(c, a.ecell.row, a.ecell.col);
    a.SetECellHeaders("");
    a.cellhandles && a.cellhandles.ShowCellHandles(!1);
  }
  b = a.context.cellskip[b] || b;
  a.ecell = SocialCalc.coordToCr(b);
  a.ecell.coord = b;
  c = SocialCalc.GetEditorCellElement(a, a.ecell.row, a.ecell.col);
  e[b] = "cursor";
  for (d in a.MoveECellCallback) {
    a.MoveECellCallback[d](a);
  }
  a.UpdateCellCSS(c, a.ecell.row, a.ecell.col);
  a.SetECellHeaders("selected");
  for (d in a.StatusCallback) {
    a.StatusCallback[d].func(a, "moveecell", b, a.StatusCallback[d].params);
  }
  a.busy ? a.ensureecell = !0 : (a.ensureecell = !1, a.EnsureECellVisible());
  return b;
};
SocialCalc.EnsureECellVisible = function(a) {
  var b = 0, c = 0;
  a.ecell.row > a.lastnonscrollingrow && (a.ecell.row < a.firstscrollingrow ? b = a.ecell.row - a.firstscrollingrow - Math.floor((a.lastvisiblerow - a.firstscrollingrow) / 2) : a.ecell.row + 1 > a.lastvisiblerow && (b = a.ecell.row - a.lastvisiblerow + Math.floor((a.lastvisiblerow - a.firstscrollingrow) / 2)));
  a.ecell.col > a.lastnonscrollingcol && (a.ecell.col < a.firstscrollingcol ? c = a.ecell.col - a.firstscrollingcol - Math.floor((a.lastvisiblecol - a.firstscrollingcol) / 2) : a.ecell.col + 1 > a.lastvisiblecol && (c = a.ecell.col - a.lastvisiblecol + Math.floor((a.lastvisiblecol - a.firstscrollingcol) / 2)));
  0 != b || 0 != c ? a.ScrollRelativeBoth(b, c) : a.cellhandles.ShowCellHandles(!0);
};
SocialCalc.ReplaceCell = function(a, b, c, d) {
  var e;
  if (b && (a = a.context.RenderCell(c, d, b.rowpane, b.colpane, !0, null)) && b.element) {
    for (e in b.element.innerHTML = a.innerHTML, b.element.style.cssText = "", b.element.className = a.className, a.style) {
      "cssText" != a.style[e] && (b.element.style[e] = a.style[e]);
    }
  }
};
SocialCalc.UpdateCellCSS = function(a, b, c, d) {
  var e;
  if (b && (a = a.context.RenderCell(c, d, b.rowpane, b.colpane, !0, null))) {
    for (e in b.element.style.cssText = "", b.element.className = a.className, a.style) {
      "cssText" != a.style[e] && (b.element.style[e] = a.style[e]);
    }
  }
};
SocialCalc.SetECellHeaders = function(a, b) {
  if (!1 !== a.context.showRCHeaders) {
    var c = a.ecell, d = a.context, e, f, g, l = 0, h = 0, p;
    if (c) {
      for (;"yes" == d.sheetobj.colattribs.hide[SocialCalc.rcColname(c.col)];) {
        c.col++;
      }
      for (;"yes" == d.sheetobj.rowattribs.hide[c.row];) {
        c.row++;
      }
      c.coord = SocialCalc.crToCoord(c.col, c.row);
      for (e = 0;e < d.rowpanes.length;e++) {
        f = d.rowpanes[e].first, g = d.rowpanes[e].last, c.row >= f && c.row <= g && null !== a.fullgrid && (p = a.fullgrid.childNodes[1].childNodes[2 + l + c.row - f].childNodes[0]) && (d.classnames && (p.className = d.classnames[b + "rowname"]), d.explicitStyles && (p.style.cssText = d.explicitStyles[b + "rowname"]), p.style.verticalAlign = "top"), l += g - f + 2;
      }
      for (e = 0;e < d.colpanes.length;e++) {
        f = d.colpanes[e].first, g = d.colpanes[e].last, c.col >= f && c.col <= g && null !== a.fullgrid && (p = a.fullgrid.childNodes[1].childNodes[1].childNodes[1 + h + c.col - f]) && (d.classnames && (p.className = d.classnames[b + "colname"]), d.explicitStyles && (p.style.cssText = d.explicitStyles[b + "colname"])), h += g - f + 2;
      }
    }
  }
};
SocialCalc.ECellReadonly = function(a, b) {
  !b && a.ecell && (b = a.ecell.coord);
  if (!b) {
    return!1;
  }
  var c = a.context.sheetobj.cells[b];
  return c && c.readonly;
};
SocialCalc.RangeAnchor = function(a, b) {
  a.range.hasrange && a.RangeRemove();
  a.RangeExtend(b);
};
SocialCalc.RangeExtend = function(a, b) {
  var c, d, e, f, g, l, h = a.context.highlights;
  c = a.range;
  d = a.range2;
  b ? (f = SocialCalc.coordToCr(b), f.coord = b) : f = a.ecell;
  if (f) {
    c.hasrange || (c.anchorcoord = f.coord, c.anchorrow = f.row, c.top = f.row, c.bottom = f.row, c.anchorcol = f.col, c.left = f.col, c.right = f.col, c.hasrange = !0);
    c.anchorrow < f.row ? (c.top = c.anchorrow, c.bottom = f.row) : (c.top = f.row, c.bottom = c.anchorrow);
    c.anchorcol < f.col ? (c.left = c.anchorcol, c.right = f.col) : (c.left = f.col, c.right = c.anchorcol);
    for (e in h) {
      switch(h[e]) {
        case "range":
          h[e] = "unrange";
          break;
        case "range2":
          h[e] = "unrange2";
      }
    }
    for (f = c.top;f <= c.bottom;f++) {
      for (g = c.left;g <= c.right;g++) {
        switch(e = SocialCalc.crToCoord(g, f), h[e]) {
          case "unrange":
            h[e] = "range";
            break;
          case "cursor":
            break;
          default:
            h[e] = "newrange";
        }
      }
    }
    for (f = d.top;d.hasrange && f <= d.bottom;f++) {
      for (g = d.left;g <= d.right;g++) {
        switch(e = SocialCalc.crToCoord(g, f), h[e]) {
          case "unrange2":
            h[e] = "range2";
            break;
          case "range":
          ;
          case "newrange":
          ;
          case "cursor":
            break;
          default:
            h[e] = "newrange2";
        }
      }
    }
    for (e in h) {
      switch(h[e]) {
        case "unrange":
          delete h[e];
          break;
        case "newrange":
          h[e] = "range";
          break;
        case "newrange2":
          h[e] = "range2";
          break;
        case "range":
        ;
        case "range2":
        ;
        case "cursor":
          continue;
      }
      d = SocialCalc.coordToCr(e);
      c = SocialCalc.GetEditorCellElement(a, d.row, d.col);
      a.UpdateCellCSS(c, d.row, d.col);
    }
    for (l in a.RangeChangeCallback) {
      a.RangeChangeCallback[l](a);
    }
    e = SocialCalc.crToCoord(a.range.left, a.range.top);
    if (a.range.left != a.range.right || a.range.top != a.range.bottom) {
      e += ":" + SocialCalc.crToCoord(a.range.right, a.range.bottom);
    }
    for (l in a.StatusCallback) {
      a.StatusCallback[l].func(a, "rangechange", e, a.StatusCallback[l].params);
    }
  }
};
SocialCalc.RangeRemove = function(a) {
  var b, c, d, e, f = a.context.highlights, g = a.range, l = a.range2;
  if (g.hasrange || l.hasrange) {
    for (b = l.top;l.hasrange && b <= l.bottom;b++) {
      for (c = l.left;c <= l.right;c++) {
        switch(d = SocialCalc.crToCoord(c, b), f[d]) {
          case "range":
            f[d] = "newrange2";
            break;
          case "range2":
          ;
          case "cursor":
            break;
          default:
            f[d] = "newrange2";
        }
      }
    }
    for (d in f) {
      switch(f[d]) {
        case "range":
          delete f[d];
          break;
        case "newrange2":
          f[d] = "range2";
          break;
        case "cursor":
          continue;
      }
      c = SocialCalc.coordToCr(d);
      b = SocialCalc.GetEditorCellElement(a, c.row, c.col);
      a.UpdateCellCSS(b, c.row, c.col);
    }
    g.hasrange = !1;
    for (e in a.RangeChangeCallback) {
      a.RangeChangeCallback[e](a);
    }
    for (e in a.StatusCallback) {
      a.StatusCallback[e].func(a, "rangechange", "", a.StatusCallback[e].params);
    }
  }
};
SocialCalc.Range2Remove = function(a) {
  var b, c, d, e = a.context.highlights, f = a.range2;
  if (f.hasrange) {
    for (d in e) {
      switch(e[d]) {
        case "range2":
          delete e[d];
          break;
        case "range":
        ;
        case "cursor":
          continue;
      }
      c = SocialCalc.coordToCr(d);
      b = SocialCalc.GetEditorCellElement(a, c.row, c.col);
      a.UpdateCellCSS(b, c.row, c.col);
    }
    f.hasrange = !1;
  }
};
SocialCalc.FitToEditTable = function(a) {
  var b, c, d, e = a.context, f = e.sheetobj;
  d = e.showRCHeaders ? e.rownamewidth - 0 : 0;
  for (colpane = 0;colpane < e.colpanes.length - 1;colpane++) {
    for (b = e.colpanes[colpane].first;b <= e.colpanes[colpane].last;b++) {
      if (c = SocialCalc.rcColname(b), "yes" != f.colattribs.hide[c]) {
        c = f.colattribs.width[c] || f.attribs.defaultcolwidth || SocialCalc.Constants.defaultColWidth;
        if ("blank" == c || "auto" == c) {
          c = "";
        }
        d += c && 0 < c - 0 ? c - 0 : 10;
      }
    }
  }
  for (b = e.colpanes[colpane].first;1E4 >= b;b++) {
    c = SocialCalc.rcColname(b);
    if ("yes" != f.colattribs.hide[c]) {
      c = f.colattribs.width[c] || f.attribs.defaultcolwidth || SocialCalc.Constants.defaultColWidth;
      if ("blank" == c || "auto" == c) {
        c = "";
      }
      d += c && 0 < c - 0 ? c - 0 : 10;
    }
    if (d > a.tablewidth) {
      break;
    }
  }
  e.colpanes[colpane].last = e.sheetobj.attribs.usermaxcol || b;
  b = e.rowpanes[0].first;
  for (d = e.sheetobj.attribs.lastrow;"yes" == f.rowattribs.hide[b] && b < d;) {
    b++;
  }
  e.rowpanes[0].first = b;
  d = e.showRCHeaders ? 1 : 0;
  for (b = 0;b < e.rowpanes.length - 1;b++) {
    for (d += e.rowpanes[b].last - e.rowpanes[b].first + 1, c = e.rowpanes[b].first;c <= e.rowpanes[b].last;c++) {
      "yes" == f.rowattribs.hide[c] && d--;
    }
  }
  a = a.tableheight - d * e.pixelsPerRow;
  e.rowpanes[b].last = e.sheetobj.attribs.usermaxrow || e.rowpanes[b].first + Math.floor(a / e.pixelsPerRow) + 1;
};
SocialCalc.CalculateEditorPositions = function(a) {
  var b;
  a.gridposition = SocialCalc.GetElementPosition(a.griddiv);
  b = a.griddiv.firstChild.lastChild.childNodes[1].childNodes[0];
  a.headposition = SocialCalc.GetElementPosition(b);
  a.headposition.left += b.offsetWidth;
  a.headposition.top += b.offsetHeight;
  a.rowpositions = [];
  for (b = 0;b < a.context.rowpanes.length;b++) {
    a.CalculateRowPositions(b, a.rowpositions, a.rowheight);
  }
  for (b = 0;b < a.rowpositions.length && !(a.rowpositions[b] > a.gridposition.top + a.tableheight);b++) {
  }
  a.lastvisiblerow = b - 1;
  a.colpositions = [];
  for (b = 0;b < a.context.colpanes.length;b++) {
    a.CalculateColPositions(b, a.colpositions, a.colwidth);
  }
  for (b = 0;b < a.colpositions.length && !(a.colpositions[b] > a.gridposition.left + a.tablewidth);b++) {
  }
  a.lastvisiblecol = b - 1;
  for (a.firstscrollingrow = a.context.rowpanes[a.context.rowpanes.length - 1].first;"yes" == a.context.sheetobj.rowattribs.hide[a.firstscrollingrow];) {
    a.firstscrollingrow++;
  }
  a.firstscrollingrowtop = a.rowpositions[a.firstscrollingrow] || a.headposition.top;
  a.lastnonscrollingrow = 0 < a.context.rowpanes.length - 1 ? a.context.rowpanes[a.context.rowpanes.length - 2].last : 0;
  for (a.firstscrollingcol = a.context.colpanes[a.context.colpanes.length - 1].first;"yes" == a.context.sheetobj.colattribs.hide[SocialCalc.rcColname(a.firstscrollingcol)];) {
    a.firstscrollingcol++;
  }
  a.firstscrollingcolleft = a.colpositions[a.firstscrollingcol] || a.headposition.left;
  a.lastnonscrollingcol = 0 < a.context.colpanes.length - 1 ? a.context.colpanes[a.context.colpanes.length - 2].last : 0;
  a.verticaltablecontrol.ComputeTableControlPositions();
  a.horizontaltablecontrol.ComputeTableControlPositions();
};
SocialCalc.ScheduleRender = function(a) {
  !0 != a.ignoreRender && (a.timeout && window.clearTimeout(a.timeout), SocialCalc.EditorSheetStatusCallback(null, "schedrender", null, a), a.timeout = window.setTimeout(function() {
    SocialCalc.DoRenderStep(a);
  }, 1));
};
SocialCalc.DoRenderStep = function(a) {
  a.timeout = null;
  a.EditorRenderSheet();
  SocialCalc.EditorSheetStatusCallback(null, "renderdone", null, a);
  SocialCalc.EditorSheetStatusCallback(null, "schedposcalc", null, a);
  a.timeout = window.setTimeout(function() {
    SocialCalc.DoPositionCalculations(a);
  }, 1);
};
SocialCalc.SchedulePositionCalculations = function(a) {
  SocialCalc.EditorSheetStatusCallback(null, "schedposcalc", null, a);
  a.timeout = window.setTimeout(function() {
    SocialCalc.DoPositionCalculations(a);
  }, 1);
};
SocialCalc.DoPositionCalculations = function(a) {
  a.timeout = null;
  a.CalculateEditorPositions();
  a.verticaltablecontrol.PositionTableControlElements();
  a.horizontaltablecontrol.PositionTableControlElements();
  SocialCalc.EditorSheetStatusCallback(null, "doneposcalc", null, a);
  a.ensureecell && a.ecell && !a.deferredCommands.length && (a.ensureecell = !1, a.EnsureECellVisible());
  a.cellhandles.ShowCellHandles(!0);
};
SocialCalc.CalculateRowPositions = function(a, b, c, d) {
  var e, f, g, l = a.context, h;
  if (l.showRCHeaders) {
    h = a.fullgrid.lastChild;
    a = 2;
    for (e = 0;e < b;e++) {
      a += l.rowpanes[e].last - l.rowpanes[e].first + 2;
    }
    f = 0;
    for (b = l.rowpanes[e].first;b <= l.rowpanes[e].last;b++) {
      g = h.childNodes[a + f], f++, g && !c[b] && (c[b] = g.firstChild.offsetTop, d[b] = g.firstChild.offsetHeight);
    }
  }
};
SocialCalc.CalculateColPositions = function(a, b, c, d) {
  var e, f, g, l, h = a.context;
  if (h.showRCHeaders) {
    f = a.fullgrid.lastChild;
    a = 1;
    for (e = 0;e < b;e++) {
      a += h.colpanes[e].last - h.colpanes[e].first + 2;
    }
    g = f.childNodes[1];
    f = 0;
    for (b = h.colpanes[e].first;b <= h.colpanes[e].last;b++) {
      l = SocialCalc.GetElementPosition(g.childNodes[a + f]), c[b] || (c[b] = l.left, g.childNodes[a + f] && (d[b] = g.childNodes[a + f].offsetWidth)), f++;
    }
  }
};
SocialCalc.ScrollRelative = function(a, b, c) {
  b ? a.ScrollRelativeBoth(c, 0) : a.ScrollRelativeBoth(0, c);
};
SocialCalc.ScrollRelativeBoth = function(a, b, c) {
  var d = a.context, e = 0 < b ? 1 : -1, f = 0 < c ? 1 : -1, g = d.rowpanes.length, l = 1 < g ? d.rowpanes[g - 2].last + 1 : 1;
  d.rowpanes[g - 1].first + b < l && (b = -d.rowpanes[g - 1].first + l);
  var l = d.colpanes.length, h = 1 < l ? d.colpanes[l - 2].last + 1 : 1;
  for (d.colpanes[l - 1].first + c < h && (c = -d.colpanes[l - 1].first + h);"yes" == d.sheetobj.colattribs.hide[SocialCalc.rcColname(d.colpanes[l - 1].first + c)];) {
    if (c += f, 1 > c) {
      c = 0;
      break;
    }
  }
  for (;"yes" == d.sheetobj.rowattribs.hide[d.rowpanes[g - 1].first + b];) {
    if (b += e, 1 > b) {
      b = 0;
      break;
    }
  }
  if ((1 == b || -1 == b) && 0 == c) {
    1 == b ? a.ScrollTableUpOneRow() : a.ScrollTableDownOneRow(), a.ecell && a.SetECellHeaders("selected"), a.SchedulePositionCalculations();
  } else {
    if (0 != b || 0 != c) {
      d.rowpanes[g - 1].first += b, d.rowpanes[g - 1].last += b, d.colpanes[l - 1].first += c, d.colpanes[l - 1].last += c, a.LimitLastPanes(), a.FitToEditTable(), a.ScheduleRender();
    }
  }
};
SocialCalc.PageRelative = function(a, b, c) {
  var d = a.context, e = b ? "rowpanes" : "colpanes", d = d[e][d[e].length - 1], f = b ? "lastvisiblerow" : "lastvisiblecol", e = b ? a.rowheight : a.colwidth, g = b ? SocialCalc.Constants.defaultAssumedRowHeight : SocialCalc.Constants.defaultColWidth;
  if (0 < c) {
    b = a[f], b == d.first && (b += 1);
  } else {
    c = b ? a.tableheight - (a.firstscrollingrowtop - a.gridposition.top) : a.tablewidth - (a.firstscrollingcolleft - a.gridposition.left);
    c -= 0 < e[a[f]] ? e[a[f]] : g;
    for (b = d.first - 1;0 < b;b--) {
      f = 0 < e[b] ? e[b] : g;
      if (c < f) {
        break;
      }
      c -= f;
    }
    e = d.first;
    b >= e && (b = e - 1);
    1 > b && (b = 1);
  }
  d.first = b;
  d.last = b + 1;
  a.LimitLastPanes();
  a.FitToEditTable();
  a.ScheduleRender();
};
SocialCalc.LimitLastPanes = function(a) {
  a = a.context;
  var b;
  b = a.rowpanes.length;
  1 < b && a.rowpanes[b - 1].first <= a.rowpanes[b - 2].last && (a.rowpanes[b - 1].first = a.rowpanes[b - 2].last + 1);
  a.sheetobj.attribs.usermaxrow && a.rowpanes[b - 1].first > a.sheetobj.attribs.usermaxrow && (a.rowpanes[b - 1].first = a.sheetobj.attribs.usermaxrow);
  b = a.colpanes.length;
  1 < b && a.colpanes[b - 1].first <= a.colpanes[b - 2].last && (a.colpanes[b - 1].first = a.colpanes[b - 2].last + 1);
  a.sheetobj.attribs.usermaxcol && a.colpanes[b - 1].first > a.sheetobj.attribs.usermaxcol && (a.colpanes[b - 1].first = a.sheetobj.attribs.usermaxcol);
};
SocialCalc.ScrollTableUpOneRow = function(a) {
  var b, c, d, e, f, g, l = {}, h = a.context, p = h.sheetobj, q = a.fullgrid, w;
  w = q.lastChild;
  b = h.showRCHeaders ? 2 : 1;
  for (c = 0;c < h.rowpanes.length - 1;c++) {
    b += h.rowpanes[c].last - h.rowpanes[c].first + 2;
  }
  if (h.sheetobj.attribs.usermaxrow && 1 > h.sheetobj.attribs.usermaxrow - h.rowpanes[c].first) {
    return q;
  }
  w.removeChild(w.childNodes[b]);
  h.rowpanes[c].first++;
  h.rowpanes[c].last++;
  a.FitToEditTable();
  h.CalculateColWidthData();
  h.sheetobj.attribs.usermaxrow && h.rowpanes[c].last == h.sheetobj.attribs.usermaxrow || (a = h.RenderRow(h.rowpanes[c].last, c), w.appendChild(a));
  maxrowspan = 1;
  a = h.rowpanes[c].first - 1;
  for (f = 0;f < h.colpanes.length;f++) {
    for (e = h.colpanes[f].first;e <= h.colpanes[f].last;e++) {
      coord = SocialCalc.crToCoord(e, a), h.cellskip[coord] || (g = p.cells[coord]) && g.rowspan > maxrowspan && (maxrowspan = g.rowspan);
    }
  }
  if (1 < maxrowspan) {
    for (d = 1;d < maxrowspan && !(d + a >= h.rowpanes[c].last);d++) {
      e = h.RenderRow(d + a, c), f = w.childNodes[b + d - 1], w.replaceChild(e, f);
    }
  }
  a = h.rowpanes[c].last;
  for (f = 0;f < h.colpanes.length;f++) {
    for (e = h.colpanes[f].first;e <= h.colpanes[f].last;e++) {
      if (coord = h.cellskip[SocialCalc.crToCoord(e, a)]) {
        d = h.coordToCR[coord].row - 0, d == h.rowpanes[c].last || d < h.rowpanes[c].first || (g = p.cells[coord]) && 1 < g.rowspan && (l[d] = !0);
      }
    }
  }
  for (d in l) {
    e = h.RenderRow(d, c), f = w.childNodes[b + (d - h.rowpanes[c].first)], w.replaceChild(e, f);
  }
  return q;
};
SocialCalc.ScrollTableDownOneRow = function(a) {
  var b, c, d, e, f, g, l = {}, h = a.context, p = h.sheetobj, q = a.fullgrid, w;
  w = q.lastChild;
  b = h.showRCHeaders ? 2 : 1;
  for (c = 0;c < h.rowpanes.length - 1;c++) {
    b += h.rowpanes[c].last - h.rowpanes[c].first + 2;
  }
  h.sheetobj.attribs.usermaxrow || w.removeChild(w.childNodes[b + (h.rowpanes[c].last - h.rowpanes[c].first)]);
  h.rowpanes[c].first--;
  h.rowpanes[c].last--;
  a.FitToEditTable();
  h.CalculateColWidthData();
  e = h.RenderRow(h.rowpanes[c].first, c);
  w.insertBefore(e, w.childNodes[b]);
  maxrowspan = 1;
  a = h.rowpanes[c].first;
  for (f = 0;f < h.colpanes.length;f++) {
    for (e = h.colpanes[f].first;e <= h.colpanes[f].last;e++) {
      coord = SocialCalc.crToCoord(e, a), h.cellskip[coord] || (g = p.cells[coord]) && g.rowspan > maxrowspan && (maxrowspan = g.rowspan);
    }
  }
  if (1 < maxrowspan) {
    for (d = 1;d < maxrowspan && !(d + a > h.rowpanes[c].last);d++) {
      e = h.RenderRow(d + a, c), f = w.childNodes[b + d], w.replaceChild(e, f);
    }
  }
  a = h.rowpanes[c].last;
  for (f = 0;f < h.colpanes.length;f++) {
    for (e = h.colpanes[f].first;e <= h.colpanes[f].last;e++) {
      if (coord = SocialCalc.crToCoord(e, a), (g = p.cells[coord]) && 1 < g.rowspan) {
        l[a] = !0;
      } else {
        if (coord = h.cellskip[SocialCalc.crToCoord(e, a)]) {
          d = h.coordToCR[coord].row - 0, d == a || d < h.rowpanes[c].first || (g = p.cells[coord]) && 1 < g.rowspan && (l[d] = !0);
        }
      }
    }
  }
  for (d in l) {
    e = h.RenderRow(d, c), f = w.childNodes[b + (d - h.rowpanes[c].first)], w.replaceChild(e, f);
  }
  return q;
};
SocialCalc.InputBox = function(a, b) {
  a && (this.element = a, this.editor = b, this.inputEcho = null, b.inputBox = this, a.onmousedown = SocialCalc.InputBoxOnMouseDown, b.MoveECellCallback.formulabar = function(a) {
    "start" == a.state && b.inputBox.DisplayCellContents(a.ecell.coord);
  });
};
SocialCalc.InputBox.prototype.DisplayCellContents = function(a) {
  SocialCalc.InputBoxDisplayCellContents(this, a);
};
SocialCalc.InputBox.prototype.ShowInputBox = function(a) {
  this.editor.inputEcho.ShowInputEcho(a);
};
SocialCalc.InputBox.prototype.GetText = function() {
  return this.element.value;
};
SocialCalc.InputBox.prototype.SetText = function(a) {
  this.element && (this.element.value = a, this.editor.inputEcho.SetText(a + "_"));
};
SocialCalc.InputBox.prototype.Focus = function() {
  SocialCalc.InputBoxFocus(this);
};
SocialCalc.InputBox.prototype.Blur = function() {
  return this.element.blur();
};
SocialCalc.InputBox.prototype.Select = function(a) {
  if (this.element) {
    switch(a) {
      case "end":
        if (document.selection && document.selection.createRange) {
          try {
            var b = document.selection.createRange().duplicate();
            b.moveToElementText(this.element);
            b.collapse(!1);
            b.select();
          } catch (c) {
            void 0 != this.element.selectionStart && (this.element.selectionStart = this.element.value.length, this.element.selectionEnd = this.element.value.length);
          }
        } else {
          void 0 != this.element.selectionStart && (this.element.selectionStart = this.element.value.length, this.element.selectionEnd = this.element.value.length);
        }
      ;
    }
  }
};
SocialCalc.InputBoxDisplayCellContents = function(a, b) {
  var c = SocialCalc.Constants;
  if (a) {
    if (!b) {
      if (!a.editor || !a.editor.ecell) {
        return;
      }
      b = a.editor.ecell.coord;
    }
    var d = SocialCalc.GetCellContents(a.editor.context.sheetobj, b);
    -1 != d.indexOf("\n") ? (d = c.s_inputboxdisplaymultilinetext, a.element.disabled = !0) : a.editor.ECellReadonly() ? a.element.disabled = !0 : a.element.disabled = !1;
    a.SetText(d);
  }
};
SocialCalc.InputBoxFocus = function(a) {
  if (a) {
    a.element.focus();
    a = a.editor;
    a.state = "input";
    var b = a.workingvalues;
    b.partialexpr = "";
    b.ecoord = a.ecell.coord;
    b.erow = a.ecell.row;
    b.ecol = a.ecell.col;
  }
};
SocialCalc.InputBoxOnMouseDown = function(a) {
  a = SocialCalc.Keyboard.focusTable;
  if (!a) {
    return!0;
  }
  var b = a.workingvalues;
  switch(a.state) {
    case "start":
      a.state = "inputboxdirect";
      b.partialexpr = "";
      b.ecoord = a.ecell.coord;
      b.erow = a.ecell.row;
      b.ecol = a.ecell.col;
      a.inputEcho.ShowInputEcho(!0);
      break;
    case "input":
      b.partialexpr = "", a.MoveECell(b.ecoord), a.state = "inputboxdirect", SocialCalc.KeyboardFocus();
  }
};
SocialCalc.InputEcho = function(a) {
  var b = SocialCalc.Constants;
  this.editor = a;
  this.text = "";
  this.functionbox = this.hint = this.prompt = this.main = this.container = this.interval = null;
  this.container = document.createElement("div");
  SocialCalc.setStyles(this.container, "display:none;position:absolute;zIndex:10;");
  this.main = document.createElement("div");
  b.defaultInputEchoClass && (this.main.className = b.defaultInputEchoClass);
  b.defaultInputEchoStyle && SocialCalc.setStyles(this.main, b.defaultInputEchoStyle);
  this.main.innerHTML = "&nbsp;";
  this.hint = document.createElement("div");
  b.defaultInputEchoHintClass && (this.hint.className = b.defaultInputEchoHintClass);
  b.defaultInputEchoHintStyle && SocialCalc.setStyles(this.hint, b.defaultInputEchoHintStyle);
  this.hint.innerHTML = "";
  this.container.appendChild(this.hint);
  this.container.appendChild(this.main);
  this.prompt = document.createElement("div");
  b.defaultInputEchoPromptClass && (this.prompt.className = b.defaultInputEchoPromptClass);
  b.defaultInputEchoPromptStyle && SocialCalc.setStyles(this.prompt, b.defaultInputEchoPromptStyle);
  this.prompt.innerHTML = "";
  this.container.appendChild(this.prompt);
  SocialCalc.DragRegister(this.main, !0, !0, {MouseDown:SocialCalc.DragFunctionStart, MouseMove:SocialCalc.DragFunctionPosition, MouseUp:SocialCalc.DragFunctionPosition, Disabled:null, positionobj:this.container}, this.editor.toplevel);
  a.toplevel.appendChild(this.container);
};
SocialCalc.InputEcho.prototype.ShowInputEcho = function(a) {
  return SocialCalc.ShowInputEcho(this, a);
};
SocialCalc.InputEcho.prototype.SetText = function(a) {
  return SocialCalc.SetInputEchoText(this, a);
};
SocialCalc.ShowInputEcho = function(a, b) {
  var c, d = a.editor;
  if (d) {
    if (b) {
      d.cellhandles.ShowCellHandles(!1);
      if (c = SocialCalc.GetEditorCellElement(d, d.ecell.row, d.ecell.col)) {
        c = SocialCalc.GetElementPosition(c.element), a.container.style.left = c.left - 1 + "px", a.container.style.top = c.top - 1 + "px";
      }
      a.hint.innerHTML = d.ecell.coord;
      a.container.style.display = "block";
      a.interval && window.clearInterval(a.interval);
      a.interval = window.setInterval(SocialCalc.InputEchoHeartbeat, 50);
    } else {
      a.interval && window.clearInterval(a.interval), a.container.style.display = "none";
    }
  }
};
SocialCalc.SetInputEchoText = function(a, b) {
  var c = SocialCalc.Constants, d;
  d = SocialCalc.special_chars(b);
  d = d.replace(/\n/g, "<br>");
  a.text != d && (a.main.innerHTML = d, a.text = d);
  d = b.match(/.*[\+\-\*\/\&\^\<\>\=\,\(]([A-Za-z][A-Za-z][\w\.]*?)\([^\)]*$/);
  "=" == b.charAt(0) && d ? (d = d[1].toUpperCase(), SocialCalc.Formula.FunctionList[d] ? (SocialCalc.Formula.FillFunctionInfo(), c = SocialCalc.special_chars(d + "(" + SocialCalc.Formula.FunctionArgString(d) + ")")) : c = c.ietUnknownFunction + d, a.prompt.innerHTML != c && (a.prompt.innerHTML = c, a.prompt.style.display = "block")) : "none" != a.prompt.style.display && (a.prompt.innerHTML = "", a.prompt.style.display = "none");
};
SocialCalc.InputEchoHeartbeat = function() {
  var a = SocialCalc.Keyboard.focusTable;
  if (!a) {
    return!0;
  }
  a.inputEcho.SetText(a.inputBox.GetText() + "_");
};
SocialCalc.InputEchoMouseDown = function(a) {
  a = SocialCalc.Keyboard.focusTable;
  if (!a) {
    return!0;
  }
  a.inputBox.element.focus();
};
SocialCalc.CellHandles = function(a) {
  if (!a.noEdit) {
    this.editor = a;
    this.movedmouse = this.noCursorSuffix = !1;
    this.draghandle = document.createElement("div");
    SocialCalc.setStyles(this.draghandle, "display:none;position:absolute;zIndex:8;border:1px solid white;width:4px;height:4px;fontSize:1px;backgroundColor:#0E93D8;cursor:default;");
    this.draghandle.innerHTML = "&nbsp;";
    a.toplevel.appendChild(this.draghandle);
    SocialCalc.AssignID(a, this.draghandle, "draghandle");
    var b = "png";
    navigator.userAgent.match(/MSIE 6\.0/) && (b = "gif");
    this.dragpalette = document.createElement("div");
    SocialCalc.setStyles(this.dragpalette, "display:none;position:absolute;zIndex:8;width:90px;height:90px;fontSize:1px;textAlign:center;cursor:default;backgroundImage:url(" + SocialCalc.Constants.defaultImagePrefix + "drag-handles." + b + ");");
    this.dragpalette.innerHTML = "&nbsp;";
    a.toplevel.appendChild(this.dragpalette);
    SocialCalc.AssignID(a, this.dragpalette, "dragpalette");
    this.dragtooltip = document.createElement("div");
    SocialCalc.setStyles(this.dragtooltip, "display:none;position:absolute;zIndex:9;border:1px solid black;width:100px;height:auto;fontSize:10px;backgroundColor:#FFFFFF;");
    this.dragtooltip.innerHTML = "&nbsp;";
    a.toplevel.appendChild(this.dragtooltip);
    SocialCalc.AssignID(a, this.dragtooltip, "dragtooltip");
    this.fillinghandle = document.createElement("div");
    SocialCalc.setStyles(this.fillinghandle, "display:none;position:absolute;zIndex:9;border:1px solid black;width:auto;height:14px;fontSize:10px;backgroundColor:#FFFFFF;");
    this.fillinghandle.innerHTML = "&nbsp;";
    a.toplevel.appendChild(this.fillinghandle);
    SocialCalc.AssignID(a, this.fillinghandle, "fillinghandle");
    if (this.draghandle.addEventListener) {
      this.draghandle.addEventListener("mousemove", SocialCalc.CellHandlesMouseMoveOnHandle, !1), this.dragpalette.addEventListener("mousedown", SocialCalc.CellHandlesMouseDown, !1), this.dragpalette.addEventListener("mousemove", SocialCalc.CellHandlesMouseMoveOnHandle, !1);
    } else {
      if (this.draghandle.attachEvent) {
        this.draghandle.attachEvent("onmousemove", SocialCalc.CellHandlesMouseMoveOnHandle), this.dragpalette.attachEvent("onmousedown", SocialCalc.CellHandlesMouseDown), this.dragpalette.attachEvent("onmousemove", SocialCalc.CellHandlesMouseMoveOnHandle);
      } else {
        throw "Browser not supported";
      }
    }
  }
};
SocialCalc.CellHandles.prototype.ShowCellHandles = function(a, b) {
  return SocialCalc.ShowCellHandles(this, a, b);
};
SocialCalc.ShowCellHandles = function(a, b, c) {
  var d = a.editor, e = !1, f, g, l = 1, h = 1;
  if (d && d.ecell) {
    if (b && (f = d.ecell.row, g = d.ecell.col, "start" == d.state && !(f >= d.lastvisiblerow || g >= d.lastvisiblecol || f < d.firstscrollingrow || g < d.firstscrollingcol))) {
      for (;"yes" == d.context.sheetobj.colattribs.hide[SocialCalc.rcColname(g + l)];) {
        l++;
      }
      for (;"yes" == d.context.sheetobj.rowattribs.hide[f + h];) {
        h++;
      }
      b = d.context.sheetobj.cells[SocialCalc.crToCoord(g + l - 1, f + h - 1)];
      "undefined" != typeof b && (l += (b.colspan || 1) - 1, h += (b.rowspan || 1) - 1);
      d.rowpositions[f + h] + 20 > d.horizontaltablecontrol.controlborder || d.rowpositions[f + h] - 10 < d.headposition.top || d.colpositions[g + l] + 20 > d.verticaltablecontrol.controlborder || d.colpositions[g + l] - 30 < d.headposition.left || (a.draghandle.style.left = d.colpositions[g + l] - 1 + "px", a.draghandle.style.top = d.rowpositions[f + h] - 1 + "px", a.draghandle.style.display = "block", c && (a.draghandle.style.display = "none", a.dragpalette.style.left = d.colpositions[g + l] - 
      45 + "px", a.dragpalette.style.top = d.rowpositions[f + h] - 45 + "px", a.dragpalette.style.display = "block", a.dragtooltip.style.left = d.colpositions[g + l] - 45 + "px", a.dragtooltip.style.top = d.rowpositions[f + h] + 45 + "px", a.dragtooltip.style.display = "none"), e = !0);
    }
    e || (a.draghandle.style.display = "none");
    c || (a.dragpalette.style.display = "none", a.dragtooltip.style.display = "none");
  }
};
SocialCalc.CellHandlesMouseMoveOnHandle = function(a) {
  var b = SocialCalc.Constants, c = a || window.event, d = c.target || c.srcElement, e = SocialCalc.Keyboard.focusTable;
  if (!e) {
    return!0;
  }
  a = e.cellhandles;
  if (!a.editor) {
    return!0;
  }
  var f = SocialCalc.GetElementPositionWithScroll(e.toplevel), g = c.clientX - f.left, c = c.clientY - f.top;
  if (!e.cellhandles.mouseDown) {
    e.cellhandles.ShowCellHandles(!0, !0);
    if (d == a.dragpalette) {
      b = SocialCalc.SegmentDivHit([b.CH_radius1, b.CH_radius2], e.cellhandles.dragpalette, g, c);
      if (0 == b) {
        SocialCalc.CellHandlesHoverTimeout();
        return;
      }
      a.tooltipstimer && (window.clearTimeout(a.tooltipstimer), a.tooltipstimer = null);
      a.tooltipswhichhandle = b;
      a.tooltipstimer = window.setTimeout(SocialCalc.CellHandlesTooltipsTimeout, 700);
    }
    a.timer && (window.clearTimeout(a.timer), a.timer = null);
    a.timer = window.setTimeout(SocialCalc.CellHandlesHoverTimeout, 3E3);
  }
};
SocialCalc.SegmentDivHit = function(a, b, c, d) {
  var e = b.offsetWidth, f = b.offsetHeight, g = b.offsetLeft;
  b = b.offsetTop;
  var l = 0, h = a, p = Math.sqrt(Math.pow(c - g - (e / 2 - 0.5), 2) + Math.pow(d - b - (f / 2 - 0.5), 2));
  if (2 == h.length) {
    return c >= g && c < g + e / 2 && d >= b && d < b + f / 2 && (p <= a[0] ? l = -1 : p <= a[1] && (l = 1)), c >= g + e / 2 && c < g + e && d >= b && d < b + f / 2 && (p <= a[0] ? l = -2 : p <= a[1] && (l = 2)), c >= g + e / 2 && c < g + e && d >= b + f / 2 && d < b + f && (p <= a[0] ? l = -3 : p <= a[1] && (l = 3)), c >= g && c < g + e / 2 && d >= b + f / 2 && d < b + f && (p <= a[0] ? l = -4 : p <= a[1] && (l = 4)), l;
  }
  for (;;) {
    if (c >= g && c < g + e / 2 && d >= b && d < b + f / 2) {
      quadrant += "1";
      l = h[0];
      if ("number" == typeof l) {
        break;
      }
      h = l;
      e /= 2;
      f /= 2;
    } else {
      if (c >= g + e / 2 && c < g + e && d >= b && d < b + f / 2) {
        quadrant += "2";
        l = h[1];
        if ("number" == typeof l) {
          break;
        }
        h = l;
        e /= 2;
        g += e;
        f /= 2;
      } else {
        if (c >= g + e / 2 && c < g + e && d >= b + f / 2 && d < b + f) {
          quadrant += "3";
          l = h[2];
          if ("number" == typeof l) {
            break;
          }
          h = l;
          e /= 2;
          g += e;
          f /= 2;
          b += f;
        } else {
          if (c >= g && c < g + e / 2 && d >= b + f / 2 && d < b + f) {
            quadrant += "4";
            l = h[3];
            if ("number" == typeof l) {
              break;
            }
            h = l;
            e /= 2;
            f /= 2;
            b += f;
          } else {
            return 0;
          }
        }
      }
    }
  }
  return l;
};
SocialCalc.CellHandlesHoverTimeout = function() {
  editor = SocialCalc.Keyboard.focusTable;
  if (!editor) {
    return!0;
  }
  var a = editor.cellhandles;
  a.timer && (window.clearTimeout(a.timer), a.timer = null);
  a.tooltipstimer && (window.clearTimeout(a.tooltipstimer), a.tooltipstimer = null);
  editor.cellhandles.ShowCellHandles(!0, !1);
};
SocialCalc.CellHandlesTooltipsTimeout = function() {
  editor = SocialCalc.Keyboard.focusTable;
  if (!editor) {
    return!0;
  }
  var a = editor.cellhandles;
  a.tooltipstimer && (window.clearTimeout(a.tooltipstimer), a.tooltipstimer = null);
  var b = a.tooltipswhichhandle;
  if (0 == b) {
    SocialCalc.CellHandlesHoverTimeout();
  } else {
    if (-3 == b) {
      a.dragtooltip.innerHTML = scc.s_CHfillAllTooltip;
    } else {
      if (3 == b) {
        a.dragtooltip.innerHTML = scc.s_CHfillContentsTooltip;
      } else {
        if (-2 == b) {
          a.dragtooltip.innerHTML = scc.s_CHmovePasteAllTooltip;
        } else {
          if (-4 == b) {
            a.dragtooltip.innerHTML = scc.s_CHmoveInsertAllTooltip;
          } else {
            if (2 == b) {
              a.dragtooltip.innerHTML = scc.s_CHmovePasteContentsTooltip;
            } else {
              if (4 == b) {
                a.dragtooltip.innerHTML = scc.s_CHmoveInsertContentsTooltip;
              } else {
                a.dragtooltip.innerHTML = "&nbsp;";
                a.dragtooltip.style.display = "none";
                return;
              }
            }
          }
        }
      }
    }
    a.dragtooltip.style.display = "block";
  }
};
SocialCalc.CellHandlesMouseDown = function(a) {
  var b = SocialCalc.Constants, c, d = a || window.event, e = SocialCalc.EditorMouseInfo;
  a = SocialCalc.Keyboard.focusTable;
  if (!a) {
    return!0;
  }
  if (!a.busy) {
    var f = a.cellhandles;
    f.movedmouse = !1;
    var g = SocialCalc.GetElementPositionWithScroll(a.toplevel), l = d.clientX - g.left, g = d.clientY - g.top;
    f.timer && (window.clearTimeout(f.timer), f.timer = null);
    f.tooltipstimer && (window.clearTimeout(f.tooltipstimer), f.tooltipstimer = null);
    f.dragtooltip.innerHTML = "&nbsp;";
    f.dragtooltip.style.display = "none";
    c = a.range;
    var h = SocialCalc.SegmentDivHit([b.CH_radius1, b.CH_radius2], a.cellhandles.dragpalette, l, g);
    if (1 == h || -1 == h || 0 == h) {
      f.ShowCellHandles(!0, !1);
    } else {
      e.ignore = !0;
      -3 == h ? (f.dragtype = "Fill", f.noCursorSuffix = !1) : 3 == h ? (f.dragtype = "FillC", f.noCursorSuffix = !1) : -2 == h ? (f.dragtype = "Move", f.noCursorSuffix = !0) : -4 == h ? (f.dragtype = "MoveI", f.noCursorSuffix = !1) : 2 == h ? (f.dragtype = "MoveC", f.noCursorSuffix = !0) : 4 == h && (f.dragtype = "MoveIC", f.noCursorSuffix = !1);
      f.filltype = null;
      switch(f.dragtype) {
        case "Fill":
        ;
        case "FillC":
          c.hasrange || a.RangeAnchor();
          a.range2.top = a.range.top;
          a.range2.right = a.range.right;
          a.range2.bottom = a.range.bottom;
          a.range2.left = a.range.left;
          a.range2.hasrange = !0;
          break;
        case "Move":
        ;
        case "MoveI":
        ;
        case "MoveC":
        ;
        case "MoveIC":
          c.hasrange || a.RangeAnchor();
          a.range2.top = a.range.top;
          a.range2.right = a.range.right;
          a.range2.bottom = a.range.bottom;
          a.range2.left = a.range.left;
          a.range2.hasrange = !0;
          a.RangeRemove();
          break;
        default:
          return;
      }
      f.fillinghandle.style.left = l + "px";
      f.fillinghandle.style.top = g - 17 + "px";
      f.fillinghandle.innerHTML = b.s_CHindicatorOperationLookup[f.dragtype] + (b.s_CHindicatorDirectionLookup[a.cellhandles.filltype] || "");
      f.fillinghandle.style.display = "block";
      f.ShowCellHandles(!0, !1);
      f.mouseDown = !0;
      e.editor = a;
      b = a.ecell.coord;
      f.startingcoord = b;
      f.startingX = l;
      f.startingY = g;
      e.mouselastcoord = b;
      SocialCalc.KeyboardSetFocus(a);
      document.addEventListener ? (document.addEventListener("mousemove", SocialCalc.CellHandlesMouseMove, !0), document.addEventListener("mouseup", SocialCalc.CellHandlesMouseUp, !0)) : f.draghandle.attachEvent && (f.draghandle.setCapture(), f.draghandle.attachEvent("onmousemove", SocialCalc.CellHandlesMouseMove), f.draghandle.attachEvent("onmouseup", SocialCalc.CellHandlesMouseUp), f.draghandle.attachEvent("onlosecapture", SocialCalc.CellHandlesMouseUp));
      SocialCalc.StopPropagation(d);
    }
  }
};
SocialCalc.CellHandlesMouseMove = function(a) {
  var b = SocialCalc.Constants, c, d, e, f = a || window.event, g = SocialCalc.EditorMouseInfo;
  if (a = g.editor) {
    var l = a.cellhandles;
    c = SocialCalc.GetElementPositionWithScroll(a.toplevel);
    var h = f.clientX - c.left, p = f.clientY - c.top;
    if (c = SocialCalc.GridMousePosition(a, h, p)) {
      if (c && !c.coord) {
        SocialCalc.SetDragAutoRepeat(a, c, SocialCalc.CellHandlesDragAutoRepeat);
      } else {
        if (SocialCalc.SetDragAutoRepeat(a, null), c.coord) {
          d = SocialCalc.coordToCr(a.cellhandles.startingcoord);
          e = SocialCalc.coordToCr(c.coord);
          l.movedmouse = !0;
          switch(l.dragtype) {
            case "Fill":
            ;
            case "FillC":
              c.coord == l.startingcoord ? (l.filltype = null, l.startingX = h, l.startingY = p) : l.filltype ? "Down" == l.filltype ? (e.col = d.col, e.row < d.row && (e.row = d.row)) : (e.row = d.row, e.col < d.col && (e.col = d.col)) : (10 < Math.abs(p - l.startingY) ? l.filltype = "Down" : 10 < Math.abs(h - l.startingX) && (l.filltype = "Right"), e.col = d.col, e.row = d.row);
              c.coord = SocialCalc.crToCoord(e.col, e.row);
              c.coord != g.mouselastcoord && (a.MoveECell(c.coord), a.RangeExtend());
              break;
            case "Move":
            ;
            case "MoveC":
              c.coord != g.mouselastcoord && (a.MoveECell(c.coord), d = a.range2.right - a.range2.left + c.col, e = a.range2.bottom - a.range2.top + c.row, a.RangeAnchor(SocialCalc.crToCoord(d, e)), a.RangeExtend());
              break;
            case "MoveI":
            ;
            case "MoveIC":
              c.coord == l.startingcoord ? (l.filltype = null, l.startingX = h, l.startingY = p) : l.filltype ? "Vertical" == l.filltype ? (e.col = a.range2.left, e.row >= a.range2.top && e.row <= a.range2.bottom + 1 && (e.row = a.range2.bottom + 2)) : (e.row = a.range2.top, e.col >= a.range2.left && e.col <= a.range2.right + 1 && (e.col = a.range2.right + 2)) : (10 < Math.abs(p - l.startingY) ? l.filltype = "Vertical" : 10 < Math.abs(h - l.startingX) && (l.filltype = "Horizontal"), e.col = d.col, 
              e.row = d.row), c.coord = SocialCalc.crToCoord(e.col, e.row), c.coord != g.mouselastcoord && (a.MoveECell(c.coord), l.filltype ? (d = a.range2.right - a.range2.left + e.col, e = a.range2.bottom - a.range2.top + e.row, a.RangeAnchor(SocialCalc.crToCoord(d, e)), a.RangeExtend()) : a.RangeRemove());
          }
          l.fillinghandle.style.left = h + "px";
          l.fillinghandle.style.top = p - 17 + "px";
          l.fillinghandle.innerHTML = b.s_CHindicatorOperationLookup[l.dragtype] + (b.s_CHindicatorDirectionLookup[a.cellhandles.filltype] || "");
          l.fillinghandle.style.display = "block";
          g.mouselastcoord = c.coord;
          SocialCalc.StopPropagation(f);
        }
      }
    }
  }
};
SocialCalc.CellHandlesDragAutoRepeat = function(a, b) {
  var c = SocialCalc.EditorMouseInfo, d = c.editor;
  if (d) {
    var e = d.cellhandles, f = SocialCalc.coordToCr(d.cellhandles.startingcoord), g = SocialCalc.coordToCr(a), l, h = 0, p = 0;
    "left" == b ? p = -1 : "right" == b ? p = 1 : "up" == b ? h = -1 : "down" == b && (h = 1);
    d.ScrollRelativeBoth(h, p);
    switch(e.dragtype) {
      case "Fill":
      ;
      case "FillC":
        e.filltype ? "Down" == e.filltype ? (g.col = f.col, g.row < f.row && (g.row = f.row)) : (g.row = f.row, g.col < f.col && (g.col = f.col)) : (g.col = f.col, g.row = f.row);
        l = SocialCalc.crToCoord(g.col, g.row);
        l != c.mouselastcoord && (d.MoveECell(a), d.RangeExtend());
        break;
      case "Move":
      ;
      case "MoveC":
        a != c.mouselastcoord && (d.MoveECell(a), e = d.range2.right - d.range2.left + d.ecell.col, g = d.range2.bottom - d.range2.top + d.ecell.row, d.RangeAnchor(SocialCalc.crToCoord(e, g)), d.RangeExtend());
        break;
      case "MoveI":
      ;
      case "MoveIC":
        e.filltype ? "Vertical" == e.filltype ? (g.col = d.range2.left, g.row >= d.range2.top && g.row <= d.range2.bottom + 1 && (g.row = d.range2.bottom + 2)) : (g.row = d.range2.top, g.col >= d.range2.left && g.col <= d.range2.right + 1 && (g.col = d.range2.right + 2)) : (g.col = f.col, g.row = f.row), l = SocialCalc.crToCoord(g.col, g.row), l != c.mouselastcoord && (d.MoveECell(l), e = d.range2.right - d.range2.left + g.col, g = d.range2.bottom - d.range2.top + g.row, d.RangeAnchor(SocialCalc.crToCoord(e, 
        g)), d.RangeExtend());
    }
    c.mouselastcoord = l;
  }
};
SocialCalc.CellHandlesMouseUp = function(a) {
  var b, c, d, e, f, g = a || window.event, l = SocialCalc.EditorMouseInfo;
  if (a = l.editor) {
    var h = a.cellhandles;
    l.ignore = !1;
    b = SocialCalc.GetElementPositionWithScroll(a.toplevel);
    b = SocialCalc.GridMousePosition(a, g.clientX - b.left, g.clientY - b.top);
    SocialCalc.SetDragAutoRepeat(a, null);
    h.mouseDown = !1;
    h.noCursorSuffix = !1;
    h.fillinghandle.style.display = "none";
    b || (b = {});
    b.coord || (b.coord = a.ecell.coord);
    switch(h.dragtype) {
      case "Fill":
      ;
      case "Move":
      ;
      case "MoveI":
        c = " all";
        break;
      case "FillC":
      ;
      case "MoveC":
      ;
      case "MoveIC":
        c = " formulas";
    }
    h.movedmouse || (h.dragtype = "Nothing");
    switch(h.dragtype) {
      case "Nothing":
        a.Range2Remove();
        a.RangeRemove();
        break;
      case "Fill":
      ;
      case "FillC":
        d = SocialCalc.coordToCr(h.startingcoord);
        e = SocialCalc.coordToCr(b.coord);
        h.filltype && ("Down" == h.filltype ? e.col = d.col : e.row = d.row);
        b.coord = SocialCalc.crToCoord(e.col, e.row);
        a.MoveECell(b.coord);
        a.RangeExtend();
        b = "Right" == a.cellhandles.filltype ? "right" : "down";
        c = "fill" + b + " " + SocialCalc.crToCoord(a.range.left, a.range.top) + ":" + SocialCalc.crToCoord(a.range.right, a.range.bottom) + c;
        a.EditorScheduleSheetCommands(c, !0, !1);
        break;
      case "Move":
      ;
      case "MoveC":
        a.context.cursorsuffix = "";
        c = "movepaste " + SocialCalc.crToCoord(a.range2.left, a.range2.top) + ":" + SocialCalc.crToCoord(a.range2.right, a.range2.bottom) + " " + a.ecell.coord + c;
        a.EditorScheduleSheetCommands(c, !0, !1);
        a.Range2Remove();
        break;
      case "MoveI":
      ;
      case "MoveIC":
        a.context.cursorsuffix = "", b = a.range2.right - a.range2.left, d = a.range2.bottom - a.range2.top, e = a.ecell.col - a.range2.left, f = a.ecell.row - a.range2.top, c = "moveinsert " + SocialCalc.crToCoord(a.range2.left, a.range2.top) + ":" + SocialCalc.crToCoord(a.range2.right, a.range2.bottom) + " " + a.ecell.coord + c, a.EditorScheduleSheetCommands(c, !0, !1), a.Range2Remove(), a.RangeRemove(), " Horizontal" == a.cellhandles.filltype && 0 < e ? a.MoveECell(SocialCalc.crToCoord(a.ecell.col - 
        b - 1, a.ecell.row)) : " Vertical" == a.cellhandles.filltype && 0 < f && a.MoveECell(SocialCalc.crToCoord(a.ecell.col, a.ecell.row - d - 1)), a.RangeAnchor(SocialCalc.crToCoord(a.ecell.col + b, a.ecell.row + d)), a.RangeExtend();
    }
    SocialCalc.RemoveMouseMoveUp(SocialCalc.CellHandlesMouseMove, SocialCalc.CellHandlesMouseUp, h.draghandle, g);
    l.editor = null;
    return!1;
  }
};
SocialCalc.TableControl = function(a, b, c) {
  var d = SocialCalc.Constants;
  this.editor = a;
  this.vertical = b;
  this.size = c;
  this.thumbpos = this.scrollareasize = this.scrollareaend = this.scrollareastart = this.morebuttonstart = this.lessbuttonstart = this.panesliderstart = this.endcapstart = this.controlborder = this.thumb = this.scrollarea = this.morebutton = this.lessbutton = this.paneslider = this.endcap = this.main = null;
  this.controlthickness = d.defaultTableControlThickness;
  this.sliderthickness = d.defaultTCSliderThickness;
  this.buttonthickness = d.defaultTCButtonThickness;
  this.thumbthickness = d.defaultTCThumbThickness;
  this.minscrollingpanesize = this.buttonthickness + this.buttonthickness + this.thumbthickness + 20;
};
SocialCalc.TableControl.prototype.CreateTableControl = function() {
  return SocialCalc.CreateTableControl(this);
};
SocialCalc.TableControl.prototype.PositionTableControlElements = function() {
  SocialCalc.PositionTableControlElements(this);
};
SocialCalc.TableControl.prototype.ComputeTableControlPositions = function() {
  SocialCalc.ComputeTableControlPositions(this);
};
SocialCalc.CreateTableControl = function(a) {
  var b, c, d = SocialCalc.AssignID, e = SocialCalc.setStyles, f = SocialCalc.Constants, g = a.editor.imageprefix, l = a.vertical ? "v" : "h";
  a.main = document.createElement("div");
  b = a.main.style;
  b.height = (a.vertical ? a.size : a.controlthickness) + "px";
  b.width = (a.vertical ? a.controlthickness : a.size) + "px";
  b.zIndex = 0;
  e(a.main, f.TCmainStyle);
  b.backgroundImage = "url(" + g + "main-" + l + ".gif)";
  f.TCmainClass && (a.main.className = f.TCmainClass);
  a.main.style.display = "none";
  a.endcap = document.createElement("div");
  b = a.endcap.style;
  b.height = a.controlthickness + "px";
  b.width = a.controlthickness + "px";
  b.zIndex = 1;
  b.overflow = "hidden";
  b.position = "absolute";
  e(a.endcap, f.TCendcapStyle);
  b.backgroundImage = "url(" + g + "endcap-" + l + ".gif)";
  f.TCendcapClass && (a.endcap.className = f.TCendcapClass);
  d(a.editor, a.endcap, "endcap" + l);
  a.main.appendChild(a.endcap);
  a.paneslider = document.createElement("div");
  b = a.paneslider.style;
  b.height = (a.vertical ? a.sliderthickness : a.controlthickness) + "px";
  b.overflow = "hidden";
  b.width = (a.vertical ? a.controlthickness : a.sliderthickness) + "px";
  b.position = "absolute";
  b[a.vertical ? "top" : "left"] = "4px";
  b.zIndex = 3;
  b.backgroundImage = "url(" + g + "paneslider-" + l + ".gif)";
  f.TCpanesliderClass && (a.paneslider.className = f.TCpanesliderClass);
  d(a.editor, a.paneslider, "paneslider" + l);
  (function(b, c, d) {
    f["s_" + c + "Tooltip" + d] && SocialCalc.TooltipRegister(b, f["s_" + c + "Tooltip" + d], null, a.editor.toplevel);
  })(a.paneslider, "paneslider", l);
  b = {MouseDown:SocialCalc.TCPSDragFunctionStart, MouseMove:SocialCalc.TCPSDragFunctionMove, MouseUp:SocialCalc.TCPSDragFunctionStop, Disabled:function() {
    return a.editor.busy;
  }};
  b.control = a;
  !0 != SocialCalc._app && SocialCalc.DragRegister(a.paneslider, a.vertical, !a.vertical, b, a.editor.toplevel);
  a.main.appendChild(a.paneslider);
  a.lessbutton = document.createElement("div");
  b = a.lessbutton.style;
  b.height = (a.vertical ? a.buttonthickness : a.controlthickness) + "px";
  b.width = (a.vertical ? a.controlthickness : a.buttonthickness) + "px";
  b.zIndex = 2;
  b.overflow = "hidden";
  b.position = "absolute";
  e(a.lessbutton, f.TClessbuttonStyle);
  b.backgroundImage = "url(" + g + "less-" + l + "n.gif)";
  f.TClessbuttonClass && (a.lessbutton.className = f.TClessbuttonClass);
  d(a.editor, a.lessbutton, "lessbutton" + l);
  c = {repeatwait:f.TClessbuttonRepeatWait, repeatinterval:f.TClessbuttonRepeatInterval, normalstyle:"backgroundImage:url(" + g + "less-" + l + "n.gif);", downstyle:"backgroundImage:url(" + g + "less-" + l + "d.gif);", hoverstyle:"backgroundImage:url(" + g + "less-" + l + "h.gif);"};
  b = {MouseDown:function() {
    a.editor.busy || a.editor.ScrollRelative(a.vertical, -1);
  }, Repeat:function() {
    a.editor.busy || a.editor.ScrollRelative(a.vertical, -1);
  }, Disabled:function() {
    return a.editor.busy;
  }};
  SocialCalc.ButtonRegister(a.editor, a.lessbutton, c, b);
  a.main.appendChild(a.lessbutton);
  a.morebutton = document.createElement("div");
  b = a.morebutton.style;
  b.height = (a.vertical ? a.buttonthickness : a.controlthickness) + "px";
  b.width = (a.vertical ? a.controlthickness : a.buttonthickness) + "px";
  b.zIndex = 2;
  b.overflow = "hidden";
  b.position = "absolute";
  e(a.morebutton, f.TCmorebuttonStyle);
  b.backgroundImage = "url(" + g + "more-" + l + "n.gif)";
  f.TCmorebuttonClass && (a.morebutton.className = f.TCmorebuttonClass);
  d(a.editor, a.morebutton, "morebutton" + l);
  c = {repeatwait:f.TCmorebuttonRepeatWait, repeatinterval:f.TCmorebuttonRepeatInterval, normalstyle:"backgroundImage:url(" + g + "more-" + l + "n.gif);", downstyle:"backgroundImage:url(" + g + "more-" + l + "d.gif);", hoverstyle:"backgroundImage:url(" + g + "more-" + l + "h.gif);"};
  b = {MouseDown:function() {
    a.editor.busy || a.editor.ScrollRelative(a.vertical, 1);
  }, Repeat:function() {
    a.editor.busy || a.editor.ScrollRelative(a.vertical, 1);
  }, Disabled:function() {
    return a.editor.busy;
  }};
  SocialCalc.ButtonRegister(a.editor, a.morebutton, c, b);
  a.main.appendChild(a.morebutton);
  a.scrollarea = document.createElement("div");
  b = a.scrollarea.style;
  b.height = a.controlthickness + "px";
  b.width = a.controlthickness + "px";
  b.zIndex = 1;
  b.overflow = "hidden";
  b.position = "absolute";
  e(a.scrollarea, f.TCscrollareaStyle);
  b.backgroundImage = "url(" + g + "scrollarea-" + l + ".gif)";
  f.TCscrollareaClass && (a.scrollarea.className = f.TCscrollareaClass);
  d(a.editor, a.scrollarea, "scrollarea" + l);
  c = {repeatwait:f.TCscrollareaRepeatWait, repeatinterval:f.TCscrollareaRepeatWait};
  b = {MouseDown:SocialCalc.ScrollAreaClick, Repeat:SocialCalc.ScrollAreaClick, Disabled:function() {
    return a.editor.busy;
  }};
  b.control = a;
  SocialCalc.ButtonRegister(a.editor, a.scrollarea, c, b);
  a.main.appendChild(a.scrollarea);
  a.thumb = document.createElement("div");
  b = a.thumb.style;
  b.height = (a.vertical ? a.thumbthickness : a.controlthickness) + "px";
  b.width = (a.vertical ? a.controlthickness : a.thumbthickness) + "px";
  b.zIndex = 2;
  b.overflow = "hidden";
  b.position = "absolute";
  e(a.thumb, f.TCthumbStyle);
  a.thumb.style.backgroundImage = "url(" + g + "thumb-" + l + "n.gif)";
  f.TCthumbClass && (a.thumb.className = f.TCthumbClass);
  d(a.editor, a.thumb, "thumb" + l);
  b = {MouseDown:SocialCalc.TCTDragFunctionStart, MouseMove:SocialCalc.TCTDragFunctionMove, MouseUp:SocialCalc.TCTDragFunctionStop, Disabled:function() {
    return a.editor.busy;
  }};
  b.control = a;
  !0 != SocialCalc._app && SocialCalc.DragRegister(a.thumb, a.vertical, !a.vertical, b, a.editor.toplevel);
  c = {normalstyle:"backgroundImage:url(" + g + "thumb-" + l + "n.gif)", name:"Thumb", downstyle:"backgroundImage:url(" + g + "thumb-" + l + "d.gif)", hoverstyle:"backgroundImage:url(" + g + "thumb-" + l + "h.gif)"};
  SocialCalc.ButtonRegister(a.editor, a.thumb, c, null);
  a.main.appendChild(a.thumb);
  return a.main;
};
SocialCalc.ScrollAreaClick = function(a, b, c) {
  a = c.functionobj.control;
  c = SocialCalc.GetElementPositionWithScroll(a.editor.toplevel);
  b = a.vertical ? b.clientY - c.top : b.clientX - c.left;
  a.editor.busy || a.editor.PageRelative(a.vertical, b > a.thumbpos ? 1 : -1);
};
SocialCalc.PositionTableControlElements = function(a) {
  var b, c, d = a.editor;
  a.vertical ? (b = a.controlborder + "px", a.endcap.style.top = a.endcapstart + "px", a.endcap.style.left = b, a.paneslider.style.top = a.panesliderstart + "px", a.paneslider.style.left = b, a.lessbutton.style.top = a.lessbuttonstart + "px", a.lessbutton.style.left = b, a.morebutton.style.top = a.morebuttonstart + "px", a.morebutton.style.left = b, a.scrollarea.style.top = a.scrollareastart + "px", a.scrollarea.style.left = b, a.scrollarea.style.height = a.scrollareasize + "px", c = Math.max(d.context.sheetobj.attribs.lastrow, 
  d.firstscrollingrow + 1), c = (d.firstscrollingrow - (d.lastnonscrollingrow + 1)) * (a.scrollareasize - 3 * a.thumbthickness) / (c - (d.lastnonscrollingrow + 1)) + a.scrollareastart - 1, c = Math.floor(c), a.thumb.style.top = c + "px", a.thumb.style.left = b) : (b = a.controlborder + "px", a.endcap.style.left = a.endcapstart + "px", a.endcap.style.top = b, a.paneslider.style.left = a.panesliderstart + "px", a.paneslider.style.top = b, a.lessbutton.style.left = a.lessbuttonstart + "px", a.lessbutton.style.top = 
  b, a.morebutton.style.left = a.morebuttonstart + "px", a.morebutton.style.top = b, a.scrollarea.style.left = a.scrollareastart + "px", a.scrollarea.style.top = b, a.scrollarea.style.width = a.scrollareasize + "px", c = Math.max(d.context.sheetobj.attribs.lastcol, d.firstscrollingcol + 1), c = (d.firstscrollingcol - (d.lastnonscrollingcol + 1)) * (a.scrollareasize - a.thumbthickness) / (c - d.lastnonscrollingcol) + a.scrollareastart - 1, c = Math.floor(c), a.thumb.style.left = c + "px", a.thumb.style.top = 
  b);
  a.thumbpos = c;
  a.main.style.display = "block";
};
SocialCalc.ComputeTableControlPositions = function(a) {
  var b = a.editor;
  if (!b.gridposition || !b.headposition) {
    throw "Can't compute table control positions before editor positions";
  }
  a.vertical ? (a.controlborder = b.gridposition.left + b.tablewidth, a.endcapstart = b.gridposition.top, a.panesliderstart = b.firstscrollingrowtop - a.sliderthickness, a.lessbuttonstart = b.firstscrollingrowtop - 1, a.morebuttonstart = b.gridposition.top + b.tableheight - a.buttonthickness, a.scrollareastart = b.firstscrollingrowtop - 1 + a.buttonthickness) : (a.controlborder = b.gridposition.top + b.tableheight, a.endcapstart = b.gridposition.left, a.panesliderstart = b.firstscrollingcolleft - 
  a.sliderthickness, a.lessbuttonstart = b.firstscrollingcolleft - 1, a.morebuttonstart = b.gridposition.left + b.tablewidth - a.buttonthickness, a.scrollareastart = b.firstscrollingcolleft - 1 + a.buttonthickness);
  a.scrollareaend = a.morebuttonstart - 1;
  a.scrollareasize = a.scrollareaend - a.scrollareastart + 1;
};
SocialCalc.TCPSDragFunctionStart = function(a, b, c) {
  var d = c.functionobj.control.editor, e = SocialCalc.Constants;
  SocialCalc.DragFunctionStart(a, b, c);
  b.trackingline = document.createElement("div");
  b.trackingline.style.height = c.vertical ? e.TCPStrackinglineThickness : d.tableheight - (d.headposition.top - d.gridposition.top) + "px";
  b.trackingline.style.width = c.vertical ? d.tablewidth - (d.headposition.left - d.gridposition.left) + "px" : e.TCPStrackinglineThickness;
  b.trackingline.style.backgroundImage = "url(" + d.imageprefix + "trackingline-" + (c.vertical ? "v" : "h") + ".gif)";
  e.TCPStrackinglineClass && (b.trackingline.className = e.TCPStrackinglineClass);
  SocialCalc.setStyles(b.trackingline, e.TCPStrackinglineStyle);
  c.vertical ? (row = SocialCalc.Lookup(b.clientY + c.functionobj.control.sliderthickness, d.rowpositions), b.trackingline.style.top = (d.rowpositions[row] || d.headposition.top) + "px", b.trackingline.style.left = d.headposition.left + "px", b.trackingline.id = "trackingline-vertical", d.context.rowpanes.length - 1 && (d.context.SetRowPaneFirstLast(1, d.context.rowpanes[0].last + 1, d.context.rowpanes[0].last + 1), d.FitToEditTable(), d.ScheduleRender())) : (col = SocialCalc.Lookup(b.clientX + c.functionobj.control.sliderthickness, 
  d.colpositions), b.trackingline.style.top = d.headposition.top + "px", b.trackingline.style.left = (d.colpositions[col] || d.headposition.left) + "px", b.trackingline.id = "trackingline-horizon", d.context.colpanes.length - 1 && (d.context.SetColPaneFirstLast(1, d.context.colpanes[0].last + 1, d.context.colpanes[0].last + 1), d.FitToEditTable(), d.ScheduleRender()));
  d.griddiv.appendChild(b.trackingline);
};
SocialCalc.TCPSDragFunctionMove = function(a, b, c) {
  var d, e;
  e = c.functionobj.control;
  d = e.sliderthickness;
  var f = e.editor;
  if (c.vertical) {
    e = e.morebuttonstart - e.minscrollingpanesize - b.offsetY;
    b.clientY > e && (b.clientY = e);
    e = f.headposition.top - d - b.offsetY;
    b.clientY < e && (b.clientY = e);
    for (d = SocialCalc.Lookup(b.clientY + d, f.rowpositions);"yes" == f.context.sheetobj.rowattribs.hide[d];) {
      d++;
    }
    b.trackingline.style.top = (f.rowpositions[d] || f.headposition.top) + "px";
  } else {
    e = e.morebuttonstart - e.minscrollingpanesize - b.offsetX;
    b.clientX > e && (b.clientX = e);
    e = f.headposition.left - d - b.offsetX;
    b.clientX < e && (b.clientX = e);
    for (d = SocialCalc.Lookup(b.clientX + d, f.colpositions);"yes" == f.context.sheetobj.colattribs.hide[SocialCalc.rcColname(d)];) {
      d++;
    }
    b.trackingline.style.left = (f.colpositions[d] || f.headposition.left) + "px";
  }
  SocialCalc.DragFunctionPosition(a, b, c);
};
SocialCalc.TCPSDragFunctionStop = function(a, b, c) {
  var d = c.functionobj.control, e = d.sliderthickness;
  a = d.editor;
  if (c.vertical) {
    c = d.morebuttonstart - d.minscrollingpanesize - b.offsetY;
    b.clientY > c && (b.clientY = c);
    c = a.headposition.top - e - b.offsetY;
    b.clientY < c && (b.clientY = c);
    b = SocialCalc.Lookup(b.clientY + e, a.rowpositions);
    b > a.context.sheetobj.attribs.lastrow && (b = a.context.sheetobj.attribs.lastrow);
    for (;"yes" == a.context.sheetobj.rowattribs.hide[b];) {
      b++;
    }
    a.EditorScheduleSheetCommands("pane row " + b, !0, !1);
  } else {
    c = d.morebuttonstart - d.minscrollingpanesize - b.offsetX;
    b.clientX > c && (b.clientX = c);
    c = a.headposition.left - e - b.offsetX;
    b.clientX < c && (b.clientX = c);
    b = SocialCalc.Lookup(b.clientX + e, a.colpositions);
    b > a.context.sheetobj.attribs.lastcol && (b = a.context.sheetobj.attribs.lastcol);
    for (;"yes" == a.context.sheetobj.colattribs.hide[SocialCalc.rcColname(b)];) {
      b++;
    }
    a.EditorScheduleSheetCommands("pane col " + b, !0, !1);
  }
};
SocialCalc.TCTDragFunctionStart = function(a, b, c) {
  var d = c.functionobj.control, e = d.editor, f = SocialCalc.Constants;
  SocialCalc.DragFunctionStart(a, b, c);
  b.thumbstatus && (b.thumbstatus.rowmsgele && (b.thumbstatus.rowmsgele = null), b.thumbstatus.rowpreviewele && (b.thumbstatus.rowpreviewele = null), e.toplevel.removeChild(b.thumbstatus), b.thumbstatus = null);
  b.thumbstatus = document.createElement("div");
  c.vertical ? (f.TCTDFSthumbstatusvClass && (b.thumbstatus.className = f.TCTDFSthumbstatusvClass), SocialCalc.setStyles(b.thumbstatus, f.TCTDFSthumbstatusvStyle), b.thumbstatus.style.top = b.clientY + f.TCTDFStopOffsetv + "px", b.thumbstatus.style.left = d.controlborder - 10 - e.tablewidth / 2 + "px", b.thumbstatus.style.width = e.tablewidth / 2 + "px", b.thumbcontext = new SocialCalc.RenderContext(e.context.sheetobj), b.thumbcontext.showGrid = !0, b.thumbcontext.rowpanes = [{first:1, last:1}], 
  a = e.context.colpanes[e.context.colpanes.length - 1], b.thumbcontext.colpanes = [{first:a.first, last:a.last}], b.thumbstatus.innerHTML = '<table cellspacing="0" cellpadding="0"><tr><td valign="top" style="' + f.TCTDFSthumbstatusrownumStyle + '" class="' + f.TCTDFSthumbstatusrownumClass + '"><div>msg</div></td><td valign="top"><div style="overflow:hidden;">preview</div></td></tr></table>', b.thumbstatus.rowmsgele = b.thumbstatus.firstChild.firstChild.firstChild.firstChild.firstChild, b.thumbstatus.rowpreviewele = 
  b.thumbstatus.firstChild.firstChild.firstChild.childNodes[1].firstChild, e.toplevel.appendChild(b.thumbstatus), SocialCalc.TCTDragFunctionRowSetStatus(b, e, e.firstscrollingrow || 1)) : (f.TCTDFSthumbstatushClass && (b.thumbstatus.className = f.TCTDFSthumbstatushClass), SocialCalc.setStyles(b.thumbstatus, f.TCTDFSthumbstatushStyle), b.thumbstatus.style.top = d.controlborder + f.TCTDFStopOffseth + "px", b.thumbstatus.style.left = b.clientX + f.TCTDFSleftOffseth + "px", e.toplevel.appendChild(b.thumbstatus), 
  b.thumbstatus.innerHTML = f.s_TCTDFthumbstatusPrefixh + SocialCalc.rcColname(e.firstscrollingcol));
};
SocialCalc.TCTDragFunctionRowSetStatus = function(a, b, c) {
  a.thumbstatus.rowmsgele.innerHTML = SocialCalc.Constants.s_TCTDFthumbstatusPrefixv + c + " ";
  a.thumbcontext.rowpanes = [{first:c, last:c}];
  a.thumbrowshown = c;
  a.thumbcontext.RenderSheet(a.thumbstatus.rowpreviewele.firstChild, {type:"html"});
};
SocialCalc.TCTDragFunctionMove = function(a, b, c) {
  var d, e;
  d = c.functionobj.control;
  e = d.editor;
  var f = SocialCalc.Constants;
  c.vertical ? (b.clientY > d.scrollareaend - b.offsetY - d.thumbthickness + 2 && (b.clientY = d.scrollareaend - b.offsetY - d.thumbthickness + 2), b.clientY < d.scrollareastart - b.offsetY - 1 && (b.clientY = d.scrollareastart - b.offsetY - 1), b.thumbstatus.style.top = b.clientY + "px", d = (b.clientY + b.offsetY - d.scrollareastart + 1) / (d.scrollareasize - d.thumbthickness) * (e.context.sheetobj.attribs.lastrow - e.lastnonscrollingrow) + e.lastnonscrollingrow + 1, d = Math.floor(d), d <= e.lastnonscrollingrow && 
  (d = e.lastnonscrollingrow + 1), d > e.context.sheetobj.attribs.lastrow && (d = e.context.sheetobj.attribs.lastrow), d != b.thumbrowshown && SocialCalc.TCTDragFunctionRowSetStatus(b, e, d)) : (b.clientX > d.scrollareaend - b.offsetX - d.thumbthickness + 2 && (b.clientX = d.scrollareaend - b.offsetX - d.thumbthickness + 2), b.clientX < d.scrollareastart - b.offsetX - 1 && (b.clientX = d.scrollareastart - b.offsetX - 1), b.thumbstatus.style.left = b.clientX + "px", d = (b.clientX + b.offsetX - d.scrollareastart + 
  1) / (d.scrollareasize - d.thumbthickness) * (e.context.sheetobj.attribs.lastcol - e.lastnonscrollingcol) + e.lastnonscrollingcol + 1, d = Math.floor(d), d <= e.lastnonscrollingcol && (d = e.lastnonscrollingcol + 1), d > e.context.sheetobj.attribs.lastcol && (d = e.context.sheetobj.attribs.lastcol), e = f.s_TCTDFthumbstatusPrefixh + SocialCalc.rcColname(d), b.thumbstatus.innerHTML = e);
  SocialCalc.DragFunctionPosition(a, b, c);
};
SocialCalc.TCTDragFunctionStop = function(a, b, c) {
  var d = c.functionobj.control;
  a = d.editor;
  c.vertical ? (c = (b.clientY + b.offsetY - d.scrollareastart + 1) / (d.scrollareasize - d.thumbthickness) * (a.context.sheetobj.attribs.lastrow - a.lastnonscrollingrow) + a.lastnonscrollingrow + 1, c = Math.floor(c), c <= a.lastnonscrollingrow && (c = a.lastnonscrollingrow + 1), c > a.context.sheetobj.attribs.lastrow && (c = a.context.sheetobj.attribs.lastrow), a.context.SetRowPaneFirstLast(a.context.rowpanes.length - 1, c, c + 1)) : (c = (b.clientX + b.offsetX - d.scrollareastart + 1) / (d.scrollareasize - 
  d.thumbthickness) * (a.context.sheetobj.attribs.lastcol - a.lastnonscrollingcol) + a.lastnonscrollingcol + 1, c = Math.floor(c), c <= a.lastnonscrollingcol && (c = a.lastnonscrollingcol + 1), c > a.context.sheetobj.attribs.lastcol && (c = a.context.sheetobj.attribs.lastcol), a.context.SetColPaneFirstLast(a.context.colpanes.length - 1, c, c + 1));
  a.FitToEditTable();
  b.thumbstatus.rowmsgele && (b.thumbstatus.rowmsgele = null);
  b.thumbstatus.rowpreviewele && (b.thumbstatus.rowpreviewele = null);
  a.toplevel.removeChild(b.thumbstatus);
  b.thumbstatus = null;
  a.ScheduleRender();
};
SocialCalc.DragInfo = {registeredElements:[], draggingElement:null, startX:0, startY:0, startZ:0, clientX:0, clientY:0, offsetX:0, offsetY:0, relativeOffset:{left:0, top:0}};
SocialCalc.DragRegister = function(a, b, c, d, e) {
  var f = SocialCalc.DragInfo;
  d || (d = {MouseDown:SocialCalc.DragFunctionStart, MouseMove:SocialCalc.DragFunctionPosition, MouseUp:SocialCalc.DragFunctionPosition, Disabled:null});
  f.registeredElements.push({element:a, vertical:b, horizontal:c, functionobj:d, parent:e});
  if (a.addEventListener) {
    a.addEventListener("mousedown", SocialCalc.DragMouseDown, !1);
  } else {
    if (a.attachEvent) {
      a.attachEvent("onmousedown", SocialCalc.DragMouseDown);
    } else {
      throw SocialCalc.Constants.s_BrowserNotSupported;
    }
  }
};
SocialCalc.DragUnregister = function(a) {
  var b = SocialCalc.DragInfo, c;
  if (a) {
    for (c = 0;c < b.registeredElements.length;c++) {
      if (b.registeredElements[c].element == a) {
        b.registeredElements.splice(c, 1);
        a.removeEventListener ? a.removeEventListener("mousedown", SocialCalc.DragMouseDown, !1) : a.detachEvent("onmousedown", SocialCalc.DragMouseDown);
        break;
      }
    }
  }
};
SocialCalc.DragMouseDown = function(a) {
  a = a || window.event;
  var b = SocialCalc.DragInfo, c = SocialCalc.LookupElement(a.target || a.srcElement, b.registeredElements);
  if (c && !(c && c.functionobj && c.functionobj.Disabled && c.functionobj.Disabled(a, b, c))) {
    return b.draggingElement = c, c.parent && (b.relativeOffset = SocialCalc.GetElementPositionWithScroll(c.parent)), b.clientX = a.clientX - b.relativeOffset.left, b.clientY = a.clientY - b.relativeOffset.top, b.startX = b.clientX, b.startY = b.clientY, b.startZ = c.element.style.zIndex, b.offsetX = 0, b.offsetY = 0, c.element.style.zIndex = "100", SocialCalc.SetMouseMoveUp(SocialCalc.DragMouseMove, SocialCalc.DragMouseUp, c.element, a), c && c.functionobj && c.functionobj.MouseDown && c.functionobj.MouseDown(a, 
    b, c), !1;
  }
};
SocialCalc.DragMouseMove = function(a) {
  a = a || window.event;
  var b = SocialCalc.DragInfo, c = b.draggingElement;
  b.clientX = a.clientX - b.relativeOffset.left;
  b.clientY = a.clientY - b.relativeOffset.top;
  SocialCalc.StopPropagation(a);
  c && c.functionobj && c.functionobj.MouseMove && c.functionobj.MouseMove(a, b, c);
  return!1;
};
SocialCalc.DragMouseUp = function(a) {
  a = a || window.event;
  var b = SocialCalc.DragInfo, c = b.draggingElement;
  b.clientX = a.clientX - b.relativeOffset.left;
  b.clientY = a.clientY - b.relativeOffset.top;
  c.element.style.zIndex = b.startZ;
  c && c.functionobj && c.functionobj.MouseUp && c.functionobj.MouseUp(a, b, c);
  SocialCalc.RemoveMouseMoveUp(SocialCalc.DragMouseMove, SocialCalc.DragMouseUp, c.element, a);
  b.draggingElement = null;
  return!1;
};
SocialCalc.DragFunctionStart = function(a, b, c) {
  a = c.functionobj.positionobj || c.element;
  b.offsetY = parseInt(a.style.top) - b.clientY;
  b.offsetX = parseInt(a.style.left) - b.clientX;
};
SocialCalc.DragFunctionPosition = function(a, b, c) {
  a = c.functionobj.positionobj || c.element;
  c.vertical && (a.style.top = b.clientY + b.offsetY + "px");
  c.horizontal && (a.style.left = b.clientX + b.offsetX + "px");
};
SocialCalc.TooltipInfo = {registeredElements:[], registered:!1, tooltipElement:null, timer:null, popupElement:null, clientX:0, clientY:0, offsetX:SocialCalc.Constants.TooltipOffsetX, offsetY:SocialCalc.Constants.TooltipOffsetY};
SocialCalc.TooltipRegister = function(a, b, c, d) {
  var e = SocialCalc.TooltipInfo;
  e.registeredElements.push({element:a, tiptext:b, functionobj:c, parent:d});
  if (!e.registered) {
    if (document.addEventListener) {
      document.addEventListener("mousemove", SocialCalc.TooltipMouseMove, !1);
    } else {
      if (document.attachEvent) {
        document.attachEvent("onmousemove", SocialCalc.TooltipMouseMove);
      } else {
        throw SocialCalc.Constants.s_BrowserNotSupported;
      }
    }
    e.registered = !0;
  }
};
SocialCalc.TooltipMouseMove = function(a) {
  var b = a || window.event;
  a = SocialCalc.TooltipInfo;
  a.clientX = b.clientX;
  a.clientY = b.clientY;
  b = SocialCalc.LookupElement(b.target || b.srcElement, a.registeredElements);
  a.timer && (window.clearTimeout(a.timer), a.timer = null);
  a.popupElement && SocialCalc.TooltipHide();
  a.tooltipElement = b || null;
  b && !SocialCalc.ButtonInfo.buttonDown && (a.timer = window.setTimeout(SocialCalc.TooltipWaitDone, 700), a.tooltipElement.element.addEventListener ? a.tooltipElement.element.addEventListener("mousedown", SocialCalc.TooltipMouseDown, !1) : a.tooltipElement.element.attachEvent && a.tooltipElement.element.attachEvent("onmousedown", SocialCalc.TooltipMouseDown));
};
SocialCalc.TooltipMouseDown = function(a) {
  a = SocialCalc.TooltipInfo;
  a.timer && (window.clearTimeout(a.timer), a.timer = null);
  a.popupElement && SocialCalc.TooltipHide();
  a.tooltipElement && (a.tooltipElement.element.removeEventListener ? a.tooltipElement.element.removeEventListener("mousedown", SocialCalc.TooltipMouseDown, !1) : a.tooltipElement.element.attachEvent && a.tooltipElement.element.detachEvent("onmousedown", SocialCalc.TooltipMouseDown), a.tooltipElement = null);
};
SocialCalc.TooltipDisplay = function(a) {
  var b = SocialCalc.TooltipInfo, c = SocialCalc.Constants, d = a.functionobj && "number" == typeof a.functionobj.offsetx ? a.functionobj.offsetx : b.offsetX, e = a.functionobj && "number" == typeof a.functionobj.offsety ? a.functionobj.offsety : b.offsetY, f = SocialCalc.GetViewportInfo(), g = SocialCalc.GetElementPositionWithScroll(a.parent);
  b.popupElement = document.createElement("div");
  c.TDpopupElementClass && (b.popupElement.className = c.TDpopupElementClass);
  SocialCalc.setStyles(b.popupElement, c.TDpopupElementStyle);
  b.popupElement.innerHTML = a.tiptext;
  b.clientX > f.width / 2 ? (b.popupElement.style.bottom = g.height - b.clientY + e + g.top + "px", b.popupElement.style.right = g.width - b.clientX + d + g.left + "px") : (b.popupElement.style.bottom = g.height - b.clientY + e + g.top + "px", b.popupElement.style.left = b.clientX + d - g.left + "px");
  50 > b.clientY && (b.popupElement.style.bottom = g.height - b.clientY + e - 50 + g.top + "px");
  a.parent.appendChild(b.popupElement);
};
SocialCalc.TooltipHide = function() {
  var a = SocialCalc.TooltipInfo;
  a.popupElement && (a.popupElement.parentNode.removeChild(a.popupElement), a.popupElement = null);
};
SocialCalc.TooltipWaitDone = function() {
  var a = SocialCalc.TooltipInfo;
  a.timer = null;
  SocialCalc.TooltipDisplay(a.tooltipElement);
};
SocialCalc.ButtonInfo = {registeredElements:[], buttonElement:null, doingHover:!1, buttonDown:!1, timer:null, relativeOffset:null, clientX:0, clientY:0};
SocialCalc.ButtonRegister = function(a, b, c, d) {
  var e = SocialCalc.ButtonInfo;
  c || (c = {});
  e.registeredElements.push({name:c.name, element:b, editor:a, normalstyle:c.normalstyle, hoverstyle:c.hoverstyle, downstyle:c.downstyle, repeatwait:c.repeatwait, repeatinterval:c.repeatinterval, functionobj:d});
  if (b.addEventListener) {
    b.addEventListener("mousedown", SocialCalc.ButtonMouseDown, !1), b.addEventListener("mouseover", SocialCalc.ButtonMouseOver, !1), b.addEventListener("mouseout", SocialCalc.ButtonMouseOut, !1);
  } else {
    if (b.attachEvent) {
      b.attachEvent("onmousedown", SocialCalc.ButtonMouseDown), b.attachEvent("onmouseover", SocialCalc.ButtonMouseOver), b.attachEvent("onmouseout", SocialCalc.ButtonMouseOut);
    } else {
      throw SocialCalc.Constants.s_BrowserNotSupported;
    }
  }
};
SocialCalc.ButtonMouseOver = function(a) {
  a = a || window.event;
  var b = SocialCalc.ButtonInfo, c = SocialCalc.LookupElement(a.target || a.srcElement, b.registeredElements);
  c && (b.buttonDown ? b.buttonElement == c && (b.doingHover = !0) : (b.buttonElement && b.buttonElement != c && b.doingHover && SocialCalc.setStyles(b.buttonElement.element, b.buttonElement.normalstyle), b.buttonElement = c, b.doingHover = !0, SocialCalc.setStyles(c.element, c.hoverstyle), c && c.functionobj && c.functionobj.MouseOver && c.functionobj.MouseOver(a, b, c)));
};
SocialCalc.ButtonMouseOut = function(a) {
  a = a || window.event;
  var b = SocialCalc.ButtonInfo;
  if (b.buttonDown) {
    b.doingHover = !1;
  } else {
    var c = SocialCalc.LookupElement(a.target || a.srcElement, b.registeredElements);
    b.doingHover && (b.buttonElement && SocialCalc.setStyles(b.buttonElement.element, b.buttonElement.normalstyle), b.buttonElement = null, b.doingHover = !1);
    c && c.functionobj && c.functionobj.MouseOut && c.functionobj.MouseOut(a, b, c);
  }
};
SocialCalc.ButtonMouseDown = function(a) {
  a = a || window.event;
  var b = SocialCalc.ButtonInfo;
  SocialCalc.GetViewportInfo();
  var c = SocialCalc.LookupElement(a.target || a.srcElement, b.registeredElements);
  !c || c && c.functionobj && c.functionobj.Disabled && c.functionobj.Disabled(a, b, c) || (b.buttonElement = c, b.buttonDown = !0, SocialCalc.setStyles(c.element, b.buttonElement.downstyle), document.addEventListener ? document.addEventListener("mouseup", SocialCalc.ButtonMouseUp, !0) : c.element.attachEvent && (c.element.setCapture(), c.element.attachEvent("onmouseup", SocialCalc.ButtonMouseUp), c.element.attachEvent("onlosecapture", SocialCalc.ButtonMouseUp)), SocialCalc.StopPropagation(a), b.relativeOffset = 
  SocialCalc.GetElementPositionWithScroll(c.editor.toplevel), b.clientX = a.clientX - b.relativeOffset.left, b.clientY = a.clientY - b.relativeOffset.top, c && c.functionobj && c.functionobj.MouseDown && c.functionobj.MouseDown(a, b, c), c.repeatwait && (b.timer = window.setTimeout(SocialCalc.ButtonRepeat, c.repeatwait)));
};
SocialCalc.ButtonMouseUp = function(a) {
  a = a || window.event;
  var b = SocialCalc.ButtonInfo, c = b.buttonElement;
  b.timer && (window.clearTimeout(b.timer), b.timer = null);
  b.buttonDown && (SocialCalc.StopPropagation(a), document.removeEventListener ? document.removeEventListener("mouseup", SocialCalc.ButtonMouseUp, !0) : document.detachEvent && (c.element.detachEvent("onlosecapture", SocialCalc.ButtonMouseUp), c.element.detachEvent("onmouseup", SocialCalc.ButtonMouseUp), c.element.releaseCapture()), b.buttonElement.downstyle && (b.doingHover ? SocialCalc.setStyles(c.element, b.buttonElement.hoverstyle) : SocialCalc.setStyles(c.element, b.buttonElement.normalstyle)), 
  b.buttonDown = !1, c && c.functionobj && c.functionobj.MouseUp && c.functionobj.MouseUp(a, b, c));
};
SocialCalc.ButtonRepeat = function() {
  var a = SocialCalc.ButtonInfo, b = a.buttonElement;
  b && (b && b.functionobj && b.functionobj.Repeat && b.functionobj.Repeat(null, a, b), a.timer = window.setTimeout(SocialCalc.ButtonRepeat, b.repeatinterval || 100));
};
SocialCalc.MouseWheelInfo = {registeredElements:[]};
SocialCalc.MouseWheelRegister = function(a, b) {
  SocialCalc.MouseWheelInfo.registeredElements.push({element:a, functionobj:b});
  if (a.addEventListener) {
    a.addEventListener("DOMMouseScroll", SocialCalc.ProcessMouseWheel, !1), a.addEventListener("mousewheel", SocialCalc.ProcessMouseWheel, !1);
  } else {
    if (a.attachEvent) {
      a.attachEvent("onmousewheel", SocialCalc.ProcessMouseWheel);
    } else {
      throw SocialCalc.Constants.s_BrowserNotSupported;
    }
  }
};
SocialCalc.ProcessMouseWheel = function(a) {
  a = a || window.event;
  var b;
  if (!SocialCalc.Keyboard.passThru) {
    var c = SocialCalc.MouseWheelInfo;
    b = a.target || a.srcElement;
    var d;
    for (d = null;!d && b;b = b.parentNode) {
      d = SocialCalc.LookupElement(b, c.registeredElements);
    }
    d && ((b = a.wheelDelta ? a.wheelDelta / 120 : -a.detail / 3) || (b = 0), d.functionobj && d.functionobj.WheelMove && d.functionobj.WheelMove(a, b, c, d), a.preventDefault && a.preventDefault(), a.returnValue = !1);
  }
};
SocialCalc.keyboardTables = {specialKeysCommon:{8:"[backspace]", 9:"[tab]", 13:"[enter]", 25:"[tab]", 27:"[esc]", 33:"[pgup]", 34:"[pgdn]", 35:"[end]", 36:"[home]", 37:"[aleft]", 38:"[aup]", 39:"[aright]", 40:"[adown]", 45:"[ins]", 46:"[del]", 113:"[f2]"}, specialKeysIE:{8:"[backspace]", 9:"[tab]", 13:"[enter]", 25:"[tab]", 27:"[esc]", 33:"[pgup]", 34:"[pgdn]", 35:"[end]", 36:"[home]", 37:"[aleft]", 38:"[aup]", 39:"[aright]", 40:"[adown]", 45:"[ins]", 46:"[del]", 113:"[f2]"}, controlKeysIE:{67:"[ctrl-c]", 
83:"[ctrl-s]", 86:"[ctrl-v]", 88:"[ctrl-x]", 90:"[ctrl-z]"}, specialKeysOpera:{8:"[backspace]", 9:"[tab]", 13:"[enter]", 25:"[tab]", 27:"[esc]", 33:"[pgup]", 34:"[pgdn]", 35:"[end]", 36:"[home]", 37:"[aleft]", 38:"[aup]", 39:"[aright]", 40:"[adown]", 45:"[ins]", 46:"[del]", 113:"[f2]"}, controlKeysOpera:{67:"[ctrl-c]", 83:"[ctrl-s]", 86:"[ctrl-v]", 88:"[ctrl-x]", 90:"[ctrl-z]"}, specialKeysSafari:{8:"[backspace]", 9:"[tab]", 13:"[enter]", 25:"[tab]", 27:"[esc]", 63232:"[aup]", 63233:"[adown]", 63234:"[aleft]", 
63235:"[aright]", 63272:"[del]", 63273:"[home]", 63275:"[end]", 63276:"[pgup]", 63277:"[pgdn]", 63237:"[f2]"}, controlKeysSafari:{99:"[ctrl-c]", 115:"[ctrl-s]", 118:"[ctrl-v]", 120:"[ctrl-x]", 122:"[ctrl-z]"}, ignoreKeysSafari:{63236:"[f1]", 63238:"[f3]", 63239:"[f4]", 63240:"[f5]", 63241:"[f6]", 63242:"[f7]", 63243:"[f8]", 63244:"[f9]", 63245:"[f10]", 63246:"[f11]", 63247:"[f12]", 63289:"[numlock]"}, specialKeysFirefox:{8:"[backspace]", 9:"[tab]", 13:"[enter]", 25:"[tab]", 27:"[esc]", 33:"[pgup]", 
34:"[pgdn]", 35:"[end]", 36:"[home]", 37:"[aleft]", 38:"[aup]", 39:"[aright]", 40:"[adown]", 45:"[ins]", 46:"[del]", 113:"[f2]"}, controlKeysFirefox:{99:"[ctrl-c]", 115:"[ctrl-s]", 118:"[ctrl-v]", 120:"[ctrl-x]", 122:"[ctrl-z]"}, ignoreKeysFirefox:{16:"[shift]", 17:"[ctrl]", 18:"[alt]", 20:"[capslock]", 19:"[pause]", 44:"[printscreen]", 91:"[windows]", 92:"[windows]", 112:"[f1]", 114:"[f3]", 115:"[f4]", 116:"[f5]", 117:"[f6]", 118:"[f7]", 119:"[f8]", 120:"[f9]", 121:"[f10]", 122:"[f11]", 123:"[f12]", 
144:"[numlock]", 145:"[scrolllock]", 224:"[cmd]"}};
SocialCalc.Keyboard = {areListener:!1, focusTable:null, passThru:null, didProcessKey:!1, statusFromProcessKey:!1, repeatingKeyPress:!1, chForProcessKey:""};
SocialCalc.KeyboardSetFocus = function(a) {
  SocialCalc.Keyboard.focusTable = a;
  SocialCalc.Keyboard.areListener || (document.onkeydown = SocialCalc.ProcessKeyDown, document.onkeypress = SocialCalc.ProcessKeyPress, SocialCalc.Keyboard.areListener = !0);
  SocialCalc.Keyboard.passThru && (SocialCalc.Keyboard.passThru.blur && SocialCalc.Keyboard.passThru.blur(), SocialCalc.Keyboard.passThru = null);
  window.focus();
};
SocialCalc.KeyboardFocus = function() {
  SocialCalc.Keyboard.passThru = null;
  window.focus();
};
SocialCalc.ProcessKeyDown = function(a) {
  var b = SocialCalc.keyboardTables;
  b.didProcessKey = !1;
  b.statusFromProcessKey = !1;
  b.repeatingKeyPress = !1;
  var c = "", d = !0;
  if (!SocialCalc._app && !SocialCalc.Keyboard.passThru) {
    a = a || window.event;
    if (void 0 == a.which) {
      c = b.specialKeysCommon[a.keyCode];
      if (!c && (a.ctrlKey && (c = b.controlKeysIE[a.keyCode]), !c)) {
        return!0;
      }
      d = SocialCalc.ProcessKey(c, a);
      d || (a.preventDefault && a.preventDefault(), a.returnValue = !1);
    } else {
      c = b.specialKeysCommon[a.keyCode];
      if (!c) {
        if (a.ctrlKey || a.metaKey) {
          c = b.controlKeysIE[a.keyCode];
        }
        if (!c) {
          return!0;
        }
      }
      d = SocialCalc.ProcessKey(c, a);
      b.didProcessKey = !0;
      b.statusFromProcessKey = d;
      b.chForProcessKey = c;
    }
    return d;
  }
};
SocialCalc.ProcessKeyPress = function(a) {
  var b = SocialCalc.keyboardTables, c = "";
  a = a || window.event;
  if (!SocialCalc._app && !SocialCalc.Keyboard.passThru) {
    if (b.didProcessKey) {
      if (b.repeatingKeyPress) {
        return SocialCalc.ProcessKey(b.chForProcessKey, a);
      }
      b.repeatingKeyPress = !0;
      return b.statusFromProcessKey;
    }
    if (void 0 == a.which) {
      c = String.fromCharCode(a.keyCode);
    } else {
      if (!a.which) {
        return!1;
      }
      if (void 0 == a.charCode) {
        if (0 != a.which) {
          if (32 > a.which || 144 == a.which) {
            if (c = b.specialKeysOpera[a.which]) {
              return!0;
            }
          } else {
            c = a.ctrlKey ? b.controlKeysOpera[a.keyCode] : String.fromCharCode(a.which);
          }
        } else {
          return!0;
        }
      } else {
        if (0 == a.keyCode && 0 == a.charCode) {
          return;
        }
        if (a.keyCode == a.charCode) {
          if (c = b.specialKeysSafari[a.keyCode], !c) {
            if (b.ignoreKeysSafari[a.keyCode]) {
              return!0;
            }
            c = a.metaKey ? b.controlKeysSafari[a.keyCode] : String.fromCharCode(a.which);
          }
        } else {
          if (b.specialKeysFirefox[a.keyCode]) {
            return!0;
          }
          c = String.fromCharCode(a.which);
          if (a.ctrlKey || a.metaKey) {
            c = b.controlKeysFirefox[a.which];
          }
        }
      }
    }
    b = SocialCalc.ProcessKey(c, a);
    b || (a.preventDefault && a.preventDefault(), a.returnValue = !1);
    return b;
  }
};
SocialCalc.ProcessKey = function(a, b) {
  var c = SocialCalc.Keyboard.focusTable;
  return c ? c.EditorProcessKey(a, b) : !0;
};
SocialCalc || (SocialCalc = {});
SocialCalc.FormatNumber = {};
SocialCalc.FormatNumber.format_definitions = {};
SocialCalc.FormatNumber.separatorchar = ",";
SocialCalc.FormatNumber.decimalchar = ".";
SocialCalc.FormatNumber.daynames = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");
SocialCalc.FormatNumber.daynames3 = "Sun Mon Tue Wed Thu Fri Sat".split(" ");
SocialCalc.FormatNumber.monthnames3 = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
SocialCalc.FormatNumber.monthnames = "January February March April May June July August September October November December".split(" ");
SocialCalc.FormatNumber.allowedcolors = {BLACK:"#000000", BLUE:"#0000FF", CYAN:"#00FFFF", GREEN:"#00FF00", MAGENTA:"#FF00FF", RED:"#FF0000", WHITE:"#FFFFFF", YELLOW:"#FFFF00"};
SocialCalc.FormatNumber.alloweddates = {H:"h]", M:"m]", MM:"mm]", S:"s]", SS:"ss]"};
SocialCalc.FormatNumber.commands = {copy:1, color:2, integer_placeholder:3, fraction_placeholder:4, decimal:5, currency:6, general:7, separator:8, date:9, comparison:10, section:11, style:12};
SocialCalc.FormatNumber.datevalues = {julian_offset:2415019, seconds_in_a_day:86400, seconds_in_an_hour:3600};
SocialCalc.FormatNumber.formatNumberWithFormat = function(a, b, c) {
  c = SocialCalc.Constants;
  var d = SocialCalc.FormatNumber, e, f, g, l, h, p, q, w, v, s, t, x = "", m, r, u, y, z, A, C, J, O, F, K;
  if ("string" == typeof a && !a.length) {
    return "";
  }
  K = a - 0;
  if (!isFinite(K)) {
    return "string" == typeof a ? d.formatTextWithFormat(a, b) : "NaN";
  }
  a = K;
  var I = 0 > K ? 1 : 0;
  I && (K = -K);
  u = 0 == K ? 1 : 0;
  d.parse_format_string(d.format_definitions, b);
  b = d.format_definitions[b];
  if (!b) {
    throw "Format not parsed error!";
  }
  m = b.sectioninfo.length - 1;
  if (b.hascomparison) {
    for (u = t = m = 0;;u++) {
      e = b.operators[u];
      f = b.operands[u];
      if (!e) {
        t && (b = "General", d.parse_format_string(d.format_definitions, b), b = d.format_definitions[b], m = 0);
        break;
      }
      if (e == d.commands.section) {
        if (!t) {
          break;
        }
        t = 0;
        m++;
      } else {
        if (e == d.commands.comparison) {
          t = f.indexOf(":");
          r = f.substring(0, t);
          f = f.substring(t + 1) - 0;
          if ("<" == r && a < f || "<=" == r && a <= f || "=" == r && a == f || "<>" == r && a != f || ">=" == r && a >= f || ">" == r && a > f) {
            break;
          }
          t = 1;
        }
      }
    }
  } else {
    if (0 < m) {
      if (1 == m) {
        I ? (I = 0, m = 1) : m = 0;
      } else {
        if (2 == m || 3 == m) {
          I ? (I = 0, m = 1) : m = u ? 2 : 0;
        }
      }
    }
  }
  m = b.sectioninfo[m];
  if (0 < m.commas) {
    for (t = 0;t < m.commas;t++) {
      K /= 1E3;
    }
  }
  if (0 < m.percent) {
    for (t = 0;t < m.percent;t++) {
      K *= 100;
    }
  }
  f = 1;
  for (t = 0;t < m.fractiondigits;t++) {
    f *= 10;
  }
  u = Math.floor(K * f + 0.5);
  u /= f;
  if ("number" != typeof u || !isFinite(u)) {
    return "NaN";
  }
  f = u + "";
  0 == u && (m.fractiondigits || m.integerdigits) && (I = 0);
  if (0 <= f.indexOf("e")) {
    return a + "";
  }
  f = f.match(/^\+{0,1}(\d*)(?:\.(\d*)){0,1}$/);
  if (!f) {
    return "NaN";
  }
  (u = f[1]) && "0" != u || (u = "");
  (r = f[2]) || (r = "");
  if (m.hasdate) {
    if (0 > a) {
      return "??-???-??&nbsp;??:??:??";
    }
    g = (a - Math.floor(a)) * d.datevalues.seconds_in_a_day;
    l = a * d.datevalues.seconds_in_a_day;
    h = Math.floor(g / d.datevalues.seconds_in_an_hour);
    q = Math.floor(l / d.datevalues.seconds_in_an_hour);
    g -= h * d.datevalues.seconds_in_an_hour;
    p = Math.floor(g / 60);
    w = Math.floor(l / 60);
    f = 1;
    for (t = 0;t < m.fractiondigits;t++) {
      f *= 10;
    }
    g = Math.floor((g - 60 * p) * f + 0.5);
    g /= f;
    l = Math.floor(l * f + 0.5);
    l /= f;
    60 <= g && (g = 0, p++, w++, 60 <= p && (p = 0, h++, q++, 24 <= h && (h = 0, a++)));
    r = g - Math.floor(g) + "";
    r = r.substring(2);
    s = SocialCalc.FormatNumber.convert_date_julian_to_gregorian(Math.floor(a + d.datevalues.julian_offset));
    t = 0;
    for (mspos = m.sectionstart;;mspos++) {
      e = b.operators[mspos];
      f = b.operands[mspos];
      if (!e) {
        break;
      }
      if (e == d.commands.section) {
        break;
      }
      e == d.commands.date ? ("am/pm" != f.toLowerCase() && "a/p" != f.toLowerCase() || v || (12 <= h ? (h -= 12, v = "a/p" == f.toLowerCase() ? c.s_FormatNumber_pm1 : c.s_FormatNumber_pm) : v = "a/p" == f.toLowerCase() ? c.s_FormatNumber_am1 : c.s_FormatNumber_am, 0 > f.indexOf(v) && (v = v.toLowerCase())), !t || "m" != f && "mm" != f || (b.operands[mspos] += "in"), t = "h" == f.charAt(0) ? 1 : 0) : e != d.commands.copy && (t = 0);
    }
    t = 0;
    for (--mspos;;mspos--) {
      e = b.operators[mspos];
      f = b.operands[mspos];
      if (!e) {
        break;
      }
      if (e == d.commands.section) {
        break;
      }
      e == d.commands.date ? (!t || "m" != f && "mm" != f || (b.operands[mspos] += "in"), t = "ss" == f ? 1 : 0) : e != d.commands.copy && (t = 0);
    }
  }
  A = z = y = 0;
  J = C = "";
  O = c.FormatNumber_separatorchar;
  0 <= O.indexOf(" ") && (O = O.replace(/ /g, "&nbsp;"));
  F = c.FormatNumber_decimalchar;
  0 <= F.indexOf(" ") && (F = F.replace(/ /g, "&nbsp;"));
  for (t = m.sectionstart;e = b.operators[t];) {
    if (f = b.operands[t++], e == d.commands.copy) {
      x += f;
    } else {
      if (e == d.commands.color) {
        C = f;
      } else {
        if (e == d.commands.style) {
          J = f;
        } else {
          if (e == d.commands.integer_placeholder) {
            I && (x += "-", I = 0);
            y++;
            if (1 == y && u.length > m.integerdigits) {
              for (;z < u.length - m.integerdigits;z++) {
                x += u.charAt(z), m.thousandssep && (e = u.length - z - 1, 2 < e && 0 == e % 3 && (x += O));
              }
            }
            if (u.length < m.integerdigits && y <= m.integerdigits - u.length) {
              if ("0" == f || "?" == f) {
                x += "0" == f ? "0" : "&nbsp;", m.thousandssep && (e = m.integerdigits - y, 2 < e && 0 == e % 3 && (x += O));
              }
            } else {
              x += u.charAt(z), m.thousandssep && (e = u.length - z - 1, 2 < e && 0 == e % 3 && (x += O)), z++;
            }
          } else {
            if (e == d.commands.fraction_placeholder) {
              if (A >= r.length) {
                if ("0" == f || "?" == f) {
                  x += "0" == f ? "0" : "&nbsp;";
                }
              } else {
                x += r.charAt(A);
              }
              A++;
            } else {
              if (e == d.commands.decimal) {
                I && (x += "-", I = 0), x += F;
              } else {
                if (e == d.commands.currency) {
                  I && (x += "-", I = 0), x += f;
                } else {
                  if (e == d.commands.general) {
                    if (0 != K && (f = Math.floor(Math.LOG10E * Math.log(K)), f = Math.pow(10, 13 - f), K = Math.floor(f * K + 0.5) / f, !isFinite(K))) {
                      return "NaN";
                    }
                    I && (x += "-");
                    f = K + "";
                    if (0 <= f.indexOf("e")) {
                      x += f;
                    } else {
                      f = f.match(/^\+{0,1}(\d*)(?:\.(\d*)){0,1}$/);
                      (u = f[1]) && "0" != u || (u = "");
                      (r = f[2]) || (r = "");
                      A = z = 0;
                      if (u.length) {
                        for (;z < u.length;z++) {
                          x += u.charAt(z), m.thousandssep && (e = u.length - z - 1, 2 < e && 0 == e % 3 && (x += O));
                        }
                      } else {
                        x += "0";
                      }
                      if (r.length) {
                        for (x += F;A < r.length;A++) {
                          x += r.charAt(A);
                        }
                      }
                    }
                  } else {
                    if (e == d.commands.date) {
                      f = f.toLowerCase(), "y" == f || "yy" == f ? x += (s.year + "").substring(2) : "yyyy" == f ? x += s.year + "" : "d" == f ? x += s.day + "" : "dd" == f ? (f = 1E3 + s.day, x += (f + "").substr(2)) : "ddd" == f ? (f = Math.floor(a + 6) % 7, x += c.s_FormatNumber_daynames3[f]) : "dddd" == f ? (f = Math.floor(a + 6) % 7, x += c.s_FormatNumber_daynames[f]) : "m" == f ? x += s.month + "" : "mm" == f ? (f = 1E3 + s.month, x += (f + "").substr(2)) : "mmm" == f ? x += c.s_FormatNumber_monthnames3[s.month - 
                      1] : "mmmm" == f ? x += c.s_FormatNumber_monthnames[s.month - 1] : "mmmmm" == f ? x += c.s_FormatNumber_monthnames[s.month - 1].charAt(0) : "h" == f ? x += h + "" : "h]" == f ? x += q + "" : "mmin" == f ? (f = 1E3 + p + "", x += f.substr(2)) : "mm]" == f ? 100 > w ? (f = 1E3 + w + "", x += f.substr(2)) : x += w + "" : "min" == f ? x += p + "" : "m]" == f ? x += w + "" : "hh" == f ? (f = 1E3 + h + "", x += f.substr(2)) : "s" == f ? (f = Math.floor(g), x += f + "") : "ss" == f ? 
                      (f = 1E3 + Math.floor(g) + "", x += f.substr(2)) : "am/pm" == f || "a/p" == f ? x += v : "ss]" == f && (100 > l ? (f = 1E3 + Math.floor(l) + "", x += f.substr(2)) : (f = Math.floor(l), x += f + ""));
                    } else {
                      if (e == d.commands.section) {
                        break;
                      } else {
                        e != d.commands.comparison && (x += "!! Parse error !!");
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  C && (x = '<span style="color:' + C + ';">' + x + "</span>");
  J && (x = '<span style="' + J + ';">' + x + "</span>");
  return x;
};
SocialCalc.FormatNumber.formatTextWithFormat = function(a, b) {
  var c = SocialCalc.FormatNumber, d = a + "", e = "", f, g, l = "", h = "";
  c.parse_format_string(c.format_definitions, b);
  thisformat = c.format_definitions[b];
  if (!thisformat) {
    throw "Format not parsed error!";
  }
  f = thisformat.sectioninfo.length - 1;
  if (0 == f) {
    f = 0;
  } else {
    if (3 == f) {
      f = 3;
    } else {
      return d;
    }
  }
  for (f = thisformat.sectioninfo[f].sectionstart;op = thisformat.operators[f];) {
    g = thisformat.operands[f++], op == c.commands.copy ? e = "@" == g ? e + d : e + g.replace(/ /g, "&nbsp;") : op == c.commands.color ? l = g : op == c.commands.style && (h = g);
  }
  l && (e = '<span style="color:' + l + ';">' + e + "</span>");
  h && (e = '<span style="' + h + ';">' + e + "</span>");
  return e;
};
SocialCalc.FormatNumber.parse_format_string = function(a, b) {
  var c = SocialCalc.FormatNumber, d, e, f = 1, g, l, h, p, q, w, v, s, t, x, m, r, u;
  if (!a[b]) {
    d = {operators:[], operands:[], sectioninfo:[{}]};
    a[b] = d;
    e = 0;
    sectioninfo = d.sectioninfo[e];
    sectioninfo.sectionstart = 0;
    sectioninfo.integerdigits = 0;
    sectioninfo.fractiondigits = 0;
    sectioninfo.commas = 0;
    for (u = sectioninfo.percent = 0;u < b.length;u++) {
      if (t = b.charAt(u), q) {
        '"' == t ? (q = 0, d.operators.push(c.commands.copy), d.operands.push(w)) : w += t;
      } else {
        if (v) {
          "]" == t ? (v = 0, t = SocialCalc.FormatNumber.parse_format_bracket(s), t.operator == c.commands.separator ? sectioninfo.thousandssep = 1 : (t.operator == c.commands.date && (sectioninfo.hasdate = 1), t.operator == c.commands.comparison && (d.hascomparison = 1), d.operators.push(t.operator), d.operands.push(t.operand))) : s += t;
        } else {
          if (l) {
            d.operators.push(c.commands.copy), d.operands.push(t), l = !1;
          } else {
            if (h) {
              d.operators.push(c.commands.copy), d.operands.push(t + t + t + t + t), h = !1;
            } else {
              if (p) {
                d.operators.push(c.commands.copy), d.operands.push("&nbsp;"), p = !1;
              } else {
                if (x) {
                  if ("general".charAt(x) == t.toLowerCase()) {
                    x++;
                    7 == x && (d.operators.push(c.commands.general), d.operands.push(t), x = 0);
                    continue;
                  }
                  x = 0;
                }
                if (r) {
                  if (r.charAt(0) == t) {
                    r += t;
                    continue;
                  }
                  d.operators.push(c.commands.date);
                  d.operands.push(r);
                  sectioninfo.hasdate = 1;
                  r = "";
                }
                if (m) {
                  if (m += t, t = m.toLowerCase(), t != "am/pm".substring(0, t.length) && t != "a/p".substring(0, t.length)) {
                    ampstr = "";
                  } else {
                    if ("am/pm" == t || "a/p" == t) {
                      d.operators.push(c.commands.date), d.operands.push(m), m = "";
                    }
                  }
                } else {
                  "#" == t || "0" == t || "?" == t ? (f ? (sectioninfo.integerdigits++, sectioninfo.commas && (sectioninfo.thousandssep = 1, sectioninfo.commas = 0), g = 1, d.operators.push(c.commands.integer_placeholder)) : (sectioninfo.fractiondigits++, g = 1, d.operators.push(c.commands.fraction_placeholder)), d.operands.push(t)) : "." == t ? (g = 0, d.operators.push(c.commands.decimal), d.operands.push(t), f = 0) : "$" == t ? (g = 0, d.operators.push(c.commands.currency), d.operands.push(t)) : 
                  "," == t ? g ? sectioninfo.commas++ : (d.operators.push(c.commands.copy), d.operands.push(t)) : "%" == t ? (g = 0, sectioninfo.percent++, d.operators.push(c.commands.copy), d.operands.push(t)) : '"' == t ? (g = 0, q = 1, w = "") : "[" == t ? (g = 0, v = 1, s = "") : "\\" == t ? (l = 1, g = 0) : "*" == t ? (h = 1, g = 0) : "_" == t ? (p = 1, g = 0) : ";" == t ? (e++, d.sectioninfo[e] = {}, sectioninfo = d.sectioninfo[e], sectioninfo.sectionstart = 1 + d.operators.length, sectioninfo.integerdigits = 
                  0, sectioninfo.fractiondigits = 0, sectioninfo.commas = 0, sectioninfo.percent = 0, f = 1, g = 0, d.operators.push(c.commands.section), d.operands.push(t)) : "g" == t.toLowerCase() ? (x = 1, g = 0) : "a" == t.toLowerCase() ? (m = t, g = 0) : 0 <= "dmyhHs".indexOf(t) ? r = t : (g = 0, d.operators.push(c.commands.copy), d.operands.push(t));
                }
              }
            }
          }
        }
      }
    }
    r && (d.operators.push(c.commands.date), d.operands.push(r), sectioninfo.hasdate = 1);
  }
};
SocialCalc.FormatNumber.parse_format_bracket = function(a) {
  var b = SocialCalc.FormatNumber, c = SocialCalc.Constants, d = {}, e;
  "$" == a.charAt(0) ? (d.operator = b.commands.currency, e = a.match(/^\$(.+?)(\-.+?){0,1}$/), d.operand = e ? e[1] || c.FormatNumber_defaultCurrency || "$" : a.substring(1) || c.FormatNumber_defaultCurrency || "$") : "?$" == a ? (d.operator = b.commands.currency, d.operand = "[?$]") : b.allowedcolors[a.toUpperCase()] ? (d.operator = b.commands.color, d.operand = b.allowedcolors[a.toUpperCase()]) : (e = a.match(/^style=([^"]*)$/)) ? (d.operator = b.commands.style, d.operand = e[1]) : "," == a ? 
  (d.operator = b.commands.separator, d.operand = a) : b.alloweddates[a.toUpperCase()] ? (d.operator = b.commands.date, d.operand = b.alloweddates[a.toUpperCase()]) : a.match(/^[<>=]/) ? (e = a.match(/^([<>=]+)(.+)$/), d.operator = b.commands.comparison, d.operand = e[1] + ":" + e[2]) : (d.operator = b.commands.copy, d.operand = "[" + a + "]");
  return d;
};
SocialCalc.FormatNumber.convert_date_gregorian_to_julian = function(a, b, c) {
  c = c - 32075 + SocialCalc.intFunc(1461 * (a + 4800 + SocialCalc.intFunc((b - 14) / 12)) / 4);
  c += SocialCalc.intFunc(367 * (b - 2 - 12 * SocialCalc.intFunc((b - 14) / 12)) / 12);
  return c -= SocialCalc.intFunc(3 * SocialCalc.intFunc((a + 4900 + SocialCalc.intFunc((b - 14) / 12)) / 100) / 4);
};
SocialCalc.FormatNumber.convert_date_julian_to_gregorian = function(a) {
  var b, c, d, e;
  a += 68569;
  b = Math.floor(4 * a / 146097);
  a -= Math.floor((146097 * b + 3) / 4);
  c = Math.floor(4E3 * (a + 1) / 1461001);
  a = a - Math.floor(1461 * c / 4) + 31;
  d = Math.floor(80 * a / 2447);
  e = a - Math.floor(2447 * d / 80);
  a = Math.floor(d / 11);
  return{year:100 * (b - 49) + c + a, month:d + 2 - 12 * a, day:e};
};
SocialCalc.intFunc = function(a) {
  return 0 > a ? -Math.floor(-a) : Math.floor(a);
};
SocialCalc || (SocialCalc = {});
SocialCalc.Formula = {};
SocialCalc.TriggerIoAction = {};
SocialCalc.Formula.ParseState = {num:1, alpha:2, coord:3, string:4, stringquote:5, numexp1:6, numexp2:7, alphanumeric:8, specialvalue:9};
SocialCalc.Formula.TokenType = {num:1, coord:2, op:3, name:4, error:5, string:6, space:7};
SocialCalc.Formula.CharClass = {num:1, numstart:2, op:3, eof:4, alpha:5, incoord:6, error:7, quote:8, space:9, specialstart:10};
SocialCalc.Formula.CharClassTable = {" ":9, "!":3, '"':8, "'":8, "#":10, $:6, "%":3, "&":3, "(":3, ")":3, "*":3, "+":3, ",":3, "-":3, ".":2, "/":3, 0:1, 1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, ":":3, "<":3, "=":3, ">":3, A:5, B:5, C:5, D:5, E:5, F:5, G:5, H:5, I:5, J:5, K:5, L:5, M:5, N:5, O:5, P:5, Q:5, R:5, S:5, T:5, U:5, V:5, W:5, X:5, Y:5, Z:5, "^":3, _:5, a:5, b:5, c:5, d:5, e:5, f:5, g:5, h:5, i:5, j:5, k:5, l:5, m:5, n:5, o:5, p:5, q:5, r:5, s:5, t:5, u:5, v:5, w:5, x:5, y:5, z:5};
SocialCalc.Formula.UpperCaseTable = {a:"A", b:"B", c:"C", d:"D", e:"E", f:"F", g:"G", h:"H", i:"I", j:"J", k:"K", l:"L", m:"M", n:"N", o:"O", p:"P", q:"Q", r:"R", s:"S", t:"T", u:"U", v:"V", w:"W", x:"X", y:"Y", z:"Z", A:"A", B:"B", C:"C", D:"D", E:"E", F:"F", G:"G", H:"H", I:"I", J:"J", K:"K", L:"L", M:"M", N:"N", O:"O", P:"P", Q:"Q", R:"R", S:"S", T:"T", U:"U", V:"V", W:"W", X:"X", Y:"Y", Z:"Z"};
SocialCalc.Formula.SpecialConstants = {"#NULL!":"0,e#NULL!", "#NUM!":"0,e#NUM!", "#DIV/0!":"0,e#DIV/0!", "#VALUE!":"0,e#VALUE!", "#REF!":"0,e#REF!", "#NAME?":"0,e#NAME?"};
SocialCalc.Formula.TokenPrecedence = {"!":1, ":":2, ",":2, M:-3, P:-3, "%":4, "^":5, "*":6, "/":6, "+":7, "-":7, "&":8, "<":9, ">":9, G:9, L:9, N:9};
SocialCalc.Formula.TokenOpExpansion = {G:">=", L:"<=", M:"-", N:"<>", P:"+"};
SocialCalc.Formula.TypeLookupTable = {unaryminus:{"n*":"|n*:1|", "e*":"|e*:1|", "t*":"|t*:e#VALUE!|", b:"|b:n|"}, unaryplus:{"n*":"|n*:1|", "e*":"|e*:1|", "t*":"|t*:e#VALUE!|", b:"|b:n|"}, unarypercent:{"n*":"|n:n%|n*:n|", "e*":"|e*:1|", "t*":"|t*:e#VALUE!|", b:"|b:n|"}, plus:{"n%":"|n%:n%|nd:n|nt:n|ndt:n|n$:n|n:n|n*:n|b:n|e*:2|t*:e#VALUE!|", nd:"|n%:n|nd:nd|nt:ndt|ndt:ndt|n$:n|n:nd|n*:n|b:n|e*:2|t*:e#VALUE!|", nt:"|n%:n|nd:ndt|nt:nt|ndt:ndt|n$:n|n:nt|n*:n|b:n|e*:2|t*:e#VALUE!|", ndt:"|n%:n|nd:ndt|nt:ndt|ndt:ndt|n$:n|n:ndt|n*:n|b:n|e*:2|t*:e#VALUE!|", 
n$:"|n%:n|nd:n|nt:n|ndt:n|n$:n$|n:n$|n*:n|b:n|e*:2|t*:e#VALUE!|", nl:"|n%:n|nd:n|nt:n|ndt:n|n$:n|n:n|n*:n|b:n|e*:2|t*:e#VALUE!|", n:"|n%:n|nd:nd|nt:nt|ndt:ndt|n$:n$|n:n|n*:n|b:n|e*:2|t*:e#VALUE!|", b:"|n%:n%|nd:nd|nt:nt|ndt:ndt|n$:n$|n:n|n*:n|b:n|e*:2|t*:e#VALUE!|", "t*":"|ni:1|n*:e#VALUE!|t*:e#VALUE!|b:e#VALUE!|e*:2|", "n*":"|ni:1|e*:2|", "e*":"|e*:1|n*:1|t*:1|b:1|"}, concat:{t:"|t:t|th:th|tw:tw|tl:t|tr:tr|t*:2|e*:2|", th:"|t:th|th:th|tw:t|tl:th|tr:t|t*:t|e*:2|", tw:"|t:tw|th:t|tw:tw|tl:tw|tr:tw|t*:t|e*:2|", 
tl:"|t:tl|th:th|tw:tw|tl:tl|tr:tr|t*:t|e*:2|", "t*":"|t*:t|e*:2|", "e*":"|e*:1|n*:1|t*:1|"}, oneargnumeric:{"n*":"|n*:n|", "e*":"|e*:1|", "t*":"|t*:e#VALUE!|", b:"|b:n|"}, twoargnumeric:{"n*":"|n*:n|t*:e#VALUE!|e*:2|", "e*":"|e*:1|n*:1|t*:1|", "t*":"|t*:e#VALUE!|n*:e#VALUE!|e*:2|"}, propagateerror:{"n*":"|n*:2|e*:2|", "e*":"|e*:2|", "t*":"|t*:2|e*:2|", b:"|b:2|e*:2|"}};
SocialCalc.Formula.ParseFormulaIntoTokens = function(a) {
  var b, c, d, e, f, g;
  b = SocialCalc.Formula;
  var l = SocialCalc.Constants, h = b.ParseState, p = b.TokenType, q = b.CharClass, w = b.CharClassTable, v = b.UpperCaseTable, s = b.ParsePushToken, t = /^\$?[A-Z]{1,2}\$?[1-9]\d*$/i, x = [], m = "";
  f = 0;
  e = !1;
  for (b = 0;b <= a.length;b++) {
    b < a.length ? (c = a.charAt(b), d = w[c]) : (c = "", d = q.eof), f == h.num && (d == q.num ? m += c : d != q.numstart || e ? "E" == c || "e" == c ? (m += c, e = !1, f = h.numexp1) : (s(x, m, p.num, 0), e = !1, f = 0) : (e = !0, m += c)), f == h.numexp1 && (d == h.num ? f = h.numexp2 : "+" != c && "-" != c || "E" != v[m.charAt(m.length - 1)] ? "E" != c && "e" != c && (s(x, l.s_parseerrexponent, p.error, 0), f = 0) : m += c), f == h.numexp2 && (d == q.num ? m += c : (s(x, m, p.num, 0), f = 0)), 
    f == h.alpha && (d == q.num ? f = h.coord : d == q.alpha || "." == c ? m += c : d == q.incoord ? f = h.coord : (d == q.op || d == q.numstart || d == q.space || d == q.eof ? s(x, m.toUpperCase(), p.name, 0) : s(x, l.s_parseerrchar, p.error, 0), f = 0)), f == h.coord && (d == q.num ? m += c : d == q.incoord ? m += c : d == q.alpha ? f = h.alphanumeric : (d == q.op || d == q.numstart || d == q.eof || d == q.space ? (f = t.test(m) ? p.coord : p.name, s(x, m.toUpperCase(), f, 0)) : s(x, l.s_parseerrchar, 
    p.error, 0), f = 0)), f == h.alphanumeric && (d == q.num || d == q.alpha ? m += c : (d == q.op || d == q.numstart || d == q.space || d == q.eof ? s(x, m.toUpperCase(), p.name, 0) : s(x, l.s_parseerrchar, p.error, 0), f = 0)), f == h.string ? d == q.quote ? f = h.stringquote : d == q.eof ? (s(x, l.s_parseerrstring, p.error, 0), f = 0) : m += c : f == h.stringquote ? d == q.quote ? (m += c, f = h.string) : (s(x, m, p.string, 0), f = 0) : f == h.specialvalue && ("!" == m.charAt(m.length - 1) ? (s(x, 
    m, p.name, 0), f = 0) : d == q.eof ? (s(x, l.s_parseerrspecialvalue, p.error, 0), f = 0) : m += c), 0 == f && (d == q.num ? (m = c, f = h.num) : d == q.numstart ? (m = c, e = !0, f = h.num) : d == q.alpha || d == q.incoord ? (m = c, f = h.alpha) : d == q.specialstart ? (m = c, f = h.specialvalue) : d == q.op ? (m = c, 0 < x.length ? (f = x[x.length - 1], d = f.type, g = f.text, d != q.op || "<" != g && ">" != g || (m = g + m, x.pop(), 0 < x.length ? (f = x[x.length - 1], d = f.type, g = f.text) : 
    (d = q.eof, g = "EOF"))) : (d = q.eof, g = "EOF"), f = p.op, 0 == x.length || d == q.op && ")" != g && "%" != g ? "-" == m ? c = m = "M" : "+" == m ? c = m = "P" : ")" == m && "(" == g || "(" == m || (f = p.error, m = l.s_parseerrtwoops) : 1 < m.length && (">=" == m ? c = m = "G" : "<=" == m ? c = m = "L" : "<>" == m ? c = m = "N" : (f = p.error, m = l.s_parseerrtwoops)), s(x, m, f, c), f = 0) : d == q.quote ? (m = "", f = h.string) : d != q.space && d != q.eof && s(x, l.s_parseerrchar, p.error, 
    0));
  }
  return x;
};
SocialCalc.Formula.ParsePushToken = function(a, b, c, d) {
  a.push({text:b, type:c, opcode:d});
};
SocialCalc.Formula.evaluate_parsed_formula = function(a, b, c) {
  var d = SocialCalc.Formula, e;
  e = d.ConvertInfixToPolish(a);
  return d.EvaluatePolish(a, e, b, c);
};
SocialCalc.Formula.ConvertInfixToPolish = function(a) {
  var b = SocialCalc.Formula, c = SocialCalc.Constants, d = b.TokenType, b = b.TokenPrecedence, e = [], f = [], g = "", l, h, p, q;
  for (l = 0;l < a.length;l++) {
    if (h = a[l], p = h.type, q = h.text, p == d.num || p == d.coord || p == d.string) {
      e.push(l);
    } else {
      if (p == d.name) {
        f.push(l), e.push(-1);
      } else {
        if (p != d.space) {
          if ("," == q) {
            for (;f.length && "(" != a[f[f.length - 1]].text;) {
              e.push(f.pop());
            }
            if (0 == f.length) {
              g = c.s_parseerrmissingopenparen;
              break;
            }
          } else {
            if ("(" == q) {
              f.push(l);
            } else {
              if (")" == q) {
                for (;f.length && "(" != a[f[f.length - 1]].text;) {
                  e.push(f.pop());
                }
                if (0 == f.length) {
                  g = c.s_parseerrcloseparennoopen;
                  break;
                }
                f.pop();
                f.length && a[f[f.length - 1]].type == d.name && e.push(f.pop());
              } else {
                if (p == d.op) {
                  for (f.length && a[f[f.length - 1]].type == d.name && e.push(f.pop());f.length && a[f[f.length - 1]].type == d.op && "(" != a[f[f.length - 1]].text;) {
                    p = b[h.opcode];
                    q = b[a[f[f.length - 1]].opcode];
                    if (0 <= p && p < q) {
                      break;
                    } else {
                      if (0 > p && (p = -p, 0 > q && (q = -q), p <= q)) {
                        break;
                      }
                    }
                    e.push(f.pop());
                  }
                  f.push(l);
                } else {
                  g = p == d.error ? q : "Internal error while processing parsed formula. ";
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
  for (;0 < f.length;) {
    if ("(" == a[f[f.length - 1]].text) {
      g = c.s_parseerrmissingcloseparen;
      break;
    }
    e.push(f.pop());
  }
  return g ? g : e;
};
"undefined" === typeof SocialCalc.debug_log && (SocialCalc.debug_log = []);
SocialCalc.DebugLog = function(a) {
};
SocialCalc.Formula.EvaluatePolish = function(a, b, c, d) {
  var e = SocialCalc.Formula, f = SocialCalc.Constants, g = e.TokenType, l = e.LookupResultType, h = e.TypeLookupTable, p = e.OperandAsNumber, q = e.OperandAsText, w = e.OperandValueAndType, v = e.OperandsAsCoordOnSheet, s = SocialCalc.format_number_for_display || function(a, b, c) {
    return a + "";
  }, t = "", x = {value:"", type:"e#VALUE!", error:f.s_parseerrmissingoperand}, m = [], r = function(a, b) {
    m.push({type:a, value:b});
  }, u, y, z, A, C, J;
  if (!(a.length && b instanceof Array)) {
    return{value:"", type:"e#VALUE!", error:"string" == typeof b ? b : ""};
  }
  var O = [];
  for (u = 0;u < b.length;u++) {
    if (y = b[u], -1 == y) {
      r("start", 0);
    } else {
      if (z = a[y], A = z.type, y = z.text, O.push(z), A == g.num) {
        r("n", y - 0);
      } else {
        if (A == g.coord) {
          r("coord", y);
        } else {
          if (A == g.string) {
            r("t", y);
          } else {
            if (A == g.op) {
              if (0 >= m.length) {
                return x;
              }
              if ("M" == y) {
                z = p(c, m), C = l(z.type, z.type, h.unaryminus), r(C, -z.value);
              } else {
                if ("P" == y) {
                  z = p(c, m), C = l(z.type, z.type, h.unaryplus), r(C, z.value);
                } else {
                  if ("%" == y) {
                    z = p(c, m), C = l(z.type, z.type, h.unarypercent), r(C, 0.01 * z.value);
                  } else {
                    if ("&" == y) {
                      if (1 >= m.length) {
                        return x;
                      }
                      A = q(c, m);
                      z = q(c, m);
                      C = l(z.type, z.type, h.concat);
                      r(C, z.value + A.value);
                    } else {
                      if (":" == y) {
                        if (1 >= m.length) {
                          return x;
                        }
                        z = e.OperandsAsRangeOnSheet(c, m);
                        z.error && (t = t || z.error);
                        r(z.type, z.value);
                      } else {
                        if ("!" == y) {
                          if (1 >= m.length) {
                            return x;
                          }
                          z = v(c, m);
                          z.error && (t = t || z.error);
                          r(z.type, z.value);
                        } else {
                          if ("<" == y || "L" == y || "=" == y || "G" == y || ">" == y || "N" == y) {
                            if (1 >= m.length) {
                              t = f.s_parseerrmissingoperand;
                              break;
                            }
                            A = w(c, m);
                            z = w(c, m);
                            "n" == z.type.charAt(0) && "n" == A.type.charAt(0) ? (C = 0, "<" == y ? C = z.value < A.value ? 1 : 0 : "L" == y ? C = z.value <= A.value ? 1 : 0 : "=" == y ? C = z.value == A.value ? 1 : 0 : "G" == y ? C = z.value >= A.value ? 1 : 0 : ">" == y ? C = z.value > A.value ? 1 : 0 : "N" == y && (C = z.value != A.value ? 1 : 0), r("nl", C)) : "e" == z.type.charAt(0) ? r(z.type, 0) : "e" == A.type.charAt(0) ? r(A.type, 0) : (C = z.type.charAt(0), J = A.type.charAt(0), "n" == 
                            C ? z.value = s(z.value, "n", "") : "b" == C && (z.value = ""), "n" == J ? A.value = s(A.value, "n", "") : "b" == J && (A.value = ""), C = 0, z.value = z.value.toLowerCase(), A.value = A.value.toLowerCase(), "<" == y ? C = z.value < A.value ? 1 : 0 : "L" == y ? C = z.value <= A.value ? 1 : 0 : "=" == y ? C = z.value == A.value ? 1 : 0 : "G" == y ? C = z.value >= A.value ? 1 : 0 : ">" == y ? C = z.value > A.value ? 1 : 0 : "N" == y && (C = z.value != A.value ? 1 : 0), r("nl", 
                            C));
                          } else {
                            if (1 >= m.length) {
                              t = f.s_parseerrmissingoperand;
                              break;
                            }
                            "+" == y ? (A = w(c, m), z = w(c, m), C = l(z.type, A.type, h.plus), r(C, z.value + A.value)) : (A = p(c, m), z = p(c, m));
                            "-" == y ? (C = l(z.type, A.type, h.plus), r(C, z.value - A.value)) : "*" == y ? (C = l(z.type, A.type, h.plus), r(C, z.value * A.value)) : "/" == y ? 0 != A.value ? r("n", z.value / A.value) : r("e#DIV/0!", 0) : "^" == y && (z.value = Math.pow(z.value, A.value), z.type = "n", isNaN(z.value) && (z.value = 0, z.type = "e#NUM!"), r(z.type, z.value));
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (A == g.name) {
                if (t = e.CalculateFunction(y, m, c, a.coord)) {
                  break;
                }
              } else {
                t = f.s_InternalError + "Unknown token " + A + " (" + y + "). ";
                break;
              }
            }
          }
        }
      }
    }
  }
  value = m[0] ? m[0].value : "";
  C = m[0] ? m[0].type : "";
  "name" == C && (z = SocialCalc.Formula.LookupName(c, value), value = z.value, C = z.type, t = t || z.error);
  "coord" == C && (z = w(c, m), value = z.value, C = z.type, "b" == C && (C = "n", value = 0));
  1 < m.length && !t && (t += f.s_parseerrerrorinformula);
  a = C;
  "e" == C.charAt(0) ? t = t || C.substring(1) || f.s_calcerrerrorvalueinformula : "range" == C && (b = value.match(/^(.*)\|(.*)\|/), c = b[1].indexOf("!"), b[1] = 0 <= c ? b[1].substring(c + 1) + "!" + b[1].substring(0, c).toUpperCase() : b[1].toUpperCase(), value = b[1] + ":" + b[2].toUpperCase(), d || (t = f.s_formularangeresult + " " + value));
  t && "e" != a.charAt(0) && (value = t, a = "e");
  "n" != a.charAt(0) || !isNaN(value) && isFinite(value) || (value = 0, a = "e#NUM!", t = isNaN(value) ? f.s_calcerrnumericnan : f.s_calcerrnumericoverflow);
  return{value:value, type:a, error:t};
};
SocialCalc.Formula.LookupResultType = function(a, b, c) {
  var d, e;
  e = c[a];
  if (!e && (e = c[a.charAt(0) + "*"], !e)) {
    return "e#VALUE! (internal error, missing LookupResultType " + a.charAt(0) + "*)";
  }
  c = e.indexOf("|" + b + ":");
  if (0 <= c) {
    d = e.indexOf("|", c + 1);
    if (0 > d) {
      return "e#VALUE! (internal error, incorrect LookupResultType " + e + ")";
    }
    e = e.substring(c + b.length + 2, d);
    return "1" == e ? a : "2" == e ? b : e;
  }
  c = e.indexOf("|" + b.charAt(0) + "*:");
  if (0 <= c) {
    d = e.indexOf("|", c + 1);
    if (0 > d) {
      return "e#VALUE! (internal error, incorrect LookupResultType " + e + ")";
    }
    e = e.substring(c + 4, d);
    return "1" == e ? a : "2" == e ? b : e;
  }
  return "e#VALUE!";
};
SocialCalc.Formula.TopOfStackValueAndType = function(a, b) {
  var c = SocialCalc.Formula, d = {type:"", value:""}, e = b.length;
  if (!e) {
    return d.error = SocialCalc.Constants.s_InternalError + "no operand on stack", d;
  }
  d.value = b[e - 1].value;
  d.type = b[e - 1].type;
  b.pop();
  "name" == d.type && (d = c.LookupName(a, d.value));
  return d;
};
SocialCalc.Formula.OperandAsNumber = function(a, b) {
  var c, d = SocialCalc.Formula.OperandValueAndType(a, b);
  c = d.type.charAt(0);
  "n" == c ? d.value -= 0 : "b" == c ? (d.type = "n", d.value = 0) : "e" == c ? d.value = 0 : (c = SocialCalc.DetermineValueType ? SocialCalc.DetermineValueType(d.value) : {value:d.value - 0, type:"n"}, "n" == c.type.charAt(0) ? d.value = c.value - 0 : d.value = 0, d.type = c.type);
  return d;
};
SocialCalc.Formula.OperandAsText = function(a, b) {
  var c, d = SocialCalc.Formula.OperandValueAndType(a, b);
  c = d.type.charAt(0);
  "t" != c && ("n" == c ? (d.value = SocialCalc.format_number_for_display ? SocialCalc.format_number_for_display(d.value, d.type, "") : d.value += "", d.type = "t") : "b" == c ? (d.value = "", d.type = "t") : "e" == c ? d.value = "" : (b.value = d.value + "", b.type = "t"));
  return d;
};
SocialCalc.Formula.OperandValueAndType = function(a, b) {
  var c, d, e;
  c = SocialCalc.Formula;
  var f = {type:"", value:""};
  d = b.length;
  if (!d) {
    return f.error = SocialCalc.Constants.s_InternalError + "no operand on stack", f;
  }
  f.value = b[d - 1].value;
  f.type = b[d - 1].type;
  b.pop();
  "name" == f.type && (f = c.LookupName(a, f.value));
  "range" == f.type && (f = c.StepThroughRangeDown(b, f.value));
  if ("coord" == f.type) {
    e = a;
    d = f.value.indexOf("!");
    if (-1 != d) {
      e = c.FindInSheetCache(f.value.substring(d + 1));
      if (null == e) {
        return f.type = "e#REF!", f.error = SocialCalc.Constants.s_sheetunavailable + " " + f.value.substring(d + 1), f.value = 0, f;
      }
      f.value = f.value.substring(0, d);
    }
    e ? (d = e.cells[SocialCalc.Formula.PlainCoord(f.value)]) ? (c = d.valuetype, f.value = d.datavalue) : c = "b" : (c = "e#N/A", f.value = 0);
    f.type = c || "b";
    "b" == f.type && (f.value = 0);
  }
  return f;
};
SocialCalc.Formula.OperandAsCoord = function(a, b) {
  return SocialCalc.Formula.OperandAsType(a, b, "coord");
};
SocialCalc.Formula.OperandAsRange = function(a, b) {
  return SocialCalc.Formula.OperandAsType(a, b, "range");
};
SocialCalc.Formula.OperandAsType = function(a, b, c) {
  var d = {type:"", value:""}, e = b.length;
  d.value = b[e - 1].value;
  d.type = b[e - 1].type;
  b.pop();
  "name" == d.type && (d = SocialCalc.Formula.LookupName(a, d.value));
  d.type != c && (d.value = SocialCalc.Constants.s_calcerrcellrefmissing, d.type = "e#REF!");
  return d;
};
SocialCalc.Formula.OperandsAsCoordOnSheet = function(a, b) {
  var c, d, e, f = {}, g = {};
  e = SocialCalc.Formula;
  c = b.length;
  f.value = b[c - 1].value;
  f.type = b[c - 1].type;
  b.pop();
  c = e.OperandAsSheetName(a, b);
  d = e.FindInSheetCache(c.value);
  if (null == d) {
    return g.type = "e#REF!", g.value = 0, g.error = SocialCalc.Constants.s_sheetunavailable + " " + c.value, g;
  }
  "name" == f.type && (f = e.LookupName(d, f.value));
  g.type = f.type;
  "coord" == f.type ? g.value = f.value + "!" + c.value : "range" == f.type ? (e = f.value.indexOf("|"), d = f.value.indexOf("|", e + 1), g.value = f.value.substring(0, e) + "!" + c.value + "|" + f.value.substring(e + 1, d) + "|") : "e" == f.type.charAt(0) ? g.value = f.value : (g.error = SocialCalc.Constants.s_calcerrcellrefmissing, g.type = "e#REF!", g.value = 0);
  return g;
};
SocialCalc.Formula.OperandsAsRangeOnSheet = function(a, b) {
  var c, d, e, f, g = {}, l = SocialCalc.Formula, h = SocialCalc.Constants;
  c = b.length;
  g.value = b[c - 1].value;
  g.type = b[c - 1].type;
  b.pop();
  c = l.OperandAsCoord(a, b);
  if ("coord" != c.type) {
    return{value:0, type:"e#REF!"};
  }
  d = a;
  e = c.value.indexOf("!");
  if (-1 != e && (f = c.value.indexOf("|", e + 1), 0 > f && (f = c.value.length), d = l.FindInSheetCache(c.value.substring(e + 1, f)), null == d)) {
    return{value:0, type:"e#REF!", errortext:h.s_sheetunavailable + " " + c.value.substring(e + 1, f)};
  }
  "name" == g.type && (g = l.LookupName(d, g.value, "end"));
  return "coord" == g.type ? {value:c.value + "|" + g.value + "|", type:"range"} : {value:h.s_calcerrcellrefmissing, type:"e#REF!"};
};
SocialCalc.Formula.OperandAsSheetName = function(a, b) {
  var c, d = {type:"", value:""};
  c = b.length;
  d.value = b[c - 1].value;
  d.type = b[c - 1].type;
  b.pop();
  if ("name" == d.type) {
    c = SocialCalc.Formula.LookupName(a, d.value);
    if (!c.value) {
      return d;
    }
    d.value = c.value;
    d.type = c.type;
  }
  "coord" == d.type && ((c = a.cells[SocialCalc.Formula.PlainCoord(d.value)]) ? (d.value = c.datavalue, d.type = c.valuetype) : (d.value = "", d.type = "b"));
  "t" != d.type.charAt(0) && (d.value = "", d.error = SocialCalc.Constants.s_calcerrsheetnamemissing);
  return d;
};
SocialCalc.Formula.LookupName = function(a, b, c) {
  var d, e, f = a.names;
  e = {};
  d = !1;
  if (f[b.toUpperCase()]) {
    e.value = f[b.toUpperCase()].definition;
    if ("=" == e.value.charAt(0)) {
      if (!a.checknamecirc) {
        a.checknamecirc = {}, d = !0;
      } else {
        if (a.checknamecirc[b]) {
          return e.type = "e#NAME?", e.error = SocialCalc.Constants.s_circularnameref + ' "' + b + '".', e;
        }
      }
      a.checknamecirc[b] = !0;
      e = SocialCalc.Formula.ParseFormulaIntoTokens(e.value.substring(1));
      e = SocialCalc.Formula.evaluate_parsed_formula(e, a, 1);
      delete a.checknamecirc[b];
      d && delete a.checknamecirc;
      if ("range" != e.type) {
        return e;
      }
    }
    a = e.value.indexOf(":");
    -1 != a ? (e.type = "range", e.value = e.value.substring(0, a) + "|" + e.value.substring(a + 1) + "|") : e.type = "coord";
    e.value = e.value.toUpperCase();
  } else {
    (d = SocialCalc.Formula.SpecialConstants[b.toUpperCase()]) ? (a = d.indexOf(","), e.value = d.substring(0, a) - 0, e.type = d.substring(a + 1)) : /^[a-zA-Z][a-zA-Z]?$/.test(b) ? (e.type = "coord", e.value = b.toUpperCase() + (c ? a.attribs.lastrow : 1)) : (e.value = "", e.type = "e#NAME?", e.error = SocialCalc.Constants.s_calcerrunknownname + ' "' + b + '"');
  }
  return e;
};
SocialCalc.Formula.StepThroughRangeDown = function(a, b) {
  var c, d, e, f, g, l, h, p, q = SocialCalc.Formula;
  f = b.indexOf("|");
  e = b.indexOf("|", f + 1);
  c = b.substring(0, f);
  d = b.substring(f + 1, e);
  e = b.substring(e + 1) - 0;
  f = c.indexOf("!");
  -1 != f ? (g = c.substring(f), c = c.substring(0, f)) : g = "";
  f = d.indexOf("!");
  -1 != f && (d = d.substring(0, f));
  f = q.OrderRangeParts(c, d);
  p = 0;
  for (h = f.r1;h <= f.r2;h++) {
    for (l = f.c1;l <= f.c2;l++) {
      if (p++, p > e) {
        return h == f.r2 && l == f.c2 || q.PushOperand(a, "range", c + g + "|" + d + "|" + p), {value:SocialCalc.crToCoord(l, h) + g, type:"coord"};
      }
    }
  }
};
SocialCalc.Formula.DecodeRangeParts = function(a, b) {
  var c, d, e, f, g = SocialCalc.Formula;
  e = b.indexOf("|");
  f = b.indexOf("|", e + 1);
  c = b.substring(0, e);
  d = b.substring(e + 1, f);
  e = c.indexOf("!");
  -1 != e ? (f = c.substring(e + 1), c = c.substring(0, e)) : f = "";
  e = d.indexOf("!");
  -1 != e && (d = d.substring(0, e));
  e = a;
  if (f && (e = g.FindInSheetCache(f), null == e)) {
    return null;
  }
  c = g.OrderRangeParts(c, d);
  return{sheetdata:e, sheetname:f, col1num:c.c1, ncols:c.c2 - c.c1 + 1, row1num:c.r1, nrows:c.r2 - c.r1 + 1};
};
SocialCalc.Formula.FunctionList || (SocialCalc.Formula.FunctionList = {});
SocialCalc.Formula.FunctionClasses = null;
SocialCalc.Formula.FunctionArgDefs = {};
SocialCalc.Formula.StoreIoEventFormula = function(a, b, c, d, e) {
  var f = [];
  SocialCalc.Formula.Clone(f, c);
  f.reverse();
  if (0 != f.length) {
    "undefined" === typeof d.ioEventTree && (d.ioEventTree = {});
    "undefined" === typeof d.ioParameterList && (d.ioParameterList = {});
    "undefined" === typeof d.ioTimeTriggerList && (d.ioTimeTriggerList = {});
    "undefined" === typeof d.radioGroupList && (d.radioGroupList = {});
    "undefined" === typeof d.ioParameterList[b] && (d.ioParameterList[b] = {});
    d.ioParameterList[b] = f;
    d.ioParameterList[b].function_name = a;
    if ("TimeTrigger" == e) {
      var g = function(a, b, c) {
        b = c.cells[b];
        "undefined" !== typeof b && "n" == b.valuetype.charAt(0) && a.push(b.datavalue);
      }, l = SocialCalc.Formula.PlainCoord(f[0].value);
      c = [];
      if ("range" == f[0].type) {
        for (var h = SocialCalc.Formula.DecodeRangeParts(d, l), p = 0;p < h.ncols;p++) {
          for (var q = 0;q < h.nrows;q++) {
            var w = SocialCalc.crToCoord(h.col1num + p, h.row1num + q);
            g(c, w, d);
          }
        }
      }
      "coord" == f[0].type && g(c, l, d);
      "n" == f[0].type.charAt(0) && c.push(f[0].value);
      if ("undefined" === typeof d.ioTimeTriggerList[b] || !1 == SocialCalc.Formula.ArrayValuesEqual(d.ioTimeTriggerList[b], c)) {
        d.ioTimeTriggerList[b] = c;
        h = (new Date).getTimezoneOffset();
        p = [];
        for (q = 0;q < c.length;++q) {
          p[q] = Math.floor(1440 * (c[q] - 25569) + h);
        }
        d.ScheduleSheetCommands("settimetrigger " + b + " " + p.toString());
      }
    }
    if ("EventTree" == e && ("coord" == f[0].type || "range" == f[0].type)) {
      c = f[0].value.replace(/\$/g, "");
      g = function(a, b, c) {
        "undefined" === typeof a[b] && (a[b] = {});
        a[b][c] = c;
      };
      if ("range" == f[0].type) {
        for (h = SocialCalc.Formula.DecodeRangeParts(d, c), p = 0;p < h.ncols;p++) {
          for (q = 0;q < h.nrows;q++) {
            l = SocialCalc.crToCoord(h.col1num + p, h.row1num + q), g(d.ioEventTree, l, b);
          }
        }
      }
      "coord" == f[0].type && g(d.ioEventTree, c, b);
    }
    if ("Input" == e && (d = null != SocialCalc.CurrentSpreadsheetControlObject ? SocialCalc.CurrentSpreadsheetControlObject.formDataViewer : SocialCalc.CurrentSpreadsheetViewerObject.formDataViewer, null != d && !0 == d.loaded)) {
      null == d.formFields && SocialCalc.Formula.LoadFormFields();
      c = (a + b).toLowerCase();
      e = null;
      null == d.formFields[c] && (e = d.formFields[c] = d.formFieldsLength++ + 2, e = "set " + SocialCalc.crToCoord(e, 1) + " text t " + SocialCalc.encodeForSave(a.toLowerCase() + b));
      if ("t" == f[0].type.charAt(0) || "n" == f[0].type.charAt(0)) {
        if (a = SocialCalc.crToCoord(d.formFields[c], 2), null == d.sheet.cells[a] || d.sheet.cells[a].datavalue != f[0].value) {
          f = "set " + a + " text t " + SocialCalc.encodeForSave(f[0].value), e = null != e ? e + "\n" + f : f;
        }
      }
      null != e && d.sheet.ScheduleSheetCommands(e, !1);
    }
  }
};
SocialCalc.Formula.ArrayValuesEqual = function(a, b) {
  var c = a.length;
  if (c != b.length) {
    return!1;
  }
  for (;c--;) {
    if (a[c] !== b[c]) {
      return!1;
    }
  }
  return!0;
};
SocialCalc.Formula.Clone = function(a, b) {
  for (var c in b) {
    "object" === typeof b[c] && null !== b[c] && a[c] ? SocialCalc.Formula.Clone(a[c], b[c]) : a[c] = b[c];
  }
};
SocialCalc.Formula.LoadFormFields = function() {
  var a = null != SocialCalc.CurrentSpreadsheetControlObject ? SocialCalc.CurrentSpreadsheetControlObject.formDataViewer : SocialCalc.CurrentSpreadsheetViewerObject.formDataViewer;
  a.formFields = {};
  null == a.sheet.cells.A1 && a.sheet.ScheduleSheetCommands("set A1 text t " + SocialCalc.encodeForSave("FieldName:"), !1);
  null == a.sheet.cells.A2 && a.sheet.ScheduleSheetCommands("set A2 text t " + SocialCalc.encodeForSave("Pending:"), !1);
  for (var b = 2;;) {
    var c = SocialCalc.crToCoord(b, 1), c = a.sheet.cells[c];
    if (!c) {
      break;
    }
    a.formFields[c.datavalue.toLowerCase()] = b;
    b++;
  }
  a.formFieldsLength = b - 2;
};
SocialCalc.Formula.CalculateFunction = function(a, b, c, d) {
  var e, f, g, l, h = SocialCalc.Formula;
  f = "";
  if (e = h.FunctionList[a]) {
    f = [];
    g = e[0];
    l = e[1];
    h.CopyFunctionArgs(b, f);
    e[6] && "" != e[6] && (SocialCalc.DebugLog("action:" + a), h.StoreIoEventFormula(a, d, f, c, e[6]));
    if (100 != l) {
      if (0 > l) {
        if (f.length < -l) {
          return f = h.FunctionArgsError(a, b);
        }
      } else {
        if (f.length != l) {
          return f = h.FunctionArgsError(a, b);
        }
      }
    }
    f = g(a, b, f, c, d);
  } else {
    b.length && "start" == b[b.length - 1].type ? (b.pop(), h.PushOperand(b, "name", a)) : f = SocialCalc.Constants.s_sheetfuncunknownfunction + " " + a + ". ";
  }
  return f;
};
SocialCalc.Formula.PushOperand = function(a, b, c) {
  a.push({type:b, value:c});
};
SocialCalc.Formula.CopyFunctionArgs = function(a, b) {
  for (;0 < a.length && "start" != a[a.length - 1].type;) {
    b.push(a.pop());
  }
  a.pop();
};
SocialCalc.Formula.FunctionArgsError = function(a, b) {
  var c = SocialCalc.Constants.s_calcerrincorrectargstofunction + " " + a + ". ";
  SocialCalc.Formula.PushOperand(b, "e#VALUE!", c);
  return c;
};
SocialCalc.Formula.FunctionSpecificError = function(a, b, c, d) {
  SocialCalc.Formula.PushOperand(b, c, d);
  return d;
};
SocialCalc.Formula.CheckForErrorValue = function(a, b) {
  return "e" == b.type.charAt(0) ? (a.push(b), !0) : !1;
};
SocialCalc.Formula.FillFunctionInfo = function() {
  var a = SocialCalc.Formula, b = SocialCalc.Constants, c, d, e;
  if (!a.FunctionClasses) {
    for (c in a.FunctionList) {
      d = a.FunctionList[c], d[2] && (a.FunctionArgDefs[d[2]] = b["s_farg_" + d[2]] || ""), d[3] || b["s_fdef_" + c] && (a.FunctionList[c][3] = b["s_fdef_" + c]);
    }
    a.FunctionClasses = {};
    for (d = 0;d < b.function_classlist.length;d++) {
      e = b.function_classlist[d], a.FunctionClasses[e] = {name:b["s_fclass_" + e], items:[]};
    }
    for (c in a.FunctionList) {
      for (d = a.FunctionList[c], b = d[4] ? d[4].split(",") : [], b.push("all"), d = 0;d < b.length;d++) {
        e = b[d], a.FunctionClasses[e].items.push(c);
      }
    }
    for (e in a.FunctionClasses) {
      a.FunctionClasses[e].items.sort();
    }
  }
};
SocialCalc.Formula.FunctionArgString = function(a) {
  var b = SocialCalc.Formula;
  a = b.FunctionList[a];
  var c;
  c = a[2];
  if (!c) {
    if (a = a[1], 0 == a) {
      c = " ";
    } else {
      if (0 < a) {
        c = "v1";
        for (b = 2;b <= a;b++) {
          c += ", v" + b;
        }
        return c;
      }
      if (0 > a) {
        c = "v1";
        for (b = 2;b < -a;b++) {
          c += ", v" + b;
        }
        return c + ", ...";
      }
      return "nargs: " + a;
    }
  }
  return c = b.FunctionArgDefs[c] || c;
};
SocialCalc.Formula.SeriesFunctions = function(a, b, c, d) {
  var e, f;
  e = SocialCalc.Formula;
  for (var g = e.OperandValueAndType, l = e.LookupResultType, h = e.TypeLookupTable.plus, p = function(a, c) {
    b.push({type:a, value:c});
  }, q = 0, w = "", v = 0, s = 0, t = 0, x = 1, m, r, u, y, z, A;0 < c.length;) {
    e = g(d, c), f = e.type.charAt(0), "n" == f && (v += 1), "b" != f && (s += 1), "b" == f && (t += 1), "n" == f ? (f = e.value - 0, q += f, x *= f, m = void 0 != m ? f > m ? f : m : f, r = void 0 != r ? f < r ? f : r : f, 1 == v ? (z = f, A = 0) : (u = z + (f - z) / v, A = y = A + (f - z) * (f - u), z = u), w = l(e.type, w || e.type, h)) : "e" == f && "e" != w.charAt(0) && (w = e.type);
  }
  w = w || "n";
  switch(a) {
    case "SUM":
      p(w, q);
      break;
    case "PRODUCT":
      p(w, x);
      break;
    case "MIN":
      p(w, r || 0);
      break;
    case "MAX":
      p(w, m || 0);
      break;
    case "COUNT":
      p("n", v);
      break;
    case "COUNTA":
      p("n", s);
      break;
    case "COUNTBLANK":
      p("n", t);
      break;
    case "AVERAGE":
      0 < v ? p(w, q / v) : p("e#DIV/0!", 0);
      break;
    case "STDEV":
      1 < v ? p(w, Math.sqrt(y / (v - 1))) : p("e#DIV/0!", 0);
      break;
    case "STDEVP":
      1 < v ? p(w, Math.sqrt(y / v)) : p("e#DIV/0!", 0);
      break;
    case "VAR":
      1 < v ? p(w, y / (v - 1)) : p("e#DIV/0!", 0);
      break;
    case "VARP":
      1 < v ? p(w, y / v) : p("e#DIV/0!", 0);
  }
  return null;
};
SocialCalc.Formula.FunctionList.AVERAGE = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"];
SocialCalc.Formula.FunctionList.COUNT = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"];
SocialCalc.Formula.FunctionList.COUNTA = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"];
SocialCalc.Formula.FunctionList.COUNTBLANK = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"];
SocialCalc.Formula.FunctionList.MAX = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"];
SocialCalc.Formula.FunctionList.MIN = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"];
SocialCalc.Formula.FunctionList.PRODUCT = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"];
SocialCalc.Formula.FunctionList.STDEV = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"];
SocialCalc.Formula.FunctionList.STDEVP = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"];
SocialCalc.Formula.FunctionList.SUM = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"];
SocialCalc.Formula.FunctionList.VAR = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"];
SocialCalc.Formula.FunctionList.VARP = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"];
SocialCalc.Formula.SumProductFunction = function(a, b, c, d) {
  for (var e = [], f = 0, g = SocialCalc.Formula, l = 0, h = 0, p = function(a, c) {
    b.push({type:a, value:c});
  };0 < c.length;) {
    a = g.TopOfStackValueAndType(d, c);
    if ("range" != a.type) {
      p("e#VALUE!", 0);
      return;
    }
    rangeinfo = g.DecodeRangeParts(d, a.value);
    if (!l) {
      l = rangeinfo.ncols;
    } else {
      if (l != rangeinfo.ncols) {
        p("e#VALUE!", 0);
        return;
      }
    }
    if (!h) {
      h = rangeinfo.nrows;
    } else {
      if (h != rangeinfo.nrows) {
        p("e#VALUE!", 0);
        return;
      }
    }
    for (i = 0;i < rangeinfo.ncols;i++) {
      for (j = 0;j < rangeinfo.nrows;j++) {
        k = i * rangeinfo.nrows + j, cellcr = SocialCalc.crToCoord(rangeinfo.col1num + i, rangeinfo.row1num + j), cell = rangeinfo.sheetdata.GetAssuredCell(cellcr), value = "n" == cell.valuetype ? cell.datavalue : 0, e[k] = ("undefined" !== typeof e[k] ? e[k] : 1) * value;
      }
    }
  }
  for (i = 0;i < e.length;i++) {
    f += e[i];
  }
  p("n", f);
};
SocialCalc.Formula.FunctionList.SUMPRODUCT = [SocialCalc.Formula.SumProductFunction, -1, "rangen", "", "stat"];
SocialCalc.Formula.DSeriesFunctions = function(a, b, c, d) {
  var e, f, g, l, h, p, q, w, v, s, t = SocialCalc.Formula, x = t.LookupResultType, m = t.TypeLookupTable.plus, r = function(a, c) {
    b.push({type:a, value:c});
  };
  f = e = void 0;
  var u = 0, y = "", z = 0, A = 0, C = 0, J = 1, O, F, K, I, D;
  g = t.TopOfStackValueAndType(d, c);
  l = t.OperandValueAndType(d, c);
  c = t.TopOfStackValueAndType(d, c);
  if ("range" != g.type || "range" != c.type) {
    return t.FunctionArgsError(a, b);
  }
  g = t.DecodeRangeParts(d, g.value);
  d = t.DecodeRangeParts(d, c.value);
  l = t.FieldToColnum(g.sheetdata, g.col1num, g.ncols, g.row1num, l.value, l.type);
  if (0 >= l) {
    r("e#VALUE!", 0);
  } else {
    l = g.col1num + l - 1;
    w = [];
    for (c = 0;c < d.ncols;c++) {
      q = d.sheetdata.GetAssuredCell(SocialCalc.crToCoord(d.col1num + c, d.row1num));
      criterianum = t.FieldToColnum(g.sheetdata, g.col1num, g.ncols, g.row1num, q.datavalue, q.valuetype);
      if (0 >= criterianum) {
        r("e#VALUE!", 0);
        return;
      }
      w.push(g.col1num + criterianum - 1);
    }
    for (c = 1;c < g.nrows;c++) {
      v = !1;
      h = 1;
      a: for (;h < d.nrows;h++) {
        for (p = 0;p < d.ncols;p++) {
          if (s = SocialCalc.crToCoord(d.col1num + p, d.row1num + h), q = d.sheetdata.GetAssuredCell(s), s = q.datavalue, "string" != typeof s || 0 != s.length) {
            if (q = w[p], q = SocialCalc.crToCoord(q, g.row1num + c), q = g.sheetdata.GetAssuredCell(q), !t.TestCriteria(q.datavalue, q.valuetype || "b", s)) {
              continue a;
            }
          }
        }
        v = !0;
        break a;
      }
      v && (e = SocialCalc.crToCoord(l, g.row1num + c), q = g.sheetdata.GetAssuredCell(e), e = q.datavalue, f = q.valuetype, h = f.charAt(0), C += 1, "n" == h && (z += 1), "b" != h && (A += 1), "n" == h ? (v1 = e - 0, u += v1, J *= v1, O = void 0 != O ? v1 > O ? v1 : O : v1, F = void 0 != F ? v1 < F ? v1 : F : v1, 1 == z ? (I = v1, D = 0) : (h = I + (v1 - I) / z, D = K = D + (v1 - I) * (v1 - h), I = h), y = x(f, y || f, m)) : "e" == h && "e" != y.charAt(0) && (y = f));
    }
    y = y || "n";
    switch(a) {
      case "DSUM":
        r(y, u);
        break;
      case "DPRODUCT":
        r(y, J);
        break;
      case "DMIN":
        r(y, F || 0);
        break;
      case "DMAX":
        r(y, O || 0);
        break;
      case "DCOUNT":
        r("n", z);
        break;
      case "DCOUNTA":
        r("n", A);
        break;
      case "DAVERAGE":
        0 < z ? r(y, u / z) : r("e#DIV/0!", 0);
        break;
      case "DSTDEV":
        1 < z ? r(y, Math.sqrt(K / (z - 1))) : r("e#DIV/0!", 0);
        break;
      case "DSTDEVP":
        1 < z ? r(y, Math.sqrt(K / z)) : r("e#DIV/0!", 0);
        break;
      case "DVAR":
        1 < z ? r(y, K / (z - 1)) : r("e#DIV/0!", 0);
        break;
      case "DVARP":
        1 < z ? r(y, K / z) : r("e#DIV/0!", 0);
        break;
      case "DGET":
        1 == C ? r(f, e) : 0 == C ? r("e#VALUE!", 0) : r("e#NUM!", 0);
    }
  }
};
SocialCalc.Formula.FunctionList.DAVERAGE = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"];
SocialCalc.Formula.FunctionList.DCOUNT = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"];
SocialCalc.Formula.FunctionList.DCOUNTA = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"];
SocialCalc.Formula.FunctionList.DGET = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"];
SocialCalc.Formula.FunctionList.DMAX = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"];
SocialCalc.Formula.FunctionList.DMIN = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"];
SocialCalc.Formula.FunctionList.DPRODUCT = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"];
SocialCalc.Formula.FunctionList.DSTDEV = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"];
SocialCalc.Formula.FunctionList.DSTDEVP = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"];
SocialCalc.Formula.FunctionList.DSUM = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"];
SocialCalc.Formula.FunctionList.DVAR = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"];
SocialCalc.Formula.FunctionList.DVARP = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"];
SocialCalc.Formula.FieldToColnum = function(a, b, c, d, e, f) {
  var g;
  if ("n" == f.charAt(0)) {
    return f = e - 0, 0 >= f || f > c ? 0 : Math.floor(f);
  }
  if ("t" != f.charAt(0)) {
    return 0;
  }
  e = e ? e.toLowerCase() : "";
  for (f = 0;f < c;f++) {
    if (g = a.GetAssuredCell(SocialCalc.crToCoord(b + f, d)), g = g.datavalue, g = (g + "").toLowerCase(), g == e) {
      return f + 1;
    }
  }
  return 0;
};
SocialCalc.Formula.LookupFunctions = function(a, b, c, d) {
  var e, f, g, l, h, p, q, w, v, s, t;
  t = SocialCalc.Formula;
  e = t.OperandValueAndType;
  var x = function(a, c) {
    b.push({type:a, value:c});
  };
  e = e(d, c);
  "string" == typeof e.value && (e.value = e.value.toLowerCase());
  f = t.TopOfStackValueAndType(d, c);
  g = 1;
  if ("MATCH" == a) {
    if (c.length) {
      g = t.OperandAsNumber(d, c);
      if ("n" != g.type.charAt(0)) {
        x("e#VALUE!", 0);
        return;
      }
      if (c.length) {
        return t.FunctionArgsError(a, b), 0;
      }
      g = g.value - 0;
    }
  } else {
    l = t.OperandAsNumber(d, c);
    if ("n" != l.type.charAt(0)) {
      x("e#VALUE!", 0);
      return;
    }
    l = Math.floor(l.value);
    if (c.length) {
      g = t.OperandAsNumber(d, c);
      if ("n" != g.type.charAt(0)) {
        x("e#VALUE!", 0);
        return;
      }
      if (c.length) {
        return t.FunctionArgsError(a, b), 0;
      }
      g = g.value ? 1 : 0;
    }
  }
  e.type = e.type.charAt(0);
  "n" == e.type && (e.value -= 0);
  if ("range" != f.type) {
    return t.FunctionArgsError(a, b), 0;
  }
  if (c = t.DecodeRangeParts(d, f.value, f.type)) {
    p = h = f = d = 0;
    if ("HLOOKUP" == a) {
      if (h = 1, l > c.nrows) {
        x("e#REF!", 0);
        return;
      }
    } else {
      if ("VLOOKUP" == a) {
        if (p = 1, l > c.ncols) {
          x("e#REF!", 0);
          return;
        }
      } else {
        if ("MATCH" == a) {
          if (1 < c.ncols) {
            if (1 < c.nrows) {
              x("e#N/A", 0);
              return;
            }
            h = 1;
          } else {
            p = 1;
          }
        } else {
          return t.FunctionArgsError(a, b), 0;
        }
      }
    }
    if (1 > l && "MATCH" != a) {
      return x("e#VALUE!", 0), 0;
    }
    for (q;;) {
      t = SocialCalc.crToCoord(c.col1num + d, c.row1num + f);
      s = c.sheetdata.GetAssuredCell(t);
      t = s.datavalue;
      s = s.valuetype ? s.valuetype.charAt(0) : "b";
      "n" == s && (t -= 0);
      if (g) {
        if ("n" == e.type && "n" == s) {
          if (e.value == t) {
            break;
          }
          if (0 < g && e.value > t || 0 > g && e.value < t) {
            q = 1, w = d, v = f;
          } else {
            if (q) {
              q = 2;
              break;
            }
          }
        } else {
          if ("t" == e.type && "t" == s) {
            t = "string" == typeof t ? t.toLowerCase() : "";
            if (e.value == t) {
              break;
            }
            if (0 < g && e.value > t || 0 > g && e.value < t) {
              q = 1, w = d, v = f;
            } else {
              if (q) {
                q = 2;
                break;
              }
            }
          }
        }
      } else {
        if ("n" == e.type && "n" == s) {
          if (e.value == t) {
            break;
          }
        } else {
          if ("t" == e.type && "t" == s && (t = "string" == typeof t ? t.toLowerCase() : "", e.value == t)) {
            break;
          }
        }
      }
      f += p;
      d += h;
      if (f >= c.nrows || d >= c.ncols) {
        if (q) {
          q = 2;
          break;
        }
        x("e#N/A", 0);
        return;
      }
    }
    2 == q && (f = v, d = w);
    "MATCH" == a ? (t = d + f + 1, s = "n") : (t = SocialCalc.crToCoord(c.col1num + d + ("VLOOKUP" == a ? l - 1 : 0), c.row1num + f + ("HLOOKUP" == a ? l - 1 : 0)), s = c.sheetdata.GetAssuredCell(t), t = s.datavalue, s = s.valuetype);
    x(s, t);
  } else {
    x("e#REF!", 0);
  }
};
SocialCalc.Formula.FunctionList.HLOOKUP = [SocialCalc.Formula.LookupFunctions, -3, "hlookup", "", "lookup"];
SocialCalc.Formula.FunctionList.MATCH = [SocialCalc.Formula.LookupFunctions, -2, "match", "", "lookup"];
SocialCalc.Formula.FunctionList.VLOOKUP = [SocialCalc.Formula.LookupFunctions, -3, "vlookup", "", "lookup"];
SocialCalc.Formula.IndexFunction = function(a, b, c, d) {
  var e, f, g, l, h = SocialCalc.Formula, p = function(a, c) {
    b.push({type:a, value:c});
  };
  e = h.TopOfStackValueAndType(d, c);
  if ("range" != e.type) {
    return h.FunctionArgsError(a, b), 0;
  }
  f = h.DecodeRangeParts(d, e.value, e.type);
  e = f.sheetname ? "!" + f.sheetname : "";
  g = {value:0};
  l = {value:0};
  if (c.length) {
    g = h.OperandAsNumber(d, c);
    if ("n" != g.type.charAt(0) || 0 > g.value) {
      p("e#VALUE!", 0);
      return;
    }
    if (c.length) {
      l = h.OperandAsNumber(d, c);
      if ("n" != l.type.charAt(0) || 0 > l.value) {
        p("e#VALUE!", 0);
        return;
      }
      if (c.length) {
        return h.FunctionArgsError(a, b), 0;
      }
    } else {
      1 == f.nrows && (l.value = g.value, g.value = 0);
    }
  }
  g.value > f.nrows || l.value > f.ncols ? p("e#REF!", 0) : (0 == g.value ? 0 == l.value ? 1 == f.nrows && 1 == f.ncols ? (a = SocialCalc.crToCoord(f.col1num, f.row1num) + e, c = "coord") : (a = SocialCalc.crToCoord(f.col1num, f.row1num) + e + "|" + SocialCalc.crToCoord(f.col1num + f.ncols - 1, f.row1num + f.nrows - 1) + "|", c = "range") : 1 == f.nrows ? (a = SocialCalc.crToCoord(f.col1num + l.value - 1, f.row1num) + e, c = "coord") : (a = SocialCalc.crToCoord(f.col1num + l.value - 1, f.row1num) + 
  e + "|" + SocialCalc.crToCoord(f.col1num + l.value - 1, f.row1num + f.nrows - 1) + "|", c = "range") : 0 == l.value ? 1 == f.ncols ? (a = SocialCalc.crToCoord(f.col1num, f.row1num + g.value - 1) + e, c = "coord") : (a = SocialCalc.crToCoord(f.col1num, f.row1num + g.value - 1) + e + "|" + SocialCalc.crToCoord(f.col1num + f.ncols - 1, f.row1num + g.value - 1) + "|", c = "range") : (a = SocialCalc.crToCoord(f.col1num + l.value - 1, f.row1num + g.value - 1) + e, c = "coord"), p(c, a));
};
SocialCalc.Formula.FunctionList.INDEX = [SocialCalc.Formula.IndexFunction, -1, "index", "", "lookup"];
SocialCalc.Formula.CountifSumifFunctions = function(a, b, c, d) {
  var e, f, g, l, h = 0, p = "", q = 0, w = SocialCalc.Formula, v = w.OperandValueAndType, s = w.LookupResultType, t = w.TypeLookupTable.plus;
  e = w.TopOfStackValueAndType(d, c);
  f = w.OperandAsText(d, c);
  if ("SUMIF" == a) {
    if (1 == c.length) {
      g = w.TopOfStackValueAndType(d, c);
    } else {
      if (0 == c.length) {
        g = {value:e.value, type:e.type};
      } else {
        return w.FunctionArgsError(a, b), 0;
      }
    }
  } else {
    g = {value:e.value, type:e.type};
  }
  "n" == f.type.charAt(0) ? f.value += "" : "e" == f.type.charAt(0) ? f.value = null : "b" == f.type.charAt(0) && (f.value = null);
  if ("coord" != e.type && "range" != e.type || "SUMIF" == a && "coord" != g.type && "range" != g.type) {
    return w.FunctionArgsError(a, b), 0;
  }
  c.push(e);
  e = [];
  for (e.push(g);c.length;) {
    g = v(d, c), l = v(d, e), w.TestCriteria(g.value, g.type, f.value) && (q += 1, "n" == l.type.charAt(0) ? (h += l.value - 0, p = s(l.type, p || l.type, t)) : "e" == l.type.charAt(0) && "e" != p.charAt(0) && (p = l.type));
  }
  "SUMIF" == a ? b.push({type:p || "n", value:h}) : "COUNTIF" == a && b.push({type:"n", value:q});
};
SocialCalc.Formula.FunctionList.COUNTIF = [SocialCalc.Formula.CountifSumifFunctions, 2, "rangec", "", "stat"];
SocialCalc.Formula.FunctionList.SUMIF = [SocialCalc.Formula.CountifSumifFunctions, -2, "sumif", "", "stat"];
SocialCalc.Formula.IfFunction = function(a, b, c, d) {
  var e;
  d = SocialCalc.Formula.OperandValueAndType(d, c);
  e = d.type.charAt(0);
  if ("n" != e && "b" != e) {
    b.push({type:"e#VALUE!", value:0});
  } else {
    e = c.pop();
    if (1 == c.length) {
      a = c.pop();
    } else {
      if (0 == c.length) {
        a = {type:"n", value:0};
      } else {
        scf.FunctionArgsError(a, b);
        return;
      }
    }
    b.push(d.value ? e : a);
  }
};
SocialCalc.Formula.FunctionList.IF = [SocialCalc.Formula.IfFunction, -2, "iffunc", "", "test"];
SocialCalc.Formula.DateFunction = function(a, b, c, d) {
  a = SocialCalc.Formula;
  var e = 0, f = a.OperandAsNumber(d, c), g = a.OperandAsNumber(d, c);
  c = a.OperandAsNumber(d, c);
  d = a.LookupResultType(f.type, g.type, a.TypeLookupTable.twoargnumeric);
  d = a.LookupResultType(d, c.type, a.TypeLookupTable.twoargnumeric);
  "n" == d.charAt(0) && (e = SocialCalc.FormatNumber.convert_date_gregorian_to_julian(Math.floor(f.value), Math.floor(g.value), Math.floor(c.value)) - SocialCalc.FormatNumber.datevalues.julian_offset, d = "nd");
  a.PushOperand(b, d, e);
};
SocialCalc.Formula.FunctionList.DATE = [SocialCalc.Formula.DateFunction, 3, "date", "", "datetime"];
SocialCalc.Formula.TimeFunction = function(a, b, c, d) {
  a = SocialCalc.Formula;
  var e = 0, f = a.OperandAsNumber(d, c), g = a.OperandAsNumber(d, c);
  c = a.OperandAsNumber(d, c);
  d = a.LookupResultType(f.type, g.type, a.TypeLookupTable.twoargnumeric);
  d = a.LookupResultType(d, c.type, a.TypeLookupTable.twoargnumeric);
  "n" == d.charAt(0) && (e = (3600 * f.value + 60 * g.value + c.value) / 86400, d = "nt");
  a.PushOperand(b, d, e);
};
SocialCalc.Formula.FunctionList.TIME = [SocialCalc.Formula.TimeFunction, 3, "hms", "", "datetime"];
SocialCalc.Formula.DMYFunctions = function(a, b, c, d) {
  var e, f = SocialCalc.Formula, g = 0, l = f.OperandAsNumber(d, c), h = f.LookupResultType(l.type, l.type, f.TypeLookupTable.oneargnumeric);
  if ("n" == h.charAt(0)) {
    switch(e = SocialCalc.FormatNumber.convert_date_julian_to_gregorian(Math.floor(l.value + SocialCalc.FormatNumber.datevalues.julian_offset)), a) {
      case "DAY":
        g = e.day;
        break;
      case "MONTH":
        g = e.month;
        break;
      case "YEAR":
        g = e.year;
        break;
      case "WEEKDAY":
        e = {value:1};
        if (c.length) {
          e = f.OperandAsNumber(d, c);
          if ("n" != e.type.charAt(0) || 1 > e.value || 3 < e.value) {
            f.PushOperand(b, "e#VALUE!", 0);
            return;
          }
          if (c.length) {
            f.FunctionArgsError(a, b);
            return;
          }
        }
        a = 6;
        1 < e.value && (a -= 1);
        g = Math.floor(l.value + a) % 7 + (3 > e.value ? 1 : 0);
    }
  }
  f.PushOperand(b, h, g);
};
SocialCalc.Formula.FunctionList.DAY = [SocialCalc.Formula.DMYFunctions, 1, "v", "", "datetime"];
SocialCalc.Formula.FunctionList.MONTH = [SocialCalc.Formula.DMYFunctions, 1, "v", "", "datetime"];
SocialCalc.Formula.FunctionList.YEAR = [SocialCalc.Formula.DMYFunctions, 1, "v", "", "datetime"];
SocialCalc.Formula.FunctionList.WEEKDAY = [SocialCalc.Formula.DMYFunctions, -1, "weekday", "", "datetime"];
SocialCalc.Formula.HMSFunctions = function(a, b, c, d) {
  var e, f = SocialCalc.Formula, g = 0, l = f.OperandAsNumber(d, c), h = f.LookupResultType(l.type, l.type, f.TypeLookupTable.oneargnumeric);
  if ("n" == h.charAt(0)) {
    if (0 > l.value) {
      f.PushOperand(b, "e#NUM!", 0);
      return;
    }
    e = l.value - Math.floor(l.value);
    e *= 24;
    c = Math.floor(e);
    e -= Math.floor(e);
    e *= 60;
    d = Math.floor(e);
    e -= Math.floor(e);
    e = Math.floor(60 * e + (0 <= l.value ? 0.5 : -0.5));
    "HOUR" == a ? g = c : "MINUTE" == a ? g = d : "SECOND" == a && (g = e);
  }
  f.PushOperand(b, h, g);
};
SocialCalc.Formula.FunctionList.HOUR = [SocialCalc.Formula.HMSFunctions, 1, "v", "", "datetime"];
SocialCalc.Formula.FunctionList.MINUTE = [SocialCalc.Formula.HMSFunctions, 1, "v", "", "datetime"];
SocialCalc.Formula.FunctionList.SECOND = [SocialCalc.Formula.HMSFunctions, 1, "v", "", "datetime"];
SocialCalc.Formula.ExactFunction = function(a, b, c, d) {
  a = SocialCalc.Formula;
  var e = 0, f = "nl", g = a.OperandValueAndType(d, c), l = g.type.charAt(0);
  c = a.OperandValueAndType(d, c);
  d = c.type.charAt(0);
  "t" == l ? "t" == d ? e = g.value == c.value ? 1 : 0 : "b" == d ? e = g.value.length ? 0 : 1 : "n" == d ? e = g.value == c.value + "" ? 1 : 0 : "e" == d ? (e = c.value, f = c.type) : e = 0 : "n" == l ? "n" == d ? e = g.value - 0 == c.value - 0 ? 1 : 0 : "b" == d ? e = 0 : "t" == d ? e = g.value + "" == c.value ? 1 : 0 : "e" == d ? (e = c.value, f = c.type) : e = 0 : "b" == l ? "t" == d ? e = c.value.length ? 0 : 1 : "b" == d ? e = 1 : "n" == d ? e = 0 : "e" == d ? (e = c.value, f = c.type) : e = 
  0 : "e" == l && (e = g.value, f = g.type);
  a.PushOperand(b, f, e);
};
SocialCalc.Formula.FunctionList.EXACT = [SocialCalc.Formula.ExactFunction, 2, "", "", "text"];
SocialCalc.Formula.ArgList = {FIND:[1, 1, 0], LEFT:[1, 0], LEN:[1], LOWER:[1], MID:[1, 0, 0], PROPER:[1], REPLACE:[1, 0, 0, 1], REPT:[1, 0], RIGHT:[1, 0], SUBSTITUTE:[1, 1, 1, 0], TRIM:[1], HEXCODE:[1], UPPER:[1]};
SocialCalc.Formula.StringFunctions = function(a, b, c, d) {
  var e, f, g, l = SocialCalc.Formula;
  g = 0;
  var h = "e#VALUE!", p = c.length, q = l.ArgList[a], w = [], v = [];
  for (e = 1;e <= p;e++) {
    if (e > q.length) {
      l.FunctionArgsError(a, b);
      return;
    }
    0 == q[e - 1] ? f = l.OperandAsNumber(d, c) : 1 == q[e - 1] ? f = l.OperandAsText(d, c) : -1 == q[e - 1] && (f = l.OperandValueAndType(d, c));
    w[e] = f.value;
    v[e] = f.type;
    if ("e" == f.type.charAt(0)) {
      l.PushOperand(b, f.type, g);
      return;
    }
  }
  switch(a) {
    case "FIND":
      g = v[3] ? w[3] - 1 : 0;
      0 > g ? g = "Start is before string" : (g = w[2].indexOf(w[1], g), 0 <= g ? (g += 1, h = "n") : g = "Not found");
      break;
    case "LEFT":
      g = v[2] ? w[2] - 0 : 1;
      0 > g ? g = "Negative length" : (g = w[1].substring(0, g), h = "t");
      break;
    case "LEN":
      g = w[1].length;
      h = "n";
      break;
    case "LOWER":
      g = w[1].toLowerCase();
      h = "t";
      break;
    case "MID":
      a = w[2] - 0;
      g = w[3] - 0;
      1 > g || 1 > a ? g = "Bad arguments" : (g = w[1].substring(a - 1, a + g - 1), h = "t");
      break;
    case "PROPER":
      g = w[1].replace(/\b\w+\b/g, function(a) {
        return a.substring(0, 1).toUpperCase() + a.substring(1);
      });
      h = "t";
      break;
    case "REPLACE":
      a = w[2] - 0;
      g = w[3] - 0;
      0 > g || 1 > a ? g = "Bad arguments" : (g = w[1].substring(0, a - 1) + w[4] + w[1].substring(a - 1 + g), h = "t");
      break;
    case "REPT":
      a = w[2] - 0;
      if (0 > a) {
        g = "Negative count";
      } else {
        for (g = "";0 < a;a--) {
          g += w[1];
        }
        h = "t";
      }
      break;
    case "RIGHT":
      g = v[2] ? w[2] - 0 : 1;
      0 > g ? g = "Negative length" : (g = w[1].slice(-g), h = "t");
      break;
    case "SUBSTITUTE":
      fulltext = w[1];
      oldtext = w[2];
      newtext = w[3];
      if (null != w[4]) {
        if (which = w[4] - 0, 0 >= which) {
          g = "Non-positive instance number";
          break;
        }
      } else {
        which = 0;
      }
      oldpos = a = 0;
      for (g = "";;) {
        if (pos = fulltext.indexOf(oldtext, oldpos), 0 <= pos) {
          a++;
          g += fulltext.substring(oldpos, pos);
          if (0 == which) {
            g += newtext;
          } else {
            if (which == a) {
              g += newtext + fulltext.substring(pos + oldtext.length);
              break;
            } else {
              g += oldtext;
            }
          }
          oldpos = pos + oldtext.length;
        } else {
          g += fulltext.substring(oldpos);
          break;
        }
      }
      h = "t";
      break;
    case "TRIM":
      g = w[1];
      g = g.replace(/^ */, "");
      g = g.replace(/ *$/, "");
      g = g.replace(/ +/g, " ");
      h = "t";
      break;
    case "HEXCODE":
      g = String(w[1]);
      h = g.charCodeAt(0);
      55296 <= h && 56319 >= h && (w = g.charCodeAt(1), 56320 <= w && 57343 >= w && (h = 1024 * (h - 55296) + (w - 56320) + 65536));
      g = h.toString(16).toUpperCase();
      h = "t";
      break;
    case "UPPER":
      g = w[1].toUpperCase(), h = "t";
  }
  l.PushOperand(b, h, g);
};
SocialCalc.Formula.FunctionList.FIND = [SocialCalc.Formula.StringFunctions, -2, "find", "", "text"];
SocialCalc.Formula.FunctionList.LEFT = [SocialCalc.Formula.StringFunctions, -2, "tc", "", "text"];
SocialCalc.Formula.FunctionList.LEN = [SocialCalc.Formula.StringFunctions, 1, "txt", "", "text"];
SocialCalc.Formula.FunctionList.LOWER = [SocialCalc.Formula.StringFunctions, 1, "txt", "", "text"];
SocialCalc.Formula.FunctionList.MID = [SocialCalc.Formula.StringFunctions, 3, "mid", "", "text"];
SocialCalc.Formula.FunctionList.PROPER = [SocialCalc.Formula.StringFunctions, 1, "v", "", "text"];
SocialCalc.Formula.FunctionList.REPLACE = [SocialCalc.Formula.StringFunctions, 4, "replace", "", "text"];
SocialCalc.Formula.FunctionList.REPT = [SocialCalc.Formula.StringFunctions, 2, "tc", "", "text"];
SocialCalc.Formula.FunctionList.RIGHT = [SocialCalc.Formula.StringFunctions, -1, "tc", "", "text"];
SocialCalc.Formula.FunctionList.SUBSTITUTE = [SocialCalc.Formula.StringFunctions, -3, "subs", "", "text"];
SocialCalc.Formula.FunctionList.TRIM = [SocialCalc.Formula.StringFunctions, 1, "v", "", "text"];
SocialCalc.Formula.FunctionList.HEXCODE = [SocialCalc.Formula.StringFunctions, 1, "v", "", "text"];
SocialCalc.Formula.FunctionList.UPPER = [SocialCalc.Formula.StringFunctions, 1, "v", "", "text"];
SocialCalc.Formula.IsFunctions = function(a, b, c, d) {
  var e = SocialCalc.Formula, f = 0;
  c = e.OperandValueAndType(d, c);
  d = c.type.charAt(0);
  switch(a) {
    case "ISBLANK":
      f = "b" == c.type ? 1 : 0;
      break;
    case "ISERR":
      f = "e" == d ? "e#N/A" == c.type ? 0 : 1 : 0;
      break;
    case "ISERROR":
      f = "e" == d ? 1 : 0;
      break;
    case "ISLOGICAL":
      f = "nl" == c.type ? 1 : 0;
      break;
    case "ISNA":
      f = "e#N/A" == c.type ? 1 : 0;
      break;
    case "ISNONTEXT":
      f = "t" == d ? 0 : 1;
      break;
    case "ISNUMBER":
      f = "n" == d ? 1 : 0;
      break;
    case "ISTEXT":
      f = "t" == d ? 1 : 0;
  }
  e.PushOperand(b, "nl", f);
};
SocialCalc.Formula.FunctionList.ISBLANK = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"];
SocialCalc.Formula.FunctionList.ISERR = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"];
SocialCalc.Formula.FunctionList.ISERROR = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"];
SocialCalc.Formula.FunctionList.ISLOGICAL = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"];
SocialCalc.Formula.FunctionList.ISNA = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"];
SocialCalc.Formula.FunctionList.ISNONTEXT = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"];
SocialCalc.Formula.FunctionList.ISNUMBER = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"];
SocialCalc.Formula.FunctionList.ISTEXT = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"];
SocialCalc.Formula.NTVFunctions = function(a, b, c, d) {
  var e = SocialCalc.Formula, f = 0, g = "e#VALUE!";
  c = e.OperandValueAndType(d, c);
  d = c.type.charAt(0);
  switch(a) {
    case "N":
      f = "n" == d ? c.value - 0 : 0;
      g = "n";
      break;
    case "T":
      f = "t" == d ? c.value + "" : "";
      g = "t";
      break;
    case "VALUE":
      "n" == d || "b" == d ? (f = c.value || 0, g = "n") : "t" == d && (c = SocialCalc.DetermineValueType(c.value), "n" != c.type.charAt(0) ? (f = 0, g = "e#VALUE!") : (f = c.value - 0, g = "n"));
  }
  "e" == d && (g = c.type);
  e.PushOperand(b, g, f);
};
SocialCalc.Formula.FunctionList.N = [SocialCalc.Formula.NTVFunctions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.T = [SocialCalc.Formula.NTVFunctions, 1, "v", "", "text"];
SocialCalc.Formula.FunctionList.VALUE = [SocialCalc.Formula.NTVFunctions, 1, "v", "", "text"];
SocialCalc.Formula.Math1Functions = function(a, b, c, d) {
  var e = {}, f = SocialCalc.Formula;
  d = f.OperandAsNumber(d, c);
  c = d.value;
  e.type = f.LookupResultType(d.type, d.type, f.TypeLookupTable.oneargnumeric);
  if ("n" == e.type) {
    switch(a) {
      case "ABS":
        c = Math.abs(c);
        break;
      case "ACOS":
        -1 <= c && 1 >= c ? c = Math.acos(c) : e.type = "e#NUM!";
        break;
      case "ASIN":
        -1 <= c && 1 >= c ? c = Math.asin(c) : e.type = "e#NUM!";
        break;
      case "ATAN":
        c = Math.atan(c);
        break;
      case "COS":
        c = Math.cos(c);
        break;
      case "DEGREES":
        c = 180 * c / Math.PI;
        break;
      case "EVEN":
        c = 0 > c ? -c : c;
        c = c != Math.floor(c) ? Math.floor(c + 1) + Math.floor(c + 1) % 2 : c + c % 2;
        0 > d.value && (c = -c);
        break;
      case "EXP":
        c = Math.exp(c);
        break;
      case "FACT":
        a = 1;
        for (c = Math.floor(c);0 < c;c--) {
          a *= c;
        }
        c = a;
        break;
      case "INT":
        c = Math.floor(c);
        break;
      case "LN":
        0 >= c && (e.type = "e#NUM!", e.error = SocialCalc.Constants.s_sheetfunclnarg);
        c = Math.log(c);
        break;
      case "LOG10":
        0 >= c && (e.type = "e#NUM!", e.error = SocialCalc.Constants.s_sheetfunclog10arg);
        c = Math.log(c) / Math.log(10);
        break;
      case "ODD":
        c = 0 > c ? -c : c;
        c = c != Math.floor(c) ? Math.floor(c + 1) + (1 - Math.floor(c + 1) % 2) : c + (1 - c % 2);
        0 > d.value && (c = -c);
        break;
      case "RADIANS":
        c = c * Math.PI / 180;
        break;
      case "SIN":
        c = Math.sin(c);
        break;
      case "SQRT":
        0 <= c ? c = Math.sqrt(c) : e.type = "e#NUM!";
        break;
      case "TAN":
        0 != Math.cos(c) ? c = Math.tan(c) : e.type = "e#NUM!";
    }
  }
  e.value = c;
  b.push(e);
  return null;
};
SocialCalc.Formula.FunctionList.ABS = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.ACOS = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.ASIN = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.ATAN = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.COS = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.DEGREES = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.EVEN = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.EXP = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.FACT = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.INT = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.LN = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.LOG10 = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.ODD = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.RADIANS = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.SIN = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.SQRT = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.FunctionList.TAN = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"];
SocialCalc.Formula.Math2Functions = function(a, b, c, d) {
  var e, f, g = {};
  f = SocialCalc.Formula;
  e = f.OperandAsNumber(d, c);
  c = f.OperandAsNumber(d, c);
  g.type = f.LookupResultType(e.type, c.type, f.TypeLookupTable.twoargnumeric);
  if ("n" == g.type) {
    switch(a) {
      case "ATAN2":
        0 == e.value && 0 == c.value ? g.type = "e#DIV/0!" : g.value = Math.atan2(c.value, e.value);
        break;
      case "POWER":
        g.value = Math.pow(e.value, c.value);
        isNaN(g.value) && (g.value = 0, g.type = "e#NUM!");
        break;
      case "MOD":
        0 == c.value ? g.type = "e#DIV/0!" : (a = e.value / c.value, a = Math.floor(a), g.value = e.value - a * c.value);
        break;
      case "TRUNC":
        a = 1;
        if (0 <= c.value) {
          c.value = Math.floor(c.value);
          for (f = 0;f < c.value;f++) {
            a *= 10;
          }
          g.value = Math.floor(Math.abs(e.value) * a) / a;
        } else {
          if (0 > c.value) {
            c.value = Math.floor(-c.value);
            for (f = 0;f < c.value;f++) {
              a *= 10;
            }
            g.value = Math.floor(Math.abs(e.value) / a) * a;
          }
        }
        0 > e.value && (g.value = -g.value);
    }
  }
  b.push(g);
  return null;
};
SocialCalc.Formula.FunctionList.ATAN2 = [SocialCalc.Formula.Math2Functions, 2, "xy", "", "math"];
SocialCalc.Formula.FunctionList.MOD = [SocialCalc.Formula.Math2Functions, 2, "", "", "math"];
SocialCalc.Formula.FunctionList.POWER = [SocialCalc.Formula.Math2Functions, 2, "", "", "math"];
SocialCalc.Formula.FunctionList.TRUNC = [SocialCalc.Formula.Math2Functions, 2, "valpre", "", "math"];
SocialCalc.Formula.LogFunction = function(a, b, c, d) {
  var e, f = {}, g = SocialCalc.Formula;
  f.value = 0;
  e = g.OperandAsNumber(d, c);
  f.type = g.LookupResultType(e.type, e.type, g.TypeLookupTable.oneargnumeric);
  if (1 == c.length) {
    if (c = g.OperandAsNumber(d, c), "n" != c.type.charAt(0) || 0 >= c.value) {
      return g.FunctionSpecificError(a, b, "e#NUM!", SocialCalc.Constants.s_sheetfunclogsecondarg), 0;
    }
  } else {
    if (0 != c.length) {
      return g.FunctionArgsError(a, b), 0;
    }
    c = {value:Math.E, type:"n"};
  }
  if ("n" == f.type) {
    if (0 >= e.value) {
      return g.FunctionSpecificError(a, b, "e#NUM!", SocialCalc.Constants.s_sheetfunclogfirstarg), 0;
    }
    f.value = Math.log(e.value) / Math.log(c.value);
  }
  b.push(f);
};
SocialCalc.Formula.FunctionList.LOG = [SocialCalc.Formula.LogFunction, -1, "log", "", "math"];
SocialCalc.Formula.RoundFunction = function(a, b, c, d) {
  var e, f, g = SocialCalc.Formula;
  f = 0;
  var l = "e#VALUE!";
  e = g.OperandValueAndType(d, c);
  l = g.LookupResultType(e.type, e.type, g.TypeLookupTable.oneargnumeric);
  if (1 == c.length) {
    if (c = g.OperandValueAndType(d, c), "n" != c.type.charAt(0)) {
      return g.FunctionSpecificError(a, b, "e#NUM!", SocialCalc.Constants.s_sheetfuncroundsecondarg), 0;
    }
  } else {
    if (0 != c.length) {
      return g.FunctionArgsError(a, b), 0;
    }
    c = {value:0, type:"n"};
  }
  if ("n" == l) {
    if (c.value -= 0, 0 == c.value) {
      f = Math.round(e.value);
    } else {
      if (0 < c.value) {
        a = 1;
        c.value = Math.floor(c.value);
        for (f = 0;f < c.value;f++) {
          a *= 10;
        }
        e = Math.round(e.value * a);
        f = e / a;
      } else {
        if (0 > c.value) {
          a = 1;
          c.value = Math.floor(-c.value);
          for (f = 0;f < c.value;f++) {
            a *= 10;
          }
          e = Math.round(e.value / a);
          f = e * a;
        }
      }
    }
  }
  g.PushOperand(b, l, f);
};
SocialCalc.Formula.FunctionList.ROUND = [SocialCalc.Formula.RoundFunction, -1, "vp", "", "math"];
SocialCalc.Formula.CeilingFloorFunctions = function(a, b, c, d) {
  var e = SocialCalc.Formula, f, g, l = function(a, c) {
    b.push({type:a, value:c});
  };
  f = e.OperandValueAndType(d, c);
  g = f.type.charAt(0);
  if ("n" != g) {
    l("e#VALUE!", 0);
  } else {
    if (0 == f.value) {
      l("n", 0);
    } else {
      if (1 == c.length) {
        if (c = e.OperandValueAndType(d, c), g = f.type.charAt(0), "n" != g) {
          l("e#VALUE!", 0);
          return;
        }
      } else {
        if (0 == c.length) {
          c = {type:"n", value:0 < f.value ? 1 : -1};
        } else {
          l("e#VALUE!", 0);
          return;
        }
      }
      if (0 == c.value) {
        l("n", 0);
      } else {
        if (0 > c.value * f.value) {
          l("e#NUM!", 0);
        } else {
          switch(a) {
            case "CEILING":
              l("n", Math.ceil(f.value / c.value) * c.value);
              break;
            case "FLOOR":
              l("n", Math.floor(f.value / c.value) * c.value);
          }
        }
      }
    }
  }
};
SocialCalc.Formula.FunctionList.CEILING = [SocialCalc.Formula.CeilingFloorFunctions, -1, "vsig", "", "math"];
SocialCalc.Formula.FunctionList.FLOOR = [SocialCalc.Formula.CeilingFloorFunctions, -1, "vsig", "", "math"];
SocialCalc.Formula.AndOrFunctions = function(a, b, c, d) {
  var e, f, g = SocialCalc.Formula, l = "";
  for ("AND" == a ? f = 1 : "OR" == a && (f = 0);c.length;) {
    e = g.OperandValueAndType(d, c), "n" == e.type.charAt(0) ? (e.value -= 0, "AND" == a ? f = 0 != e.value ? f : 0 : "OR" == a && (f = 0 != e.value ? 1 : f), l = g.LookupResultType(e.type, l || "nl", g.TypeLookupTable.propagateerror)) : "e" == e.type.charAt(0) && "e" != l.charAt(0) && (l = e.type);
  }
  1 > l.length && (l = "e#VALUE!", f = 0);
  g.PushOperand(b, l, f);
};
SocialCalc.Formula.FunctionList.AND = [SocialCalc.Formula.AndOrFunctions, -1, "vn", "", "test"];
SocialCalc.Formula.FunctionList.OR = [SocialCalc.Formula.AndOrFunctions, -1, "vn", "", "test"];
SocialCalc.Formula.NotFunction = function(a, b, c, d) {
  a = 0;
  var e = SocialCalc.Formula;
  c = e.OperandValueAndType(d, c);
  d = e.LookupResultType(c.type, c.type, e.TypeLookupTable.propagateerror);
  "n" == c.type.charAt(0) || "b" == c.type ? (a = 0 != c.value - 0 ? 0 : 1, d = "nl") : "t" == c.type.charAt(0) && (d = "e#VALUE!");
  e.PushOperand(b, d, a);
};
SocialCalc.Formula.FunctionList.NOT = [SocialCalc.Formula.NotFunction, 1, "v", "", "test"];
SocialCalc.Formula.ChooseFunction = function(a, b, c, d) {
  var e, f, g = 0, l = SocialCalc.Formula, h = l.OperandAsNumber(d, c);
  "n" != h.type.charAt(0) && (h.value = 0);
  h.value = Math.floor(h.value);
  for (a = 0;c.length;) {
    if (f = l.TopOfStackValueAndType(d, c), a += 1, h.value == a) {
      g = f.value;
      e = f.type;
      break;
    }
  }
  e ? l.PushOperand(b, e, g) : l.PushOperand(b, "e#VALUE!", 0);
};
SocialCalc.Formula.FunctionList.CHOOSE = [SocialCalc.Formula.ChooseFunction, -2, "choose", "", "lookup"];
SocialCalc.Formula.ColumnsRowsFunctions = function(a, b, c, d) {
  var e = 0, f = SocialCalc.Formula;
  c = f.TopOfStackValueAndType(d, c);
  "coord" == c.type ? (e = 1, a = "n") : "range" == c.type ? (d = f.DecodeRangeParts(d, c.value), "COLUMNS" == a ? e = d.ncols : "ROWS" == a && (e = d.nrows), a = "n") : (e = 0, a = "e#VALUE!");
  f.PushOperand(b, a, e);
};
SocialCalc.Formula.FunctionList.COLUMNS = [SocialCalc.Formula.ColumnsRowsFunctions, 1, "range", "", "lookup"];
SocialCalc.Formula.FunctionList.ROWS = [SocialCalc.Formula.ColumnsRowsFunctions, 1, "range", "", "lookup"];
SocialCalc.Formula.ZeroArgFunctions = function(a, b, c, d) {
  c = {value:0};
  switch(a) {
    case "FALSE":
      c.type = "nl";
      c.value = 0;
      break;
    case "NA":
      c.type = "e#N/A";
      break;
    case "NOW":
      a = new Date;
      d = a.getTimezoneOffset();
      a = a.getTime() / 1E3;
      c.value = 25569 + a / 86400 - d / 1440;
      c.type = "ndt";
      SocialCalc.Formula.FreshnessInfo["volatile"].NOW = !0;
      break;
    case "PI":
      c.type = "n";
      c.value = Math.PI;
      break;
    case "TODAY":
      a = new Date;
      d = a.getTimezoneOffset();
      a = a.getTime() / 1E3;
      c.value = Math.floor(25569 + a / 86400 - d / 1440);
      c.type = "nd";
      SocialCalc.Formula.FreshnessInfo["volatile"].TODAY = !0;
      break;
    case "TRUE":
      c.type = "nl", c.value = 1;
  }
  b.push(c);
  return null;
};
SocialCalc.Formula.FunctionList.FALSE = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "test"];
SocialCalc.Formula.FunctionList.NA = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "test"];
SocialCalc.Formula.FunctionList.NOW = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "datetime"];
SocialCalc.Formula.FunctionList.PI = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "math"];
SocialCalc.Formula.FunctionList.TODAY = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "datetime"];
SocialCalc.Formula.FunctionList.TRUE = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "test"];
SocialCalc.Formula.DDBFunction = function(a, b, c, d) {
  var e, f = SocialCalc.Formula, g = f.OperandAsNumber(d, c), l = f.OperandAsNumber(d, c), h = f.OperandAsNumber(d, c), p = f.OperandAsNumber(d, c);
  if (!(f.CheckForErrorValue(b, g) || f.CheckForErrorValue(b, l) || f.CheckForErrorValue(b, h) || f.CheckForErrorValue(b, p))) {
    if (1 > h.value) {
      return f.FunctionSpecificError(a, b, "e#NUM!", SocialCalc.Constants.s_sheetfuncddblife), 0;
    }
    e = {value:2, type:"n"};
    0 < c.length && (e = f.OperandAsNumber(d, c));
    if (0 != c.length) {
      return f.FunctionArgsError(a, b), 0;
    }
    if (!f.CheckForErrorValue(b, e)) {
      c = a = 0;
      for (d = 1;d <= p.value - 0 && d <= h.value;d++) {
        a = e.value / h.value * (g.value - c), g.value - c - a < l.value && (a = g.value - c - l.value), c += a;
      }
      f.PushOperand(b, "n$", a);
    }
  }
};
SocialCalc.Formula.FunctionList.DDB = [SocialCalc.Formula.DDBFunction, -4, "ddb", "", "financial"];
SocialCalc.Formula.SLNFunction = function(a, b, c, d) {
  var e = SocialCalc.Formula, f = e.OperandAsNumber(d, c), g = e.OperandAsNumber(d, c);
  c = e.OperandAsNumber(d, c);
  if (!e.CheckForErrorValue(b, f) && !e.CheckForErrorValue(b, g) && !e.CheckForErrorValue(b, c)) {
    if (1 > c.value) {
      return e.FunctionSpecificError(a, b, "e#NUM!", SocialCalc.Constants.s_sheetfuncslnlife), 0;
    }
    a = (f.value - g.value) / c.value;
    e.PushOperand(b, "n$", a);
  }
};
SocialCalc.Formula.FunctionList.SLN = [SocialCalc.Formula.SLNFunction, 3, "csl", "", "financial"];
SocialCalc.Formula.SYDFunction = function(a, b, c, d) {
  var e;
  a = SocialCalc.Formula;
  e = a.OperandAsNumber(d, c);
  var f = a.OperandAsNumber(d, c), g = a.OperandAsNumber(d, c);
  d = a.OperandAsNumber(d, c);
  if (!(a.CheckForErrorValue(b, e) || a.CheckForErrorValue(b, f) || a.CheckForErrorValue(b, g) || a.CheckForErrorValue(b, d))) {
    if (1 > g.value || 0 >= d.value) {
      return a.PushOperand(b, "e#NUM!", 0), 0;
    }
    c = (g.value + 1) * g.value / 2;
    e = (e.value - f.value) * (g.value - d.value + 1) / c;
    a.PushOperand(b, "n$", e);
  }
};
SocialCalc.Formula.FunctionList.SYD = [SocialCalc.Formula.SYDFunction, 4, "cslp", "", "financial"];
SocialCalc.Formula.InterestFunctions = function(a, b, c, d) {
  var e, f, g, l, h, p, q, w, v, s = SocialCalc.Formula, t = s.OperandAsNumber(d, c);
  q = s.OperandAsNumber(d, c);
  p = s.OperandAsNumber(d, c);
  e = s.LookupResultType(t.type, q.type, s.TypeLookupTable.twoargnumeric);
  e = s.LookupResultType(e, p.type, s.TypeLookupTable.twoargnumeric);
  if (c.length && (g = s.OperandAsNumber(d, c), e = s.LookupResultType(e, g.type, s.TypeLookupTable.twoargnumeric), c.length && (l = s.OperandAsNumber(d, c), e = s.LookupResultType(e, l.type, s.TypeLookupTable.twoargnumeric), c.length))) {
    if ("RATE" != a) {
      return s.FunctionArgsError(a, b), 0;
    }
    h = s.OperandAsNumber(d, c);
    e = s.LookupResultType(e, h.type, s.TypeLookupTable.twoargnumeric);
  }
  if ("n" == e) {
    switch(a) {
      case "FV":
        h = t.value;
        a = q.value;
        q = p.value;
        p = null != g ? g.value : 0;
        l = null != l ? l.value ? 1 : 0 : 0;
        f = g = 0 == h ? -p - q * a : -(p * Math.pow(1 + h, a) + q * (1 + h * l) * (Math.pow(1 + h, a) - 1) / h);
        e = "n$";
        break;
      case "NPER":
        h = t.value;
        q = q.value;
        p = p.value;
        g = null != g ? g.value : 0;
        l = null != l ? l.value ? 1 : 0 : 0;
        if (0 == h) {
          if (0 == q) {
            s.PushOperand(b, "e#NUM!", 0);
            return;
          }
          a = (p + g) / -q;
        } else {
          w = q * (1 + h * l) / h;
          v = p + w;
          if (0 == v || -1 >= h) {
            s.PushOperand(b, "e#NUM!", 0);
            return;
          }
          w = (w - g) / v;
          if (0 >= w) {
            s.PushOperand(b, "e#NUM!", 0);
            return;
          }
          w = Math.log(w);
          v = Math.log(1 + h);
          a = w / v;
        }
        f = a;
        e = "n";
        break;
      case "PMT":
        h = t.value;
        a = q.value;
        p = p.value;
        g = null != g ? g.value : 0;
        l = null != l ? l.value ? 1 : 0 : 0;
        if (0 == a) {
          s.PushOperand(b, "e#NUM!", 0);
          return;
        }
        f = q = 0 == h ? (g - p) / a : (0 - g - p * Math.pow(1 + h, a)) / ((1 + h * l) * (Math.pow(1 + h, a) - 1) / h);
        e = "n$";
        break;
      case "PV":
        h = t.value;
        a = q.value;
        q = p.value;
        g = null != g ? g.value : 0;
        l = null != l ? l.value ? 1 : 0 : 0;
        if (-1 == h) {
          s.PushOperand(b, "e#DIV/0!", 0);
          return;
        }
        f = p = 0 == h ? -g - q * a : (-g - q * (1 + h * l) * (Math.pow(1 + h, a) - 1) / h) / Math.pow(1 + h, a);
        e = "n$";
        break;
      case "RATE":
        a = t.value;
        q = q.value;
        p = p.value;
        g = null != g ? g.value : 0;
        l = null != l ? l.value ? 1 : 0 : 0;
        h = null != h ? h.value : 0.1;
        c = 0;
        delta = 1;
        epsilon = 1E-7;
        for (h = h || 1E-8;(0 <= delta ? delta : -delta) > epsilon && h != w;) {
          if (delta = g + p * Math.pow(1 + h, a) + q * (1 + h * l) * (Math.pow(1 + h, a) - 1) / h, null != v ? (v = (delta - v) / (h - w) || 0.001, w = h, h -= delta / v) : (w = h, h *= 1.1), v = delta, c++, 100 <= c) {
            s.PushOperand(b, "e#NUM!", 0);
            return;
          }
        }
        f = h;
        e = "n%";
    }
  }
  s.PushOperand(b, e, f);
};
SocialCalc.Formula.FunctionList.FV = [SocialCalc.Formula.InterestFunctions, -3, "fv", "", "financial"];
SocialCalc.Formula.FunctionList.NPER = [SocialCalc.Formula.InterestFunctions, -3, "nper", "", "financial"];
SocialCalc.Formula.FunctionList.PMT = [SocialCalc.Formula.InterestFunctions, -3, "pmt", "", "financial"];
SocialCalc.Formula.FunctionList.PV = [SocialCalc.Formula.InterestFunctions, -3, "pv", "", "financial"];
SocialCalc.Formula.FunctionList.RATE = [SocialCalc.Formula.InterestFunctions, -3, "rate", "", "financial"];
SocialCalc.Formula.NPVFunction = function(a, b, c, d) {
  var e, f, g, l, h = SocialCalc.Formula;
  e = h.OperandAsNumber(d, c);
  if (!h.CheckForErrorValue(b, e)) {
    f = 0;
    a = "n";
    for (g = 1;c.length;) {
      if (l = h.OperandValueAndType(d, c), "n" == l.type.charAt(0)) {
        g *= 1 + e.value;
        if (0 == g) {
          h.PushOperand(b, "e#DIV/0!", 0);
          return;
        }
        f += l.value / g;
        a = h.LookupResultType(l.type, a || l.type, h.TypeLookupTable.plus);
      } else {
        if ("e" == l.type.charAt(0) && "e" != a.charAt(0)) {
          a = l.type;
          break;
        }
      }
    }
    "n" == a.charAt(0) && (a = "n$");
    h.PushOperand(b, a, f);
  }
};
SocialCalc.Formula.FunctionList.NPV = [SocialCalc.Formula.NPVFunction, -2, "npv", "", "financial"];
SocialCalc.Formula.IRRFunction = function(a, b, c, d) {
  var e, f, g, l;
  l = [];
  var h = [], p = SocialCalc.Formula;
  for (l.push(c.pop());l.length;) {
    if (e = p.OperandValueAndType(d, l), "n" == e.type.charAt(0)) {
      h.push(e.value);
    } else {
      if ("e" == e.type.charAt(0)) {
        p.PushOperand(b, "e#VALUE!", 0);
        return;
      }
    }
  }
  if (h.length) {
    e = {value:0};
    if (c.length) {
      e = p.OperandAsNumber(d, c);
      if ("n" != e.type.charAt(0) && "b" != e.type.charAt(0)) {
        p.PushOperand(b, "e#VALUE!", 0);
        return;
      }
      if (c.length) {
        p.FunctionArgsError(a, b);
        return;
      }
    }
    e.value = e.value || 0.1;
    a = 0;
    c = e.value;
    for (d = 1;1E-7 < (0 <= d ? d : -d) && c != g;) {
      d = 0;
      e = 1;
      for (l = 0;l < h.length;l++) {
        e *= 1 + c;
        if (0 == e) {
          p.PushOperand(b, "e#DIV/0!", 0);
          return;
        }
        d += h[l] / e;
      }
      null != f ? (f = (d - f) / (c - g), g = c, c -= d / f) : (g = c, c *= 1.1);
      f = d;
      a++;
      if (20 <= a) {
        p.PushOperand(b, "e#NUM!", 0);
        return;
      }
    }
    p.PushOperand(b, "n%", c);
  } else {
    p.PushOperand(b, "e#NUM!", 0);
  }
};
SocialCalc.Formula.FunctionList.IRR = [SocialCalc.Formula.IRRFunction, -1, "irr", "", "financial"];
SocialCalc.Formula.IoFunctions = function(a, b, c, d, e) {
  var f, g, l = SocialCalc.Formula, h = 0, p = "e#VALUE!", q = c.length, w = {BUTTON:[2], IMAGEBUTTON:[2], EMAIL:[14, 14, 14, 14], EMAILIF:[13, 14, 14, 14, 14], EMAILONEDIT:[14, 14, 14, 14, 14], EMAILAT:[13, 14, 14, 14, 14], EMAILONEDITIF:[14, 13, 14, 14, 14, 14], EMAILATIF:[13, 13, 14, 14, 14, 14], SUBMIT:[2], TEXTBOX:[2], AUTOCOMPLETE:[2, 14], SELECT:[2, 14, 1, 1], CHECKBOX:[3], RADIOBUTTON:[2, 2], COPYVALUE:[4, 12, 15], COPYFORMULA:[4, 12, 12], INSERT:[4, 8, -12, -15], DELETEIF:[4, 7, 8], COMMAND:[4, 
  14], COMMANDIF:[4, 13, 14], PANEL:[15, -12], SPLASH:[12], STYLE:[6]}[a], v = [], s = [], t = -1, x, m;
  for (f = 1;f <= q;f++) {
    if (-1 != t) {
      m = Math.abs(w[x + (f - 1 - x) % t]);
    } else {
      if (f > w.length) {
        l.FunctionArgsError(a, b);
        return;
      }
      m = w[f - 1];
      0 > m && (t = w.length - (f - 1), x = f - 1, m = Math.abs(m));
    }
    if (1 == m) {
      g = l.OperandAsNumber(d, c);
    } else {
      if (2 == m) {
        g = l.OperandAsText(d, c);
      } else {
        if (3 == m) {
          g = l.OperandValueAndType(d, c);
        } else {
          var r = c[c.length - 1].type, u = !1;
          if ("n" == r.charAt(0) && 0 != (m & 1) || "t" == r.charAt(0) && 0 != (m & 2)) {
            u = !0, g = l.OperandValueAndType(d, c);
          }
          "coord" == r && 0 != (m & 4) && (u = !0, g = l.OperandAsCoord(d, c), g.value = SocialCalc.Formula.PlainCoord(g.value));
          "range" == r && 0 != (m & 8) && (u = !0, g = l.OperandAsRange(d, c), g.value = SocialCalc.Formula.PlainCoord(g.value));
          if (!1 == u) {
            l.FunctionArgsError(a, b);
            return;
          }
        }
      }
    }
    v[f] = g.value;
    s[f] = g.type;
    if ("e" == g.type.charAt(0)) {
      l.PushOperand(b, g.type, h);
      return;
    }
  }
  switch(a) {
    case "STYLE":
      var y = d.ioParameterList[e];
      y && (h = SocialCalc.Formula.getStandardizedList(d, {value:v[1], type:s[1]}), 0 < h.length && (y.css = h[0], y.cssParameter = "t" == s[1] ? '"' + v[1] + '"' : v[1]), h = "", p = "ni");
      break;
    case "SELECT":
      y = d.ioParameterList[e];
      h = SocialCalc.Formula.getStandardizedList(d, y[1]);
      y.html = [];
      y.html[0] = !0 == v[4] ? "multiple" : "";
      y.html[1] = v[3] ? "" + v[3] : "1";
      0 < h.length && (h = "<option>" + h.join("</option><option>") + "</option>", y.html[2] = h.replace(RegExp("<option>" + v[1], ""), "<option selected>" + v[1]));
      h = v[1];
      p = "ti" + a;
      break;
    case "SUBMIT":
      h = "Submit";
    case "BUTTON":
    ;
    case "IMAGEBUTTON":
    ;
    case "TEXTBOX":
    ;
    case "AUTOCOMPLETE":
      0 < q && (h = v[1]);
      p = "ti" + a;
      break;
    case "EMAIL":
    ;
    case "EMAILIF":
      p = "ti" + a;
      h = "Send";
      break;
    case "EMAILONEDIT":
    ;
    case "EMAILONEDITIF":
    ;
    case "EMAILAT":
    ;
    case "EMAILATIF":
      p = "ti" + a;
      h = "Send Now";
      break;
    case "CHECKBOX":
    ;
    case "RADIOBUTTON":
      h = "t" == s[1].charAt(0) ? "TRUE" == v[1].toUpperCase() ? 1 : 0 : 0 == v[1] ? 0 : 1;
      p = "ni" + a;
      break;
    case "COPYVALUE":
    ;
    case "COPYFORMULA":
    ;
    case "INSERT":
    ;
    case "DELETEIF":
    ;
    case "COMMAND":
    ;
    case "COMMANDIF":
      v = d.cells[v[1]];
      if ("undefined" === typeof v) {
        break;
      }
      h = v.datavalue;
      h = String(h).split("/");
      h = h[h.length - 1];
      p = "t";
      break;
    case "PANEL":
    ;
    case "SPLASH":
      f = 2;
      if ("SPLASH" == a) {
        h = "SPLASH:" + v[1];
        p = "t";
        if (!0 == d.splashdone) {
          break;
        }
        d.splashdone = !0;
        f = 1;
        e = [0];
      } else {
        e = SocialCalc.Formula.getStandardizedList(d, {value:v[1], type:s[1]}), h = a + ":" + e;
      }
      p = "t";
      if (SocialCalc._app) {
        a = [];
        c = [];
        for (g = f;g < v.length;++g) {
          f = !1;
          for (y in e) {
            if (e[y] == g - 1) {
              f = !0;
              break;
            }
          }
          if (!1 !== f) {
            q = SocialCalc.Formula.getStandardizedCoords(d, {value:v[g], type:s[g]});
            for (f = 0;f < q.ncols;f++) {
              c[q.col1num + f] = !0;
            }
            for (f = 0;f < q.nrows;f++) {
              a[q.row1num + f] = !0;
            }
          }
        }
        v = window.spreadsheet;
        null == v && (v = window.ss);
        var z = !1, A = 0, s = function(a, b, c, m, d) {
          for (a = 1;a <= b;a++) {
            var e = d(a);
            "undefined" == typeof c[e] ? !0 !== m[a] ? (c[e] = "yes", z = !0) : A = a : !0 === m[a] && (delete c[e], z = !0, A = a);
          }
        };
        s(d, d.attribs.lastrow, d.rowattribs.hide, a, function(a) {
          return a;
        });
        A = 0;
        s(d, d.attribs.lastcol, d.colattribs.hide, c, SocialCalc.rcColname);
        d.attribs.usermaxcol = A;
        z && (d.renderneeded = !0, d.widgetsClean = !1, v.editor.context.rowpanes[0].first = 1, v.editor.context.CalculateColWidthData(), v.width = v.editor.context.totalwidth, v.height = 2500, v.editor.ResizeTableEditor(v.editor.context.totalwidth, 2500));
      }
    ;
  }
  l.PushOperand(b, p, h);
};
SocialCalc.Formula.FunctionList.BUTTON = [SocialCalc.Formula.IoFunctions, 1, "label", "", "gui", "<button type='button' onclick=\"SocialCalc.TriggerIoAction.Button('<%=cell_reference%>');\"><%=formated_value%></button>", "ParameterList"];
SocialCalc.Formula.FunctionList.IMAGEBUTTON = [SocialCalc.Formula.IoFunctions, 1, "imageurl", "", "gui", "<input type='image' src='<%=display_value%>' alt='Submit' onclick=\"SocialCalc.TriggerIoAction.Button('<%=cell_reference%>');\">", "ParameterList"];
SocialCalc.Formula.FunctionList.EMAIL = [SocialCalc.Formula.IoFunctions, -3, "to_range subject_range, body_range", "", "action", "<button type='button' onclick=\"SocialCalc.TriggerIoAction.Email('<%=cell_reference%>');\"><%=formated_value%></button>", "ParameterList"];
SocialCalc.Formula.FunctionList.EMAILIF = [SocialCalc.Formula.IoFunctions, -4, "condition_range, to_range subject_range, body_range", "", "action", "<button type='button' onclick=\"SocialCalc.TriggerIoAction.Email('<%=cell_reference%>');\"><%=formated_value%></button>", "ParameterList"];
SocialCalc.Formula.FunctionList.EMAILONEDIT = [SocialCalc.Formula.IoFunctions, -4, "editRange, to_range subject_range, body_range", "", "action", "<button type='button' onclick=\"SocialCalc.TriggerIoAction.Email('<%=cell_reference%>');\"><%=formated_value%></button>", "EventTree"];
SocialCalc.Formula.FunctionList.EMAILAT = [SocialCalc.Formula.IoFunctions, -4, "datetime_value, to_range subject_range, body_range", "", "action", "<button type='button' onclick=\"SocialCalc.TriggerIoAction.Email('<%=cell_reference%>');\"><%=formated_value%></button>", "TimeTrigger"];
SocialCalc.Formula.FunctionList.EMAILONEDITIF = [SocialCalc.Formula.IoFunctions, -5, "editRange, condition, to_range subject_range, body_range", "", "action", "<button type='button' onclick=\"SocialCalc.TriggerIoAction.Email('<%=cell_reference%>');\"><%=formated_value%></button>", "EventTree"];
SocialCalc.Formula.FunctionList.EMAILATIF = [SocialCalc.Formula.IoFunctions, -5, "datetime_value, condition, to_range subject_range, body_range", "", "action", "<button type='button' onclick=\"SocialCalc.TriggerIoAction.Email('<%=cell_reference%>');\"><%=formated_value%></button>", "TimeTrigger"];
SocialCalc.Formula.FunctionList.SUBMIT = [SocialCalc.Formula.IoFunctions, 100, "[label]", "", "action", "<button type='button' onclick=\"SocialCalc.TriggerIoAction.Submit('<%=cell_reference%>');\"><%=formated_value%></button>", "ParameterList"];
SocialCalc.Formula.FunctionList.TEXTBOX = [SocialCalc.Formula.IoFunctions, 1, "value", "", "gui", "<input type='text' id='TEXTBOX_<%=cell_reference%>' onblur='SocialCalc.CmdGotFocus(null);' oninput=\"SocialCalc.TriggerIoAction.TextBox('<%=cell_reference%>')\" value='<%=display_value%>' >", "Input"];
SocialCalc.Formula.FunctionList.AUTOCOMPLETE = [SocialCalc.Formula.IoFunctions, 2, "value, range or csv_text", "", "gui", "<input type='text' id='AUTOCOMPLETE_<%=cell_reference%>' onfocus=\"SocialCalc.TriggerIoAction.AddAutocomplete('<%=cell_reference%>');\" onblur='SocialCalc.CmdGotFocus(null);' value='<%=display_value%>' >", "Input"];
SocialCalc.Formula.FunctionList.SELECT = [SocialCalc.Formula.IoFunctions, -2, "value, range or csv_text [,size]", "", "gui", "<select size='<%=html1_value%>' id='SELECT_<%=cell_reference%>' onchange=\"SocialCalc.TriggerIoAction.SelectList('<%=cell_reference%>')\" <%=html0_value%>><%=html2_value%></select>", "Input"];
SocialCalc.Formula.FunctionList.CHECKBOX = [SocialCalc.Formula.IoFunctions, 1, "value", "", "gui", "<input type='checkbox' id='CHECKBOX_<%=cell_reference%>' <%=checked%> onblur='SocialCalc.CmdGotFocus(null);' onchange=\"SocialCalc.TriggerIoAction.CheckBox('<%=cell_reference%>')\" >", "Input"];
SocialCalc.Formula.FunctionList.RADIOBUTTON = [SocialCalc.Formula.IoFunctions, 2, "value, groupname", "", "gui", "<input type='radio' value='<%=cell_reference%>' id='RADIOBUTTON_<%=cell_reference%>' <%=checked%> name='<%=parameter1_value%>' onblur=\"SocialCalc.CmdGotFocus(null);\" onclick=\"SocialCalc.TriggerIoAction.RadioButton('<%=parameter1_value%>');\" >", "Input"];
SocialCalc.Formula.FunctionList.COPYVALUE = [SocialCalc.Formula.IoFunctions, 3, "trigger_cell, destinationCell, value_or_range", "", "action", "", "EventTree"];
SocialCalc.Formula.FunctionList.COPYFORMULA = [SocialCalc.Formula.IoFunctions, 3, "trigger_cell, destinationCell, formula_range", "", "action", "", "EventTree"];
SocialCalc.Formula.FunctionList.INSERT = [SocialCalc.Formula.IoFunctions, -2, "trigger_cell, destination_range [,formula_range,value_or_range,formula_range, ...]", "", "action", "", "EventTree"];
SocialCalc.Formula.FunctionList.DELETEIF = [SocialCalc.Formula.IoFunctions, -1, "trigger_cell, criteria , test_range", "", "action", "", "EventTree"];
SocialCalc.Formula.FunctionList.COMMAND = [SocialCalc.Formula.IoFunctions, -1, "trigger_cell, commands", "", "action", "", "EventTree"];
SocialCalc.Formula.FunctionList.COMMANDIF = [SocialCalc.Formula.IoFunctions, -1, "trigger_cell, conditions, commands", "", "action", "", "EventTree"];
SocialCalc.Formula.FunctionList.PANEL = [SocialCalc.Formula.IoFunctions, -1, "showindices_range_or_csv, panel1_range [, panel2_range , ...]", "", "gui", ""];
SocialCalc.Formula.FunctionList.SPLASH = [SocialCalc.Formula.IoFunctions, -1, "splash_panel_range", "", "gui", ""];
SocialCalc.Formula.FunctionList.STYLE = [SocialCalc.Formula.IoFunctions, -1, "css", "", "gui", ""];
SocialCalc.TriggerIoAction.AddAutocomplete = function(a) {
  var b = window.spreadsheet;
  null == b && (b = window.ss);
  var b = b.sheet, c = b.ioParameterList[a];
  "undefined" !== typeof c && (b = SocialCalc.Formula.getStandardizedList(b, c[1]), $.ui.autocomplete.filter = function(a, b) {
    var c = RegExp("\\b" + $.ui.autocomplete.escapeRegex(b), "i");
    return $.grep(a, function(a) {
      return c.test(a.label || a.value || a);
    });
  }, $("#AUTOCOMPLETE_" + a).autocomplete({source:b, minLength:1, autoFocus:!0, select:function(b, c) {
    $(this).val(c.item.label);
    SocialCalc.TriggerIoAction.AutoComplete(a);
  }, change:function(b, c) {
    null === c.item && $(this).val("");
    SocialCalc.TriggerIoAction.AutoComplete(a);
  }}));
};
SocialCalc.TriggerIoAction.Button = function(a) {
  var b = window.spreadsheet;
  null == b && (b = window.ss);
  var c = b.sheet;
  if ("undefined" !== typeof c.ioEventTree && "undefined" !== typeof c.ioParameterList && "undefined" !== c.ioEventTree[a]) {
    for (var d in c.ioEventTree[a]) {
      var e = c.ioParameterList[d], f = null;
      switch(e.function_name) {
        case "COPYVALUE":
          var g = SocialCalc.Formula.getStandardizedValues(c, e[2]), f = SocialCalc.coordToCr(e[1].value);
          a = SocialCalc.TriggerIoAction.CopyValueToRange(g, f);
          b.editor.EditorScheduleSheetCommands(a, !0, !1);
          break;
        case "COPYFORMULA":
          g = SocialCalc.Formula.getStandardizedValues(c, e[2]);
          f = SocialCalc.coordToCr(e[1].value);
          a = SocialCalc.TriggerIoAction.CopyFormulaToRange(g, f);
          b.editor.EditorScheduleSheetCommands(a, !0, !1);
          break;
        case "INSERT":
          g = SocialCalc.Formula.getStandardizedValues(c, e[1]);
          if ("range" != g.type) {
            break;
          }
          var l, h, p;
          1 < g.ncols && (h = 1, p = 0, l = "insertcol");
          1 < g.nrows && (h = 0, p = 1, l = "insertrow");
          f = g.cellcoord[h][p];
          a = l + " " + f;
          for (var f = SocialCalc.coordToCr(f), q = 2;q < e.length;) {
            if ("range" == e[q].type || "coord" == e[q].type || 1 == q % 2) {
              copyCellRange = SocialCalc.Formula.getStandardizedValues(c, e[q]), a = 0 == q % 2 ? a + "\n" + SocialCalc.TriggerIoAction.CopyFormulaToRange(copyCellRange, f) : a + "\n" + SocialCalc.TriggerIoAction.CopyValueToRange(copyCellRange, f), 1 < g.nrows && (f.col += copyCellRange.ncols), 1 < g.ncols && (f.row += copyCellRange.nrows);
            }
            q++;
          }
          b.editor.EditorScheduleSheetCommands(a, !0, !1);
          break;
        case "DELETEIF":
          g = SocialCalc.Formula.getStandardizedValues(c, e[1]);
          f = SocialCalc.Formula.getStandardizedValues(c, e[2]);
          a = "";
          var w;
          if (1 < f.ncols && 1 < f.nrows) {
            return;
          }
          1 < f.ncols && (h = 1, p = 0, w = "deletecol");
          1 < f.nrows && (h = 0, p = 1, w = "deleterow");
          q = g.celldata[0][0].datavalue;
          for (e = f.ncols - h - 1;e >= h;e--) {
            for (g = f.nrows - p - 1;g >= p;g--) {
              var v = f.celldata[e][g];
              !0 == SocialCalc.Formula.TestCriteria(v.datavalue, v.valuetype, q) && ("" != a && (a += "\n"), a = a + w + " " + f.cellcoord[e][g]);
            }
          }
          "" != a && b.editor.EditorScheduleSheetCommands(a, !0, !1);
          break;
        case "COMMANDIF":
          f = SocialCalc.Formula.getStandardizedValues(c, e[1]);
        case "COMMAND":
          a = "";
          if (null != f) {
            if (q = SocialCalc.Formula.getStandardizedValues(c, e[2]), f.ncols != q.ncols || f.nrows != q.nrows) {
              break;
            }
          } else {
            q = SocialCalc.Formula.getStandardizedValues(c, e[1]);
          }
          for (e = 0;e < q.ncols;e++) {
            for (g = 0;g < q.nrows;g++) {
              if (null == f || !1 != f.celldata[e][g].datavalue) {
                "" != a && (a += "\n"), a += q.celldata[e][g].datavalue.toString().trim();
              }
            }
          }
          "" != a && b.editor.EditorScheduleSheetCommands(a, !0, !1);
      }
    }
  }
};
SocialCalc.TriggerIoAction.CopyFormulaToRange = function(a, b) {
  for (var c = "", d, e = 0;e < a.ncols;e++) {
    for (var f = 0;f < a.nrows;f++) {
      var g = a.celldata[e][f];
      d = SocialCalc.crToCoord(b.col + e, b.row + f);
      if (0 != e || 0 != f) {
        c += "\n";
      }
      if ("undefined" !== typeof g && "b" != g.valuetype) {
        var l = g.datatype, h = g.valuetype, p = g.datavalue, g = g.formula;
        "f" == l ? (g = SocialCalc.OffsetFormulaCoords(g, b.col - a.col1num, b.row - a.row1num), h = p = "") : "c" != l && (g = "");
        d = "set " + d + " " + SocialCalc.Constants.cellDataType[l] + " " + h + " " + SocialCalc.encodeForSave(p) + " " + g;
      } else {
        d = "set " + d + " empty";
      }
      c += d.trim();
    }
  }
  return c;
};
SocialCalc.TriggerIoAction.CopyValueToRange = function(a, b) {
  for (var c = "", d, e = 0;e < a.ncols;e++) {
    for (var f = 0;f < a.nrows;f++) {
      d = a.celldata[e][f];
      var g = SocialCalc.crToCoord(b.col + e, b.row + f);
      if (0 != e || 0 != f) {
        c += "\n";
      }
      if ("undefined" !== typeof d && "b" != d.valuetype) {
        var l = d.datatype, h = d.valuetype, p = d.datavalue, q = d.formula;
        "f" == l ? (q = "", l = h, "n" != h && "t" != h.charAt(0) && (l = "c", q = d.displaystring), "t" == h.charAt(0) && (l = "t")) : "c" != l && (q = "");
        d = "set " + g + " " + SocialCalc.Constants.cellDataType[l] + " " + h + " " + SocialCalc.encodeForSave(p) + " " + q;
      } else {
        d = "set " + g + " empty";
      }
      c += d.trim();
    }
  }
  return c;
};
SocialCalc.TriggerIoAction.Email = function(a, b) {
  b = "undefined" !== typeof b ? b : null;
  var c = SocialCalc.Formula, d = window.spreadsheet;
  null == d && (d = window.ss);
  var e = d.sheet, f = e.cells[a];
  if ("undefined" !== typeof e.ioParameterList) {
    var g = e.ioParameterList[a];
    if ("undefined" !== typeof g) {
      for (var l = [], h = [], p = 1, q = 0;q < g.length;q++) {
        if ("t" == g[q].type.charAt(0) && (l[q] = [String(g[q].value).replace(/ /g, "%20")]), "coord" == g[q].type && (l[q] = [String(e.GetAssuredCell(g[q].value).datavalue).replace(/ /g, "%20")]), "range" == g[q].type) {
          var w = c.DecodeRangeParts(e, g[q].value);
          l[q] = [];
          h[q] = [];
          for (var v = 0, s = 0;s < w.ncols;s++) {
            for (var t = 0;t < w.nrows;t++) {
              var x = SocialCalc.crToCoord(w.col1num + s, w.row1num + t), f = w.sheetdata.GetAssuredCell(x);
              l[q].push(f.datavalue.toString().replace(/ /g, "%20"));
              h[q].push(x);
              v++;
            }
          }
          v > p && (p = v);
        }
      }
      c = -1;
      f = 0;
      switch(g.function_name) {
        case "EMAILIF":
          c = 0;
        case "EMAILAT":
        ;
        case "EMAILONEDIT":
          f = 1;
          break;
        case "EMAILONEDITIF":
        ;
        case "EMAILATIF":
          c = 1, f = 2;
      }
      switch(g.function_name) {
        case "EMAILONEDIT":
        ;
        case "EMAILONEDITIF":
          b && "coord" == g[0].type && g[0].value == b && (b = null);
          break;
        default:
          b = null;
      }
      g = !1;
      q = [];
      for (p -= 1;-1 < p;p--) {
        if (-1 == c || !1 != l[c][p >= l[c].length ? 0 : p]) {
          b && b != h[0][p] || (w = p >= l[f].length ? 0 : p, v = p >= l[f + 1].length ? 0 : p, s = p >= l[f + 2].length ? 0 : p, t = l[f][w] + " " + l[f + 1][v] + " " + l[f + 2][s], g = !0, e.ScheduleSheetCommands("sendemail " + t, !1), q.push([l[f][w], l[f + 1][v], l[f + 2][s]]));
        }
      }
      g && SocialCalc.EditorSheetStatusCallback(null, "emailing", null, d.editor);
      return q;
    }
  }
};
SocialCalc.TriggerIoAction.Submit = function(a) {
  a = null != SocialCalc.CurrentSpreadsheetControlObject ? SocialCalc.CurrentSpreadsheetControlObject.formDataViewer : SocialCalc.CurrentSpreadsheetViewerObject.formDataViewer;
  if (null != a && !0 == a.loaded) {
    var b = window.spreadsheet;
    null == b && (b = window.ss);
    for (var b = b.sheet, c = new Date, c = "" + c.getFullYear() + "-" + (c.getMonth() + 1) + "-" + c.getDate() + " " + c.getHours() + ":" + c.getMinutes() + ":" + c.getSeconds(), d = 2;d <= a.formFieldsLength + 1;d++) {
      var e = SocialCalc.crToCoord(d, 2), c = c + ("\r" + a.sheet.cells[e].datavalue)
    }
    b.ScheduleSheetCommands("submitform \r" + c, !1);
  }
};
SocialCalc.TriggerIoAction.SelectList = function(a) {
  SocialCalc.TriggerIoAction.updateInputWidgetFormula("SELECT", a, function(a) {
    return a.value;
  });
};
SocialCalc.TriggerIoAction.AutoComplete = function(a) {
  SocialCalc.TriggerIoAction.updateInputWidgetFormula("AUTOCOMPLETE", a, function(a) {
    return a.value;
  });
};
SocialCalc.TriggerIoAction.TextBox = function(a) {
  SocialCalc.TriggerIoAction.updateInputWidgetFormula("TEXTBOX", a, function(a) {
    return a.value;
  });
};
SocialCalc.TriggerIoAction.CheckBox = function(a) {
  SocialCalc.TriggerIoAction.updateInputWidgetFormula("CHECKBOX", a, function(a) {
    return a.checked ? "TRUE" : "FALSE";
  });
};
SocialCalc.TriggerIoAction.RadioButton = function(a) {
  var b = function(a) {
    return a.checked ? "TRUE" : "FALSE";
  };
  $('input[name="' + a + '"]').each(function() {
    SocialCalc.TriggerIoAction.updateInputWidgetFormula("RADIOBUTTON", $(this).attr("id").replace(/RADIOBUTTON_/, ""), b);
  });
};
SocialCalc.TriggerIoAction.updateInputWidgetFormula = function(a, b, c) {
  var d = window.spreadsheet;
  null == d && (d = window.ss);
  var e = d.sheet.ioParameterList[b];
  if ("undefined" !== typeof e) {
    var f = document.getElementById(a + "_" + b);
    c = c(f);
    c = SocialCalc.encodeForSave(c);
    for (var f = "set " + b + " formula " + a + '("' + c + '"', g = 1;g < e.length;g++) {
      "n" == e[g].type.charAt(0) && (f += "," + e[g].value), "t" == e[g].type.charAt(0) && (f += ',"' + e[g].value + '"'), "range" == e[g].type && (f += "," + e[g].value.toString().replace(/(\$?[A-Z]+\$?[0-9]+)([!]?)([^|]*)[|](\$?[A-Z]+\$?[0-9]+)[|]/i, "$3$2$1:$4")), "coord" == e[g].type && (f += "," + e[g].value);
    }
    f += ")";
    e.cssParameter && (f += "+style(" + e.cssParameter + ")");
    d.editor.EditorScheduleSheetCommands(f, !0, !1);
    SocialCalc.TriggerIoAction.UpdateFormDataSheet(a, b, c);
  }
};
SocialCalc.TriggerIoAction.UpdateFormDataSheet = function(a, b, c) {
  var d = null != SocialCalc.CurrentSpreadsheetControlObject ? SocialCalc.CurrentSpreadsheetControlObject.formDataViewer : SocialCalc.CurrentSpreadsheetViewerObject.formDataViewer;
  null != d && (a = (a + b).toLowerCase(), null != d.formFields[a] && (a = SocialCalc.crToCoord(d.formFields[a], 2), d.sheet.ScheduleSheetCommands("set " + a + " text t " + c, !1)));
};
SocialCalc.Formula.getStandardizedValues = function(a, b) {
  return SocialCalc.Formula.getStandardizedParameter(a, b, !0, !0);
};
SocialCalc.Formula.getStandardizedCoords = function(a, b) {
  return SocialCalc.Formula.getStandardizedParameter(a, b, !0, !1);
};
SocialCalc.Formula.getStandardizedList = function(a, b) {
  var c = [], d = SocialCalc.Formula.getStandardizedValues(a, b);
  if (1 == d.ncols && 1 == d.nrows) {
    c = String(d.celldata[0][0].datavalue).split(",");
  } else {
    for (var e = 0;e < d.ncols;e++) {
      for (var f = 0;f < d.nrows;f++) {
        c.push(d.celldata[e][f].datavalue.toString());
      }
    }
  }
  return c;
};
SocialCalc.Formula.getStandardizedParameter = function(a, b, c, d) {
  var e = {type:b.type, value:b.value};
  d && (e.celldata = []);
  if ("coord" != b.type && "range" != b.type) {
    e.ncols = 1, e.nrows = 1, e.col1num = 1, e.row1num = 1, c && (e.cellcoord = null), d && (e.celldata[0] = [], e.celldata[0][0] = {coord:null, datatype:"n" == b.type ? "v" : "t" == b.type ? b.type : "c", valuetype:b.type, datavalue:b.value});
  } else {
    var f = SocialCalc.Formula, g;
    "coord" == b.type && (g = SocialCalc.Formula.PlainCoord(b.value), g = f.DecodeRangeParts(a, g + "|" + g + "|"));
    "range" == b.type && (g = f.DecodeRangeParts(a, b.value));
    c && (e.cellcoord = []);
    for (a = 0;a < g.ncols;a++) {
      for (b = 0;b < g.nrows;b++) {
        f = SocialCalc.crToCoord(g.col1num + a, g.row1num + b), c && ("undefined" === typeof e.cellcoord[a] && (e.cellcoord[a] = []), e.cellcoord[a][b] = f), d && ("undefined" === typeof e.celldata[a] && (e.celldata[a] = []), f = g.sheetdata.GetAssuredCell(f), e.celldata[a][b] = f);
      }
    }
    e.ncols = g.ncols;
    e.nrows = g.nrows;
    e.col1num = g.col1num;
    e.row1num = g.row1num;
  }
  return e;
};
SocialCalc.Formula.SheetCache = {sheets:{}, waitingForLoading:null, constants:{asloaded:0, recalcing:1, recalcdone:2}, loadsheet:null};
SocialCalc.Formula.FindInSheetCache = function(a) {
  var b = SocialCalc.Formula.SheetCache;
  a = SocialCalc.Formula.NormalizeSheetName(a);
  if (b.sheets[a]) {
    return b.sheets[a].sheet;
  }
  if (b.waitingForLoading) {
    return null;
  }
  if (b.loadsheet) {
    return alert("Using SocialCalc.Formula.SheetCache.loadsheet - deprecated"), SocialCalc.Formula.AddSheetToCache(a, b.loadsheet(a));
  }
  b.waitingForLoading = a;
  return null;
};
SocialCalc.Formula.AddSheetToCache = function(a, b, c) {
  var d = null, e = SocialCalc.Formula.SheetCache, f = e.constants;
  a = SocialCalc.Formula.NormalizeSheetName(a);
  b && (d = new SocialCalc.Sheet, d.ParseSheetSave(b));
  e.sheets[a] = {sheet:d, recalcstate:f.asloaded, name:a};
  SocialCalc.Formula.FreshnessInfo.sheets[a] = "undefined" == typeof c || !1 === c;
  return d;
};
SocialCalc.Formula.NormalizeSheetName = function(a) {
  return SocialCalc.Callbacks.NormalizeSheetName ? SocialCalc.Callbacks.NormalizeSheetName(a) : a.toLowerCase();
};
SocialCalc.Formula.RemoteFunctionInfo = {waitingForServer:null};
SocialCalc.Formula.FreshnessInfo = {sheets:{}, "volatile":{}, recalc_completed:!1};
SocialCalc.Formula.FreshnessInfoReset = function() {
  var a = SocialCalc.Formula.FreshnessInfo, b = SocialCalc.Formula.SheetCache, c;
  for (c in a.sheets) {
    !1 === a.sheets[c] && delete b.sheets[c];
  }
  a.sheets = {};
  a["volatile"] = {};
  a.recalc_completed = !1;
};
SocialCalc.Formula.PlainCoord = function(a) {
  return-1 == a.indexOf("$") ? a : a.replace(/\$/g, "");
};
SocialCalc.Formula.OrderRangeParts = function(a, b) {
  var c, d, e = {};
  c = SocialCalc.coordToCr(a);
  d = SocialCalc.coordToCr(b);
  c.col > d.col ? (e.c1 = d.col, e.c2 = c.col) : (e.c1 = c.col, e.c2 = d.col);
  c.row > d.row ? (e.r1 = d.row, e.r2 = c.row) : (e.r1 = c.row, e.r2 = d.row);
  return e;
};
SocialCalc.Formula.TestCriteria = function(a, b, c) {
  var d, e, f;
  if (null == c) {
    return!1;
  }
  c += "";
  d = c.charAt(0);
  "=" == d || "<" == d || ">" == d ? c = c.substring(1) : -1 != c.search(/([^~]\*|^\*)/) || -1 != c.search(/([^~]\?|^\?)/) ? (d = "regex", "*" == c ? c = ".+" : (c = c.split("").reverse().join(""), c = c.replace(/\?(?=[^~])|\?$/g, "?.").replace(/\?~/g, "?\\").replace(/\*(?=[^~])|\*$/g, "*.").replace(/\*~/, "*\\"), c = c.split("").reverse().join("")), c = "^" + c + "$") : (d = c.substring(0, 2), "<=" == d || "<>" == d || ">=" == d ? c = c.substring(2) : d = "none");
  c = SocialCalc.DetermineValueType(c);
  if (!c.type) {
    if ("none" == d) {
      return!1;
    }
    if ("b" == b.charAt(0)) {
      if ("=" == d) {
        return!0;
      }
    } else {
      if ("<>" == d) {
        return!0;
      }
    }
    return!1;
  }
  e = !1;
  "n" == c.type.charAt(0) && "t" == b.charAt(0) && (f = SocialCalc.DetermineValueType(a), "n" == f.type.charAt(0) && (a = f.value, b = f.type));
  if ("n" == b.charAt(0) && "n" == c.type.charAt(0)) {
    switch(a -= 0, c.value -= 0, d) {
      case "<":
        e = a < c.value;
        break;
      case "<=":
        e = a <= c.value;
        break;
      case "=":
      ;
      case "none":
        e = a == c.value;
        break;
      case ">=":
        e = a >= c.value;
        break;
      case ">":
        e = a > c.value;
        break;
      case "<>":
        e = a != c.value;
    }
  } else {
    if ("e" == b.charAt(0)) {
      e = !1;
    } else {
      if ("e" == c.type.charAt(0)) {
        e = !1;
      } else {
        "n" == b.charAt(0) && (a = SocialCalc.format_number_for_display(a, "n", ""));
        if ("n" == c.type.charAt(0)) {
          return!1;
        }
        a = a ? a.toLowerCase() : "";
        c.value = c.value ? c.value.toLowerCase() : "";
        switch(d) {
          case "<":
            e = a < c.value;
            break;
          case "<=":
            e = a <= c.value;
            break;
          case "=":
            e = a == c.value;
            break;
          case "none":
            e = a.substring(0, c.value.length) == c.value;
            break;
          case ">=":
            e = a >= c.value;
            break;
          case ">":
            e = a > c.value;
            break;
          case "<>":
            e = a != c.value;
            break;
          case "regex":
            try {
              e = -1 != a.search(RegExp(c.value));
            } catch (g) {
              e = !1;
            }
          ;
        }
      }
    }
  }
  return e;
};
SocialCalc || (SocialCalc = {});
SocialCalc.Popup = {};
SocialCalc.Popup.Types = {};
SocialCalc.Popup.Controls = {};
SocialCalc.Popup.Current = {};
SocialCalc.Popup.LocalizeString = function(a) {
  return a;
};
SocialCalc.Popup.Create = function(a, b, c) {
  var d = SocialCalc.Popup.Types[a];
  d && d.Create && d.Create(a, b, c);
  SocialCalc.Popup.imagePrefix = SocialCalc.Constants.defaultImagePrefix;
};
SocialCalc.Popup.SetValue = function(a, b) {
  var c = SocialCalc.Popup, d = c.Types, e = c.Controls;
  e[a] ? (c = e[a].type, d = d[c], e = e[a].data, d && d.Create && (d.SetValue(c, a, b), e.attribs && e.attribs.changedcallback && e.attribs.changedcallback(e.attribs, a, b))) : alert("Unknown control " + a);
};
SocialCalc.Popup.SetDisabled = function(a, b) {
  var c = SocialCalc.Popup, d = c.Types, e = c.Controls;
  e[a] ? (e = e[a].type, (d = d[e]) && d.Create && (c.Current.id && a == c.Current.id && (d.Hide(e, c.Current.id), c.Current.id = null), d.SetDisabled(e, a, b))) : alert("Unknown control " + a);
};
SocialCalc.Popup.GetValue = function(a) {
  var b = SocialCalc.Popup, c = b.Types, b = b.Controls;
  if (b[a]) {
    return b = b[a].type, (c = c[b]) && c.Create ? c.GetValue(b, a) : null;
  }
  alert("Unknown control " + a);
};
SocialCalc.Popup.Initialize = function(a, b) {
  var c = SocialCalc.Popup, d = c.Types, c = c.Controls;
  c[a] ? (c = c[a].type, (d = d[c]) && d.Initialize && d.Initialize(c, a, b)) : alert("Unknown control " + a);
};
SocialCalc.Popup.Reset = function(a) {
  var b = SocialCalc.Popup.Types;
  b[a].Reset && b[a].Reset(a);
};
SocialCalc.Popup.CClick = function(a) {
  var b = SocialCalc.Popup, c = b.Types, d = b.Controls;
  if (!d[a]) {
    alert("Unknown control " + a);
  } else {
    if (!d[a].data || !d[a].data.disabled) {
      var e = d[a].type, f = c[e];
      if (b.Current.id && (c[d[b.Current.id].type].Hide(e, b.Current.id), a == b.Current.id)) {
        b.Current.id = null;
        return;
      }
      f && f.Show && f.Show(e, a);
      b.Current.id = a;
    }
  }
};
SocialCalc.Popup.Close = function() {
  var a = SocialCalc.Popup;
  a.Current.id && a.CClick(a.Current.id);
};
SocialCalc.Popup.Cancel = function() {
  var a = SocialCalc.Popup, b = a.Types, c = a.Controls;
  a.Current.id && (c = c[a.Current.id].type, b[c].Cancel(c, a.Current.id), a.Current.id = null);
};
SocialCalc.Popup.CreatePopupDiv = function(a, b) {
  var c, d = SocialCalc.Popup.Controls[a].data, e = document.createElement("div");
  e.style.position = "absolute";
  c = SocialCalc.GetElementPosition(d.mainele);
  e.style.top = c.top + d.mainele.offsetHeight + "px";
  e.style.left = c.left + "px";
  e.style.zIndex = 100;
  e.style.backgroundColor = "#FFF";
  e.style.border = "1px solid black";
  b.width && (e.style.width = b.width);
  d.mainele.appendChild(e);
  b.title && (e.innerHTML = '<table cellspacing="0" cellpadding="0" style="border-bottom:1px solid black;"><tr><td style="font-size:10px;cursor:default;width:100%;background-color:#999;color:#FFF;">' + b.title + '</td><td style="font-size:10px;cursor:default;color:#666;" onclick="SocialCalc.Popup.Cancel();">&nbsp;X&nbsp;</td></tr></table>', b.moveable && (d.dragregistered = e.firstChild.firstChild.firstChild.firstChild, SocialCalc.DragRegister(d.dragregistered, !0, !0, {MouseDown:SocialCalc.DragFunctionStart, 
  MouseMove:SocialCalc.DragFunctionPosition, MouseUp:SocialCalc.DragFunctionPosition, Disabled:null, positionobj:e}, d.mainele)));
  return e;
};
SocialCalc.Popup.EnsurePosition = function(a, b) {
  function c(a) {
    var b = SocialCalc.GetElementPosition(a);
    b.height = a.offsetHeight;
    b.width = a.offsetWidth;
    b.bottom = b.top + b.height;
    b.right = b.left + b.width;
    return b;
  }
  var d = SocialCalc.Popup.Controls[a].data, e = d.mainele.firstChild;
  if (e) {
    var d = d.popupele, f = c(d), g = c(b), e = c(e);
    e.bottom + f.height < g.bottom && e.left + f.width < g.right ? (d.style.top = e.bottom + "px", d.style.left = e.left + "px") : e.top - f.height > g.top && e.left + f.width < g.right ? (d.style.top = e.top - f.height + "px", d.style.left = e.left + "px") : e.bottom + f.height < g.bottom && e.right - f.width > g.left ? (d.style.top = e.bottom + "px", d.style.left = e.right - f.width + "px") : e.top - f.height > g.top && e.right - f.width > g.left ? (d.style.top = e.top - f.height + "px", d.style.left = 
    e.right - f.width + "px") : e.bottom + f.height < g.bottom && f.width < g.width ? (d.style.top = e.bottom + "px", d.style.left = g.left + Math.floor((g.width - f.width) / 2) + "px") : e.top - f.height > g.top && f.width < g.width ? (d.style.top = e.top - f.height + "px", d.style.left = g.left + Math.floor((g.width - f.width) / 2) + "px") : f.height < g.height && e.right + f.width < g.right ? (d.style.top = g.top + Math.floor((g.height - f.height) / 2) + "px", d.style.left = e.right + "px") : 
    f.height < g.height && e.left - f.width > g.left && (d.style.top = g.top + Math.floor((g.height - f.height) / 2) + "px", d.style.left = e.left - f.width + "px");
  } else {
    alert("No main popup element firstChild.");
  }
};
SocialCalc.Popup.DestroyPopupDiv = function(a, b) {
  a && (a.innerHTML = "", SocialCalc.DragUnregister(b), a.parentNode && a.parentNode.removeChild(a));
};
SocialCalc.Popup.RGBToHex = function(a) {
  var b = SocialCalc.Popup;
  return "" == a ? "000000" : (a = a.match(/(\d+)\D+(\d+)\D+(\d+)/)) ? b.ToHex(a[1]) + b.ToHex(a[2]) + b.ToHex(a[3]) : "000000";
};
SocialCalc.Popup.HexDigits = "0123456789ABCDEF";
SocialCalc.Popup.ToHex = function(a) {
  var b = SocialCalc.Popup, c = a % 16;
  return b.HexDigits.charAt(Math.floor(a / 16)) + b.HexDigits.charAt(c);
};
SocialCalc.Popup.FromHex = function(a) {
  var b = SocialCalc.Popup, c = b.HexDigits.indexOf(a.charAt(0).toUpperCase());
  a = b.HexDigits.indexOf(a.charAt(1).toUpperCase());
  return 16 * (0 <= c ? c : 0) + (0 <= a ? a : 0);
};
SocialCalc.Popup.HexToRGB = function(a) {
  var b = SocialCalc.Popup;
  return "rgb(" + b.FromHex(a.substring(1, 3)) + "," + b.FromHex(a.substring(3, 5)) + "," + b.FromHex(a.substring(5, 7)) + ")";
};
SocialCalc.Popup.makeRGB = function(a, b, c) {
  return "rgb(" + (0 < a ? a : 0) + "," + (0 < b ? b : 0) + "," + (0 < c ? c : 0) + ")";
};
SocialCalc.Popup.splitRGB = function(a) {
  return(a = a.match(/(\d+)\D+(\d+)\D+(\d+)\D/)) ? {r:a[1] - 0, g:a[2] - 0, b:a[3] - 0} : {r:0, g:0, b:0};
};
SocialCalc.Popup.Types.List = {};
SocialCalc.Popup.Types.List.Create = function(a, b, c) {
  a = {type:a, value:"", display:"", data:{}};
  SocialCalc.Popup.Controls[b] = a;
  a = a.data;
  a.attribs = c || {};
  (c = document.getElementById(b)) ? (a.mainele = c, c.innerHTML = '<input style="cursor:pointer;width:100px;font-size:smaller;" onfocus="this.blur();" onclick="SocialCalc.Popup.CClick(\'' + b + '\');" value="">', a.options = []) : alert("Missing element " + b);
};
SocialCalc.Popup.Types.List.SetValue = function(a, b, c) {
  a = SocialCalc.Popup.Controls[b].data;
  a.value = c;
  a.custom = !1;
  for (c = 0;c < a.options.length;c++) {
    if (o = a.options[c], !(o.a && (o.a.skip || o.a.custom || o.a.cancel) || o.v != a.value)) {
      a.display = o.o;
      break;
    }
  }
  c == a.options.length && (a.display = "Custom", a.custom = !0);
  a.mainele && a.mainele.firstChild && (a.mainele.firstChild.value = a.display);
};
SocialCalc.Popup.Types.List.SetDisabled = function(a, b, c) {
  a = SocialCalc.Popup.Controls[b].data;
  a.disabled = c;
  a.mainele && a.mainele.firstChild && (a.mainele.firstChild.disabled = c);
};
SocialCalc.Popup.Types.List.GetValue = function(a, b) {
  return SocialCalc.Popup.Controls[b].data.value;
};
SocialCalc.Popup.Types.List.Initialize = function(a, b, c) {
  var d;
  a = SocialCalc.Popup;
  var e = a.Controls[b].data;
  for (d in c.attribs) {
    e.attribs[d] = c.attribs[d];
  }
  e.options = c ? c.options : [];
  c.value && a.SetValue(b, c.value);
};
SocialCalc.Popup.Types.List.Reset = function(a) {
  var b = SocialCalc.Popup, c = b.Types, d = b.Controls;
  b.Current.id && d[b.Current.id].type == a && (c[a].Hide(a, b.Current.id), b.Current.id = null);
};
SocialCalc.Popup.Types.List.Show = function(a, b) {
  var c;
  c = SocialCalc.Popup;
  var d = c.Controls[b].data, e = "";
  d.popupele = c.CreatePopupDiv(b, d.attribs);
  d.custom ? (e = SocialCalc.Popup.Types.List.MakeCustom(a, b), c = document.createElement("div"), c.innerHTML = '<div style="cursor:default;padding:4px;background-color:#CCC;">' + e + "</div>", d.customele = c.firstChild.firstChild.childNodes[1], d.listdiv = null) : (e = SocialCalc.Popup.Types.List.MakeList(a, b), c = document.createElement("div"), c.innerHTML = '<div style="cursor:default;padding:4px;">' + e + "</div>", d.customele = null, d.listdiv = c.firstChild);
  d.contentele = c;
  d.mainele && d.mainele.firstChild && (d.mainele.firstChild.disabled = !0);
  d.popupele.appendChild(c);
  d.attribs.ensureWithin && SocialCalc.Popup.EnsurePosition(b, d.attribs.ensureWithin);
};
SocialCalc.Popup.Types.List.MakeList = function(a, b) {
  var c, d, e, f = SocialCalc.Popup.Controls[b].data, g;
  g = '<table cellspacing="0" cellpadding="0"><tr><td style="vertical-align:top;">';
  f.ncols = 1;
  for (c = 0;c < f.options.length;c++) {
    d = f.options[c];
    if (d.a) {
      if (d.a.newcol) {
        g += '</td><td style="vertical-align:top;">&nbsp;&nbsp;&nbsp;&nbsp;</td><td style="vertical-align:top;">';
        f.ncols += 1;
        continue;
      }
      if (d.a.skip) {
        g += '<div style="font-size:x-small;white-space:nowrap;">' + d.o + "</div>";
        continue;
      }
    }
    e = d.v != f.value || d.a && (d.a.custom || d.a.cancel) ? "" : "background-color:#DDF;";
    g += '<div style="font-size:x-small;white-space:nowrap;' + e + '" onclick="SocialCalc.Popup.Types.List.ItemClicked(\'' + b + "','" + c + "');\" onmousemove=\"SocialCalc.Popup.Types.List.MouseMove('" + b + "',this);\">" + d.o + "</div>";
  }
  return g + "</td></tr></table>";
};
SocialCalc.Popup.Types.List.MakeCustom = function(a, b) {
  var c = SocialCalc.Popup.LocalizeString, d = "", d = SocialCalc.Popup.Controls[b].data.value, d = SocialCalc.special_chars(d);
  return d = '<div style="white-space:nowrap;"><br><input id="customvalue" value="' + d + '"><br><br><input style="font-size:smaller;" type="button" value="' + c("OK") + '" onclick="SocialCalc.Popup.Types.List.CustomOK(\'' + b + '\');return false;"><input style="font-size:smaller;" type="button" value="' + c("List") + '" onclick="SocialCalc.Popup.Types.List.CustomToList(\'' + b + '\');"><input style="font-size:smaller;" type="button" value="' + c("Cancel") + '" onclick="SocialCalc.Popup.Close();"><br></div>';
};
SocialCalc.Popup.Types.List.ItemClicked = function(a, b) {
  var c, d, e, f = SocialCalc.Popup.Controls[a].data;
  (c = f.options[b].a) && c.custom ? (c = f.contentele, d = SocialCalc.Popup.Types.List.MakeCustom("List", a), e = document.createElement("div"), e.innerHTML = '<div style="cursor:default;padding:4px;background-color:#CCC;">' + d + "</div>", f.customele = e.firstChild.firstChild.childNodes[1], f.listdiv = null, f.contentele = e, f.popupele.replaceChild(e, c), f.attribs.ensureWithin && SocialCalc.Popup.EnsurePosition(a, f.attribs.ensureWithin)) : (c && c.cancel || SocialCalc.Popup.SetValue(a, f.options[b].v), 
  SocialCalc.Popup.Close());
};
SocialCalc.Popup.Types.List.CustomToList = function(a) {
  var b, c, d, e = SocialCalc.Popup.Controls[a].data;
  b = e.contentele;
  c = SocialCalc.Popup.Types.List.MakeList("List", a);
  d = document.createElement("div");
  d.innerHTML = '<div style="cursor:default;padding:4px;">' + c + "</div>";
  e.customele = null;
  e.listdiv = d.firstChild;
  e.contentele = d;
  e.popupele.replaceChild(d, b);
  e.attribs.ensureWithin && SocialCalc.Popup.EnsurePosition(a, e.attribs.ensureWithin);
};
SocialCalc.Popup.Types.List.CustomOK = function(a) {
  SocialCalc.Popup.SetValue(a, SocialCalc.Popup.Controls[a].data.customele.value);
  SocialCalc.Popup.Close();
};
SocialCalc.Popup.Types.List.MouseMove = function(a, b) {
  var c, d, e = SocialCalc.Popup.Controls[a].data;
  if (c = e.listdiv) {
    var f = c.firstChild.firstChild.firstChild;
    for (c = 0;c < e.ncols;c++) {
      for (d = 0;d < f.childNodes[2 * c].childNodes.length;d++) {
        f.childNodes[2 * c].childNodes[d].style.backgroundColor = "#FFF";
      }
    }
    b.style.backgroundColor = "#DDF";
  }
};
SocialCalc.Popup.Types.List.Hide = function(a, b) {
  var c = SocialCalc.Popup, d = c.Controls[b].data;
  c.DestroyPopupDiv(d.popupele, d.dragregistered);
  d.popupele = null;
  d.mainele && d.mainele.firstChild && (d.mainele.firstChild.disabled = !1);
};
SocialCalc.Popup.Types.List.Cancel = function(a, b) {
  SocialCalc.Popup.Types.List.Hide(a, b);
};
SocialCalc.Popup.Types.ColorChooser = {};
SocialCalc.Popup.Types.ColorChooser.Create = function(a, b, c) {
  a = {type:a, value:"", display:"", data:{}};
  SocialCalc.Popup.Controls[b] = a;
  a = a.data;
  a.attribs = c || {};
  c = a.attribs;
  a.value = "";
  var d = document.getElementById(b);
  d ? (a.mainele = d, d.innerHTML = '<div style="cursor:pointer;border:1px solid black;vertical-align:top;width:' + (c.sampleWidth || "15px") + ";height:" + (c.sampleHeight || "15px") + ';" onclick="SocialCalc.Popup.Types.ColorChooser.ControlClicked(\'' + b + "');\">&nbsp;</div>") : alert("Missing element " + b);
};
SocialCalc.Popup.Types.ColorChooser.SetValue = function(a, b, c) {
  a = SocialCalc.Popup;
  b = a.Controls[b].data;
  var d = b.attribs;
  b.value = c;
  b.custom = !1;
  b.mainele && b.mainele.firstChild && (b.value ? (b.mainele.firstChild.style.backgroundColor = b.value, c = d.backgroundImage ? "url(" + a.imagePrefix + d.backgroundImage + ")" : "", a = "center center") : (b.mainele.firstChild.style.backgroundColor = "#FFF", d.backgroundImageDefault ? (c = "url(" + a.imagePrefix + d.backgroundImageDefault + ")", a = "center center") : (c = "url(" + a.imagePrefix + "defaultcolor.gif)", a = "left top")), b.mainele.firstChild.style.backgroundPosition = a, b.mainele.firstChild.style.backgroundImage = 
  c);
};
SocialCalc.Popup.Types.ColorChooser.SetDisabled = function(a, b, c) {
  a = SocialCalc.Popup;
  var d = a.Controls[b].data, e = d.attribs;
  d.disabled = c;
  d.mainele && d.mainele.firstChild && (c ? (d.mainele.firstChild.style.backgroundColor = "#DDD", e.backgroundImageDisabled ? (img = "url(" + a.imagePrefix + e.backgroundImageDisabled + ")", pos = "center center") : (img = "url(" + a.imagePrefix + "defaultcolor.gif)", pos = "left top"), d.mainele.firstChild.style.backgroundPosition = pos, d.mainele.firstChild.style.backgroundImage = img) : a.SetValue(b, d.value));
};
SocialCalc.Popup.Types.ColorChooser.GetValue = function(a, b) {
  return SocialCalc.Popup.Controls[b].data.value;
};
SocialCalc.Popup.Types.ColorChooser.Initialize = function(a, b, c) {
  var d;
  a = SocialCalc.Popup;
  var e = a.Controls[b].data;
  for (d in c.attribs) {
    e.attribs[d] = c.attribs[d];
  }
  c.value && a.SetValue(b, c.value);
};
SocialCalc.Popup.Types.ColorChooser.Reset = function(a) {
  var b = SocialCalc.Popup, c = b.Types, d = b.Controls;
  b.Current.id && d[b.Current.id].type == a && (c[a].Hide(a, b.Current.id), b.Current.id = null);
};
SocialCalc.Popup.Types.ColorChooser.Show = function(a, b) {
  var c, d;
  c = SocialCalc.Popup;
  var e = c.Controls[b].data;
  d = "";
  e.oldvalue = e.value;
  e.popupele = c.CreatePopupDiv(b, e.attribs);
  e.custom ? (d = SocialCalc.Popup.Types.ColorChooser.MakeCustom(a, b), c = document.createElement("div"), c.innerHTML = '<div style="cursor:default;padding:4px;background-color:#CCC;">' + d + "</div>", e.customele = c.firstChild.firstChild.childNodes[2]) : (d = SocialCalc.Popup.Types.ColorChooser.CreateGrid(a, b), c = document.createElement("div"), c.style.padding = "3px", c.style.backgroundColor = "#CCC", c.appendChild(d), e.customele = null);
  e.contentele = c;
  e.popupele.appendChild(c);
  e.attribs.ensureWithin && SocialCalc.Popup.EnsurePosition(b, e.attribs.ensureWithin);
};
SocialCalc.Popup.Types.ColorChooser.MakeCustom = function(a, b) {
  var c = SocialCalc.Popup, d = c.LocalizeString, e = "";
  return e = '<div style="white-space:nowrap;"><br>#<input id="customvalue" style="width:75px;" value="' + c.Controls[b].data.value + '"><br><br><input style="font-size:smaller;" type="button" value="' + d("OK") + '" onclick="SocialCalc.Popup.Types.ColorChooser.CustomOK(\'' + b + '\');return false;"><input style="font-size:smaller;" type="button" value="' + d("Grid") + '" onclick="SocialCalc.Popup.Types.ColorChooser.CustomToGrid(\'' + b + "');\"><br></div>";
};
SocialCalc.Popup.Types.ColorChooser.ItemClicked = function(a, b) {
  SocialCalc.Popup.Close();
};
SocialCalc.Popup.Types.ColorChooser.CustomToList = function(a) {
};
SocialCalc.Popup.Types.ColorChooser.CustomOK = function(a) {
  var b = SocialCalc.Popup;
  b.SetValue(a, b.Controls[a].data.customele.value);
  b.Close();
};
SocialCalc.Popup.Types.ColorChooser.Hide = function(a, b) {
  var c = SocialCalc.Popup, d = c.Controls[b].data;
  c.DestroyPopupDiv(d.popupele, d.dragregistered);
  d.popupele = null;
};
SocialCalc.Popup.Types.ColorChooser.Cancel = function(a, b) {
  var c = SocialCalc.Popup;
  c.SetValue(b, c.Controls[b].data.oldvalue);
  SocialCalc.Popup.Types.ColorChooser.Hide(a, b);
};
SocialCalc.Popup.Types.ColorChooser.CreateGrid = function(a, b) {
  var c, d, e, f, g, l = SocialCalc.Popup, h = l.Types, p = l.LocalizeString;
  c = l.Controls[b].data;
  c.grid = {};
  var q = c.grid, w = document.createElement("div");
  c = document.createElement("table");
  c.cellSpacing = 0;
  c.cellPadding = 0;
  c.style.width = "100px";
  q.table = c;
  c = document.createElement("tbody");
  q.table.appendChild(c);
  q.tbody = c;
  for (d = 0;16 > d;d++) {
    e = document.createElement("tr");
    for (f = 0;5 > f;f++) {
      g = {}, q[d + "," + f] = g, c = document.createElement("td"), c.style.fontSize = "1px", c.innerHTML = "&nbsp;", c.style.height = "10px", 1 >= f ? (c.style.width = "17px", c.style.borderRight = "3px solid white") : (c.style.width = "20px", c.style.backgroundRepeat = "no-repeat"), e.appendChild(c), g.ele = c;
    }
    q.tbody.appendChild(e);
  }
  w.appendChild(q.table);
  c = document.createElement("div");
  c.style.marginTop = "3px";
  c.innerHTML = '<table cellspacing="0" cellpadding="0"><tr><td style="width:17px;background-color:#FFF;background-image:url(' + l.imagePrefix + 'defaultcolor.gif);height:16px;font-size:10px;cursor:pointer;" title="' + p("Default") + '">&nbsp;</td><td style="width:23px;height:16px;font-size:10px;text-align:center;cursor:pointer;" title="' + p("Custom") + '">#</td><td style="width:60px;height:16px;font-size:10px;text-align:center;cursor:pointer;">' + p("OK") + "</td></tr></table>";
  q.defaultbox = c.firstChild.firstChild.firstChild.childNodes[0];
  q.defaultbox.onclick = h.ColorChooser.DefaultClicked;
  q.custom = c.firstChild.firstChild.firstChild.childNodes[1];
  q.custom.onclick = h.ColorChooser.CustomClicked;
  q.msg = c.firstChild.firstChild.firstChild.childNodes[2];
  q.msg.onclick = h.ColorChooser.CloseOK;
  w.appendChild(c);
  q.table.onmousedown = h.ColorChooser.GridMouseDown;
  h.ColorChooser.DetermineColors(b);
  h.ColorChooser.SetColors(b);
  return w;
};
SocialCalc.Popup.Types.ColorChooser.gridToG = function(a, b, c) {
  return a[b + "," + c];
};
SocialCalc.Popup.Types.ColorChooser.DetermineColors = function(a) {
  var b = SocialCalc.Popup, c = b.Types.ColorChooser, d = b.Controls[a].data;
  a = d.grid;
  var e, f = b.splitRGB(d.value), d = 2;
  e = 16 - Math.floor((f.r + 16) / 16);
  a["selectedrow" + d] = e;
  for (e = 0;16 > e;e++) {
    c.gridToG(a, e, d).rgb = b.makeRGB(17 * (15 - e), 0, 0);
  }
  d = 3;
  e = 16 - Math.floor((f.g + 16) / 16);
  a["selectedrow" + d] = e;
  for (e = 0;16 > e;e++) {
    c.gridToG(a, e, d).rgb = b.makeRGB(0, 17 * (15 - e), 0);
  }
  d = 4;
  e = 16 - Math.floor((f.b + 16) / 16);
  a["selectedrow" + d] = e;
  for (e = 0;16 > e;e++) {
    c.gridToG(a, e, d).rgb = b.makeRGB(0, 0, 17 * (15 - e));
  }
  d = 1;
  for (e = 0;16 > e;e++) {
    c.gridToG(a, e, d).rgb = b.makeRGB(17 * (15 - e), 17 * (15 - e), 17 * (15 - e));
  }
  var d = 0, b = [0, 68, 153, 204, 255], f = "400 310 420 440 442 340 040 042 032 044 024 004 204 314 402 414".split(" "), g;
  for (e = 0;16 > e;e++) {
    g = f[e], c.gridToG(a, e, d).rgb = "rgb(" + b[g.charAt(0) - 0] + "," + b[g.charAt(1) - 0] + "," + b[g.charAt(2) - 0] + ")";
  }
};
SocialCalc.Popup.Types.ColorChooser.SetColors = function(a) {
  var b, c, d, e = SocialCalc.Popup, f = e.Types.ColorChooser, g = e.Controls[a].data, l = g.grid;
  for (b = 0;16 > b;b++) {
    for (c = 0;5 > c;c++) {
      d = f.gridToG(l, b, c), d.ele.style.backgroundColor = d.rgb, d.ele.title = e.RGBToHex(d.rgb), d.ele.style.backgroundImage = l["selectedrow" + c] == b ? "url(" + e.imagePrefix + "chooserarrow.gif)" : "";
    }
  }
  e.SetValue(a, g.value);
  l.msg.style.backgroundColor = g.value;
  a = e.splitRGB(g.value || "rgb(255,255,255)");
  l.msg.style.color = 220 > a.r + a.g + a.b ? "#FFF" : "#000";
  g.value ? (l.msg.style.backgroundImage = "", l.msg.title = e.RGBToHex(g.value)) : (l.msg.style.backgroundColor = "#FFF", l.msg.style.backgroundImage = "url(" + e.imagePrefix + "defaultcolor.gif)", l.msg.title = "Default");
};
SocialCalc.Popup.Types.ColorChooser.GridMouseDown = function(a) {
  var b = a || window.event;
  a = SocialCalc.Popup;
  var c = a.Types.ColorChooser, d = a.Controls, e = a.Current.id;
  if (e) {
    var d = d[e].data, f = d.grid;
    switch(b.type) {
      case "mousedown":
        f.mousedown = !0;
        break;
      case "mouseup":
        f.mousedown = !1;
        break;
      case "mousemove":
        if (!f.mousedown) {
          return;
        }
      ;
    }
    var g = SocialCalc.GetElementPositionWithScroll(d.mainele), l = b.clientX - g.left, h = b.clientY - g.top, b = SocialCalc.GetElementPositionWithScroll(f.table);
    b.left -= g.left;
    b.top -= g.top;
    g = Math.floor((h - b.top - 2) / 10);
    g = 0 > g ? 0 : g;
    l = Math.floor((l - b.left) / 20);
    l = 0 > l ? 0 : 4 < l ? 4 : l;
    f = c.gridToG(f, 0 > g ? 0 : 15 < g ? 15 : g, l).ele.style.backgroundColor;
    g = a.splitRGB(f);
    b = a.splitRGB(d.value);
    switch(l) {
      case 2:
        d.value = a.makeRGB(g.r, b.g, b.b);
        break;
      case 3:
        d.value = a.makeRGB(b.r, g.g, b.b);
        break;
      case 4:
        d.value = a.makeRGB(b.r, b.g, g.b);
        break;
      case 0:
      ;
      case 1:
        d.value = f;
    }
    c.DetermineColors(e);
    c.SetColors(e);
  }
};
SocialCalc.Popup.Types.ColorChooser.ControlClicked = function(a) {
  var b = SocialCalc.Popup, c = b.Types.ColorChooser, d = b.Current.id;
  d && a == d ? c.CloseOK() : b.CClick(a);
};
SocialCalc.Popup.Types.ColorChooser.DefaultClicked = function(a) {
  var b = SocialCalc.Popup;
  a = b.Controls;
  if (b = b.Current.id) {
    a = a[b].data, a.value = "", SocialCalc.Popup.SetValue(b, a.value), SocialCalc.Popup.Close();
  }
};
SocialCalc.Popup.Types.ColorChooser.CustomClicked = function(a) {
  a = SocialCalc.Popup;
  var b = a.Controls, c = a.Current.id;
  if (c) {
    var b = b[c].data, d, e, f;
    d = b.contentele;
    e = SocialCalc.Popup.Types.ColorChooser.MakeCustom("ColorChooser", c);
    f = document.createElement("div");
    f.innerHTML = '<div style="cursor:default;padding:4px;background-color:#CCC;">' + e + "</div>";
    b.customele = f.firstChild.firstChild.childNodes[2];
    b.contentele = f;
    b.popupele.replaceChild(f, d);
    b.customele.value = a.RGBToHex(b.value);
    b.attribs.ensureWithin && SocialCalc.Popup.EnsurePosition(c, b.attribs.ensureWithin);
  }
};
SocialCalc.Popup.Types.ColorChooser.CustomToGrid = function(a) {
  var b, c;
  b = SocialCalc.Popup;
  var d = b.Controls[a].data;
  SocialCalc.Popup.SetValue(a, b.HexToRGB("#" + d.customele.value));
  var e;
  b = d.contentele;
  e = SocialCalc.Popup.Types.ColorChooser.CreateGrid("ColorChooser", a);
  c = document.createElement("div");
  c.style.padding = "3px";
  c.style.backgroundColor = "#CCC";
  c.appendChild(e);
  d.customele = null;
  d.contentele = c;
  d.popupele.replaceChild(c, b);
  d.attribs.ensureWithin && SocialCalc.Popup.EnsurePosition(a, d.attribs.ensureWithin);
};
SocialCalc.Popup.Types.ColorChooser.CustomOK = function(a) {
  var b = SocialCalc.Popup;
  SocialCalc.Popup.SetValue(a, b.HexToRGB("#" + b.Controls[a].data.customele.value));
  SocialCalc.Popup.Close();
};
SocialCalc.Popup.Types.ColorChooser.CloseOK = function(a) {
  var b = SocialCalc.Popup;
  a = b.Controls;
  if (b = b.Current.id) {
    SocialCalc.Popup.SetValue(b, a[b].data.value), SocialCalc.Popup.Close();
  }
};
SocialCalc || (alert("Main SocialCalc code module needed"), SocialCalc = {});
SocialCalc.TableEditor || alert("SocialCalc TableEditor code module needed");
SocialCalc.CurrentSpreadsheetControlObject = null;
SocialCalc.SpreadsheetControl = function(a) {
  var b = SocialCalc.Constants;
  this.spreadsheetDiv = this.parentNode = null;
  this.viewheight = this.width = this.height = this.requestedSpaceBelow = this.requestedWidth = this.requestedHeight = 0;
  this.tabs = [];
  this.tabnums = {};
  this.tabreplacements = {};
  this.currentTab = -1;
  this.views = {};
  this.editorDiv = this.spreadsheetDiv = this.editor = this.context = this.sheet = null;
  this.moverange = this.sortrange = "";
  this.idPrefix = a || "SocialCalc-";
  this.multipartBoundary = "SocialCalcSpreadsheetControlSave";
  this.imagePrefix = b.defaultImagePrefix;
  this.toolbarbackground = b.SCToolbarbackground;
  this.tabbackground = b.SCTabbackground;
  this.tabselectedCSS = b.SCTabselectedCSS;
  this.tabplainCSS = b.SCTabplainCSS;
  this.toolbartext = b.SCToolbartext;
  this.formulabarheight = b.SCFormulabarheight;
  this.statuslineheight = b.SCStatuslineheight;
  this.statuslineCSS = b.SCStatuslineCSS;
  this.ExportCallback = null;
  "undefined" === typeof SocialCalc.debug_log && (SocialCalc.debug_log = []);
  this.sheet = new SocialCalc.Sheet;
  this.context = new SocialCalc.RenderContext(this.sheet);
  this.context.showGrid = !0;
  this.context.showRCHeaders = !0;
  this.editor = new SocialCalc.TableEditor(this.context);
  this.editor.StatusCallback.statusline = {func:SocialCalc.SpreadsheetControlStatuslineCallback, params:{statuslineid:this.idPrefix + "statusline", recalcid1:this.idPrefix + "divider_recalc", recalcid2:this.idPrefix + "button_recalc"}};
  SocialCalc.CurrentSpreadsheetControlObject = this;
  this.editor.MoveECellCallback.movefrom = function(a) {
    var b = SocialCalc.GetSpreadsheetControlObject();
    b.context.cursorsuffix = "";
    a.range2.hasrange && !a.cellhandles.noCursorSuffix && (a.ecell.row == a.range2.top && (a.ecell.col < a.range2.left || a.ecell.col > a.range2.right + 1) && (b.context.cursorsuffix = "insertleft"), a.ecell.col == a.range2.left && (a.ecell.row < a.range2.top || a.ecell.row > a.range2.bottom + 1) && (b.context.cursorsuffix = "insertup"));
  };
  this.formulabuttons = {formulafunctions:{image:"insertformula.png", tooltip:"Functions", command:SocialCalc.SpreadsheetControl.DoFunctionList}, multilineinput:{image:"listbox.png", tooltip:"Multi-line Input Box", command:SocialCalc.SpreadsheetControl.DoMultiline}, link:{image:"inserthyperlink.png", tooltip:"Link Input Box", command:SocialCalc.SpreadsheetControl.DoLink}, sum:{image:"autosum.png", tooltip:"Auto Sum", command:SocialCalc.SpreadsheetControl.DoSum}};
  this.findbuttons = {last:{image:"upsearch.png", tooltip:"Find Previous", command:SocialCalc.SpreadsheetControl.SearchUp}, next:{image:"downsearch.png", tooltip:"Find Next", command:SocialCalc.SpreadsheetControl.SearchDown}};
  this.tabnums.edit = this.tabs.length;
  this.tabs.push({name:"edit", text:"Edit", html:' <div id="%id.edittools" style="padding:10px 0px 0px 0px;">&nbsp;<img id="%id.button_undo" src="%img.undo.png" style="vertical-align:bottom;"> <img id="%id.button_redo" src="%img.redo.png" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_copy" src="%img.copy.png" style="vertical-align:bottom;"> <img id="%id.button_cut" src="%img.cut.png" style="vertical-align:bottom;"> <img id="%id.button_paste" src="%img.paste.png" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_delete" src="%img.delete.png" style="vertical-align:bottom;"> <img id="%id.button_pasteformats" src="%img.formatpaintbrush.png" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp;  <span id="%id.locktools"><img id="%id.button_lock" src="%img.lock.png" style="vertical-align:bottom;"> <img id="%id.button_unlock" src="%img.unlock.png" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp;</span> <img id="%id.button_filldown" src="%img.filldown.png" style="vertical-align:bottom;"> <img id="%id.button_fillright" src="%img.fillright.png" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_movefrom" src="%img.movefromoff.gif" style="vertical-align:bottom;"> <img id="%id.button_movepaste" src="%img.movepasteoff.gif" style="vertical-align:bottom;"> <img id="%id.button_moveinsert" src="%img.moveinsertoff.gif" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_alignleft" src="%img.alignleft.png" style="vertical-align:bottom;"> <img id="%id.button_aligncenter" src="%img.aligncenter.png" style="vertical-align:bottom;"> <img id="%id.button_alignright" src="%img.alignright.png" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_borderon" src="%img.borderson.png" style="vertical-align:bottom;">  <img id="%id.button_borderoff" src="%img.bordersoff.png" style="vertical-align:bottom;">  <img id="%id.button_swapcolors" src="%img.swapcolors.png" style="vertical-align:bottom;">  &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_merge" src="%img.mergecells.png" style="vertical-align:bottom;">  &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_insertrow" src="%img.insertrows.png" style="vertical-align:bottom;">  <img id="%id.button_insertcol" src="%img.insertcolumns.png" style="vertical-align:bottom;">  <img id="%id.button_deleterow" src="%img.deleterows.png" style="vertical-align:bottom;">  <img id="%id.button_deletecol" src="%img.deletecolumns.png" style="vertical-align:bottom;">  <img id="%id.button_hiderow" src="%img.hiderow.png" style="vertical-align:bottom;">  <img id="%id.button_hidecol" src="%img.hidecol.png" style="vertical-align:bottom;">  &nbsp;<img id="%id.divider_recalc" src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_recalc" src="%img.recalc.png" style="vertical-align:bottom;">  </div>', 
  oncreate:null, onclick:null});
  this.tabnums.settings = this.tabs.length;
  this.tabs.push({name:"settings", text:"Format", html:'<div id="%id.settingstools" style="display:none;"> <div id="%id.sheetsettingstoolbar" style="display:none;">  <table cellspacing="0" cellpadding="0"><tr><td>   <div style="%tbt.">%loc!SHEET SETTINGS!:</div>   </td></tr><tr><td>   <input id="%id.settings-savesheet" type="button" value="%loc!Save!" onclick="SocialCalc.SettingsControlSave(\'sheet\');">   <input type="button" value="%loc!Cancel!" onclick="SocialCalc.SettingsControlSave(\'cancel\');">   <input type="button" value="%loc!Show Cell Settings!" onclick="SocialCalc.SpreadsheetControlSettingsSwitch(\'cell\');return false;">   </td></tr></table> </div> <div id="%id.cellsettingstoolbar" style="display:none;">  <table cellspacing="0" cellpadding="0"><tr><td>   <div style="%tbt.">%loc!CELL SETTINGS!: <span id="%id.settingsecell">&nbsp;</span></div>   </td></tr><tr><td>  <input id="%id.settings-savecell" type="button" value="%loc!Save!" onclick="SocialCalc.SettingsControlSave(\'cell\');">  <input type="button" value="%loc!Cancel!" onclick="SocialCalc.SettingsControlSave(\'cancel\');">  <input type="button" value="%loc!Show Sheet Settings!" onclick="SocialCalc.SpreadsheetControlSettingsSwitch(\'sheet\');return false;">  </td></tr></table> </div></div>', 
  view:"settings", onclick:function(a, b) {
    SocialCalc.SettingsControls.idPrefix = a.idPrefix;
    SocialCalc.SettingControlReset();
    var e = a.sheet.EncodeSheetAttributes(), f = a.sheet.EncodeCellAttributes(a.editor.ecell.coord);
    SocialCalc.SettingsControlLoadPanel(a.views.settings.values.sheetspanel, e);
    SocialCalc.SettingsControlLoadPanel(a.views.settings.values.cellspanel, f);
    document.getElementById(a.idPrefix + "settingsecell").innerHTML = a.editor.ecell.coord;
    SocialCalc.SpreadsheetControlSettingsSwitch("cell");
    a.views.settings.element.style.height = a.viewheight + "px";
    a.views.settings.element.firstChild.style.height = a.viewheight + "px";
    e = a.editor.range.hasrange ? SocialCalc.crToCoord(a.editor.range.left, a.editor.range.top) + ":" + SocialCalc.crToCoord(a.editor.range.right, a.editor.range.bottom) : a.editor.ecell.coord;
    document.getElementById(a.idPrefix + "settings-savecell").value = SocialCalc.LocalizeString("Save to") + ": " + e;
  }, onclickFocus:!0});
  this.views.settings = {name:"settings", values:{}, oncreate:function(a, b) {
    var e = SocialCalc.Constants;
    b.values.sheetspanel = {colorchooser:{id:a.idPrefix + "scolorchooser"}, formatnumber:{setting:"numberformat", type:"PopupList", id:a.idPrefix + "formatnumber", initialdata:e.SCFormatNumberFormats}, formattext:{setting:"textformat", type:"PopupList", id:a.idPrefix + "formattext", initialdata:e.SCFormatTextFormats}, fontfamily:{setting:"fontfamily", type:"PopupList", id:a.idPrefix + "fontfamily", initialdata:e.SCFormatFontfamilies}, fontlook:{setting:"fontlook", type:"PopupList", id:a.idPrefix + 
    "fontlook", initialdata:e.SCFormatFontlook}, fontsize:{setting:"fontsize", type:"PopupList", id:a.idPrefix + "fontsize", initialdata:e.SCFormatFontsizes}, textalignhoriz:{setting:"textalignhoriz", type:"PopupList", id:a.idPrefix + "textalignhoriz", initialdata:e.SCFormatTextAlignhoriz}, numberalignhoriz:{setting:"numberalignhoriz", type:"PopupList", id:a.idPrefix + "numberalignhoriz", initialdata:e.SCFormatNumberAlignhoriz}, alignvert:{setting:"alignvert", type:"PopupList", id:a.idPrefix + "alignvert", 
    initialdata:e.SCFormatAlignVertical}, textcolor:{setting:"textcolor", type:"ColorChooser", id:a.idPrefix + "textcolor"}, bgcolor:{setting:"bgcolor", type:"ColorChooser", id:a.idPrefix + "bgcolor"}, padtop:{setting:"padtop", type:"PopupList", id:a.idPrefix + "padtop", initialdata:e.SCFormatPadsizes}, padright:{setting:"padright", type:"PopupList", id:a.idPrefix + "padright", initialdata:e.SCFormatPadsizes}, padbottom:{setting:"padbottom", type:"PopupList", id:a.idPrefix + "padbottom", initialdata:e.SCFormatPadsizes}, 
    padleft:{setting:"padleft", type:"PopupList", id:a.idPrefix + "padleft", initialdata:e.SCFormatPadsizes}, colwidth:{setting:"colwidth", type:"PopupList", id:a.idPrefix + "colwidth", initialdata:e.SCFormatColwidth}, recalc:{setting:"recalc", type:"PopupList", id:a.idPrefix + "recalc", initialdata:e.SCFormatRecalc}, usermaxcol:{setting:"usermaxcol", type:"PopupList", id:a.idPrefix + "usermaxcol", initialdata:e.SCFormatUserMaxCol}, usermaxrow:{setting:"usermaxrow", type:"PopupList", id:a.idPrefix + 
    "usermaxrow", initialdata:e.SCFormatUserMaxRow}};
    b.values.cellspanel = {name:"cell", colorchooser:{id:a.idPrefix + "scolorchooser"}, cformatnumber:{setting:"numberformat", type:"PopupList", id:a.idPrefix + "cformatnumber", initialdata:e.SCFormatNumberFormats}, cformattext:{setting:"textformat", type:"PopupList", id:a.idPrefix + "cformattext", initialdata:e.SCFormatTextFormats}, cfontfamily:{setting:"fontfamily", type:"PopupList", id:a.idPrefix + "cfontfamily", initialdata:e.SCFormatFontfamilies}, cfontlook:{setting:"fontlook", type:"PopupList", 
    id:a.idPrefix + "cfontlook", initialdata:e.SCFormatFontlook}, cfontsize:{setting:"fontsize", type:"PopupList", id:a.idPrefix + "cfontsize", initialdata:e.SCFormatFontsizes}, calignhoriz:{setting:"alignhoriz", type:"PopupList", id:a.idPrefix + "calignhoriz", initialdata:e.SCFormatTextAlignhoriz}, calignvert:{setting:"alignvert", type:"PopupList", id:a.idPrefix + "calignvert", initialdata:e.SCFormatAlignVertical}, ctextcolor:{setting:"textcolor", type:"ColorChooser", id:a.idPrefix + "ctextcolor"}, 
    cbgcolor:{setting:"bgcolor", type:"ColorChooser", id:a.idPrefix + "cbgcolor"}, cbt:{setting:"bt", type:"BorderSide", id:a.idPrefix + "cbt"}, cbr:{setting:"br", type:"BorderSide", id:a.idPrefix + "cbr"}, cbb:{setting:"bb", type:"BorderSide", id:a.idPrefix + "cbb"}, cbl:{setting:"bl", type:"BorderSide", id:a.idPrefix + "cbl"}, cpadtop:{setting:"padtop", type:"PopupList", id:a.idPrefix + "cpadtop", initialdata:e.SCFormatPadsizes}, cpadright:{setting:"padright", type:"PopupList", id:a.idPrefix + 
    "cpadright", initialdata:e.SCFormatPadsizes}, cpadbottom:{setting:"padbottom", type:"PopupList", id:a.idPrefix + "cpadbottom", initialdata:e.SCFormatPadsizes}, cpadleft:{setting:"padleft", type:"PopupList", id:a.idPrefix + "cpadleft", initialdata:e.SCFormatPadsizes}};
    SocialCalc.SettingsControlInitializePanel(b.values.sheetspanel);
    SocialCalc.SettingsControlInitializePanel(b.values.cellspanel);
  }, replacements:{itemtitle:{regex:/\%itemtitle\./g, replacement:'style="padding:12px 10px 0px 10px;font-weight:bold;text-align:right;vertical-align:top;font-size:small;"'}, sectiontitle:{regex:/\%sectiontitle\./g, replacement:'style="padding:16px 10px 0px 0px;font-weight:bold;vertical-align:top;font-size:small;color:#C00;"'}, parttitle:{regex:/\%parttitle\./g, replacement:'style="font-weight:bold;font-size:x-small;padding:0px 0px 3px 0px;"'}, itembody:{regex:/\%itembody\./g, replacement:'style="padding:12px 0px 0px 0px;vertical-align:top;font-size:small;"'}, 
  bodypart:{regex:/\%bodypart\./g, replacement:'style="padding:0px 10px 0px 0px;font-size:small;vertical-align:top;"'}}, divStyle:"border:1px solid black;overflow:auto;", html:'<div id="%id.scolorchooser" style="display:none;position:absolute;z-index:20;"></div><table cellspacing="0" cellpadding="0"> <tr><td style="vertical-align:top;"><table id="%id.sheetsettingstable" style="display:none;" cellspacing="0" cellpadding="0"><tr> <td %itemtitle.><br>%loc!Default Format!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Number!</div>     <span id="%id.formatnumber"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Text!</div>     <span id="%id.formattext"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Default Alignment!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Text Horizontal!</div>     <span id="%id.textalignhoriz"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Number Horizontal!</div>     <span id="%id.numberalignhoriz"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Vertical!</div>     <span id="%id.alignvert"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Default Font!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Family!</div>     <span id="%id.fontfamily"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Bold &amp; Italics!</div>     <span id="%id.fontlook"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Size!</div>     <span id="%id.fontsize"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Color!</div>     <div id="%id.textcolor"></div>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Background!</div>     <div id="%id.bgcolor"></div>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Default Padding!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Top!</div>     <span id="%id.padtop"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Right!</div>     <span id="%id.padright"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Bottom!</div>     <span id="%id.padbottom"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Left!</div>     <span id="%id.padleft"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Default Column Width!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>&nbsp;</div>     <span id="%id.colwidth"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Recalculation!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>&nbsp;</div>     <span id="%id.recalc"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Dimensions!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Columns!</div>     <span id="%id.usermaxcol"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Rows!</div>     <span id="%id.usermaxrow"></span>    </td>   </tr></table> </td></tr></table><table id="%id.cellsettingstable" cellspacing="0" cellpadding="0"><tr> <td %itemtitle.><br>%loc!Format!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Number!</div>     <span id="%id.cformatnumber"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Text!</div>     <span id="%id.cformattext"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Alignment!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Horizontal!</div>     <span id="%id.calignhoriz"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Vertical!</div>     <span id="%id.calignvert"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Font!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Family!</div>     <span id="%id.cfontfamily"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Bold &amp; Italics!</div>     <span id="%id.cfontlook"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Size!</div>     <span id="%id.cfontsize"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Color!</div>     <div id="%id.ctextcolor"></div>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Background!</div>     <div id="%id.cbgcolor"></div>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Borders!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0">    <tr><td %bodypart. colspan="3"><div %parttitle.>%loc!Top Border!</div></td>     <td %bodypart. colspan="3"><div %parttitle.>%loc!Right Border!</div></td>     <td %bodypart. colspan="3"><div %parttitle.>%loc!Bottom Border!</div></td>     <td %bodypart. colspan="3"><div %parttitle.>%loc!Left Border!</div></td>    </tr><tr>    <td %bodypart.>     <input id="%id.cbt-onoff-bcb" onclick="SocialCalc.SettingsControlOnchangeBorder(this);" type="checkbox">    </td>    <td %bodypart.>     <div id="%id.cbt-color"></div>    </td>    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>    <td %bodypart.>     <input id="%id.cbr-onoff-bcb" onclick="SocialCalc.SettingsControlOnchangeBorder(this);" type="checkbox">    </td>    <td %bodypart.>     <div id="%id.cbr-color"></div>    </td>    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>    <td %bodypart.>     <input id="%id.cbb-onoff-bcb" onclick="SocialCalc.SettingsControlOnchangeBorder(this);" type="checkbox">    </td>    <td %bodypart.>     <div id="%id.cbb-color"></div>    </td>    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>    <td %bodypart.>     <input id="%id.cbl-onoff-bcb" onclick="SocialCalc.SettingsControlOnchangeBorder(this);" type="checkbox">    </td>    <td %bodypart.>     <div id="%id.cbl-color"></div>    </td>    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Padding!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Top!</div>     <span id="%id.cpadtop"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Right!</div>     <span id="%id.cpadright"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Bottom!</div>     <span id="%id.cpadbottom"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Left!</div>     <span id="%id.cpadleft"></span>    </td>   </tr></table> </td></tr></table> </td><td style="vertical-align:top;padding:12px 0px 0px 12px;">  <div style="width:100px;height:100px;overflow:hidden;border:1px solid black;background-color:#EEE;padding:6px;">   <table cellspacing="0" cellpadding="0"><tr>    <td id="sample-text" style="height:100px;width:100px;"><div>%loc!This is a<br>sample!</div><div>-1234.5</div></td>   </tr></table>  </div> </td></tr></table><br>'};
  this.tabnums.sort = this.tabs.length;
  this.tabs.push({name:"sort", text:"Sort", html:' <div id="%id.sorttools" style="display:none;">  <table cellspacing="0" cellpadding="0"><tr>   <td style="vertical-align:top;padding-right:4px;width:160px;">    <div style="%tbt.">%loc!Set Cells To Sort!</div>    <select id="%id.sortlist" size="1" onfocus="%s.CmdGotFocus(this);"><option selected>[select range]</option><option value="all">Sort All</option></select>    <input type="button" value="%loc!OK!" onclick="%s.DoCmd(this, \'ok-setsort\');" style="font-size:x-small;">   </td>   <td style="vertical-align:middle;padding-right:16px;width:100px;text-align:right;">    <div style="%tbt.">&nbsp;</div>    <input type="button" id="%id.sortbutton" value="%loc!Sort Cells! A1:A1" onclick="%s.DoCmd(this, \'dosort\');" style="visibility:hidden;">   </td>   <td style="vertical-align:top;padding-right:16px;">    <table cellspacing="0" cellpadding="0"><tr>     <td style="vertical-align:top;">      <div style="%tbt.">%loc!Major Sort!</div>      <select id="%id.majorsort" size="1" onfocus="%s.CmdGotFocus(this);"></select>     </td><td>      <input type="radio" name="majorsort" id="%id.majorsortup" value="up" checked><span style="font-size:x-small;color:#555753;">%loc!Up!</span><br>      <input type="radio" name="majorsort" id="%id.majorsortdown" value="down"><span style="font-size:x-small;color:#555753;">%loc!Down!</span>     </td>    </tr></table>   </td>   <td style="vertical-align:top;padding-right:16px;">    <table cellspacing="0" cellpadding="0"><tr>     <td style="vertical-align:top;">      <div style="%tbt.">%loc!Minor Sort!</div>      <select id="%id.minorsort" size="1" onfocus="%s.CmdGotFocus(this);"></select>     </td><td>      <input type="radio" name="minorsort" id="%id.minorsortup" value="up" checked><span style="font-size:x-small;color:#555753;">%loc!Up!</span><br>      <input type="radio" name="minorsort" id="%id.minorsortdown" value="down"><span style="font-size:x-small;color:#555753;">%loc!Down!</span>     </td>    </tr></table>   </td>   <td style="vertical-align:top;padding-right:16px;">    <table cellspacing="0" cellpadding="0"><tr>     <td style="vertical-align:top;">      <div style="%tbt.">%loc!Last Sort!</div>      <select id="%id.lastsort" size="1" onfocus="%s.CmdGotFocus(this);"></select>     </td><td>      <input type="radio" name="lastsort" id="%id.lastsortup" value="up" checked><span style="font-size:x-small;color:#555753;">%loc!Up!</span><br>      <input type="radio" name="lastsort" id="%id.lastsortdown" value="down"><span style="font-size:x-small;color:#555753;">%loc!Down!</span>     </td>    </tr></table>   </td>  </tr></table> </div>', 
  onclick:SocialCalc.SpreadsheetControlSortOnclick});
  this.editor.SettingsCallbacks.sort = {save:SocialCalc.SpreadsheetControlSortSave, load:SocialCalc.SpreadsheetControlSortLoad};
  this.tabnums.audit = this.tabs.length;
  this.tabs.push({name:"audit", text:"Audit", html:'<div id="%id.audittools" style="display:none;"> <div style="%tbt.">&nbsp;</div></div>', view:"audit", onclick:function(a, b) {
    var e = SocialCalc.LocalizeString, f, g, l = '<table cellspacing="0" cellpadding="0" style="margin-bottom:10px;"><tr><td style="font-size:small;padding:6px;"><b>' + e("Audit Trail This Session") + ":</b><br><br>", h = a.sheet.changes.stack, p = a.sheet.changes.tos;
    for (f = 0;f < h.length;f++) {
      for (f == p + 1 && (l += '<br></td></tr><tr><td style="font-size:small;background-color:#EEE;padding:6px;">' + e("UNDONE STEPS") + ":<br>"), g = 0;g < h[f].command.length;g++) {
        l += SocialCalc.special_chars(h[f].command[g]) + "<br>";
      }
    }
    var q = function(a) {
      if ("string" == typeof a) {
        return a;
      }
      if (!a) {
        return "null";
      }
      if ("object" == typeof a) {
        q.check || (q.check = []);
        for (var b = 0, c = q.check.length;b < c;++b) {
          if (q.check[b] == a) {
            return "{}";
          }
        }
        q.check.push(a);
      }
      var c = "", b = "undefined" == typeof a.length ? 1 : 0, d = "", m;
      for (m in a) {
        b && (c = "'" + m + "':"), d = "string" == typeof a[m] ? d + (c + "'" + a[m] + "',") : "object" == typeof a[m] ? d + (c + q(a[m]) + ",") : d + (c + a[m] + ",");
      }
      "object" == typeof a && q.check.pop();
      return b ? "{" + d.slice(0, -1) + "}" : "[" + d.slice(0, -1) + "]";
    };
    if ("undefined" != typeof SocialCalc.debug_log) {
      for (var w in SocialCalc.debug_log) {
        l += q(SocialCalc.debug_log[w]) + "<br>";
      }
    }
    a.views.audit.element.innerHTML = l + "</td></tr></table>";
    SocialCalc.CmdGotFocus(!0);
  }, onclickFocus:!0});
  this.views.audit = {name:"audit", divStyle:"border:1px solid black;overflow:auto;", html:"Audit Trail"};
  this.tabnums.comment = this.tabs.length;
  this.tabs.push({name:"comment", text:"Comment", html:'<div id="%id.commenttools" style="display:none;"><table cellspacing="0" cellpadding="0"><tr><td><textarea id="%id.commenttext" style="font-size:small;height:32px;width:600px;overflow:auto;" onfocus="%s.CmdGotFocus(this);"></textarea></td><td style="vertical-align:top;">&nbsp;<input type="button" value="%loc!Save!" onclick="%s.SpreadsheetControlCommentSet();" style="font-size:x-small;"></td></tr></table></div>', view:"sheet", onclick:SocialCalc.SpreadsheetControlCommentOnclick, 
  onunclick:SocialCalc.SpreadsheetControlCommentOnunclick});
  this.tabnums.names = this.tabs.length;
  this.tabs.push({name:"names", text:"Names", html:'<div id="%id.namestools" style="display:none;">  <table cellspacing="0" cellpadding="0"><tr>   <td style="vertical-align:top;padding-right:24px;">    <div style="%tbt.">%loc!Existing Names!</div>    <select id="%id.nameslist" size="1" onchange="%s.SpreadsheetControlNamesChangedName();" onfocus="%s.CmdGotFocus(this);"><option selected>[New]</option></select>   </td>   <td style="vertical-align:top;padding-right:6px;">    <div style="%tbt.">%loc!Name!</div>    <input type="text" id="%id.namesname" style="font-size:x-small;width:75px;" onfocus="%s.CmdGotFocus(this);">   </td>   <td style="vertical-align:top;padding-right:6px;">    <div style="%tbt.">%loc!Description!</div>    <input type="text" id="%id.namesdesc" style="font-size:x-small;width:150px;" onfocus="%s.CmdGotFocus(this);">   </td>   <td style="vertical-align:top;padding-right:6px;">    <div style="%tbt.">%loc!Value!</div>    <input type="text" id="%id.namesvalue" width="16" style="font-size:x-small;width:100px;" onfocus="%s.CmdGotFocus(this);">   </td>   <td style="vertical-align:top;padding-right:12px;width:100px;">    <div style="%tbt.">%loc!Set Value To!</div>    <input type="button" id="%id.namesrangeproposal" value="A1" onclick="%s.SpreadsheetControlNamesSetValue();" style="font-size:x-small;">   </td>   <td style="vertical-align:top;padding-right:6px;">    <div style="%tbt.">&nbsp;</div>    <input type="button" value="%loc!Save!" onclick="%s.SpreadsheetControlNamesSave();" style="font-size:x-small;">    <input type="button" value="%loc!Delete!" onclick="%s.SpreadsheetControlNamesDelete()" style="font-size:x-small;">   </td>  </tr></table></div>', 
  view:"sheet", onclick:SocialCalc.SpreadsheetControlNamesOnclick, onunclick:SocialCalc.SpreadsheetControlNamesOnunclick});
  this.tabnums.clipboard = this.tabs.length;
  this.tabs.push({name:"clipboard", text:"Clipboard", html:'<div id="%id.clipboardtools" style="display:none;">  <table cellspacing="0" cellpadding="0"><tr>   <td style="vertical-align:top;padding-right:24px;">    <div style="%tbt.">     &nbsp;    </div>   </td>  </tr></table></div>', view:"clipboard", onclick:SocialCalc.SpreadsheetControlClipboardOnclick, onclickFocus:"clipboardtext"});
  this.views.clipboard = {name:"clipboard", divStyle:"overflow:auto;", html:' <div style="font-size:x-small;padding:5px 0px 10px 0px;">  <b>%loc!Display Clipboard in!:</b>  <input type="radio" id="%id.clipboardformat-tab" name="%id.clipboardformat" checked onclick="%s.SpreadsheetControlClipboardFormat(\'tab\');"> %loc!Tab-delimited format! &nbsp;  <input type="radio" id="%id.clipboardformat-csv" name="%id.clipboardformat" onclick="%s.SpreadsheetControlClipboardFormat(\'csv\');"> %loc!CSV format! &nbsp;  <input type="radio" id="%id.clipboardformat-scsave" name="%id.clipboardformat" onclick="%s.SpreadsheetControlClipboardFormat(\'scsave\');"> %loc!SocialCalc-save format! </div> <input type="button" value="%loc!Load SocialCalc Clipboard With This!" style="font-size:x-small;" onclick="%s.SpreadsheetControlClipboardLoad();">&nbsp;  <input type="button" value="%loc!Clear SocialCalc Clipboard!" style="font-size:x-small;" onclick="%s.SpreadsheetControlClipboardClear();">&nbsp;  <br> <textarea id="%id.clipboardtext" style="font-size:small;height:350px;width:800px;overflow:auto;" onfocus="%s.CmdGotFocus(this);"></textarea>'};
};
SocialCalc.SpreadsheetControl.prototype.InitializeSpreadsheetControl = function(a, b, c, d) {
  return SocialCalc.InitializeSpreadsheetControl(this, a, b, c, d);
};
SocialCalc.SpreadsheetControl.prototype.DoOnResize = function() {
  return SocialCalc.DoOnResize(this);
};
SocialCalc.SpreadsheetControl.prototype.SizeSSDiv = function() {
  return SocialCalc.SizeSSDiv(this);
};
SocialCalc.SpreadsheetControl.prototype.ExecuteCommand = function(a, b) {
  return SocialCalc.SpreadsheetControlExecuteCommand(this, a, b);
};
SocialCalc.SpreadsheetControl.prototype.CreateSheetHTML = function() {
  return SocialCalc.SpreadsheetControlCreateSheetHTML(this);
};
SocialCalc.SpreadsheetControl.prototype.CreateSpreadsheetSave = function(a) {
  return SocialCalc.SpreadsheetControlCreateSpreadsheetSave(this, a);
};
SocialCalc.SpreadsheetControl.prototype.DecodeSpreadsheetSave = function(a) {
  return SocialCalc.SpreadsheetControlDecodeSpreadsheetSave(this, a);
};
SocialCalc.SpreadsheetControl.prototype.CreateCellHTML = function(a) {
  return SocialCalc.SpreadsheetControlCreateCellHTML(this, a);
};
SocialCalc.SpreadsheetControl.prototype.CreateCellHTMLSave = function(a) {
  return SocialCalc.SpreadsheetControlCreateCellHTMLSave(this, a);
};
SocialCalc.SpreadsheetControl.prototype.ParseSheetSave = function(a) {
  return this.sheet.ParseSheetSave(a);
};
SocialCalc.SpreadsheetControl.prototype.CreateSheetSave = function() {
  return this.sheet.CreateSheetSave();
};
SocialCalc.InitializeSpreadsheetControl = function(a, b, c, d, e) {
  var f = SocialCalc.Constants, g = SocialCalc.LocalizeString, l = SocialCalc.LocalizeSubstrings, h, p, q, w = a.tabs, v = a.views;
  a.requestedHeight = c;
  a.requestedWidth = d;
  a.requestedSpaceBelow = e;
  "string" == typeof b && (b = document.getElementById(b));
  null == b && alert("SocialCalc.SpreadsheetControl not given parent node.");
  a.parentNode = b;
  a.spreadsheetDiv = document.createElement("div");
  a.SizeSSDiv();
  for (c = b.firstChild;null != c;c = b.firstChild) {
    b.removeChild(c);
  }
  c = '<div><div style="' + a.toolbarbackground + 'padding:12px 10px 10px 4px;height:40px;">';
  for (d = 0;d < w.length;d++) {
    c += w[d].html;
  }
  c += '</div><div style="' + a.tabbackground + 'margin:0px 0px 8px 0px;"><table cellpadding="0" cellspacing="0"><tr>';
  for (d = 0;d < w.length;d++) {
    c += '  <td id="%id.' + w[d].name + 'tab" style="' + (0 == d ? a.tabselectedCSS : a.tabplainCSS) + '" onclick="%s.SetTab(this);">' + g(w[d].text) + "</td>";
  }
  c += " </tr></table></div></div>";
  a.currentTab = 0;
  for (p in a.tabreplacements) {
    c = c.replace(a.tabreplacements[p].regex, a.tabreplacements[p].replacement);
  }
  c = c.replace(/\%s\./g, "SocialCalc.");
  c = c.replace(/\%id\./g, a.idPrefix);
  c = c.replace(/\%tbt\./g, a.toolbartext);
  c = c.replace(/\%img\./g, a.imagePrefix);
  c = l(c);
  a.spreadsheetDiv.innerHTML = c;
  b.appendChild(a.spreadsheetDiv);
  a.Buttons = {button_undo:{tooltip:"Undo", command:"undo"}, button_redo:{tooltip:"Redo", command:"redo"}, button_copy:{tooltip:"Copy", command:"copy"}, button_cut:{tooltip:"Cut", command:"cut"}, button_paste:{tooltip:"Paste", command:"paste"}, button_pasteformats:{tooltip:"Paste Formats", command:"pasteformats"}, button_lock:{tooltip:"Lock Cell", command:"lock"}, button_unlock:{tooltip:"Unlock Cell", command:"unlock"}, button_delete:{tooltip:"Delete Cell Contents", command:"delete"}, button_filldown:{tooltip:"Fill Down", 
  command:"filldown"}, button_fillright:{tooltip:"Fill Right", command:"fillright"}, button_movefrom:{tooltip:"Set/Clear Move From", command:"movefrom"}, button_movepaste:{tooltip:"Move Paste", command:"movepaste"}, button_moveinsert:{tooltip:"Move Insert", command:"moveinsert"}, button_alignleft:{tooltip:"Align Left", command:"align-left"}, button_aligncenter:{tooltip:"Align Center", command:"align-center"}, button_alignright:{tooltip:"Align Right", command:"align-right"}, button_borderon:{tooltip:"Borders On", 
  command:"borderon"}, button_borderoff:{tooltip:"Borders Off", command:"borderoff"}, button_swapcolors:{tooltip:"Swap Colors", command:"swapcolors"}, button_merge:{tooltip:"Merge/Unmerge Cells", command:"merge"}, button_insertrow:{tooltip:"Insert Row Before", command:"insertrow"}, button_insertcol:{tooltip:"Insert Column Before", command:"insertcol"}, button_deleterow:{tooltip:"Delete Row", command:"deleterow"}, button_deletecol:{tooltip:"Delete Column", command:"deletecol"}, button_hiderow:{tooltip:"Hide Row", 
  command:"hiderow"}, button_hidecol:{tooltip:"Hide Column", command:"hidecol"}, button_recalc:{tooltip:"Recalculate", command:"recalc"}};
  for (q in a.Buttons) {
    (b = document.getElementById(a.idPrefix + q)) ? (b.style.border = "1px solid " + f.ISCButtonBorderNormal, SocialCalc.TooltipRegister(b, g(a.Buttons[q].tooltip), {}, a.spreadsheetDiv), SocialCalc.ButtonRegister(a.editor, b, {normalstyle:"border:1px solid " + f.ISCButtonBorderNormal + ";backgroundColor:" + f.ISCButtonBorderNormal + ";", hoverstyle:"border:1px solid " + f.ISCButtonBorderHover + ";backgroundColor:" + f.ISCButtonBorderNormal + ";", downstyle:"border:1px solid " + f.ISCButtonBorderDown + 
    ";backgroundColor:" + f.ISCButtonDownBackground + ";"}, {MouseDown:SocialCalc.DoButtonCmd, command:a.Buttons[q].command})) : alert("Button " + (a.idPrefix + q) + " missing");
  }
  a.formulabarDiv = document.createElement("div");
  a.formulabarDiv.style.height = a.formulabarheight + "px";
  a.formulabarDiv.innerHTML = '<input type="text" size="60" value="">&nbsp;';
  a.spreadsheetDiv.appendChild(a.formulabarDiv);
  new SocialCalc.InputBox(a.formulabarDiv.firstChild, a.editor);
  for (q in a.formulabuttons) {
    b = document.createElement("img"), b.id = a.idPrefix + q, b.src = (a.formulabuttons[q].skipImagePrefix ? "" : a.imagePrefix) + a.formulabuttons[q].image, b.style.verticalAlign = "middle", b.style.border = "1px solid #FFF", b.style.marginLeft = "4px", SocialCalc.TooltipRegister(b, g(a.formulabuttons[q].tooltip), {}, a.spreadsheetDiv), SocialCalc.ButtonRegister(a.editor, b, {normalstyle:"border:1px solid #FFF;backgroundColor:#FFF;", hoverstyle:"border:1px solid #CCC;backgroundColor:#FFF;", downstyle:"border:1px solid #000;backgroundColor:#FFF;"}, 
    {MouseDown:a.formulabuttons[q].command, Disabled:function() {
      return a.editor.ECellReadonly();
    }}), a.formulabarDiv.appendChild(b);
  }
  f = $("<input id='searchbarinput' value='' placeholder='Search sheet\u2026'>");
  c = $("<span id='searchbar'></span>");
  c.append("<div id='searchstatus'></div>");
  c.append(f);
  for (q in a.findbuttons) {
    b = document.createElement("img"), b.id = a.idPrefix + q, b.src = a.imagePrefix + a.findbuttons[q].image, b.style.verticalAlign = "middle", b.style.border = "1px solid #FFF", SocialCalc.TooltipRegister(b, g(a.findbuttons[q].tooltip), {}, a.formulabardiv), SocialCalc.ButtonRegister(a.editor, b, {normalstyle:"border:1px solid #FFF;backgroundColor:#FFF;", hoverstyle:"border:1px solid #CCC;backgroundColor:#FFF;", downstyle:"border:1px solid #000;backgroundColor:#FFF;"}, {MouseDown:a.findbuttons[q].command, 
    Disabled:function() {
      return!1;
    }}), c[0].appendChild(b);
  }
  f.on("input", SocialCalc.SpreadsheetControl.FindInSheet);
  f.on("focus", function() {
    SocialCalc.Keyboard.passThru = !0;
  });
  f.on("blur", function() {
    SocialCalc.Keyboard.passThru = !1;
  });
  f.keyup(function(a) {
    13 == a.keyCode && (a.shiftKey ? SocialCalc.SpreadsheetControl.SearchUp() : SocialCalc.SpreadsheetControl.SearchDown());
  });
  a.formulabarDiv.appendChild(c[0]);
  for (d = 0;d < w.length;d++) {
    if (w[d].oncreate) {
      w[d].oncreate(a, w[d].name);
    }
  }
  SocialCalc.CalculateSheetNonViewHeight(a);
  a.viewheight = a.height - a.nonviewheight;
  a.editorDiv = a.editor.CreateTableEditor(a.width, a.viewheight);
  g = document.createElement("div");
  g.id = "te_appView";
  g.appendChild(a.editorDiv);
  a.editorDiv = g;
  g = document.createElement("div");
  g.id = "te_formData";
  g.style.display = "none";
  a.editorDiv.appendChild(g);
  a.spreadsheetDiv.appendChild(a.editorDiv);
  a.formDataViewer = new SocialCalc.SpreadsheetViewer("te_FormData-");
  a.formDataViewer.InitializeSpreadsheetViewer(g.id, 180, 0, 200);
  a.formDataViewer.editor.ignoreRender = !0;
  for (h in v) {
    c = v[h].html;
    for (p in v[h].replacements) {
      c = c.replace(v[h].replacements[p].regex, v[h].replacements[p].replacement);
    }
    c = c.replace(/\%s\./g, "SocialCalc.");
    c = c.replace(/\%id\./g, a.idPrefix);
    c = c.replace(/\%tbt\./g, a.toolbartext);
    c = c.replace(/\%img\./g, a.imagePrefix);
    g = document.createElement("div");
    SocialCalc.setStyles(g, v[h].divStyle);
    g.style.display = "none";
    g.style.width = a.width + "px";
    g.style.height = a.viewheight + "px";
    g.id = a.idPrefix + v[h].name + "view";
    c = l(c);
    g.innerHTML = c;
    a.spreadsheetDiv.appendChild(g);
    v[h].element = g;
    if (v[h].oncreate) {
      v[h].oncreate(a, v[h]);
    }
  }
  v.sheet = {name:"sheet", element:a.editorDiv};
  a.statuslineDiv = document.createElement("div");
  a.statuslineDiv.style.cssText = a.statuslineCSS;
  a.statuslineDiv.style.height = a.statuslineheight - (a.statuslineDiv.style.paddingTop.slice(0, -2) - 0) - (a.statuslineDiv.style.paddingBottom.slice(0, -2) - 0) + "px";
  a.statuslineDiv.id = a.idPrefix + "statusline";
  a.spreadsheetDiv.appendChild(a.statuslineDiv);
  if (a.spreadsheetDiv.addEventListener) {
    a.spreadsheetDiv.addEventListener("mousedown", function() {
      SocialCalc.SetSpreadsheetControlObject(a);
    }, !1), a.spreadsheetDiv.addEventListener("mouseover", function() {
      SocialCalc.SetSpreadsheetControlObject(a);
    }, !1);
  } else {
    if (a.spreadsheetDiv.attachEvent) {
      a.spreadsheetDiv.attachEvent("onmousedown", function() {
        SocialCalc.SetSpreadsheetControlObject(a);
      }), a.spreadsheetDiv.attachEvent("onmouseover", function() {
        SocialCalc.SetSpreadsheetControlObject(a);
      });
    } else {
      throw SocialCalc.Constants.s_BrowserNotSupported;
    }
  }
};
SocialCalc.CalculateSheetNonViewHeight = function(a) {
  a.nonviewheight = a.statuslineheight;
  for (var b = 0;b < a.spreadsheetDiv.childNodes.length;b++) {
    "SocialCalc-statusline" != a.spreadsheetDiv.childNodes[b].id && (a.nonviewheight += a.spreadsheetDiv.childNodes[b].offsetHeight);
  }
};
SocialCalc.LocalizeString = function(a) {
  var b = SocialCalc.LocalizeStringList[a];
  b || (b = SocialCalc.Constants["s_loc_" + a.toLowerCase().replace(/\s/g, "_").replace(/\W/g, "X")] || a, SocialCalc.LocalizeStringList[a] = b);
  return b;
};
SocialCalc.LocalizeStringList = {};
SocialCalc.LocalizeSubstrings = function(a) {
  var b = SocialCalc.LocalizeString;
  return a.replace(/%(loc|ssc)!(.*?)!/g, function(a, d, e) {
    return "ssc" == d ? SocialCalc.Constants[e] || alert("Missing constant: " + e) : b(e);
  });
};
SocialCalc.GetSpreadsheetControlObject = function() {
  var a = null != SocialCalc.CurrentSpreadsheetControlObject ? SocialCalc.CurrentSpreadsheetControlObject : SocialCalc.CurrentSpreadsheetViewerObject;
  if (a) {
    return a;
  }
};
SocialCalc.SetSpreadsheetControlObject = function(a) {
  SocialCalc.CurrentSpreadsheetControlObject = a;
  SocialCalc.Keyboard.focusTable && a && (SocialCalc.Keyboard.focusTable = a.editor);
};
SocialCalc.DoOnResize = function(a) {
  var b, c = a.views;
  if (a.SizeSSDiv()) {
    for (vname in c) {
      b = c[vname].element, b.style.width = a.width + "px", b.style.height = a.height - a.nonviewheight + "px";
    }
    a.editor.ResizeTableEditor(a.width, a.height - a.nonviewheight);
  }
};
SocialCalc.SizeSSDiv = function(a) {
  var b, c, d, e;
  d = !1;
  b = SocialCalc.GetViewportInfo();
  c = SocialCalc.GetElementPosition(a.parentNode);
  c.bottom = 0;
  c.right = 0;
  e = a.parentNode.style;
  e.marginTop && (c.top += e.marginTop.slice(0, -2) - 0);
  e.marginBottom && (c.bottom += e.marginBottom.slice(0, -2) - 0);
  e.marginLeft && (c.left += e.marginLeft.slice(0, -2) - 0);
  e.marginRight && (c.right += e.marginRight.slice(0, -2) - 0);
  e = a.requestedHeight || b.height - (c.top + c.bottom + 10) - (a.requestedSpaceBelow || 0);
  a.height != e && (a.height = e, a.spreadsheetDiv.style.height = e + "px", d = !0);
  e = a.requestedWidth || b.width - (c.left + c.right + 10) || 700;
  a.width != e && (a.width = e, a.spreadsheetDiv.style.width = e + "px", d = !0);
  a.spreadsheetDiv.style.position = "relative";
  return d;
};
SocialCalc.SetTab = function(a) {
  var b, c, d, e, f, g = {}, l = {}, h = SocialCalc.GetSpreadsheetControlObject(), p = h.tabs, q = h.views;
  a = "string" == typeof a ? a : a.id.slice(h.idPrefix.length, -3);
  if (h.editor.busy && (!p[h.currentTab].view || "sheet" == p[h.currentTab].view)) {
    for (e = 0;e < p.length;e++) {
      if (p[e].name == a && p[e].view && "sheet" != p[e].view) {
        return;
      }
    }
  }
  if (h.tabs[h.currentTab].onunclick) {
    h.tabs[h.currentTab].onunclick(h, h.tabs[h.currentTab].name);
  }
  for (e = 0;e < p.length;e++) {
    b = p[e].name, g[b] = document.getElementById(h.idPrefix + b + "tab"), l[b] = document.getElementById(h.idPrefix + b + "tools"), b == a ? (c = e, l[b].style.display = "block", g[b].style.cssText = h.tabselectedCSS) : (l[b].style.display = "none", g[b].style.cssText = h.tabplainCSS);
  }
  h.currentTab = c;
  if (p[c].onclick) {
    p[c].onclick(h, a);
  }
  for (f in q) {
    !p[c].view && "sheet" == f || p[c].view == f ? (q[f].element.style.display = "block", d = f) : q[f].element.style.display = "none";
  }
  p[c].onclickFocus ? (c = p[c].onclickFocus, "string" == typeof c && (c = document.getElementById(h.idPrefix + c), c.focus()), SocialCalc.CmdGotFocus(c)) : SocialCalc.KeyboardFocus();
  q[d].needsresize && q[d].onresize && (q[d].needsresize = !1, q[d].onresize(h, q[d]));
  "sheet" == d ? (h.statuslineDiv.style.display = "block", h.editor.ScheduleRender()) : h.statuslineDiv.style.display = "none";
};
SocialCalc.SpreadsheetControlStatuslineCallback = function(a, b, c, d) {
  var e = document.getElementById(d.statuslineid);
  e && (e.innerHTML = a.GetStatuslineString(b, c, d));
  switch(b) {
    case "cmdendnorender":
    ;
    case "calcfinished":
    ;
    case "doneposcalc":
      b = document.getElementById(d.recalcid1);
      d = document.getElementById(d.recalcid2);
      if (!b || !d) {
        break;
      }
      "yes" == a.context.sheetobj.attribs.needsrecalc ? (b.style.display = "inline", d.style.display = "inline") : (b.style.display = "none", d.style.display = "none");
  }
};
SocialCalc.UpdateSortRangeProposal = function(a) {
  document.getElementById(SocialCalc.GetSpreadsheetControlObject().idPrefix + "sortlist").options[0].text = a.range.hasrange ? SocialCalc.crToCoord(a.range.left, a.range.top) + ":" + SocialCalc.crToCoord(a.range.right, a.range.bottom) : SocialCalc.LocalizeString("[select range]");
};
SocialCalc.LoadColumnChoosers = function(a) {
  var b = SocialCalc.LocalizeString, c, d, e, f;
  a.sortrange && -1 == a.sortrange.indexOf(":") ? (c = SocialCalc.Formula.LookupName(a.sheet, a.sortrange || ""), "range" == c.type ? (c = c.value.match(/^(.*)\|(.*)\|$/), c = c[1] + ":" + c[2]) : c = "A1:A1") : c = a.sortrange;
  var g = SocialCalc.ParseRange(c);
  e = document.getElementById(a.idPrefix + "majorsort");
  f = e.selectedIndex;
  e.options.length = 0;
  e.options[e.options.length] = new Option(b("[None]"), "");
  for (c = g.cr1.col;c <= g.cr2.col;c++) {
    d = SocialCalc.rcColname(c), e.options[e.options.length] = new Option(b("Column ") + d, d);
  }
  e.selectedIndex = 1 < f && f <= g.cr2.col - g.cr1.col + 1 ? f : 1;
  e = document.getElementById(a.idPrefix + "minorsort");
  f = e.selectedIndex;
  e.options.length = 0;
  e.options[e.options.length] = new Option(b("[None]"), "");
  for (c = g.cr1.col;c <= g.cr2.col;c++) {
    d = SocialCalc.rcColname(c), e.options[e.options.length] = new Option(d, d);
  }
  e.selectedIndex = 0 < f && f <= g.cr2.col - g.cr1.col + 1 ? f : 0;
  e = document.getElementById(a.idPrefix + "lastsort");
  f = e.selectedIndex;
  e.options.length = 0;
  e.options[e.options.length] = new Option(b("[None]"), "");
  for (c = g.cr1.col;c <= g.cr2.col;c++) {
    d = SocialCalc.rcColname(c), e.options[e.options.length] = new Option(d, d);
  }
  e.selectedIndex = 0 < f && f <= g.cr2.col - g.cr1.col + 1 ? f : 0;
};
SocialCalc.CmdGotFocus = function(a) {
  SocialCalc.Keyboard.passThru = a;
};
SocialCalc.DoButtonCmd = function(a, b, c) {
  SocialCalc.DoCmd(c.element, c.functionobj.command);
};
SocialCalc.DoCmd = function(a, b) {
  var c, d, e, f, g, l;
  f = SocialCalc.GetSpreadsheetControlObject();
  e = f.editor;
  switch(b) {
    case "undo":
      f.ExecuteCommand("undo", "");
      break;
    case "redo":
      f.ExecuteCommand("redo", "");
      break;
    case "fill-rowcolstuff":
    ;
    case "fill-text":
      c = b.substring(5);
      e = document.getElementById(f.idPrefix + c + "list");
      for (d = e.length = 0;d < SocialCalc.SpreadsheetCmdTable[c].length;d++) {
        e.options[d] = new Option(SocialCalc.SpreadsheetCmdTable[c][d].t);
      }
      b = "changed-" + c;
    case "changed-rowcolstuff":
    ;
    case "changed-text":
      c = b.substring(8);
      e = document.getElementById(f.idPrefix + c + "list");
      e = SocialCalc.SpreadsheetCmdTable.slists[SocialCalc.SpreadsheetCmdTable[c][e.selectedIndex].s];
      f = document.getElementById(f.idPrefix + c + "slist");
      for (d = f.length = 0;d < (e.length || 0);d++) {
        f.options[d] = new Option(e[d].t, e[d].s);
      }
      return;
    case "ok-rowcolstuff":
    ;
    case "ok-text":
      c = b.substring(3);
      e = document.getElementById(f.idPrefix + c + "list");
      f = document.getElementById(f.idPrefix + c + "slist");
      c = SocialCalc.SpreadsheetCmdTable[c][e.selectedIndex].c;
      d = f[f.selectedIndex].value;
      SocialCalc.SpreadsheetControlExecuteCommand(a, c, d);
      break;
    case "ok-setsort":
      c = document.getElementById(f.idPrefix + "sortlist");
      if (0 == c.selectedIndex) {
        f.sortrange = e.range.hasrange ? SocialCalc.crToCoord(e.range.left, e.range.top) + ":" + SocialCalc.crToCoord(e.range.right, e.range.bottom) : e.ecell.coord + ":" + e.ecell.coord;
      } else {
        if ("all" == c.options[c.selectedIndex].value) {
          var h = f.sheet.cells, p = l = g = e = -1;
          for (d in h) {
            h = SocialCalc.coordToCr(d);
            if (-1 == l || h.row < l) {
              l = h.row;
            }
            if (-1 == e || h.col < e) {
              e = h.col;
            }
            if (-1 == p || h.row > p) {
              p = h.row;
            }
            if (-1 == g || h.col > g) {
              g = h.col;
            }
          }
          f.sortrange = SocialCalc.crToCoord(e, l) + ":" + SocialCalc.crToCoord(g, p);
          c.options[c.selectedIndex].text += " (" + f.sortrange + ")";
        } else {
          f.sortrange = c.options[c.selectedIndex].value;
        }
      }
      d = document.getElementById(f.idPrefix + "sortbutton");
      d.value = SocialCalc.LocalizeString("Sort ") + f.sortrange;
      d.style.visibility = "visible";
      SocialCalc.LoadColumnChoosers(f);
      a && a.blur && a.blur();
      SocialCalc.KeyboardFocus();
      return;
    case "dosort":
      if (f.sortrange && -1 == f.sortrange.indexOf(":")) {
        c = SocialCalc.Formula.LookupName(f.sheet, f.sortrange || "");
        if ("range" != c.type) {
          return;
        }
        c = c.value.match(/^(.*)\|(.*)\|$/);
        c = c[1] + ":" + c[2];
      } else {
        c = f.sortrange;
      }
      if ("A1:A1" == c) {
        return;
      }
      c = "sort " + c + " ";
      d = document.getElementById(f.idPrefix + "majorsort");
      e = document.getElementById(f.idPrefix + "majorsortup");
      c += d.options[d.selectedIndex].value + (e.checked ? " up" : " down");
      d = document.getElementById(f.idPrefix + "minorsort");
      0 < d.selectedIndex && (e = document.getElementById(f.idPrefix + "minorsortup"), c += " " + d.options[d.selectedIndex].value + (e.checked ? " up" : " down"));
      d = document.getElementById(f.idPrefix + "lastsort");
      0 < d.selectedIndex && (e = document.getElementById(f.idPrefix + "lastsortup"), c += " " + d.options[d.selectedIndex].value + (e.checked ? " up" : " down"));
      f.ExecuteCommand(c, "");
      break;
    case "merge":
      c = SocialCalc.SpreadsheetCmdLookup[b] || "";
      d = SocialCalc.SpreadsheetCmdSLookup[b] || "";
      f.ExecuteCommand(c, d);
      e.range.hasrange && (e.MoveECell(SocialCalc.crToCoord(e.range.left, e.range.top)), e.RangeRemove());
      break;
    case "movefrom":
      e.range2.hasrange ? (f.context.cursorsuffix = "", e.Range2Remove(), f.ExecuteCommand("redisplay", "")) : e.range.hasrange ? (e.range2.top = e.range.top, e.range2.right = e.range.right, e.range2.bottom = e.range.bottom, e.range2.left = e.range.left, e.range2.hasrange = !0, e.MoveECell(SocialCalc.crToCoord(e.range.left, e.range.top))) : (e.range2.top = e.ecell.row, e.range2.right = e.ecell.col, e.range2.bottom = e.ecell.row, e.range2.left = e.ecell.col, e.range2.hasrange = !0);
      c = e.range2.hasrange ? "" : "off";
      d = document.getElementById(f.idPrefix + "button_movefrom");
      d.src = f.imagePrefix + "movefrom" + c + ".gif";
      d = document.getElementById(f.idPrefix + "button_movepaste");
      d.src = f.imagePrefix + "movepaste" + c + ".gif";
      d = document.getElementById(f.idPrefix + "button_moveinsert");
      d.src = f.imagePrefix + "moveinsert" + c + ".gif";
      e.range2.hasrange && e.RangeRemove();
      break;
    case "movepaste":
    ;
    case "moveinsert":
      e.range2.hasrange && (f.context.cursorsuffix = "", c = b + " " + SocialCalc.crToCoord(e.range2.left, e.range2.top) + ":" + SocialCalc.crToCoord(e.range2.right, e.range2.bottom) + " " + e.ecell.coord, f.ExecuteCommand(c, ""), e.Range2Remove(), d = document.getElementById(f.idPrefix + "button_movefrom"), d.src = f.imagePrefix + "movefromoff.gif", d = document.getElementById(f.idPrefix + "button_movepaste"), d.src = f.imagePrefix + "movepasteoff.gif", d = document.getElementById(f.idPrefix + "button_moveinsert"), 
      d.src = f.imagePrefix + "moveinsertoff.gif");
      break;
    case "swapcolors":
      c = f.sheet;
      g = c.GetAssuredCell(e.ecell.coord);
      e = c.attribs.defaultcolor ? c.colors[c.attribs.defaultcolor] : "rgb(0,0,0)";
      l = c.attribs.defaultbgcolor ? c.colors[c.attribs.defaultbgcolor] : "rgb(255,255,255)";
      d = g.color ? c.colors[g.color] : e;
      d == l && (d = "");
      c = g.bgcolor ? c.colors[g.bgcolor] : l;
      c == e && (c = "");
      f.ExecuteCommand("set %C color " + c + "%Nset %C bgcolor " + d, "");
      break;
    default:
      c = SocialCalc.SpreadsheetCmdLookup[b] || "", d = SocialCalc.SpreadsheetCmdSLookup[b] || "", f.ExecuteCommand(c, d);
  }
  a && a.blur && a.blur();
  SocialCalc.KeyboardFocus();
};
SocialCalc.SpreadsheetCmdLookup = {copy:"copy %C all", cut:"cut %C all", paste:"paste %C all", pasteformats:"paste %C formats", lock:"set %C readonly yes", unlock:"set %C readonly no", "delete":"erase %C formulas", filldown:"filldown %C all", fillright:"fillright %C all", erase:"erase %C all", borderon:"set %C bt %S%Nset %C br %S%Nset %C bb %S%Nset %C bl %S", borderoff:"set %C bt %S%Nset %C br %S%Nset %C bb %S%Nset %C bl %S", merge:"merge %C", unmerge:"unmerge %C", "align-left":"set %C cellformat left", 
"align-center":"set %C cellformat center", "align-right":"set %C cellformat right", "align-default":"set %C cellformat", insertrow:"insertrow %C", insertcol:"insertcol %C", deleterow:"deleterow %C", deletecol:"deletecol %C", hiderow:"set %H hide yes", hidecol:"set %W hide yes", undo:"undo", redo:"redo", recalc:"recalc"};
SocialCalc.SpreadsheetCmdSLookup = {borderon:"1px solid rgb(0,0,0)", borderoff:""};
SocialCalc.SpreadsheetControlExecuteCommand = function(a, b, c) {
  a = SocialCalc.GetSpreadsheetControlObject().editor;
  var d, e, f, g;
  a.range.hasrange ? (e = d = SocialCalc.crToCoord(a.range.left, a.range.top) + ":" + SocialCalc.crToCoord(a.range.right, a.range.bottom), f = SocialCalc.rcColname(a.range.left) + ":" + SocialCalc.rcColname(a.range.right), g = a.range.top + ":" + a.range.bottom) : a.ecell ? (e = a.ecell.coord, d = a.ecell.coord + ":" + a.ecell.coord, f = SocialCalc.rcColname(SocialCalc.coordToCr(a.ecell.coord).col), g = SocialCalc.coordToCr(a.ecell.coord).row) : (e = "A1", d = "A1:A1", f = SocialCalc.rcColname(SocialCalc.coordToCr("A1").col), 
  g = SocialCalc.coordToCr("A1").row);
  b = b.replace(/%C/g, e);
  b = b.replace(/%R/g, d);
  b = b.replace(/%N/g, "\n");
  b = b.replace(/%S/g, c);
  b = b.replace(/%W/g, f);
  b = b.replace(/%H/g, g);
  b = b.replace(/%P/g, "%");
  a.EditorScheduleSheetCommands(b, !0, !1);
};
SocialCalc.SpreadsheetControlCreateSheetHTML = function(a) {
  var b, c;
  b = "";
  b = new SocialCalc.RenderContext(a.sheet);
  a = document.createElement("div");
  c = b.RenderSheet(null, {type:"html"});
  a.appendChild(c);
  delete b;
  b = a.innerHTML;
  delete c;
  delete a;
  return b;
};
SocialCalc.SpreadsheetControlCreateCellHTML = function(a, b, c) {
  var d = "", d = a.sheet.cells[b];
  if (!d) {
    return "";
  }
  d = void 0 == d.displaystring ? SocialCalc.FormatValueForDisplay(a.sheet, d.datavalue, b, c || a.context.defaultHTMLlinkstyle) : d.displaystring;
  "&nbsp;" == d && (d = "");
  return d;
};
SocialCalc.SpreadsheetControlCreateCellHTMLSave = function(a, b, c) {
  var d, e, f, g, l, h = [];
  d = b ? SocialCalc.ParseRange(b) : {cr1:{row:1, col:1}, cr2:{row:a.sheet.attribs.lastrow, col:a.sheet.attribs.lastcol}};
  b = d.cr1;
  d = d.cr2;
  h.push("version:1.0");
  for (e = b.row;e <= d.row;e++) {
    for (f = b.col;f <= d.col;f++) {
      if (g = SocialCalc.crToCoord(f, e), l = a.sheet.cells[g]) {
        l = void 0 == l.displaystring ? SocialCalc.FormatValueForDisplay(a.sheet, l.datavalue, g, c || a.context.defaultHTMLlinkstyle) : l.displaystring, "&nbsp;" != l && h.push(g + ":" + SocialCalc.encodeForSave(l));
      }
    }
  }
  h.push("");
  return h.join("\n");
};
SocialCalc.SpreadsheetControl.DoFunctionList = function() {
  var a, b, c = SocialCalc.Formula, d = SocialCalc.Constants.function_classlist, e = SocialCalc.GetSpreadsheetControlObject(), f = e.idPrefix + "function";
  b = document.getElementById(f + "dialog");
  if (!b) {
    c.FillFunctionInfo();
    b = '<table><tr><td><span style="font-size:x-small;font-weight:bold">%loc!Category!</span><br><select id="' + f + 'class" size="' + d.length + '" style="width:120px;" onchange="SocialCalc.SpreadsheetControl.FunctionClassChosen(this.options[this.selectedIndex].value);">';
    for (a = 0;a < d.length;a++) {
      b += '<option value="' + d[a] + '"' + (0 == a ? " selected>" : ">") + SocialCalc.special_chars(c.FunctionClasses[d[a]].name) + "</option>";
    }
    b += '</select></td><td>&nbsp;&nbsp;</td><td id="' + f + 'list"><span style="font-size:x-small;font-weight:bold">%loc!Functions!</span><br><select id="' + f + 'name" size="' + d.length + '" style="width:240px;" onchange="SocialCalc.SpreadsheetControl.FunctionChosen(this.options[this.selectedIndex].value);" ondblclick="SocialCalc.SpreadsheetControl.DoFunctionPaste();">';
    b += SocialCalc.SpreadsheetControl.GetFunctionNamesStr("all");
    b += '</td></tr><tr><td colspan="3"><div id="' + f + 'desc" style="width:380px;height:80px;overflow:auto;font-size:x-small;">' + SocialCalc.SpreadsheetControl.GetFunctionInfoStr(c.FunctionClasses[d[0]].items[0]) + '</div><div style="width:380px;text-align:right;padding-top:6px;font-size:small;"><input type="button" value="%loc!Paste!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.DoFunctionPaste();">&nbsp;<input type="button" value="%loc!Cancel!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.HideFunctions();"></div></td></tr></table>';
    c = document.createElement("div");
    c.id = f + "dialog";
    c.style.position = "absolute";
    d = SocialCalc.GetViewportInfo();
    a = SocialCalc.GetElementPositionWithScroll(e.spreadsheetDiv);
    c.style.top = d.height / 3 - a.top + "px";
    c.style.left = d.width / 3 - a.left + "px";
    c.style.zIndex = 100;
    c.style.backgroundColor = "#FFF";
    c.style.border = "1px solid black";
    c.style.width = "400px";
    b = SocialCalc.LocalizeSubstrings('<table cellspacing="0" cellpadding="0" style="border-bottom:1px solid black;"><tr><td style="font-size:10px;cursor:default;width:100%;background-color:#999;color:#FFF;">&nbsp;%loc!Function List!</td><td style="font-size:10px;cursor:default;color:#666;" onclick="SocialCalc.SpreadsheetControl.HideFunctions();">&nbsp;X&nbsp;</td></tr></table><div style="background-color:#DDD;">' + b + "</div>");
    c.innerHTML = b;
    SocialCalc.DragRegister(c.firstChild.firstChild.firstChild.firstChild, !0, !0, {MouseDown:SocialCalc.DragFunctionStart, MouseMove:SocialCalc.DragFunctionPosition, MouseUp:SocialCalc.DragFunctionPosition, Disabled:null, positionobj:c}, e.spreadsheetDiv);
    e.spreadsheetDiv.appendChild(c);
    b = document.getElementById(f + "name");
    b.focus();
    SocialCalc.CmdGotFocus(b);
  }
};
SocialCalc.SpreadsheetControl.GetFunctionNamesStr = function(a) {
  var b, c = "";
  b = SocialCalc.Formula.FunctionClasses[a];
  for (a = 0;a < b.items.length;a++) {
    c += '<option value="' + b.items[a] + '"' + (0 == a ? " selected>" : ">") + b.items[a] + "</option>";
  }
  return c;
};
SocialCalc.SpreadsheetControl.FillFunctionNames = function(a, b) {
  var c, d;
  c = SocialCalc.Formula;
  b.length = 0;
  d = c.FunctionClasses[a];
  for (c = 0;c < d.items.length;c++) {
    b.options[c] = new Option(d.items[c], d.items[c]), 0 == c && (b.options[c].selected = !0);
  }
};
SocialCalc.SpreadsheetControl.GetFunctionInfoStr = function(a) {
  var b = SocialCalc.Formula, c = b.FunctionList[a], d = SocialCalc.special_chars;
  a = "<b>" + a + "(" + d(b.FunctionArgString(a)) + ")</b><br>";
  return a += d(c[3]);
};
SocialCalc.SpreadsheetControl.FunctionClassChosen = function(a) {
  var b = SocialCalc.GetSpreadsheetControlObject().idPrefix + "function", c = SocialCalc.Formula;
  SocialCalc.SpreadsheetControl.FillFunctionNames(a, document.getElementById(b + "name"));
  SocialCalc.SpreadsheetControl.FunctionChosen(c.FunctionClasses[a].items[0]);
};
SocialCalc.SpreadsheetControl.FunctionChosen = function(a) {
  var b = SocialCalc.GetSpreadsheetControlObject().idPrefix + "function";
  document.getElementById(b + "desc").innerHTML = SocialCalc.SpreadsheetControl.GetFunctionInfoStr(a);
};
SocialCalc.SpreadsheetControl.HideFunctions = function() {
  var a = SocialCalc.GetSpreadsheetControlObject(), a = document.getElementById(a.idPrefix + "functiondialog");
  a.innerHTML = "";
  SocialCalc.DragUnregister(a);
  SocialCalc.KeyboardFocus();
  a.parentNode && a.parentNode.removeChild(a);
};
SocialCalc.SpreadsheetControl.DoFunctionPaste = function() {
  var a = SocialCalc.GetSpreadsheetControlObject(), b = a.editor, c = document.getElementById(a.idPrefix + "functionname"), a = document.getElementById(a.idPrefix + "multilinetextarea"), c = c.value + "(";
  SocialCalc.SpreadsheetControl.HideFunctions();
  a ? (a.value += c, a.focus(), SocialCalc.CmdGotFocus(a)) : b.EditorAddToInput(c, "=");
};
SocialCalc.SpreadsheetControl.DoMultiline = function() {
  var a = SocialCalc.LocalizeSubstrings, b, c, d = SocialCalc.GetSpreadsheetControlObject(), e = d.editor, f = e.workingvalues, d = SocialCalc.GetSpreadsheetControlObject(), g = d.idPrefix + "multiline";
  b = document.getElementById(g + "dialog");
  if (!b) {
    switch(e.state) {
      case "start":
        f.ecoord = e.ecell.coord;
        f.erow = e.ecell.row;
        f.ecol = e.ecell.col;
        e.RangeRemove();
        c = SocialCalc.GetCellContents(e.context.sheetobj, f.ecoord);
        break;
      case "input":
      ;
      case "inputboxdirect":
        c = e.inputBox.GetText();
    }
    e.inputBox.element.disabled = !0;
    c = SocialCalc.special_chars(c);
    b = '<textarea id="' + g + 'textarea" style="width:380px;height:120px;margin:10px 0px 0px 6px;">' + c + '</textarea><div style="width:380px;text-align:right;padding:6px 0px 4px 6px;font-size:small;">' + a('<input type="button" value="%loc!Set Cell Contents!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.DoMultilinePaste();">&nbsp;<input type="button" value="%loc!Clear!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.DoMultilineClear();">&nbsp;<input type="button" value="%loc!Cancel!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.HideMultiline();"></div></div>');
    c = document.createElement("div");
    c.id = g + "dialog";
    c.style.position = "absolute";
    e = SocialCalc.GetViewportInfo();
    f = SocialCalc.GetElementPositionWithScroll(d.spreadsheetDiv);
    c.style.top = e.height / 3 - f.top + "px";
    c.style.left = e.width / 3 - f.left + "px";
    c.style.zIndex = 100;
    c.style.backgroundColor = "#FFF";
    c.style.border = "1px solid black";
    c.style.width = "400px";
    c.innerHTML = '<table cellspacing="0" cellpadding="0" style="border-bottom:1px solid black;"><tr><td style="font-size:10px;cursor:default;width:100%;background-color:#999;color:#FFF;">' + a("&nbsp;%loc!Multi-line Input Box!") + '</td><td style="font-size:10px;cursor:default;color:#666;" onclick="SocialCalc.SpreadsheetControl.HideMultiline();">&nbsp;X&nbsp;</td></tr></table><div style="background-color:#DDD;">' + b + "</div>";
    SocialCalc.DragRegister(c.firstChild.firstChild.firstChild.firstChild, !0, !0, {MouseDown:SocialCalc.DragFunctionStart, MouseMove:SocialCalc.DragFunctionPosition, MouseUp:SocialCalc.DragFunctionPosition, Disabled:null, positionobj:c}, d.spreadsheetDiv);
    d.spreadsheetDiv.appendChild(c);
    b = document.getElementById(g + "textarea");
    b.focus();
    SocialCalc.CmdGotFocus(b);
  }
};
SocialCalc.SpreadsheetControl.HideMultiline = function() {
  var a = SocialCalc.GetSpreadsheetControlObject(), b = a.editor, a = document.getElementById(a.idPrefix + "multilinedialog");
  a.innerHTML = "";
  SocialCalc.DragUnregister(a);
  SocialCalc.KeyboardFocus();
  a.parentNode && a.parentNode.removeChild(a);
  switch(b.state) {
    case "start":
      b.inputBox.DisplayCellContents(null);
      break;
    case "input":
    ;
    case "inputboxdirect":
      b.inputBox.element.disabled = !1, b.inputBox.Focus();
  }
};
SocialCalc.SpreadsheetControl.DoMultilineClear = function() {
  var a = SocialCalc.GetSpreadsheetControlObject(), a = document.getElementById(a.idPrefix + "multilinetextarea");
  a.value = "";
  a.focus();
};
SocialCalc.SpreadsheetControl.DoMultilinePaste = function() {
  var a = SocialCalc.GetSpreadsheetControlObject(), b = a.editor, c = b.workingvalues, a = document.getElementById(a.idPrefix + "multilinetextarea").value;
  SocialCalc.SpreadsheetControl.HideMultiline();
  switch(b.state) {
    case "start":
      c.partialexpr = "";
      c.ecoord = b.ecell.coord;
      c.erow = b.ecell.row;
      c.ecol = b.ecell.col;
      break;
    case "input":
    ;
    case "inputboxdirect":
      b.inputBox.Blur(), b.inputBox.ShowInputBox(!1), b.state = "start";
  }
  b.EditorSaveEdit(a);
};
SocialCalc.SpreadsheetControl.DoLink = function() {
  var a = SocialCalc.LocalizeString, b, c, d, e, f = SocialCalc.GetSpreadsheetControlObject();
  d = f.editor;
  e = d.workingvalues;
  var f = SocialCalc.GetSpreadsheetControlObject(), g = f.idPrefix + "link";
  c = document.getElementById(g + "dialog");
  if (!c) {
    switch(d.state) {
      case "start":
        e.ecoord = d.ecell.coord;
        e.erow = d.ecell.row;
        e.ecol = d.ecell.col;
        d.RangeRemove();
        b = SocialCalc.GetCellContents(d.context.sheetobj, e.ecoord);
        break;
      case "input":
      ;
      case "inputboxdirect":
        b = d.inputBox.GetText();
    }
    d.inputBox.element.disabled = !0;
    "'" == b.charAt(0) && (b = b.slice(1));
    c = SocialCalc.ParseCellLinkText(b);
    SocialCalc.special_chars(b);
    d = (b = f.sheet.cells[d.ecell.coord]) && b.textvalueformat ? "" : " checked";
    e = c.newwin ? " checked" : "";
    b = '<div style="padding:6px 0px 4px 6px;"><span style="font-size:smaller;">' + a("Description") + '</span><br><input type="text" id="' + g + 'desc" style="width:380px;" value="' + SocialCalc.special_chars(c.desc) + '"><br><span style="font-size:smaller;">' + a("URL") + '</span><br><input type="text" id="' + g + 'url" style="width:380px;" value="' + SocialCalc.special_chars(c.url) + '"><br>';
    SocialCalc.Callbacks.MakePageLink && (b += '<span style="font-size:smaller;">' + a("Page Name") + '</span><br><input type="text" id="' + g + 'pagename" style="width:380px;" value="' + SocialCalc.special_chars(c.pagename) + '"><br><span style="font-size:smaller;">' + a("Workspace") + '</span><br><input type="text" id="' + g + 'workspace" style="width:380px;" value="' + SocialCalc.special_chars(c.workspace) + '"><br>');
    b += SocialCalc.LocalizeSubstrings('<input type="checkbox" id="' + g + 'format"' + d + '>&nbsp;<span style="font-size:smaller;">%loc!Set to Link format!</span><br><input type="checkbox" id="' + g + 'popup"' + e + '>&nbsp;<span style="font-size:smaller;">%loc!Show in new browser window!</span></div><div style="width:380px;text-align:right;padding:6px 0px 4px 6px;font-size:small;"><input type="button" value="%loc!Set Cell Contents!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.DoLinkPaste();">&nbsp;<input type="button" value="%loc!Clear!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.DoLinkClear();">&nbsp;<input type="button" value="%loc!Cancel!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.HideLink();"></div></div>');
    c = document.createElement("div");
    c.id = g + "dialog";
    c.style.position = "absolute";
    d = SocialCalc.GetViewportInfo();
    e = SocialCalc.GetElementPositionWithScroll(f.spreadsheetDiv);
    c.style.top = d.height / 3 - e.top + "px";
    c.style.left = d.width / 3 - e.left + "px";
    c.style.zIndex = 100;
    c.style.backgroundColor = "#FFF";
    c.style.border = "1px solid black";
    c.style.width = "400px";
    c.innerHTML = '<table cellspacing="0" cellpadding="0" style="border-bottom:1px solid black;"><tr><td style="font-size:10px;cursor:default;width:100%;background-color:#999;color:#FFF;">&nbsp;' + a("Link Input Box") + '</td><td style="font-size:10px;cursor:default;color:#666;" onclick="SocialCalc.SpreadsheetControl.HideLink();">&nbsp;X&nbsp;</td></tr></table><div style="background-color:#DDD;">' + b + "</div>";
    SocialCalc.DragRegister(c.firstChild.firstChild.firstChild.firstChild, !0, !0, {MouseDown:SocialCalc.DragFunctionStart, MouseMove:SocialCalc.DragFunctionPosition, MouseUp:SocialCalc.DragFunctionPosition, Disabled:null, positionobj:c}, f.spreadsheetDiv);
    f.spreadsheetDiv.appendChild(c);
    c = document.getElementById(g + "url");
    c.focus();
    SocialCalc.CmdGotFocus(c);
  }
};
SocialCalc.SpreadsheetControl.HideLink = function() {
  var a = SocialCalc.GetSpreadsheetControlObject(), b = a.editor, a = document.getElementById(a.idPrefix + "linkdialog");
  a.innerHTML = "";
  SocialCalc.DragUnregister(a);
  SocialCalc.KeyboardFocus();
  a.parentNode && a.parentNode.removeChild(a);
  switch(b.state) {
    case "start":
      b.inputBox.DisplayCellContents(null);
      break;
    case "input":
    ;
    case "inputboxdirect":
      b.inputBox.element.disabled = !1, b.inputBox.Focus();
  }
};
SocialCalc.SpreadsheetControl.DoLinkClear = function() {
  var a = SocialCalc.GetSpreadsheetControlObject();
  document.getElementById(a.idPrefix + "linkdesc").value = "";
  document.getElementById(a.idPrefix + "linkpagename").value = "";
  document.getElementById(a.idPrefix + "linkworkspace").value = "";
  a = document.getElementById(a.idPrefix + "linkurl");
  a.value = "";
  a.focus();
};
SocialCalc.SpreadsheetControl.DoLinkPaste = function() {
  var a = SocialCalc.GetSpreadsheetControlObject(), b = a.editor, c = b.workingvalues, d = document.getElementById(a.idPrefix + "linkdesc"), e = document.getElementById(a.idPrefix + "linkurl"), f = document.getElementById(a.idPrefix + "linkpagename"), g = document.getElementById(a.idPrefix + "linkworkspace"), l = document.getElementById(a.idPrefix + "linkformat"), h = "", p, q;
  document.getElementById(a.idPrefix + "linkpopup").checked ? (a = "<<", h = ">>", p = "[[", q = "]]") : (a = "<", h = ">", p = "[", q = "]");
  h = f && f.value ? g.value ? d.value + "{" + g.value + p + f.value + q + "}" : d.value + p + f.value + q : d.value + a + e.value + h;
  SocialCalc.SpreadsheetControl.HideLink();
  switch(b.state) {
    case "start":
      c.partialexpr = "";
      c.ecoord = b.ecell.coord;
      c.erow = b.ecell.row;
      c.ecol = b.ecell.col;
      break;
    case "input":
    ;
    case "inputboxdirect":
      b.inputBox.Blur(), b.inputBox.ShowInputBox(!1), b.state = "start";
  }
  l.checked && SocialCalc.SpreadsheetControlExecuteCommand(null, "set %C textvalueformat text-link", "");
  b.EditorSaveEdit(h);
};
SocialCalc.SpreadsheetControl.DoSum = function() {
  var a, b, c, d, e = SocialCalc.GetSpreadsheetControlObject().editor, f = e.context.sheetobj;
  if (e.range.hasrange) {
    a = SocialCalc.crToCoord(e.range.left, e.range.top) + ":" + SocialCalc.crToCoord(e.range.right, e.range.bottom), a = "set " + SocialCalc.crToCoord(e.range.right, e.range.bottom + 1) + " formula sum(" + a + ")";
  } else {
    if (a = e.ecell.row - 1, c = e.ecell.col, 1 >= a) {
      a = "set " + e.ecell.coord + " constant e#REF! 0 #REF!";
    } else {
      for (d = !1;0 < a;) {
        b = SocialCalc.crToCoord(c, a);
        b = f.GetAssuredCell(b);
        if (b.datatype && "t" != b.datatype) {
          d = !0;
        } else {
          if (d) {
            a++;
            break;
          }
        }
        a--;
      }
      a = "set " + e.ecell.coord + " formula sum(" + SocialCalc.crToCoord(c, a) + ":" + SocialCalc.crToCoord(c, e.ecell.row - 1) + ")";
    }
  }
  e.EditorScheduleSheetCommands(a, !0, !1);
};
SocialCalc.SpreadsheetControl.FindInSheet = function() {
  var a = $("#searchstatus"), b = SocialCalc.GetSpreadsheetControlObject();
  if (this.value.length) {
    var c = b.sheet.cells, d = RegExp(this.value, "im"), e, f = [], g;
    for (g in c) {
      e = c[g];
      var l = SocialCalc.coordToCr(g);
      "yes" !== b.sheet.rowattribs.hide[l.row] && "yes" !== b.sheet.colattribs.hide[SocialCalc.rcColname(l.col)] && (e = "c" === e.datatype ? e.displaystring : String(e.datavalue), void 0 !== e && e.match(d) && f.push(g));
    }
    b.sheet.search_cells = f;
    f.length ? (b.sheet.selected_search_cell = 0, b.editor.MoveECell(f[0]), a.text("1 of " + f.length)) : (b.sheet.selected_search_cell = void 0, a.text("No Matches"));
  } else {
    a.text(""), b.sheet.search_cells = [], b.sheet.selected_search_cell = void 0;
  }
};
SocialCalc.SpreadsheetControl.SearchSheet = function(a) {
  var b = SocialCalc.GetSpreadsheetControlObject(), c = b.sheet, d = c.search_cells;
  if (d.length) {
    var e = c.selected_search_cell, e = e === (0 === a ? 0 : d.length - 1) ? 0 === a ? d.length - 1 : 0 : e + (0 === a ? -1 : 1);
    a = d[e];
    c.selected_search_cell = e;
    b.editor.MoveECell(a);
    document.getElementById("searchstatus").textContent = String(e + 1) + " of " + d.length;
  }
};
SocialCalc.SpreadsheetControl.SearchUp = function() {
  SocialCalc.SpreadsheetControl.SearchSheet(0);
};
SocialCalc.SpreadsheetControl.SearchDown = function() {
  SocialCalc.SpreadsheetControl.SearchSheet(1);
};
SocialCalc.SpreadsheetControlSortOnclick = function(a, b) {
  var c, d, e = [], f = document.getElementById(a.idPrefix + "sortlist");
  SocialCalc.LoadColumnChoosers(a);
  a.editor.RangeChangeCallback.sort = SocialCalc.UpdateSortRangeProposal;
  for (c in a.sheet.names) {
    e.push(c);
  }
  e.sort();
  f.length = 0;
  f.options[0] = new Option(SocialCalc.LocalizeString("[select range]"));
  f.options[1] = new Option(SocialCalc.LocalizeString("Sort All"), "all");
  n_options = f.options.length;
  for (d = 0;d < e.length;d++) {
    c = e[d], f.options[d + n_options] = new Option(c, c), c == a.sortrange && (f.options[d + n_options].selected = !0);
  }
  "" == a.sortrange && (f.options[0].selected = !0);
  SocialCalc.UpdateSortRangeProposal(a.editor);
  SocialCalc.KeyboardFocus();
};
SocialCalc.SpreadsheetControlSortSave = function(a, b) {
  var c = SocialCalc.GetSpreadsheetControlObject(), d, e, f;
  d = "sort:" + SocialCalc.encodeForSave(c.sortrange) + ":";
  e = document.getElementById(c.idPrefix + "majorsort");
  f = document.getElementById(c.idPrefix + "majorsortup");
  d += e.selectedIndex + (f.checked ? ":up" : ":down");
  e = document.getElementById(c.idPrefix + "minorsort");
  0 < e.selectedIndex ? (f = document.getElementById(c.idPrefix + "minorsortup"), d += ":" + e.selectedIndex + (f.checked ? ":up" : ":down")) : d += "::";
  e = document.getElementById(c.idPrefix + "lastsort");
  0 < e.selectedIndex ? (f = document.getElementById(c.idPrefix + "lastsortup"), d += ":" + e.selectedIndex + (f.checked ? ":up" : ":down")) : d += "::";
  return d + "\n";
};
SocialCalc.SpreadsheetControlSortLoad = function(a, b, c, d) {
  a = SocialCalc.GetSpreadsheetControlObject();
  c = c.split(":");
  a.sortrange = SocialCalc.decodeFromSave(c[1]);
  b = document.getElementById(a.idPrefix + "sortbutton");
  a.sortrange ? (b.value = SocialCalc.LocalizeString("Sort ") + a.sortrange, b.style.visibility = "visible") : b.style.visibility = "hidden";
  SocialCalc.LoadColumnChoosers(a);
  sele = document.getElementById(a.idPrefix + "majorsort");
  sele.selectedIndex = c[2] - 0;
  document.getElementById(a.idPrefix + "majorsort" + c[3]).checked = !0;
  sele = document.getElementById(a.idPrefix + "minorsort");
  c[4] ? (sele.selectedIndex = c[4] - 0, document.getElementById(a.idPrefix + "minorsort" + c[5]).checked = !0) : (sele.selectedIndex = 0, document.getElementById(a.idPrefix + "minorsortup").checked = !0);
  sele = document.getElementById(a.idPrefix + "lastsort");
  c[6] ? (sele.selectedIndex = c[6] - 0, document.getElementById(a.idPrefix + "lastsort" + c[7]).checked = !0) : (sele.selectedIndex = 0, document.getElementById(a.idPrefix + "lastsortup").checked = !0);
  return!0;
};
SocialCalc.SpreadsheetControlCommentOnclick = function(a, b) {
  a.editor.MoveECellCallback.comment = SocialCalc.SpreadsheetControlCommentMoveECell;
  SocialCalc.SpreadsheetControlCommentDisplay(a, b);
  SocialCalc.KeyboardFocus();
};
SocialCalc.SpreadsheetControlCommentDisplay = function(a, b) {
  var c = "";
  a.editor.ecell && a.editor.ecell.coord && a.sheet.cells[a.editor.ecell.coord] && (c = a.sheet.cells[a.editor.ecell.coord].comment || "");
  document.getElementById(a.idPrefix + "commenttext").value = c;
};
SocialCalc.SpreadsheetControlCommentMoveECell = function(a) {
  SocialCalc.SpreadsheetControlCommentDisplay(SocialCalc.GetSpreadsheetControlObject(), "comment");
};
SocialCalc.SpreadsheetControlCommentSet = function() {
  var a = SocialCalc.GetSpreadsheetControlObject();
  a.ExecuteCommand("set %C comment " + SocialCalc.encodeForSave(document.getElementById(a.idPrefix + "commenttext").value));
  var b = SocialCalc.GetEditorCellElement(a.editor, a.editor.ecell.row, a.editor.ecell.col);
  a.editor.ECellReadonly() || (b.element.title = document.getElementById(a.idPrefix + "commenttext").value, a.editor.UpdateCellCSS(b, a.editor.ecell.row, a.editor.ecell.col));
  SocialCalc.KeyboardFocus();
};
SocialCalc.SpreadsheetControlCommentOnunclick = function(a, b) {
  delete a.editor.MoveECellCallback.comment;
};
SocialCalc.SpreadsheetControlNamesOnclick = function(a, b) {
  document.getElementById(a.idPrefix + "namesname").value = "";
  document.getElementById(a.idPrefix + "namesdesc").value = "";
  document.getElementById(a.idPrefix + "namesvalue").value = "";
  a.editor.RangeChangeCallback.names = SocialCalc.SpreadsheetControlNamesRangeChange;
  a.editor.MoveECellCallback.names = SocialCalc.SpreadsheetControlNamesRangeChange;
  SocialCalc.SpreadsheetControlNamesRangeChange(a.editor);
  SocialCalc.SpreadsheetControlNamesFillNameList();
  SocialCalc.SpreadsheetControlNamesChangedName();
};
SocialCalc.SpreadsheetControlNamesFillNameList = function() {
  var a = SocialCalc.LocalizeString, b, c = [], d = SocialCalc.GetSpreadsheetControlObject(), e = document.getElementById(d.idPrefix + "nameslist"), f = document.getElementById(d.idPrefix + "namesname").value.toUpperCase().replace(/[^A-Z0-9_\.]/g, "");
  for (b in d.sheet.names) {
    c.push(b);
  }
  c.sort();
  e.length = 0;
  e.options[0] = 0 < c.length ? new Option(a("[New]")) : new Option(a("[None]"));
  for (a = 0;a < c.length;a++) {
    b = c[a], e.options[a + 1] = new Option(b, b), b == f && (e.options[a + 1].selected = !0);
  }
  "" == f && (e.options[0].selected = !0);
};
SocialCalc.SpreadsheetControlNamesChangedName = function() {
  var a = SocialCalc.GetSpreadsheetControlObject(), b = document.getElementById(a.idPrefix + "nameslist"), b = b.options[b.selectedIndex].value;
  a.sheet.names[b] ? (document.getElementById(a.idPrefix + "namesname").value = b, document.getElementById(a.idPrefix + "namesdesc").value = a.sheet.names[b].desc || "", document.getElementById(a.idPrefix + "namesvalue").value = a.sheet.names[b].definition || "") : (document.getElementById(a.idPrefix + "namesname").value = "", document.getElementById(a.idPrefix + "namesdesc").value = "", document.getElementById(a.idPrefix + "namesvalue").value = "");
};
SocialCalc.SpreadsheetControlNamesRangeChange = function(a) {
  var b = SocialCalc.GetSpreadsheetControlObject();
  document.getElementById(b.idPrefix + "namesrangeproposal").value = a.range.hasrange ? SocialCalc.crToCoord(a.range.left, a.range.top) + ":" + SocialCalc.crToCoord(a.range.right, a.range.bottom) : a.ecell.coord;
};
SocialCalc.SpreadsheetControlNamesOnunclick = function(a, b) {
  delete a.editor.RangeChangeCallback.names;
  delete a.editor.MoveECellCallback.names;
};
SocialCalc.SpreadsheetControlNamesSetValue = function() {
  var a = SocialCalc.GetSpreadsheetControlObject();
  document.getElementById(a.idPrefix + "namesvalue").value = document.getElementById(a.idPrefix + "namesrangeproposal").value;
  SocialCalc.KeyboardFocus();
};
SocialCalc.SpreadsheetControlNamesSave = function() {
  var a = SocialCalc.GetSpreadsheetControlObject(), b = document.getElementById(a.idPrefix + "namesname").value;
  SocialCalc.SetTab(a.tabs[0].name);
  SocialCalc.KeyboardFocus();
  "" != b && a.ExecuteCommand("name define " + b + " " + document.getElementById(a.idPrefix + "namesvalue").value + "\nname desc " + b + " " + document.getElementById(a.idPrefix + "namesdesc").value);
};
SocialCalc.SpreadsheetControlNamesDelete = function() {
  var a = SocialCalc.GetSpreadsheetControlObject(), b = document.getElementById(a.idPrefix + "namesname").value;
  SocialCalc.SetTab(a.tabs[0].name);
  SocialCalc.KeyboardFocus();
  "" != b && a.ExecuteCommand("name delete " + b);
  SocialCalc.KeyboardFocus();
};
SocialCalc.SpreadsheetControlClipboardOnclick = function(a, b) {
  a = SocialCalc.GetSpreadsheetControlObject();
  clipele = document.getElementById(a.idPrefix + "clipboardtext");
  document.getElementById(a.idPrefix + "clipboardformat-tab").checked = !0;
  clipele.value = SocialCalc.ConvertSaveToOtherFormat(SocialCalc.Clipboard.clipboard, "tab");
};
SocialCalc.SpreadsheetControlClipboardFormat = function(a) {
  var b = SocialCalc.GetSpreadsheetControlObject();
  clipele = document.getElementById(b.idPrefix + "clipboardtext");
  clipele.value = SocialCalc.ConvertSaveToOtherFormat(SocialCalc.Clipboard.clipboard, a);
};
SocialCalc.SpreadsheetControlClipboardLoad = function() {
  var a = SocialCalc.GetSpreadsheetControlObject(), b = "tab";
  SocialCalc.SetTab(a.tabs[0].name);
  SocialCalc.KeyboardFocus();
  document.getElementById(a.idPrefix + "clipboardformat-csv").checked ? b = "csv" : document.getElementById(a.idPrefix + "clipboardformat-scsave").checked && (b = "scsave");
  a.editor.pastescclipboard = !0;
  a.editor.EditorScheduleSheetCommands("loadclipboard " + SocialCalc.encodeForSave(SocialCalc.ConvertOtherFormatToSave(document.getElementById(a.idPrefix + "clipboardtext").value, b)), !0, !1);
};
SocialCalc.SpreadsheetControlClipboardClear = function() {
  var a = SocialCalc.GetSpreadsheetControlObject(), b = document.getElementById(a.idPrefix + "clipboardtext");
  b.value = "";
  a.editor.EditorScheduleSheetCommands("clearclipboard", !0, !1);
  b.focus();
};
SocialCalc.SpreadsheetControlClipboardExport = function() {
  var a = SocialCalc.GetSpreadsheetControlObject();
  a.ExportCallback && a.ExportCallback(a);
  SocialCalc.SetTab(a.tabs[0].name);
  SocialCalc.KeyboardFocus();
};
SocialCalc.SpreadsheetControlSettingsSwitch = function(a) {
  SocialCalc.SettingControlReset();
  var b = SocialCalc.GetSpreadsheetControlObject(), c = document.getElementById(b.idPrefix + "sheetsettingstable"), d = document.getElementById(b.idPrefix + "cellsettingstable"), e = document.getElementById(b.idPrefix + "sheetsettingstoolbar"), f = document.getElementById(b.idPrefix + "cellsettingstoolbar");
  "sheet" == a ? (c.style.display = "block", d.style.display = "none", e.style.display = "block", f.style.display = "none", SocialCalc.SettingsControlSetCurrentPanel(b.views.settings.values.sheetspanel)) : (c.style.display = "none", d.style.display = "block", e.style.display = "none", f.style.display = "block", SocialCalc.SettingsControlSetCurrentPanel(b.views.settings.values.cellspanel));
};
SocialCalc.SettingsControlSave = function(a) {
  var b, c, d = SocialCalc.GetSpreadsheetControlObject(), e = SocialCalc.SettingsControlUnloadPanel(SocialCalc.SettingsControls.CurrentPanel);
  SocialCalc.SetTab(d.tabs[0].name);
  SocialCalc.KeyboardFocus();
  "sheet" == a ? c = d.sheet.DecodeSheetAttributes(e) : "cell" == a && (d.editor.range.hasrange && (b = SocialCalc.crToCoord(d.editor.range.left, d.editor.range.top) + ":" + SocialCalc.crToCoord(d.editor.range.right, d.editor.range.bottom)), c = d.sheet.DecodeCellAttributes(d.editor.ecell.coord, e, b));
  c && d.editor.EditorScheduleSheetCommands(c, !0, !1);
};
SocialCalc.SpreadsheetControlCreateSpreadsheetSave = function(a, b) {
  var c = "", d = "", e, f;
  if (b) {
    for (e in b) {
      f = "\n" != b[e].charAt(b[e] - 1) ? "\n" : "", c += "--" + a.multipartBoundary + "\nContent-type: text/plain; charset=UTF-8\n\n" + b[e] + f, d += "part:" + e + "\n";
    }
  }
  return "socialcalc:version:1.0\nMIME-Version: 1.0\nContent-Type: multipart/mixed; boundary=" + a.multipartBoundary + "\n--" + a.multipartBoundary + "\nContent-type: text/plain; charset=UTF-8\n\n# SocialCalc Spreadsheet Control Save\nversion:1.0\npart:sheet\npart:edit\npart:audit\n" + d + "--" + a.multipartBoundary + "\nContent-type: text/plain; charset=UTF-8\n\n" + a.CreateSheetSave() + "--" + a.multipartBoundary + "\nContent-type: text/plain; charset=UTF-8\n\n" + a.editor.SaveEditorSettings() + 
  "--" + a.multipartBoundary + "\nContent-type: text/plain; charset=UTF-8\n\n" + a.sheet.CreateAuditString() + c + "--" + a.multipartBoundary + "--\n";
};
SocialCalc.SpreadsheetControlDecodeSpreadsheetSave = function(a, b) {
  var c, d, e, f, g, l, h, p = {}, q = [];
  c = b.search(/^MIME-Version:\s1\.0/mi);
  if (0 > c) {
    return p;
  }
  d = /^Content-Type:\s*multipart\/mixed;\s*boundary=(\S+)/mig;
  d.lastIndex = c;
  e = d.exec(b);
  if (0 >= d.lastIndex) {
    return p;
  }
  c = e[1];
  f = RegExp("^--" + c + "(?:\r\n|\n)", "mg");
  f.lastIndex = d.lastIndex;
  f.exec(b);
  d = /(?:\r\n|\n)(?:\r\n|\n)/gm;
  d.lastIndex = f.lastIndex;
  e = d.exec(b);
  if (!e) {
    return p;
  }
  g = d.lastIndex;
  f.lastIndex = g;
  e = f.exec(b);
  if (!e) {
    return p;
  }
  e = e.index;
  g = b.substring(g, e).split(/\r\n|\n/);
  for (l = 0;l < g.length;l++) {
    switch(line = g[l], h = line.split(":"), h[0]) {
      case "part":
        q.push(h[1]);
    }
  }
  for (pnum = 0;pnum < q.length;pnum++) {
    d.lastIndex = e;
    e = d.exec(b);
    if (!e) {
      break;
    }
    g = d.lastIndex;
    pnum == q.length - 1 && (f = RegExp("^--" + c + "--$", "mg"));
    f.lastIndex = g;
    e = f.exec(b);
    if (!e) {
      break;
    }
    e = e.index;
    p[q[pnum]] = {start:g, end:e};
  }
  return p;
};
SocialCalc.SettingsControls = {Controls:{}, CurrentPanel:null};
SocialCalc.SettingsControlSetCurrentPanel = function(a) {
  SocialCalc.SettingsControls.CurrentPanel = a;
  SocialCalc.SettingsControls.PopupChangeCallback({panelobj:a}, "", null);
};
SocialCalc.SettingsControlInitializePanel = function(a) {
  var b, c = SocialCalc.SettingsControls;
  for (b in a) {
    "name" != b && (ctrl = c.Controls[a[b].type]) && ctrl.Initialize && ctrl.Initialize(a, b);
  }
};
SocialCalc.SettingsControlLoadPanel = function(a, b) {
  var c, d = SocialCalc.SettingsControls;
  for (c in a) {
    "name" != c && (ctrl = d.Controls[a[c].type]) && ctrl.SetValue && ctrl.SetValue(a, c, b[a[c].setting]);
  }
};
SocialCalc.SettingsControlUnloadPanel = function(a) {
  var b, c = SocialCalc.SettingsControls, d = {};
  for (b in a) {
    "name" != b && (ctrl = c.Controls[a[b].type]) && ctrl.GetValue && (d[a[b].setting] = ctrl.GetValue(a, b));
  }
  return d;
};
SocialCalc.SettingsControls.PopupChangeCallback = function(a, b, c) {
  var d = SocialCalc.Constants;
  if ((b = document.getElementById("sample-text")) && a && a.panelobj) {
    c = SocialCalc.CurrentSpreadsheetControlObject.idPrefix;
    var e = "cell" == a.panelobj.name ? "c" : "", f, g;
    g = d.defaultCellLayout.match(/^padding.(\S+) (\S+) (\S+) (\S+).vertical.align.(\S+);$/) || [];
    g = {color:["textcolor"], backgroundColor:["bgcolor", "#FFF"], fontSize:["fontsize", d.defaultCellFontSize], fontFamily:["fontfamily"], paddingTop:["padtop", g[1]], paddingRight:["padright", g[2]], paddingBottom:["padbottom", g[3]], paddingLeft:["padleft", g[4]], verticalAlign:["alignvert", g[5]]};
    for (f in g) {
      d = SocialCalc.Popup.GetValue(c + e + g[f][0]) || g[f][1] || "", b.style[f] = d;
    }
    if ("c" == e) {
      g = {borderTop:"cbt", borderRight:"cbr", borderBottom:"cbb", borderLeft:"cbl"};
      for (f in g) {
        d = SocialCalc.SettingsControls.BorderSideGetValue(a.panelobj, g[f]), b.style[f] = d ? d.val || "" : "";
      }
      d = SocialCalc.Popup.GetValue(c + "calignhoriz");
      b.style.textAlign = d || "left";
    } else {
      b.style.border = "", d = SocialCalc.Popup.GetValue(c + "textalignhoriz"), b.style.textAlign = d || "left", d = SocialCalc.Popup.GetValue(c + "numberalignhoriz");
    }
    b.childNodes[1].style.textAlign = d || "right";
    g = (d = SocialCalc.Popup.GetValue(c + e + "fontlook")) ? d.match(/^(\S+) (\S+)$/) || [] : [];
    b.style.fontStyle = g[1] || "";
    b.style.fontWeight = g[2] || "";
    d = SocialCalc.Popup.GetValue(c + e + "formatnumber") || "General";
    a = SocialCalc.FormatNumber.formatNumberWithFormat(9.8765, d, "");
    f = SocialCalc.FormatNumber.formatNumberWithFormat(-1234.5, d, "");
    "??-???-??&nbsp;??:??:??" != f && (a += "<br>" + f);
    b.childNodes[1].innerHTML = a;
  }
};
SocialCalc.SettingsControls.PopupListSetValue = function(a, b, c) {
  if (c) {
    var d = SocialCalc.Popup;
    c.def ? d.SetValue(a[b].id, "") : d.SetValue(a[b].id, c.val);
  } else {
    alert(b + " no value");
  }
};
SocialCalc.SettingsControls.PopupListGetValue = function(a, b) {
  var c = a[b];
  return c ? (c = SocialCalc.Popup.GetValue(c.id)) ? {def:!1, val:c} : {def:!0, val:0} : null;
};
SocialCalc.SettingsControls.PopupListInitialize = function(a, b) {
  var c, d, e, f;
  c = SocialCalc.SettingsControls;
  c = a[b].initialdata || c.Controls[a[b].type].InitialData || "";
  c = SocialCalc.LocalizeSubstrings(c);
  var g = c.split(/\|/), l = [];
  for (c = 0;c < (g.length || 0);c++) {
    d = g[c], e = d.indexOf(":"), f = d.substring(0, e), -1 != f.indexOf("\\") && (f = f.replace(/\\c/g, ":"), f = f.replace(/\\b/g, "\\")), f = SocialCalc.special_chars(f), l[c] = "[custom]" == f ? {o:SocialCalc.Constants.s_PopupListCustom, v:d.substring(e + 1), a:{custom:!0}} : "[cancel]" == f ? {o:SocialCalc.Constants.s_PopupListCancel, v:"", a:{cancel:!0}} : "[break]" == f ? {o:"-----", v:"", a:{skip:!0}} : "[newcol]" == f ? {o:"", v:"", a:{newcol:!0}} : {o:f, v:d.substring(e + 1)};
  }
  SocialCalc.Popup.Create("List", a[b].id, {});
  SocialCalc.Popup.Initialize(a[b].id, {options:l, attribs:{changedcallback:SocialCalc.SettingsControls.PopupChangeCallback, panelobj:a}});
};
SocialCalc.SettingsControls.PopupListReset = function(a) {
  SocialCalc.Popup.Reset("List");
};
SocialCalc.SettingsControls.Controls.PopupList = {SetValue:SocialCalc.SettingsControls.PopupListSetValue, GetValue:SocialCalc.SettingsControls.PopupListGetValue, Initialize:SocialCalc.SettingsControls.PopupListInitialize, OnReset:SocialCalc.SettingsControls.PopupListReset, ChangedCallback:null};
SocialCalc.SettingsControls.ColorChooserSetValue = function(a, b, c) {
  if (c) {
    var d = SocialCalc.Popup;
    c.def ? d.SetValue(a[b].id, "") : d.SetValue(a[b].id, c.val);
  } else {
    alert(b + " no value");
  }
};
SocialCalc.SettingsControls.ColorChooserGetValue = function(a, b) {
  var c = SocialCalc.Popup.GetValue(a[b].id);
  return c ? {def:!1, val:c} : {def:!0, val:0};
};
SocialCalc.SettingsControls.ColorChooserInitialize = function(a, b) {
  SocialCalc.Popup.Create("ColorChooser", a[b].id, {});
  SocialCalc.Popup.Initialize(a[b].id, {attribs:{title:"&nbsp;", moveable:!0, width:"106px", changedcallback:SocialCalc.SettingsControls.PopupChangeCallback, panelobj:a}});
};
SocialCalc.SettingsControls.ColorChooserReset = function(a) {
  SocialCalc.Popup.Reset("ColorChooser");
};
SocialCalc.SettingsControls.Controls.ColorChooser = {SetValue:SocialCalc.SettingsControls.ColorChooserSetValue, GetValue:SocialCalc.SettingsControls.ColorChooserGetValue, Initialize:SocialCalc.SettingsControls.ColorChooserInitialize, OnReset:SocialCalc.SettingsControls.ColorChooserReset, ChangedCallback:null};
SocialCalc.SettingsControls.BorderSideSetValue = function(a, b, c) {
  a = a[b].id;
  if (c) {
    if (b = document.getElementById(a + "-onoff-bcb")) {
      c.val ? (b.checked = !0, b.value = c.val, c = c.val.match(/(\S+)\s+(\S+)\s+(\S.+)/), a += "-color", SocialCalc.Popup.SetValue(a, c[3]), SocialCalc.Popup.SetDisabled(a, !1)) : (b.checked = !1, b.value = c.val, a += "-color", SocialCalc.Popup.SetValue(a, ""), SocialCalc.Popup.SetDisabled(a, !0));
    }
  } else {
    alert(b + " no value");
  }
};
SocialCalc.SettingsControls.BorderSideGetValue = function(a, b) {
  var c, d = a[b].id;
  if (c = document.getElementById(d + "-onoff-bcb")) {
    return c.checked ? (c = SocialCalc.Popup.GetValue(d + "-color"), {def:!1, val:"1px solid " + (c || "rgb(0,0,0)")}) : {def:!1, val:""};
  }
};
SocialCalc.SettingsControls.BorderSideInitialize = function(a, b) {
  var c = a[b].id;
  SocialCalc.Popup.Create("ColorChooser", c + "-color", {});
  SocialCalc.Popup.Initialize(c + "-color", {attribs:{title:"&nbsp;", width:"106px", moveable:!0, changedcallback:SocialCalc.SettingsControls.PopupChangeCallback, panelobj:a}});
};
SocialCalc.SettingsControlOnchangeBorder = function(a) {
  var b = SocialCalc.SettingsControls, c = b.CurrentPanel, d = a.id.match(/(^.*\-)(\w+)\-(\w+)\-(\w+)$/);
  if (d) {
    var e = d[2], c = c[e].type;
    switch(d[4]) {
      case "bcb":
        a.checked ? b.Controls[c].SetValue(b.CurrentPanel, e, {def:!1, val:a.value || "1px solid rgb(0,0,0)"}) : b.Controls[c].SetValue(b.CurrentPanel, e, {def:!1, val:""});
    }
  }
};
SocialCalc.SettingsControls.Controls.BorderSide = {SetValue:SocialCalc.SettingsControls.BorderSideSetValue, GetValue:SocialCalc.SettingsControls.BorderSideGetValue, OnClick:SocialCalc.SettingsControls.ColorComboOnClick, Initialize:SocialCalc.SettingsControls.BorderSideInitialize, InitialData:{thickness:"1 pixel:1px", style:"Solid:solid"}, ChangedCallback:null};
SocialCalc.SettingControlReset = function() {
  var a = SocialCalc.SettingsControls, b;
  for (b in a.Controls) {
    a.Controls[b].OnReset && a.Controls[b].OnReset(b);
  }
};
SocialCalc.OtherSaveParts = {};
SocialCalc.CtrlSEditor = function(a) {
  var b, c;
  if (0 < a.length) {
    b = SocialCalc.special_chars(SocialCalc.OtherSaveParts[a] || "");
  } else {
    for (c in b = "Listing of Parts\n", SocialCalc.OtherSaveParts) {
      b += SocialCalc.special_chars("\nPart: " + c + "\n=====\n" + SocialCalc.OtherSaveParts[c] + "\n");
    }
  }
  c = document.createElement("div");
  c.style.cssText = "position:absolute;z-index:500;width:300px;height:300px;left:100px;top:200px;border:1px solid black;background-color:#EEE;text-align:center;";
  c.id = "socialcalc-editbox";
  c.innerHTML = a + '<br><br><textarea id="socialcalc-editbox-textarea" style="width:250px;height:200px;">' + b + "</textarea><br><br><input type=button onclick=\"SocialCalc.CtrlSEditorDone ('socialcalc-editbox', '" + a + '\');" value="OK">';
  document.body.appendChild(c);
  a = document.getElementById("socialcalc-editbox-textarea");
  a.focus();
  SocialCalc.CmdGotFocus(a);
};
SocialCalc.CtrlSEditorDone = function(a, b) {
  var c = document.getElementById(a + "-textarea").value;
  0 < b.length && (0 < c.length ? SocialCalc.OtherSaveParts[b] = c : delete SocialCalc.OtherSaveParts[b]);
  c = document.getElementById(a);
  SocialCalc.KeyboardFocus();
  c.parentNode.removeChild(c);
};
SocialCalc || (alert("Main SocialCalc code module needed"), SocialCalc = {});
SocialCalc.TableEditor || alert("SocialCalc TableEditor code module needed");
SocialCalc.CurrentSpreadsheetViewerObject = null;
SocialCalc.SpreadsheetViewer = function(a) {
  var b = SocialCalc.Constants;
  this.spreadsheetDiv = this.parentNode = null;
  this.viewheight = this.width = this.height = this.requestedSpaceBelow = this.requestedWidth = this.requestedHeight = 0;
  this.editorDiv = this.spreadsheetDiv = this.editor = this.context = this.sheet = null;
  this.sortrange = "";
  this.idPrefix = a || "SocialCalc-";
  this.imagePrefix = b.defaultImagePrefix;
  this.statuslineheight = b.SVStatuslineheight;
  this.statuslineCSS = b.SVStatuslineCSS;
  this.sheet = new SocialCalc.Sheet;
  this.context = new SocialCalc.RenderContext(this.sheet);
  if (!0 == SocialCalc._app || !0 == SocialCalc._view) {
    b.defaultImagePrefix = this.imagePrefix = "../" + this.imagePrefix;
  }
  !0 == SocialCalc._app ? (this.context.showGrid = !1, this.context.showRCHeaders = !1, this.context.highlightTypes.range.style = "", this.context.sheetobj.cells.A1 = new SocialCalc.Cell("A1"), this.context.sheetobj.cells.A1.displaystring = "Loading ... ") : (this.context.showGrid = !0, this.context.showRCHeaders = !0);
  this.editor = new SocialCalc.TableEditor(this.context);
  this.editor.noEdit = !0;
  this.editor.StatusCallback.statusline = {func:SocialCalc.SpreadsheetViewerStatuslineCallback, params:{}};
  this.hasStatusLine = !0;
  this.statuslineHTML = '<table cellspacing="0" cellpadding="0"><tr><td width="100%" style="overflow:hidden;">{status}</td><td>&nbsp;</td></tr></table>';
  this.noRecalc = this.statuslineFull = !0;
  this.repeatingMacroTimer = null;
  this.repeatingMacroInterval = 60;
  this.repeatingMacroCommands = "";
  SocialCalc.CurrentSpreadsheetViewerObject = this;
};
SocialCalc.SpreadsheetViewer.prototype.InitializeSpreadsheetViewer = function(a, b, c, d) {
  return SocialCalc.InitializeSpreadsheetViewer(this, a, b, c, d);
};
SocialCalc.SpreadsheetViewer.prototype.LoadSave = function(a) {
  return SocialCalc.SpreadsheetViewerLoadSave(this, a);
};
SocialCalc.SpreadsheetViewer.prototype.DoOnResize = function() {
  return SocialCalc.DoOnResize(this);
};
SocialCalc.SpreadsheetViewer.prototype.SizeSSDiv = function() {
  return SocialCalc.SizeSSDiv(this);
};
SocialCalc.SpreadsheetViewer.prototype.DecodeSpreadsheetSave = function(a) {
  return SocialCalc.SpreadsheetViewerDecodeSpreadsheetSave(this, a);
};
SocialCalc.SpreadsheetViewer.prototype.ParseSheetSave = function(a) {
  return this.sheet.ParseSheetSave(a);
};
SocialCalc.InitializeSpreadsheetViewer = function(a, b, c, d, e) {
  a.requestedHeight = c;
  a.requestedWidth = d;
  a.requestedSpaceBelow = e;
  "string" == typeof b && (b = document.getElementById(b));
  null == b && alert("SocialCalc.SpreadsheetControl not given parent node.");
  a.parentNode = b;
  a.spreadsheetDiv = document.createElement("div");
  a.SizeSSDiv();
  for (c = b.firstChild;null != c;c = b.firstChild) {
    b.removeChild(c);
  }
  b.appendChild(a.spreadsheetDiv);
  a.nonviewheight = a.hasStatusLine ? a.statuslineheight : 0;
  a.viewheight = a.height - a.nonviewheight;
  a.editorDiv = a.editor.CreateTableEditor(a.width, a.viewheight);
  a.spreadsheetDiv.appendChild(a.editorDiv);
  a.hasStatusLine && (a.statuslineDiv = document.createElement("div"), a.statuslineDiv.style.cssText = a.statuslineCSS, a.statuslineDiv.style.height = a.statuslineheight - (a.statuslineDiv.style.paddingTop.slice(0, -2) - 0) - (a.statuslineDiv.style.paddingBottom.slice(0, -2) - 0) + "px", a.statuslineDiv.id = a.idPrefix + "statusline", a.spreadsheetDiv.appendChild(a.statuslineDiv), a.editor.StatusCallback.statusline = {func:SocialCalc.SpreadsheetViewerStatuslineCallback, params:{spreadsheetobj:a}});
  !0 == SocialCalc._app && (a.formDataViewer = new SocialCalc.SpreadsheetViewer("te_FormData-"), a.formDataViewer.sheet.statuscallback = null, SocialCalc.CurrentSpreadsheetViewerObject = a);
};
SocialCalc.SpreadsheetViewerLoadSave = function(a, b) {
  var c, d, e;
  if (c = a.DecodeSpreadsheetSave(b)) {
    c.sheet && (a.sheet.ResetSheet(), a.sheet.ParseSheetSave(b.substring(c.sheet.start, c.sheet.end))), c.edit && a.editor.LoadEditorSettings(b.substring(c.edit.start, c.edit.end)), c.startupmacro && a.editor.EditorScheduleSheetCommands(b.substring(c.startupmacro.start, c.startupmacro.end), !1, !0), c.repeatingmacro && (c = b.substring(c.repeatingmacro.start, c.repeatingmacro.end), c = c.replace("\r", ""), d = c.indexOf("\n"), 0 < d && (e = c.substring(0, d) - 0, a.repeatingMacroInterval = e, a.repeatingMacroCommands = 
    c.substring(d + 1), 0 < e && (a.repeatingMacroTimer = window.setTimeout(SocialCalc.SpreadsheetViewerDoRepeatingMacro, 1E3 * a.repeatingMacroInterval))));
  }
  "off" == a.editor.context.sheetobj.attribs.recalc || a.noRecalc ? a.editor.ScheduleRender() : a.editor.EditorScheduleSheetCommands("recalc");
};
SocialCalc.SpreadsheetViewerDoRepeatingMacro = function() {
  var a = SocialCalc.GetSpreadsheetViewerObject(), b = a.editor;
  a.repeatingMacroTimer = null;
  SocialCalc.SheetCommandInfo.CmdExtensionCallbacks.repeatmacro = {func:SocialCalc.SpreadsheetViewerRepeatMacroCommand, data:null};
  b.EditorScheduleSheetCommands(a.repeatingMacroCommands);
};
SocialCalc.SpreadsheetViewerRepeatMacroCommand = function(a, b, c, d, e) {
  a = SocialCalc.GetSpreadsheetViewerObject();
  d = d.RestOfString() - 0;
  0 < d || (d = a.repeatingMacroInterval);
  a.repeatingMacroInterval = d;
  a.repeatingMacroTimer = window.setTimeout(SocialCalc.SpreadsheetViewerDoRepeatingMacro, 1E3 * a.repeatingMacroInterval);
};
SocialCalc.SpreadsheetViewerStopRepeatingMacro = function() {
  var a = SocialCalc.GetSpreadsheetViewerObject();
  a.repeatingMacroTimer && (window.clearTimeout(a.repeatingMacroTimer), a.repeatingMacroTimer = null);
};
SocialCalc.SpreadsheetViewerDoButtonCmd = function(a, b, c) {
  a = c.element;
  c = c.functionobj.command;
  b = SocialCalc.GetSpreadsheetViewerObject().editor;
  switch(c) {
    case "recalc":
      b.EditorScheduleSheetCommands("recalc");
  }
  a && a.blur && a.blur();
  SocialCalc.KeyboardFocus();
};
SocialCalc.LocalizeString = function(a) {
  var b = SocialCalc.LocalizeStringList[a];
  b || (b = SocialCalc.Constants["s_loc_" + a.toLowerCase().replace(/\s/g, "_").replace(/\W/g, "X")] || a, SocialCalc.LocalizeStringList[a] = b);
  return b;
};
SocialCalc.LocalizeStringList = {};
SocialCalc.LocalizeSubstrings = function(a) {
  var b = SocialCalc.LocalizeString;
  return a.replace(/%(loc|ssc)!(.*?)!/g, function(a, d, e) {
    return "ssc" == d ? SocialCalc.Constants[e] || alert("Missing constant: " + e) : b(e);
  });
};
SocialCalc.GetSpreadsheetViewerObject = function() {
  var a = SocialCalc.CurrentSpreadsheetViewerObject;
  if (a) {
    return a;
  }
  throw "No current SpreadsheetViewer object.";
};
SocialCalc.DoOnResize = function(a) {
  var b, c = a.views;
  if (a.SizeSSDiv()) {
    for (vname in c) {
      b = c[vname].element, b.style.width = a.width + "px", b.style.height = a.height - a.nonviewheight + "px";
    }
    SocialCalc._app || a.editor.ResizeTableEditor(a.width, a.height - a.nonviewheight);
  }
};
SocialCalc.SizeSSDiv = function(a) {
  var b, c, d, e;
  d = !1;
  b = SocialCalc.GetViewportInfo();
  c = SocialCalc.GetElementPosition(a.parentNode);
  c.bottom = 0;
  c.right = 0;
  e = a.parentNode.style;
  e.marginTop && (c.top += e.marginTop.slice(0, -2) - 0);
  e.marginBottom && (c.bottom += e.marginBottom.slice(0, -2) - 0);
  e.marginLeft && (c.left += e.marginLeft.slice(0, -2) - 0);
  e.marginRight && (c.right += e.marginRight.slice(0, -2) - 0);
  e = a.requestedHeight || b.height - (c.top + c.bottom + 10) - (a.requestedSpaceBelow || 0);
  a.height != e && (a.height = e, a.spreadsheetDiv.style.height = e + "px", d = !0);
  e = a.requestedWidth || b.width - (c.left + c.right + 10) || 700;
  a.width != e && (a.width = e, a.spreadsheetDiv.style.width = e + "px", d = !0);
  a.spreadsheetDiv.style.position = "relative";
  return d;
};
SocialCalc.SpreadsheetViewerStatuslineCallback = function(a, b, c, d) {
  var e = d.spreadsheetobj, f = "";
  e && e.statuslineDiv && (f = e.statuslineFull ? a.GetStatuslineString(b, c, d) : a.ecell.coord, f = e.statuslineHTML.replace(/\{status\}/, f), e.statuslineDiv.innerHTML = f);
};
SocialCalc.CmdGotFocus = function(a) {
  SocialCalc.Keyboard.passThru = a;
};
SocialCalc.SpreadsheetViewerCreateSheetHTML = function(a) {
  var b, c;
  b = "";
  b = new SocialCalc.RenderContext(a.sheet);
  a = document.createElement("div");
  c = b.RenderSheet(null, {type:"html"});
  a.appendChild(c);
  delete b;
  b = a.innerHTML;
  delete c;
  delete a;
  return b;
};
SocialCalc.SpreadsheetViewerDecodeSpreadsheetSave = function(a, b) {
  var c, d, e, f, g, l, h, p = {}, q = [];
  /[^\n]\r[^\n]/.test(b) && (b = b.replace(/([^\n])\r([^\n])/g, "$1\r\n$2"));
  c = b.search(/^MIME-Version:\s1\.0/mi);
  if (0 > c) {
    return p;
  }
  d = /^Content-Type:\s*multipart\/mixed;\s*boundary=(\S+)/mig;
  d.lastIndex = c;
  e = d.exec(b);
  if (0 >= d.lastIndex) {
    return p;
  }
  c = e[1];
  f = RegExp("^--" + c + "(?:\r\n|\n)", "mg");
  f.lastIndex = d.lastIndex;
  f.exec(b);
  d = /(?:\r\n|\n)(?:\r\n|\n)/gm;
  d.lastIndex = f.lastIndex;
  e = d.exec(b);
  if (!e) {
    return p;
  }
  g = d.lastIndex;
  f.lastIndex = g;
  e = f.exec(b);
  if (!e) {
    return p;
  }
  e = e.index;
  g = b.substring(g, e).split(/\r\n|\n/);
  for (l = 0;l < g.length;l++) {
    switch(line = g[l], h = line.split(":"), h[0]) {
      case "part":
        q.push(h[1]);
    }
  }
  for (pnum = 0;pnum < q.length;pnum++) {
    d.lastIndex = e;
    e = d.exec(b);
    if (!e) {
      break;
    }
    g = d.lastIndex;
    pnum == q.length - 1 && (f = RegExp("^--" + c + "--$", "mg"));
    f.lastIndex = g;
    e = f.exec(b);
    if (!e) {
      break;
    }
    e = e.index;
    p[q[pnum]] = {start:g, end:e};
  }
  return p;
};
(function() {
  Class = function(a, b) {
    if (!a) {
      throw "Class requires a class definition string as its first argument";
    }
    if (!b) {
      throw "Class requires a class wrapper function as its second argument";
    }
    if (!a.match(/^([\w\.]+)(?:\(\s*([\w\.]+)\s*\))?(?:\s+(.*?)\s*)?$/)) {
      throw "Can't parse Class Definition: '" + a + "'";
    }
    var c = RegExp.$1, d = RegExp.$2 || "", e = [];
    RegExp.$3 && (e = RegExp.$3.split(/\s+/));
    for (var f = [], g = !0, l = 0, h = e.length;l < h;l++) {
      var p = e[l];
      "-nostrict" == p && (g = !1);
      p.match(/^-inc=(.+)$/) && (f = RegExp.$1.split(","));
    }
    for (var e = c.split("."), q = Class.global, l = 0;l < e.length;l++) {
      q[e[l]] || (q[e[l]] = function() {
        try {
          this.init();
        } catch (a) {
        }
      }), q = q[e[l]];
    }
    q.className = c;
    q.isa = function(a) {
      if (q.baseClassName = a) {
        q.prototype = eval("new " + a + "()"), q.prototype.superFunc = function(b) {
          return eval(a).prototype[b];
        };
      }
    };
    q.isa(d);
    q.global = Class.global;
    q.addGlobal = function() {
      this.newGlobals++;
      return Class.global;
    };
    q.extend = function(a) {
      if ("object" != typeof a) {
        throw "extend requires an object of name:value pairs";
      }
      for (var b in a) {
        q.prototype[b] = a[b];
      }
    };
    c = 0;
    for (d = f.length;c < d;c++) {
      l = f[c], f[c] = "proto" == l ? q.prototype : "this" == l ? q : Class.global[l];
    }
    g ? Class.eval_strict(b, q, f) : b.apply(q, f);
    return q;
  };
})();
Class.global = this;
Class.eval_strict = function(a, b, c) {
  var d = 0, e;
  for (e in Class.global) {
    d++;
  }
  b.newGlobals = 0;
  a.apply(b, c);
  a = 0;
  for (e in Class.global) {
    a++;
  }
  if (d + b.newGlobals != a) {
    throw "Class '" + b.className + "' defines " + (a - d) + " new global JavaScript variables without using this.addGlobal()";
  }
  delete b.newGlobals;
};
Class("Document.Emitter", function() {
  var a = this.prototype;
  a.className = "Document.Emitter";
  a.instantiate = function() {
    return eval("new " + this.className + "()");
  };
  a.init = function() {
    this.output = "";
  };
  a.content = function() {
    return this.output;
  };
  a.insert = function(a) {
    this.output += a.output;
  };
});
Class("Document.Emitter.HTML(Document.Emitter)", function() {
  var a = this.prototype;
  a.className = "Document.Emitter.HTML";
  a.begin_node = function(a) {
    var c = a.type;
    switch(c) {
      case "asis":
      ;
      case "line":
        break;
      case "br":
      ;
      case "hr":
        this.output += "<" + c + " />";
        break;
      case "html":
        this.output += '<span class="wafl">Raw HTML section. Edit in Wiki Text mode.</span>';
        break;
      case "waflparagraph":
      ;
      case "waflphrase":
      ;
      case "im":
        if (a._wafl.match(/^image:\s*(\S+)(?:\s+size=(\w+))?/)) {
          a = "if (typeof(ss) != 'undefined' && ss.editor) { var recalc = function () { try { ss.editor.DoPositionCalculations() } catch (e) { setTimeout(recalc, 500) } }; recalc() } if (!window.image_dimension_cache) window.image_dimension_cache = {};window.image_dimension_cache['/data/wafl/" + a._label.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "\\'").replace(/\\/g, "\\\\") + "'] = [ this.offsetWidth, this.offsetHeight ]; this.style.width = this.offsetWidth + 'px'; this.style.height = this.offsetHeight + 'px'";
          var c = RegExp.$1, d = RegExp.$2;
          switch(d) {
            case "small":
              d = "100";
              break;
            case "medium":
              d = "300";
              break;
            case "large":
              d = "600";
          }
          d && (d = ' width="' + d + '"');
          this.output += '<img src="' + c.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '" onload="' + a + '"' + d + " />";
          break;
        }
        this.output += '<span class="wafl">' + a._label.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "\\'").replace(/\\/g, "\\\\") + "</span>";
        break;
      case "a":
      ;
      case "wikilink":
        this.output += '<a href="' + encodeURI(a._href) + '">';
        break;
      case "file":
        this.output += '<a title="(network resource)" href="' + encodeURI(a._href) + '">';
        break;
      case "ul":
      ;
      case "ol":
      ;
      case "table":
      ;
      case "tr":
        this.output += "<" + c + ">\n";
        break;
      default:
        this.output += "<" + c + ">";
    }
  };
  a.end_node = function(a) {
    a = a.type;
    switch(a) {
      case "asis":
      ;
      case "br":
      ;
      case "hr":
      ;
      case "html":
      ;
      case "waflparagraph":
      ;
      case "waflphrase":
      ;
      case "im":
        break;
      case "line":
        this.output += "<br />";
        break;
      case "file":
      ;
      case "wikilink":
        this.output += "</a>";
        break;
      default:
        0 == a.search(/^(?:p|ul|ol|li|h\d|table|tr|td)$/) ? this.output += "</" + a + ">\n" : this.output += "</" + a + ">";
    }
  };
  a.text_node = function(a) {
    this.output += a.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  };
});
Class("Document.Parser", function() {
  var a = this.prototype;
  a.className = "Document.Parser";
  a.init = function() {
  };
  a.parse = function(a, c) {
    this.input = -1 == a.search(/\n$/) ? a + "\n" : a;
    c && (this.receiver = c);
    this.receiver.init();
    this.grammar = this.create_grammar();
    this.parse_blocks("top");
    return this.receiver.content();
  };
  a.create_grammar = function() {
    throw "Please define create_grammar in a derived class of Document.Parser.";
  };
  a.parse_blocks = function(a) {
    if (a = this.grammar[a].blocks) {
      for (;this.input.length;) {
        for (var c = this.input.length, d = 0;d < a.length;d++) {
          var e = a[d], f = this.find_match("matched_block", e);
          if (f) {
            this.input = this.input.substr(f.end);
            this.handle_match(e, f);
            break;
          }
        }
        if (this.input.length >= c) {
          throw this.classname + ": Reduction error for:\n" + this.input + "\n" + JSON.stringify(this);
        }
      }
    }
  };
  a.handle_match = function(a, c) {
    var d = this.grammar[a];
    this.subparse(d.blocks ? "parse_blocks" : "parse_phrases", c, a, d.filter);
  };
  a.find_match = function(a, c) {
    var d = this.grammar[c].match;
    if (!d) {
      throw "no regexp for type: " + c;
    }
    if (d = this.input.match(d)) {
      return d = this[a].call(this, d, this.grammar[c].lookbehind), d.type = this.grammar[c].type || c, d;
    }
  };
  a.parse_phrases = function(a) {
    if (a = this.grammar[a].phrases) {
      for (;this.input.length;) {
        for (var c = null, d = 0;d < a.length;d++) {
          var e = this.find_match("matched_phrase", a[d]);
          if (e && (!c || e.begin < c.begin) && (c = e, 0 == c.begin)) {
            break;
          }
        }
        if (!c) {
          this.receiver.text_node(this.input || "");
          break;
        }
        0 != c.begin && this.receiver.text_node(this.input.substr(0, c.begin) || "");
        this.input = this.input.substr(c.end);
        this.handle_match(c.type, c);
      }
    } else {
      this.receiver.text_node(this.input || "");
    }
  };
  a.subparse = function(a, c, d, e) {
    c.type = this.grammar[d].type;
    null == c.type && (c.type = d);
    e = e ? e(c) : null;
    c.type && this.receiver.begin_node(c);
    var f = eval("new " + this.className + "()");
    f.input = null == e ? c.text : e;
    f.grammar = this.grammar;
    f.receiver = this.receiver.instantiate();
    f[a].call(f, d);
    this.receiver.insert(f.receiver);
    c.type && this.receiver.end_node(c);
  };
  a.matched_block = function(a) {
    return{begin:a.index, text:a[1], end:a[0].length, 1:a[2], 2:a[3], 3:a[4]};
  };
  a.matched_phrase = function(a, c) {
    if (c) {
      var d = a[2], e = this.input.indexOf(a[1]);
      return{text:d, begin:e, end:e + a[1].length, 1:RegExp.$2, 2:RegExp.$3, 3:RegExp.$4};
    }
    return{begin:a.index, text:a[1], end:a.index + a[0].length, 1:a[2], 2:a[3], 3:a[4]};
  };
});
Class("Document.Parser.Wikitext(Document.Parser)", function() {
  var a = this.prototype;
  a.className = "Document.Parser.Wikitext";
  a.init = function() {
  };
  a.create_grammar = function() {
    var a = "pre html hr hx waflparagraph ul ol blockquote p empty else".split(" "), c = "waflphrase asis wikilink wikilink2 a im mail file tt b i del a".split(" "), d = function(a, b) {
      b = "\\" + (b || a);
      a = "\\" + a;
      return{match:RegExp("(?:^|[^" + a + "\\w])(" + a + "(?=\\S)(?!" + b + ")(.*?)" + b + "(?=[^" + b + "\\w]|$))"), phrases:"\\`" == a ? null : c, lookbehind:!0};
    }, e = {yahoo:"yahoo", ymsgr:"yahoo", callto:"callto", callme:"callto", skype:"callto", aim:"aim"}, f = {aim:"AIM: %1", yahoo:"Yahoo: %1", callto:"Skype: %1"}, g = "(\\b(", l;
    for (l in e) {
      g += l + "|";
    }
    g = g.replace(/\|$/, ")\\:([^\\s\\>\\)]+))");
    l = function(a, b) {
      var c = RegExp("(^|\n)" + b + " *", "g");
      return{match:RegExp("^(" + a + "+ .*\n(?:[*-+#]+ .*\n)*)(?:s*\n)?"), blocks:["ul", "ol", "subl", "li"], filter:function(a) {
        return a.text.replace(c, "$1");
      }};
    };
    return{_all_blocks:a, _all_phrases:c, top:{blocks:a}, ol:l("#", "[*#]"), ul:l("[-+*]", "[-+*#]"), blockquote:{match:/^((?:>[^\n]*\n)+)(?:\s*\n)?/, blocks:["blockquote", "line"], filter:function(a) {
      return a.text.replace(/(^|\n)>\ ?/g, "$1");
    }}, line:{match:/([^\n]*)\n/, phrases:c}, subl:{type:"li", match:/^(([^\n]*)\n[*#]+\ [^\n]*\n(?:[*#]+\ [^\n]*\n)*)(?:\s*\n)?/, blocks:["ul", "ol", "li2"]}, li:{match:/([^\n]*)\n/, phrases:c}, li2:{type:"", match:/([^\n]*)\n/, phrases:c}, html:{match:/^(\.html\ *\n(?:[^\n]*\n)*?\.html)\ *\n(?:\s*\n)?/, filter:function(a) {
      a._html = a.text;
      return "";
    }}, pre:{match:/^\.pre\ *\n((?:[^\n]*\n)*?)\.pre\ *\n(?:\s*\n)?/}, hr:{match:/^--+(?:\s*\n)?/}, hx:{match:/^((\^+) *([^\n]*?)(\s+=+)?\s*?\n+)/, phrases:c, filter:function(a) {
      a.type = "h" + a["1"].length;
      return a[2];
    }}, p:{match:/^((?:(?!(?:(?:\^+|\#+|\*+|\-+) |\>|\.\w+\s*\n|\{[^\}]+\}\s*\n))[^\n]*\S[^\n]*\n)+(?:(?=^|\n)\s*\n)*)/, phrases:c, filter:function(a) {
      return a.text.replace(/\n$/, "");
    }}, empty:{match:/^(\s*\n)/, filter:function(a) {
      a.type = "";
    }}, "else":{match:/^(([^\n]*)\n)/, phrases:[], filter:function(a) {
      a.type = "p";
    }}, waflparagraph:{match:/^\{(.*)\}[\ \t]*\n(?:\s*\n)?/, filter:function(a) {
      a._wafl = a._label = a.text;
      return "";
    }}, waflphrase:{match:/(?:^|[\s\-])((?:"([^\n]+?)")?\{([\w-]+(?=[\:\ \}])(?:\s*:)?\s*[^\n]*?\s*)\}(?=[\W_]|$))/, filter:function(a) {
      a._wafl = a[2];
      a._label = a[1] || a._wafl;
      return "";
    }, lookbehind:!0}, asis:{match:/(\{\{([^\n]*?)\}\}(\}*))/, filter:function(a) {
      a.type = "";
      return a[1] + a[2];
    }}, wikilink:{match:/(?:^|[_\W])(\[()(?=[^\s\[\]])(.*?)\](?=[_\W]|$))/, filter:function(a) {
      a._href = "?" + a[2];
      return a.text || a[2];
    }, lookbehind:!0}, wikilink2:{type:"wikilink", match:/(?:"([^"]*)"\s*)(\[(?=[^\s\[\]])(.*?)\](?=[_\W]|$))/, filter:function(a) {
      a._href = "?" + a[2];
      return a[1] || a[2];
    }}, a:{match:/((?:"([^"]*)"\s*)?<?((?:http|https|ftp|irc|file):(?:\/\/)?[\;\/\?\:\@\&\=\+\$\,\[\]\#A-Za-z0-9\-\_\.\!\~\*\'\(\)]+[A-Za-z0-9\/#])>?)/, filter:function(a) {
      a._href = a[2];
      return a[1] || a[2];
    }}, file:{match:/((?:"([^"]*)")?<(\\\\[^\s\>\)]+)>)/, filter:function(a) {
      var b = a[2].replace(/^\\\\/, "");
      a._href = "file://" + b.replace(/\\/g, "/");
      return a["1"] || b;
    }}, im:{match:RegExp(g), filter:function(a) {
      a._wafl = a[1] + ": " + a[2];
      a._label = (f[e[a[1]]] || "%1").replace(/%1/g, a[2]);
      return "";
    }}, mail:{match:/([\w+%\-\.]+@(?:[\w\-]+\.)+[\w\-]+)/, filter:function(a) {
      a.type = "a";
      a._href = "mailto:" + a.text.replace(/%/g, "%25");
    }}, tt:d("`"), b:d("*"), i:d("_"), del:d("-")};
  };
});
!function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) {
      throw Error("jQuery requires a window with a document");
    }
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
  function c(a) {
    var b = a.length, c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a;
  }
  function d(a, b, c) {
    if (n.isFunction(b)) {
      return n.grep(a, function(a, m) {
        return!!b.call(a, m, a) !== c;
      });
    }
    if (b.nodeType) {
      return n.grep(a, function(a) {
        return a === b !== c;
      });
    }
    if ("string" == typeof b) {
      if (Bb.test(b)) {
        return n.filter(b, a, c);
      }
      b = n.filter(b, a);
    }
    return n.grep(a, function(a) {
      return 0 <= n.inArray(a, b) !== c;
    });
  }
  function e(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);
    return a;
  }
  function f(a) {
    var b = ab[a] = {};
    return n.each(a.match(ia) || [], function(a, c) {
      b[c] = !0;
    }), b;
  }
  function g() {
    H.addEventListener ? (H.removeEventListener("DOMContentLoaded", l, !1), a.removeEventListener("load", l, !1)) : (H.detachEvent("onreadystatechange", l), a.detachEvent("onload", l));
  }
  function l() {
    (H.addEventListener || "load" === event.type || "complete" === H.readyState) && (g(), n.ready());
  }
  function h(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var m = "data-" + b.replace(Cb, "-$1").toLowerCase();
      if (c = a.getAttribute(m), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Db.test(c) ? n.parseJSON(c) : c;
        } catch (d) {
        }
        n.data(a, b, c);
      } else {
        c = void 0;
      }
    }
    return c;
  }
  function p(a) {
    for (var b in a) {
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) {
        return!1;
      }
    }
    return!0;
  }
  function q(a, b, c, m) {
    if (n.acceptData(a)) {
      var d, e, f = n.expando, r = a.nodeType, u = r ? n.cache : a, g = r ? a[f] : a[f] && f;
      if (g && u[g] && (m || u[g].data) || void 0 !== c || "string" != typeof b) {
        return g || (g = r ? a[f] = da.pop() || n.guid++ : f), u[g] || (u[g] = r ? {} : {toJSON:n.noop}), ("object" == typeof b || "function" == typeof b) && (m ? u[g] = n.extend(u[g], b) : u[g].data = n.extend(u[g].data, b)), e = u[g], m || (e.data || (e.data = {}), e = e.data), void 0 !== c && (e[n.camelCase(b)] = c), "string" == typeof b ? (d = e[b], null == d && (d = e[n.camelCase(b)])) : d = e, d;
      }
    }
  }
  function w(a, b, c) {
    if (n.acceptData(a)) {
      var m, d, e = a.nodeType, f = e ? n.cache : a, r = e ? a[n.expando] : n.expando;
      if (f[r]) {
        if (b && (m = c ? f[r] : f[r].data)) {
          n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in m ? b = [b] : (b = n.camelCase(b), b = b in m ? [b] : b.split(" "));
          for (d = b.length;d--;) {
            delete m[b[d]];
          }
          if (c ? !p(m) : !n.isEmptyObject(m)) {
            return;
          }
        }
        (c || (delete f[r].data, p(f[r]))) && (e ? n.cleanData([a], !0) : B.deleteExpando || f != f.window ? delete f[r] : f[r] = null);
      }
    }
  }
  function v() {
    return!0;
  }
  function s() {
    return!1;
  }
  function t() {
    try {
      return H.activeElement;
    } catch (a) {
    }
  }
  function x(a) {
    var b = bb.split("|");
    a = a.createDocumentFragment();
    if (a.createElement) {
      for (;b.length;) {
        a.createElement(b.pop());
      }
    }
    return a;
  }
  function m(a, b) {
    var c, d, e = 0, f = typeof a.getElementsByTagName !== ga ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== ga ? a.querySelectorAll(b || "*") : void 0;
    if (!f) {
      for (f = [], c = a.childNodes || a;null != (d = c[e]);e++) {
        !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, m(d, b));
      }
    }
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f;
  }
  function r(a) {
    Pa.test(a.type) && (a.defaultChecked = a.checked);
  }
  function u(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }
  function y(a) {
    return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a;
  }
  function z(a) {
    var b = Eb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }
  function A(a, b) {
    for (var c, m = 0;null != (c = a[m]);m++) {
      n._data(c, "globalEval", !b || n._data(b[m], "globalEval"));
    }
  }
  function C(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c, m, d;
      m = n._data(a);
      var e = n._data(b, m), f = m.events;
      if (f) {
        for (c in delete e.handle, e.events = {}, f) {
          for (m = 0, d = f[c].length;d > m;m++) {
            n.event.add(b, c, f[c][m]);
          }
        }
      }
      e.data && (e.data = n.extend({}, e.data));
    }
  }
  function J(b, c) {
    var m = n(c.createElement(b)).appendTo(c.body), d = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(m[0]).display : n.css(m[0], "display");
    return m.detach(), d;
  }
  function O(a) {
    var b = H, c = cb[a];
    return c || (c = J(a, b), "none" !== c && c || (Aa = (Aa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Aa[0].contentWindow || Aa[0].contentDocument).document, b.write(), b.close(), c = J(a, b), Aa.detach()), cb[a] = c), c;
  }
  function F(a, b) {
    return{get:function() {
      var c = a();
      if (null != c) {
        return c ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    }};
  }
  function K(a, b) {
    if (b in a) {
      return b;
    }
    for (var c = b.charAt(0).toUpperCase() + b.slice(1), m = b, d = db.length;d--;) {
      if (b = db[d] + c, b in a) {
        return b;
      }
    }
    return m;
  }
  function I(a, b) {
    for (var c, m, d, e = [], f = 0, r = a.length;r > f;f++) {
      m = a[f], m.style && (e[f] = n._data(m, "olddisplay"), c = m.style.display, b ? (e[f] || "none" !== c || (m.style.display = ""), "" === m.style.display && Ba(m) && (e[f] = n._data(m, "olddisplay", O(m.nodeName)))) : e[f] || (d = Ba(m), (c && "none" !== c || !d) && n._data(m, "olddisplay", d ? c : n.css(m, "display"))));
    }
    for (f = 0;r > f;f++) {
      m = a[f], m.style && (b && "none" !== m.style.display && "" !== m.style.display || (m.style.display = b ? e[f] || "" : "none"));
    }
    return a;
  }
  function D(a, b, c) {
    return(a = Fb.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b;
  }
  function E(a, b, c, m, d) {
    b = c === (m ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
    for (var e = 0;4 > b;b += 2) {
      "margin" === c && (e += n.css(a, c + pa[b], !0, d)), m ? ("content" === c && (e -= n.css(a, "padding" + pa[b], !0, d)), "margin" !== c && (e -= n.css(a, "border" + pa[b] + "Width", !0, d))) : (e += n.css(a, "padding" + pa[b], !0, d), "padding" !== c && (e += n.css(a, "border" + pa[b] + "Width", !0, d)));
    }
    return e;
  }
  function W(a, b, c) {
    var m = !0, d = "width" === b ? a.offsetWidth : a.offsetHeight, e = qa(a), f = B.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e);
    if (0 >= d || null == d) {
      if (d = ra(a, b, e), (0 > d || null == d) && (d = a.style[b]), Ga.test(d)) {
        return d;
      }
      m = f && (B.boxSizingReliable() || d === a.style[b]);
      d = parseFloat(d) || 0;
    }
    return d + E(a, b, c || (f ? "border" : "content"), m, e) + "px";
  }
  function N(a, b, c, m, d) {
    return new N.prototype.init(a, b, c, m, d);
  }
  function G() {
    return setTimeout(function() {
      ka = void 0;
    }), ka = n.now();
  }
  function U(a, b) {
    var c, m = {height:a}, d = 0;
    for (b = b ? 1 : 0;4 > d;d += 2 - b) {
      c = pa[d], m["margin" + c] = m["padding" + c] = a;
    }
    return b && (m.opacity = m.width = a), m;
  }
  function P(a, b, c) {
    for (var m, d = (Ca[b] || []).concat(Ca["*"]), e = 0, f = d.length;f > e;e++) {
      if (m = d[e].call(c, b, a)) {
        return m;
      }
    }
  }
  function ba(a, b) {
    var c, m, d, e, f;
    for (c in a) {
      if (m = n.camelCase(c), d = b[m], e = a[c], n.isArray(e) && (d = e[1], e = a[c] = e[0]), c !== m && (a[m] = e, delete a[c]), f = n.cssHooks[m], f && "expand" in f) {
        for (c in e = f.expand(e), delete a[m], e) {
          c in a || (a[c] = e[c], b[c] = d);
        }
      } else {
        b[m] = d;
      }
    }
  }
  function L(a, b, c) {
    var m, d = 0, e = Ha.length, f = n.Deferred().always(function() {
      delete r.elem;
    }), r = function() {
      if (m) {
        return!1;
      }
      for (var b = ka || G(), b = Math.max(0, u.startTime + u.duration - b), c = 1 - (b / u.duration || 0), d = 0, e = u.tweens.length;e > d;d++) {
        u.tweens[d].run(c);
      }
      return f.notifyWith(a, [u, c, b]), 1 > c && e ? b : (f.resolveWith(a, [u]), !1);
    }, u = f.promise({elem:a, props:n.extend({}, b), opts:n.extend(!0, {specialEasing:{}}, c), originalProperties:b, originalOptions:c, startTime:ka || G(), duration:c.duration, tweens:[], createTween:function(b, c) {
      var m = n.Tween(a, u.opts, b, c, u.opts.specialEasing[b] || u.opts.easing);
      return u.tweens.push(m), m;
    }, stop:function(b) {
      var c = 0, d = b ? u.tweens.length : 0;
      if (m) {
        return this;
      }
      for (m = !0;d > c;c++) {
        u.tweens[c].run(1);
      }
      return b ? f.resolveWith(a, [u, b]) : f.rejectWith(a, [u, b]), this;
    }});
    c = u.props;
    for (ba(c, u.opts.specialEasing);e > d;d++) {
      if (b = Ha[d].call(u, a, c, u.opts)) {
        return b;
      }
    }
    return n.map(c, P, u), n.isFunction(u.opts.start) && u.opts.start.call(a, u), n.fx.timer(n.extend(r, {elem:a, anim:u, queue:u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
  }
  function R(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var m, d = 0, e = b.toLowerCase().match(ia) || [];
      if (n.isFunction(c)) {
        for (;m = e[d++];) {
          "+" === m.charAt(0) ? (m = m.slice(1) || "*", (a[m] = a[m] || []).unshift(c)) : (a[m] = a[m] || []).push(c);
        }
      }
    };
  }
  function S(a, b, c, m) {
    function d(r) {
      var u;
      return e[r] = !0, n.each(a[r] || [], function(a, r) {
        var g = r(b, c, m);
        return "string" != typeof g || f || e[g] ? f ? !(u = g) : void 0 : (b.dataTypes.unshift(g), d(g), !1);
      }), u;
    }
    var e = {}, f = a === Qa;
    return d(b.dataTypes[0]) || !e["*"] && d("*");
  }
  function ca(a, b) {
    var c, m, d = n.ajaxSettings.flatOptions || {};
    for (m in b) {
      void 0 !== b[m] && ((d[m] ? a : c || (c = {}))[m] = b[m]);
    }
    return c && n.extend(!0, a, c), a;
  }
  function Y(a, b, c, m) {
    var d;
    if (n.isArray(b)) {
      n.each(b, function(b, d) {
        c || Gb.test(a) ? m(a, d) : Y(a + "[" + ("object" == typeof d ? b : "") + "]", d, c, m);
      });
    } else {
      if (c || "object" !== n.type(b)) {
        m(a, b);
      } else {
        for (d in b) {
          Y(a + "[" + d + "]", b[d], c, m);
        }
      }
    }
  }
  function na() {
    try {
      return new a.XMLHttpRequest;
    } catch (b) {
    }
  }
  function Z(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }
  var da = [], aa = da.slice, fa = da.concat, V = da.push, Q = da.indexOf, ma = {}, xa = ma.toString, ea = ma.hasOwnProperty, ha = "".trim, B = {}, n = function(a, b) {
    return new n.fn.init(a, b);
  }, Hb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Ra = /^-ms-/, Ib = /-([\da-z])/gi, Da = function(a, b) {
    return b.toUpperCase();
  };
  n.fn = n.prototype = {jquery:"1.11.0", constructor:n, selector:"", length:0, toArray:function() {
    return aa.call(this);
  }, get:function(a) {
    return null != a ? 0 > a ? this[a + this.length] : this[a] : aa.call(this);
  }, pushStack:function(a) {
    a = n.merge(this.constructor(), a);
    return a.prevObject = this, a.context = this.context, a;
  }, each:function(a, b) {
    return n.each(this, a, b);
  }, map:function(a) {
    return this.pushStack(n.map(this, function(b, c) {
      return a.call(b, c, b);
    }));
  }, slice:function() {
    return this.pushStack(aa.apply(this, arguments));
  }, first:function() {
    return this.eq(0);
  }, last:function() {
    return this.eq(-1);
  }, eq:function(a) {
    var b = this.length;
    a = +a + (0 > a ? b : 0);
    return this.pushStack(0 <= a && b > a ? [this[a]] : []);
  }, end:function() {
    return this.prevObject || this.constructor(null);
  }, push:V, sort:da.sort, splice:da.splice};
  n.extend = n.fn.extend = function() {
    var a, b, c, m, d, e, f = arguments[0] || {}, r = 1, u = arguments.length, g = !1;
    "boolean" == typeof f && (g = f, f = arguments[r] || {}, r++);
    "object" == typeof f || n.isFunction(f) || (f = {});
    for (r === u && (f = this, r--);u > r;r++) {
      if (null != (d = arguments[r])) {
        for (m in d) {
          a = f[m], c = d[m], f !== c && (g && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, e = a && n.isArray(a) ? a : []) : e = a && n.isPlainObject(a) ? a : {}, f[m] = n.extend(g, e, c)) : void 0 !== c && (f[m] = c));
        }
      }
    }
    return f;
  };
  n.extend({expando:"jQuery" + ("1.11.0" + Math.random()).replace(/\D/g, ""), isReady:!0, error:function(a) {
    throw Error(a);
  }, noop:function() {
  }, isFunction:function(a) {
    return "function" === n.type(a);
  }, isArray:Array.isArray || function(a) {
    return "array" === n.type(a);
  }, isWindow:function(a) {
    return null != a && a == a.window;
  }, isNumeric:function(a) {
    return 0 <= a - parseFloat(a);
  }, isEmptyObject:function(a) {
    for (var b in a) {
      return!1;
    }
    return!0;
  }, isPlainObject:function(a) {
    var b;
    if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) {
      return!1;
    }
    try {
      if (a.constructor && !ea.call(a, "constructor") && !ea.call(a.constructor.prototype, "isPrototypeOf")) {
        return!1;
      }
    } catch (c) {
      return!1;
    }
    if (B.ownLast) {
      for (b in a) {
        return ea.call(a, b);
      }
    }
    for (b in a) {
    }
    return void 0 === b || ea.call(a, b);
  }, type:function(a) {
    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ma[xa.call(a)] || "object" : typeof a;
  }, globalEval:function(b) {
    b && n.trim(b) && (a.execScript || function(b) {
      a.eval.call(a, b);
    })(b);
  }, camelCase:function(a) {
    return a.replace(Ra, "ms-").replace(Ib, Da);
  }, nodeName:function(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }, each:function(a, b, m) {
    var d, e = 0, f = a.length, r = c(a);
    if (m) {
      if (r) {
        for (;f > e && (d = b.apply(a[e], m), !1 !== d);e++) {
        }
      } else {
        for (e in a) {
          if (d = b.apply(a[e], m), !1 === d) {
            break;
          }
        }
      }
    } else {
      if (r) {
        for (;f > e && (d = b.call(a[e], e, a[e]), !1 !== d);e++) {
        }
      } else {
        for (e in a) {
          if (d = b.call(a[e], e, a[e]), !1 === d) {
            break;
          }
        }
      }
    }
    return a;
  }, trim:ha && !ha.call("\ufeff\u00a0") ? function(a) {
    return null == a ? "" : ha.call(a);
  } : function(a) {
    return null == a ? "" : (a + "").replace(Hb, "");
  }, makeArray:function(a, b) {
    var m = b || [];
    return null != a && (c(Object(a)) ? n.merge(m, "string" == typeof a ? [a] : a) : V.call(m, a)), m;
  }, inArray:function(a, b, c) {
    var m;
    if (b) {
      if (Q) {
        return Q.call(b, a, c);
      }
      m = b.length;
      for (c = c ? 0 > c ? Math.max(0, m + c) : c : 0;m > c;c++) {
        if (c in b && b[c] === a) {
          return c;
        }
      }
    }
    return-1;
  }, merge:function(a, b) {
    for (var c = +b.length, m = 0, d = a.length;c > m;) {
      a[d++] = b[m++];
    }
    if (c !== c) {
      for (;void 0 !== b[m];) {
        a[d++] = b[m++];
      }
    }
    return a.length = d, a;
  }, grep:function(a, b, c) {
    for (var m = [], d = 0, e = a.length, f = !c;e > d;d++) {
      c = !b(a[d], d), c !== f && m.push(a[d]);
    }
    return m;
  }, map:function(a, b, m) {
    var d, e = 0, f = a.length, r = [];
    if (c(a)) {
      for (;f > e;e++) {
        d = b(a[e], e, m), null != d && r.push(d);
      }
    } else {
      for (e in a) {
        d = b(a[e], e, m), null != d && r.push(d);
      }
    }
    return fa.apply([], r);
  }, guid:1, proxy:function(a, b) {
    var c, m, d;
    return "string" == typeof b && (d = a[b], b = a, a = d), n.isFunction(a) ? (c = aa.call(arguments, 2), m = function() {
      return a.apply(b || this, c.concat(aa.call(arguments)));
    }, m.guid = a.guid = a.guid || n.guid++, m) : void 0;
  }, now:function() {
    return+new Date;
  }, support:B});
  n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
    ma["[object " + b + "]"] = b.toLowerCase();
  });
  var wa = function(a) {
    function b(a, c, m, d) {
      var e, f, r, u, g;
      if ((c ? c.ownerDocument || c : P) !== D && K(c), c = c || D, m = m || [], !a || "string" != typeof a) {
        return m;
      }
      if (1 !== (u = c.nodeType) && 9 !== u) {
        return[];
      }
      if (N && !d) {
        if (e = Ra.exec(a)) {
          if (r = e[1]) {
            if (9 === u) {
              if (f = c.getElementById(r), !f || !f.parentNode) {
                return m;
              }
              if (f.id === r) {
                return m.push(f), m;
              }
            } else {
              if (c.ownerDocument && (f = c.ownerDocument.getElementById(r)) && H(c, f) && f.id === r) {
                return m.push(f), m;
              }
            }
          } else {
            if (e[2]) {
              return V.apply(m, c.getElementsByTagName(a)), m;
            }
            if ((r = e[3]) && v.getElementsByClassName && c.getElementsByClassName) {
              return V.apply(m, c.getElementsByClassName(r)), m;
            }
          }
        }
        if (v.qsa && (!G || !G.test(a))) {
          if (f = e = L, r = c, g = 9 === u && a, 1 === u && "object" !== c.nodeName.toLowerCase()) {
            u = l(a);
            (e = c.getAttribute("id")) ? f = e.replace(wa, "\\$&") : c.setAttribute("id", f);
            f = "[id='" + f + "'] ";
            for (r = u.length;r--;) {
              u[r] = f + z(u[r]);
            }
            r = Da.test(a) && h(c.parentNode) || c;
            g = u.join(",");
          }
          if (g) {
            try {
              return V.apply(m, r.querySelectorAll(g)), m;
            } catch (M) {
            } finally {
              e || c.removeAttribute("id");
            }
          }
        }
      }
      var y;
      a: {
        a = a.replace(ja, "$1");
        var n, Fa;
        f = l(a);
        if (!d && 1 === f.length) {
          if (y = f[0] = f[0].slice(0), 2 < y.length && "ID" === (n = y[0]).type && v.getById && 9 === c.nodeType && N && t.relative[y[1].type]) {
            if (c = (t.find.ID(n.matches[0].replace(ua, va), c) || [])[0], !c) {
              y = m;
              break a;
            }
            a = a.slice(y.shift().value.length);
          }
          for (u = la.needsContext.test(a) ? 0 : y.length;u-- && (n = y[u], !t.relative[e = n.type]);) {
            if ((Fa = t.find[e]) && (d = Fa(n.matches[0].replace(ua, va), Da.test(y[0].type) && h(c.parentNode) || c))) {
              if (y.splice(u, 1), a = d.length && z(y), !a) {
                y = (V.apply(m, d), m);
                break a;
              }
              break;
            }
          }
        }
        y = (E(a, f)(d, c, !N, m, Da.test(a) && h(c.parentNode) || c), m);
      }
      return y;
    }
    function c() {
      function a(c, m) {
        return b.push(c + " ") > t.cacheLength && delete a[b.shift()], a[c + " "] = m;
      }
      var b = [];
      return a;
    }
    function m(a) {
      return a[L] = !0, a;
    }
    function d(a) {
      var b = D.createElement("div");
      try {
        return!!a(b);
      } catch (c) {
        return!1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b);
      }
    }
    function e(a, b) {
      for (var c = a.split("|"), m = a.length;m--;) {
        t.attrHandle[c[m]] = b;
      }
    }
    function f(a, b) {
      var c = b && a, m = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || ca) - (~a.sourceIndex || ca);
      if (m) {
        return m;
      }
      if (c) {
        for (;c = c.nextSibling;) {
          if (c === b) {
            return-1;
          }
        }
      }
      return a ? 1 : -1;
    }
    function r(a) {
      return function(b) {
        return "input" === b.nodeName.toLowerCase() && b.type === a;
      };
    }
    function u(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return("input" === c || "button" === c) && b.type === a;
      };
    }
    function g(a) {
      return m(function(b) {
        return b = +b, m(function(c, m) {
          for (var d, e = a([], c.length, b), f = e.length;f--;) {
            c[d = e[f]] && (c[d] = !(m[d] = c[d]));
          }
        });
      });
    }
    function h(a) {
      return a && typeof a.getElementsByTagName !== Y && a;
    }
    function y() {
    }
    function l(a, c) {
      var m, d, e, f, r, u, g;
      if (r = ea[a + " "]) {
        return c ? 0 : r.slice(0);
      }
      r = a;
      u = [];
      for (g = t.preFilter;r;) {
        m && !(d = oa.exec(r)) || (d && (r = r.slice(d[0].length) || r), u.push(e = []));
        m = !1;
        (d = pa.exec(r)) && (m = d.shift(), e.push({value:m, type:d[0].replace(ja, " ")}), r = r.slice(m.length));
        for (f in t.filter) {
          !(d = la[f].exec(r)) || g[f] && !(d = g[f](d)) || (m = d.shift(), e.push({value:m, type:f, matches:d}), r = r.slice(m.length));
        }
        if (!m) {
          break;
        }
      }
      return c ? r.length : r ? b.error(a) : ea(a, u).slice(0);
    }
    function z(a) {
      for (var b = 0, c = a.length, m = "";c > b;b++) {
        m += a[b].value;
      }
      return m;
    }
    function n(a, b, c) {
      var m = b.dir, d = c && "parentNode" === m, e = S++;
      return b.first ? function(b, c, e) {
        for (;b = b[m];) {
          if (1 === b.nodeType || d) {
            return a(b, c, e);
          }
        }
      } : function(b, c, f) {
        var r, u, g = [R, e];
        if (f) {
          for (;b = b[m];) {
            if ((1 === b.nodeType || d) && a(b, c, f)) {
              return!0;
            }
          }
        } else {
          for (;b = b[m];) {
            if (1 === b.nodeType || d) {
              if (u = b[L] || (b[L] = {}), (r = u[m]) && r[0] === R && r[1] === e) {
                return g[2] = r[2];
              }
              if (u[m] = g, g[2] = a(b, c, f)) {
                return!0;
              }
            }
          }
        }
      };
    }
    function A(a) {
      return 1 < a.length ? function(b, c, m) {
        for (var d = a.length;d--;) {
          if (!a[d](b, c, m)) {
            return!1;
          }
        }
        return!0;
      } : a[0];
    }
    function p(a, b, c, m, d) {
      for (var e, f = [], r = 0, u = a.length, g = null != b;u > r;r++) {
        (e = a[r]) && (!c || c(e, m, d)) && (f.push(e), g && b.push(r));
      }
      return f;
    }
    function q(a, c, d, e, f, r) {
      return e && !e[L] && (e = q(e)), f && !f[L] && (f = q(f, r)), m(function(m, r, u, g) {
        var M, h, y = [], l = [], z = r.length, n;
        if (!(n = m)) {
          n = c || "*";
          for (var T = u.nodeType ? [u] : u, A = [], za = 0, q = T.length;q > za;za++) {
            b(n, T[za], A);
          }
          n = A;
        }
        n = !a || !m && c ? n : p(n, y, a, u, g);
        T = d ? f || (m ? a : z || e) ? [] : r : n;
        if (d && d(n, T, u, g), e) {
          for (M = p(T, l), e(M, [], u, g), u = M.length;u--;) {
            (h = M[u]) && (T[l[u]] = !(n[l[u]] = h));
          }
        }
        if (m) {
          if (f || a) {
            if (f) {
              M = [];
              for (u = T.length;u--;) {
                (h = T[u]) && M.push(n[u] = h);
              }
              f(null, T = [], M, g);
            }
            for (u = T.length;u--;) {
              (h = T[u]) && -1 < (M = f ? X.call(m, h) : y[u]) && (m[M] = !(r[M] = h));
            }
          }
        } else {
          T = p(T === r ? T.splice(z, T.length) : T), f ? f(null, r, T, g) : V.apply(r, T);
        }
      });
    }
    function s(a) {
      var b, c, m, d = a.length, e = t.relative[a[0].type];
      c = e || t.relative[" "];
      for (var f = e ? 1 : 0, r = n(function(a) {
        return a === b;
      }, c, !0), u = n(function(a) {
        return-1 < X.call(b, a);
      }, c, !0), g = [function(a, c, m) {
        return!e && (m || c !== x) || ((b = c).nodeType ? r(a, c, m) : u(a, c, m));
      }];d > f;f++) {
        if (c = t.relative[a[f].type]) {
          g = [n(A(g), c)];
        } else {
          if (c = t.filter[a[f].type].apply(null, a[f].matches), c[L]) {
            for (m = ++f;d > m && !t.relative[a[m].type];m++) {
            }
            return q(1 < f && A(g), 1 < f && z(a.slice(0, f - 1).concat({value:" " === a[f - 2].type ? "*" : ""})).replace(ja, "$1"), c, m > f && s(a.slice(f, m)), d > m && s(a = a.slice(m)), d > m && z(a));
          }
          g.push(c);
        }
      }
      return A(g);
    }
    function C(a, c) {
      var d = 0 < c.length, e = 0 < a.length, f = function(m, f, r, u, g) {
        var M, h, y, l = 0, z = "0", n = m && [], T = [], A = x, za = m || e && t.find.TAG("*", g), q = R += null == A ? 1 : Math.random() || 0.1, Oa = za.length;
        for (g && (x = f !== D && f);z !== Oa && null != (M = za[z]);z++) {
          if (e && M) {
            for (h = 0;y = a[h++];) {
              if (y(M, f, r)) {
                u.push(M);
                break;
              }
            }
            g && (R = q);
          }
          d && ((M = !y && M) && l--, m && n.push(M));
        }
        if (l += z, d && z !== l) {
          for (h = 0;y = c[h++];) {
            y(n, T, f, r);
          }
          if (m) {
            if (0 < l) {
              for (;z--;) {
                n[z] || T[z] || (T[z] = fa.call(u));
              }
            }
            T = p(T);
          }
          V.apply(u, T);
          g && !m && 0 < T.length && 1 < l + c.length && b.uniqueSort(u);
        }
        return g && (R = q, x = A), n;
      };
      return d ? m(f) : f;
    }
    var J, v, t, w, O, E, x, F, W, K, D, I, N, G, B, U, H, L = "sizzle" + -new Date, P = a.document, R = 0, S = 0, da = c(), ea = c(), ba = c(), Q = function(a, b) {
      return a === b && (W = !0), 0;
    }, Y = "undefined", ca = -2147483648, aa = {}.hasOwnProperty, Z = [], fa = Z.pop, na = Z.push, V = Z.push, ha = Z.slice, X = Z.indexOf || function(a) {
      for (var b = 0, c = this.length;c > b;b++) {
        if (this[b] === a) {
          return b;
        }
      }
      return-1;
    }, ga = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), ma = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ga + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", ia = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ma.replace(3, 8) + ")*)|.*)\\)|)", ja = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), oa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, 
    pa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, qa = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), ra = RegExp(ia), xa = RegExp("^" + ga + "$"), la = {ID:/^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS:/^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG:RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"), ATTR:RegExp("^" + ma), PSEUDO:RegExp("^" + ia), CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", 
    "i"), bool:RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext:RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")}, sa = /^(?:input|select|textarea|button)$/i, ta = /^h\d$/i, ka = /^[^{]+\{\s*\[native \w/, Ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Da = /[+~]/, wa = /'|\\/g, ua = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", 
    "ig"), va = function(a, b, c) {
      a = "0x" + b - 65536;
      return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320);
    };
    try {
      V.apply(Z = ha.call(P.childNodes), P.childNodes), Z[P.childNodes.length].nodeType;
    } catch (ya) {
      V = {apply:Z.length ? function(a, b) {
        na.apply(a, ha.call(b));
      } : function(a, b) {
        for (var c = a.length, m = 0;a[c++] = b[m++];) {
        }
        a.length = c - 1;
      }};
    }
    v = b.support = {};
    O = b.isXML = function(a) {
      return(a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1;
    };
    K = b.setDocument = function(a) {
      var b, c = a ? a.ownerDocument || a : P;
      a = c.defaultView;
      return c !== D && 9 === c.nodeType && c.documentElement ? (D = c, I = c.documentElement, N = !O(c), a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function() {
        K();
      }, !1) : a.attachEvent && a.attachEvent("onunload", function() {
        K();
      })), v.attributes = d(function(a) {
        return a.className = "i", !a.getAttribute("className");
      }), v.getElementsByTagName = d(function(a) {
        return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length;
      }), v.getElementsByClassName = ka.test(c.getElementsByClassName) && d(function(a) {
        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length;
      }), v.getById = d(function(a) {
        return I.appendChild(a).id = L, !c.getElementsByName || !c.getElementsByName(L).length;
      }), v.getById ? (t.find.ID = function(a, b) {
        if (typeof b.getElementById !== Y && N) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : [];
        }
      }, t.filter.ID = function(a) {
        var b = a.replace(ua, va);
        return function(a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete t.find.ID, t.filter.ID = function(a) {
        var b = a.replace(ua, va);
        return function(a) {
          return(a = typeof a.getAttributeNode !== Y && a.getAttributeNode("id")) && a.value === b;
        };
      }), t.find.TAG = v.getElementsByTagName ? function(a, b) {
        return typeof b.getElementsByTagName !== Y ? b.getElementsByTagName(a) : void 0;
      } : function(a, b) {
        var c, m = [], d = 0, e = b.getElementsByTagName(a);
        if ("*" === a) {
          for (;c = e[d++];) {
            1 === c.nodeType && m.push(c);
          }
          return m;
        }
        return e;
      }, t.find.CLASS = v.getElementsByClassName && function(a, b) {
        return typeof b.getElementsByClassName !== Y && N ? b.getElementsByClassName(a) : void 0;
      }, B = [], G = [], (v.qsa = ka.test(c.querySelectorAll)) && (d(function(a) {
        a.innerHTML = "<select t=''><option selected=''></option></select>";
        a.querySelectorAll("[t^='']").length && G.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
        a.querySelectorAll("[selected]").length || G.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
        a.querySelectorAll(":checked").length || G.push(":checked");
      }), d(function(a) {
        var b = c.createElement("input");
        b.setAttribute("type", "hidden");
        a.appendChild(b).setAttribute("name", "D");
        a.querySelectorAll("[name=d]").length && G.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
        a.querySelectorAll(":enabled").length || G.push(":enabled", ":disabled");
        a.querySelectorAll("*,:x");
        G.push(",.*:");
      })), (v.matchesSelector = ka.test(U = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && d(function(a) {
        v.disconnectedMatch = U.call(a, "div");
        U.call(a, "[s!='']:x");
        B.push("!=", ia);
      }), G = G.length && RegExp(G.join("|")), B = B.length && RegExp(B.join("|")), b = ka.test(I.compareDocumentPosition), H = b || ka.test(I.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a, m = b && b.parentNode;
        return a === m || !(!m || 1 !== m.nodeType || !(c.contains ? c.contains(m) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(m)));
      } : function(a, b) {
        if (b) {
          for (;b = b.parentNode;) {
            if (b === a) {
              return!0;
            }
          }
        }
        return!1;
      }, Q = b ? function(a, b) {
        if (a === b) {
          return W = !0, 0;
        }
        var m = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return m ? m : (m = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & m || !v.sortDetached && b.compareDocumentPosition(a) === m ? a === c || a.ownerDocument === P && H(P, a) ? -1 : b === c || b.ownerDocument === P && H(P, b) ? 1 : F ? X.call(F, a) - X.call(F, b) : 0 : 4 & m ? -1 : 1);
      } : function(a, b) {
        if (a === b) {
          return W = !0, 0;
        }
        var m, d = 0;
        m = a.parentNode;
        var e = b.parentNode, r = [a], u = [b];
        if (!m || !e) {
          return a === c ? -1 : b === c ? 1 : m ? -1 : e ? 1 : F ? X.call(F, a) - X.call(F, b) : 0;
        }
        if (m === e) {
          return f(a, b);
        }
        for (m = a;m = m.parentNode;) {
          r.unshift(m);
        }
        for (m = b;m = m.parentNode;) {
          u.unshift(m);
        }
        for (;r[d] === u[d];) {
          d++;
        }
        return d ? f(r[d], u[d]) : r[d] === P ? -1 : u[d] === P ? 1 : 0;
      }, c) : D;
    };
    b.matches = function(a, c) {
      return b(a, null, null, c);
    };
    b.matchesSelector = function(a, c) {
      if ((a.ownerDocument || a) !== D && K(a), c = c.replace(qa, "='$1']"), v.matchesSelector && N && !(B && B.test(c) || G && G.test(c))) {
        try {
          var m = U.call(a, c);
          if (m || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
            return m;
          }
        } catch (d) {
        }
      }
      return 0 < b(c, D, null, [a]).length;
    };
    b.contains = function(a, b) {
      return(a.ownerDocument || a) !== D && K(a), H(a, b);
    };
    b.attr = function(a, b) {
      (a.ownerDocument || a) !== D && K(a);
      var c = t.attrHandle[b.toLowerCase()], c = c && aa.call(t.attrHandle, b.toLowerCase()) ? c(a, b, !N) : void 0;
      return void 0 !== c ? c : v.attributes || !N ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null;
    };
    b.error = function(a) {
      throw Error("Syntax error, unrecognized expression: " + a);
    };
    b.uniqueSort = function(a) {
      var b, c = [], m = 0, d = 0;
      if (W = !v.detectDuplicates, F = !v.sortStable && a.slice(0), a.sort(Q), W) {
        for (;b = a[d++];) {
          b === a[d] && (m = c.push(d));
        }
        for (;m--;) {
          a.splice(c[m], 1);
        }
      }
      return F = null, a;
    };
    w = b.getText = function(a) {
      var b, c = "", m = 0;
      if (b = a.nodeType) {
        if (1 === b || 9 === b || 11 === b) {
          if ("string" == typeof a.textContent) {
            return a.textContent;
          }
          for (a = a.firstChild;a;a = a.nextSibling) {
            c += w(a);
          }
        } else {
          if (3 === b || 4 === b) {
            return a.nodeValue;
          }
        }
      } else {
        for (;b = a[m++];) {
          c += w(b);
        }
      }
      return c;
    };
    t = b.selectors = {cacheLength:50, createPseudo:m, match:la, attrHandle:{}, find:{}, relative:{">":{dir:"parentNode", first:!0}, " ":{dir:"parentNode"}, "+":{dir:"previousSibling", first:!0}, "~":{dir:"previousSibling"}}, preFilter:{ATTR:function(a) {
      return a[1] = a[1].replace(ua, va), a[3] = (a[4] || a[5] || "").replace(ua, va), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
    }, CHILD:function(a) {
      return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a;
    }, PSEUDO:function(a) {
      var b, c = !a[5] && a[2];
      return la.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && ra.test(c) && (b = l(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
    }}, filter:{TAG:function(a) {
      var b = a.replace(ua, va).toLowerCase();
      return "*" === a ? function() {
        return!0;
      } : function(a) {
        return a.nodeName && a.nodeName.toLowerCase() === b;
      };
    }, CLASS:function(a) {
      var b = da[a + " "];
      return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && da(a, function(a) {
        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== Y && a.getAttribute("class") || "");
      });
    }, ATTR:function(a, c, m) {
      return function(d) {
        d = b.attr(d, a);
        return null == d ? "!=" === c : c ? (d += "", "=" === c ? d === m : "!=" === c ? d !== m : "^=" === c ? m && 0 === d.indexOf(m) : "*=" === c ? m && -1 < d.indexOf(m) : "$=" === c ? m && d.slice(-m.length) === m : "~=" === c ? -1 < (" " + d + " ").indexOf(m) : "|=" === c ? d === m || d.slice(0, m.length + 1) === m + "-" : !1) : !0;
      };
    }, CHILD:function(a, b, c, m, d) {
      var e = "nth" !== a.slice(0, 3), f = "last" !== a.slice(-4), r = "of-type" === b;
      return 1 === m && 0 === d ? function(a) {
        return!!a.parentNode;
      } : function(b, c, u) {
        var g, M, h, y, l;
        c = e !== f ? "nextSibling" : "previousSibling";
        var z = b.parentNode, n = r && b.nodeName.toLowerCase();
        u = !u && !r;
        if (z) {
          if (e) {
            for (;c;) {
              for (M = b;M = M[c];) {
                if (r ? M.nodeName.toLowerCase() === n : 1 === M.nodeType) {
                  return!1;
                }
              }
              l = c = "only" === a && !l && "nextSibling";
            }
            return!0;
          }
          if (l = [f ? z.firstChild : z.lastChild], f && u) {
            for (u = z[L] || (z[L] = {}), g = u[a] || [], y = g[0] === R && g[1], h = g[0] === R && g[2], M = y && z.childNodes[y];M = ++y && M && M[c] || (h = y = 0) || l.pop();) {
              if (1 === M.nodeType && ++h && M === b) {
                u[a] = [R, y, h];
                break;
              }
            }
          } else {
            if (u && (g = (b[L] || (b[L] = {}))[a]) && g[0] === R) {
              h = g[1];
            } else {
              for (;(M = ++y && M && M[c] || (h = y = 0) || l.pop()) && ((r ? M.nodeName.toLowerCase() !== n : 1 !== M.nodeType) || !++h || (u && ((M[L] || (M[L] = {}))[a] = [R, h]), M !== b));) {
              }
            }
          }
          return h -= d, h === m || 0 === h % m && 0 <= h / m;
        }
      };
    }, PSEUDO:function(a, c) {
      var d, e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
      return e[L] ? e(c) : 1 < e.length ? (d = [a, a, "", c], t.setFilters.hasOwnProperty(a.toLowerCase()) ? m(function(a, b) {
        for (var m, d = e(a, c), f = d.length;f--;) {
          m = X.call(a, d[f]), a[m] = !(b[m] = d[f]);
        }
      }) : function(a) {
        return e(a, 0, d);
      }) : e;
    }}, pseudos:{not:m(function(a) {
      var b = [], c = [], d = E(a.replace(ja, "$1"));
      return d[L] ? m(function(a, b, c, m) {
        var e;
        c = d(a, null, m, []);
        for (m = a.length;m--;) {
          (e = c[m]) && (a[m] = !(b[m] = e));
        }
      }) : function(a, m, e) {
        return b[0] = a, d(b, null, e, c), !c.pop();
      };
    }), has:m(function(a) {
      return function(c) {
        return 0 < b(a, c).length;
      };
    }), contains:m(function(a) {
      return function(b) {
        return-1 < (b.textContent || b.innerText || w(b)).indexOf(a);
      };
    }), lang:m(function(a) {
      return xa.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(), function(b) {
        var c;
        do {
          if (c = N ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
            return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
          }
        } while ((b = b.parentNode) && 1 === b.nodeType);
        return!1;
      };
    }), target:function(b) {
      var c = a.location && a.location.hash;
      return c && c.slice(1) === b.id;
    }, root:function(a) {
      return a === I;
    }, focus:function(a) {
      return a === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
    }, enabled:function(a) {
      return!1 === a.disabled;
    }, disabled:function(a) {
      return!0 === a.disabled;
    }, checked:function(a) {
      var b = a.nodeName.toLowerCase();
      return "input" === b && !!a.checked || "option" === b && !!a.selected;
    }, selected:function(a) {
      return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected;
    }, empty:function(a) {
      for (a = a.firstChild;a;a = a.nextSibling) {
        if (6 > a.nodeType) {
          return!1;
        }
      }
      return!0;
    }, parent:function(a) {
      return!t.pseudos.empty(a);
    }, header:function(a) {
      return ta.test(a.nodeName);
    }, input:function(a) {
      return sa.test(a.nodeName);
    }, button:function(a) {
      var b = a.nodeName.toLowerCase();
      return "input" === b && "button" === a.type || "button" === b;
    }, text:function(a) {
      var b;
      return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
    }, first:g(function() {
      return[0];
    }), last:g(function(a, b) {
      return[b - 1];
    }), eq:g(function(a, b, c) {
      return[0 > c ? c + b : c];
    }), even:g(function(a, b) {
      for (var c = 0;b > c;c += 2) {
        a.push(c);
      }
      return a;
    }), odd:g(function(a, b) {
      for (var c = 1;b > c;c += 2) {
        a.push(c);
      }
      return a;
    }), lt:g(function(a, b, c) {
      for (b = 0 > c ? c + b : c;0 <= --b;) {
        a.push(b);
      }
      return a;
    }), gt:g(function(a, b, c) {
      for (c = 0 > c ? c + b : c;++c < b;) {
        a.push(c);
      }
      return a;
    })}};
    t.pseudos.nth = t.pseudos.eq;
    for (J in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0}) {
      t.pseudos[J] = r(J);
    }
    for (J in{submit:!0, reset:!0}) {
      t.pseudos[J] = u(J);
    }
    y.prototype = t.filters = t.pseudos;
    t.setFilters = new y;
    E = b.compile = function(a, b) {
      var c, m = [], d = [], e = ba[a + " "];
      if (!e) {
        b || (b = l(a));
        for (c = b.length;c--;) {
          e = s(b[c]), e[L] ? m.push(e) : d.push(e);
        }
        e = ba(a, C(d, m));
      }
      return e;
    };
    return v.sortStable = L.split("").sort(Q).join("") === L, v.detectDuplicates = !!W, K(), v.sortDetached = d(function(a) {
      return 1 & a.compareDocumentPosition(D.createElement("div"));
    }), d(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || e("type|href|height|width", function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), v.attributes && d(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || e("value", function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), d(function(a) {
      return null == a.getAttribute("disabled");
    }) || e("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
      var m;
      return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (m = a.getAttributeNode(b)) && m.specified ? m.value : null;
    }), b;
  }(a);
  n.find = wa;
  n.expr = wa.selectors;
  n.expr[":"] = n.expr.pseudos;
  n.unique = wa.uniqueSort;
  n.text = wa.getText;
  n.isXMLDoc = wa.isXML;
  n.contains = wa.contains;
  var eb = n.expr.match.needsContext, fb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Bb = /^.[^:#\[\.,]*$/;
  n.filter = function(a, b, c) {
    var m = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === m.nodeType ? n.find.matchesSelector(m, a) ? [m] : [] : n.find.matches(a, n.grep(b, function(a) {
      return 1 === a.nodeType;
    }));
  };
  n.fn.extend({find:function(a) {
    var b, c = [], m = this, d = m.length;
    if ("string" != typeof a) {
      return this.pushStack(n(a).filter(function() {
        for (b = 0;d > b;b++) {
          if (n.contains(m[b], this)) {
            return!0;
          }
        }
      }));
    }
    for (b = 0;d > b;b++) {
      n.find(a, m[b], c);
    }
    return c = this.pushStack(1 < d ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
  }, filter:function(a) {
    return this.pushStack(d(this, a || [], !1));
  }, not:function(a) {
    return this.pushStack(d(this, a || [], !0));
  }, is:function(a) {
    return!!d(this, "string" == typeof a && eb.test(a) ? n(a) : a || [], !1).length;
  }});
  var Ea, H = a.document, Kb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (n.fn.init = function(a, b) {
    var c, m;
    if (!a) {
      return this;
    }
    if ("string" == typeof a) {
      if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : Kb.exec(a), !c || !c[1] && b) {
        return!b || b.jquery ? (b || Ea).find(a) : this.constructor(b).find(a);
      }
      if (c[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : H, !0)), fb.test(c[1]) && n.isPlainObject(b)) {
          for (c in b) {
            n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          }
        }
        return this;
      }
      if (m = H.getElementById(c[2]), m && m.parentNode) {
        if (m.id !== c[2]) {
          return Ea.find(a);
        }
        this.length = 1;
        this[0] = m;
      }
      return this.context = H, this.selector = a, this;
    }
    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof Ea.ready ? Ea.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  }).prototype = n.fn;
  Ea = n(H);
  var Lb = /^(?:parents|prev(?:Until|All))/, Mb = {children:!0, contents:!0, next:!0, prev:!0};
  n.extend({dir:function(a, b, c) {
    var m = [];
    for (a = a[b];a && 9 !== a.nodeType && (void 0 === c || 1 !== a.nodeType || !n(a).is(c));) {
      1 === a.nodeType && m.push(a), a = a[b];
    }
    return m;
  }, sibling:function(a, b) {
    for (var c = [];a;a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }
    return c;
  }});
  n.fn.extend({has:function(a) {
    var b, c = n(a, this), m = c.length;
    return this.filter(function() {
      for (b = 0;m > b;b++) {
        if (n.contains(this, c[b])) {
          return!0;
        }
      }
    });
  }, closest:function(a, b) {
    for (var c, m = 0, d = this.length, e = [], f = eb.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;d > m;m++) {
      for (c = this[m];c && c !== b;c = c.parentNode) {
        if (11 > c.nodeType && (f ? -1 < f.index(c) : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
          e.push(c);
          break;
        }
      }
    }
    return this.pushStack(1 < e.length ? n.unique(e) : e);
  }, index:function(a) {
    return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add:function(a, b) {
    return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
  }, addBack:function(a) {
    return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
  }});
  n.each({parent:function(a) {
    return(a = a.parentNode) && 11 !== a.nodeType ? a : null;
  }, parents:function(a) {
    return n.dir(a, "parentNode");
  }, parentsUntil:function(a, b, c) {
    return n.dir(a, "parentNode", c);
  }, next:function(a) {
    return e(a, "nextSibling");
  }, prev:function(a) {
    return e(a, "previousSibling");
  }, nextAll:function(a) {
    return n.dir(a, "nextSibling");
  }, prevAll:function(a) {
    return n.dir(a, "previousSibling");
  }, nextUntil:function(a, b, c) {
    return n.dir(a, "nextSibling", c);
  }, prevUntil:function(a, b, c) {
    return n.dir(a, "previousSibling", c);
  }, siblings:function(a) {
    return n.sibling((a.parentNode || {}).firstChild, a);
  }, children:function(a) {
    return n.sibling(a.firstChild);
  }, contents:function(a) {
    return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes);
  }}, function(a, b) {
    n.fn[a] = function(c, m) {
      var d = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (m = c), m && "string" == typeof m && (d = n.filter(m, d)), 1 < this.length && (Mb[a] || (d = n.unique(d)), Lb.test(a) && (d = d.reverse())), this.pushStack(d);
    };
  });
  var ia = /\S+/g, ab = {};
  n.Callbacks = function(a) {
    a = "string" == typeof a ? ab[a] || f(a) : n.extend({}, a);
    var b, c, m, d, e, r, u = [], g = !a.once && [], h = function(f) {
      c = a.memory && f;
      m = !0;
      e = r || 0;
      r = 0;
      d = u.length;
      for (b = !0;u && d > e;e++) {
        if (!1 === u[e].apply(f[0], f[1]) && a.stopOnFalse) {
          c = !1;
          break;
        }
      }
      b = !1;
      u && (g ? g.length && h(g.shift()) : c ? u = [] : y.disable());
    }, y = {add:function() {
      if (u) {
        var m = u.length;
        !function Jb(b) {
          n.each(b, function(b, c) {
            var m = n.type(c);
            "function" === m ? a.unique && y.has(c) || u.push(c) : c && c.length && "string" !== m && Jb(c);
          });
        }(arguments);
        b ? d = u.length : c && (r = m, h(c));
      }
      return this;
    }, remove:function() {
      return u && n.each(arguments, function(a, c) {
        for (var m;-1 < (m = n.inArray(c, u, m));) {
          u.splice(m, 1), b && (d >= m && d--, e >= m && e--);
        }
      }), this;
    }, has:function(a) {
      return a ? -1 < n.inArray(a, u) : !(!u || !u.length);
    }, empty:function() {
      return u = [], d = 0, this;
    }, disable:function() {
      return u = g = c = void 0, this;
    }, disabled:function() {
      return!u;
    }, lock:function() {
      return g = void 0, c || y.disable(), this;
    }, locked:function() {
      return!g;
    }, fireWith:function(a, c) {
      return!u || m && !g || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? g.push(c) : h(c)), this;
    }, fire:function() {
      return y.fireWith(this, arguments), this;
    }, fired:function() {
      return!!m;
    }};
    return y;
  };
  n.extend({Deferred:function(a) {
    var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", m = {state:function() {
      return c;
    }, always:function() {
      return d.done(arguments).fail(arguments), this;
    }, then:function() {
      var a = arguments;
      return n.Deferred(function(c) {
        n.each(b, function(b, e) {
          var f = n.isFunction(a[b]) && a[b];
          d[e[1]](function() {
            var a = f && f.apply(this, arguments);
            a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[e[0] + "With"](this === m ? c.promise() : this, f ? [a] : arguments);
          });
        });
        a = null;
      }).promise();
    }, promise:function(a) {
      return null != a ? n.extend(a, m) : m;
    }}, d = {};
    return m.pipe = m.then, n.each(b, function(a, e) {
      var f = e[2], r = e[3];
      m[e[1]] = f.add;
      r && f.add(function() {
        c = r;
      }, b[1 ^ a][2].disable, b[2][2].lock);
      d[e[0]] = function() {
        return d[e[0] + "With"](this === d ? m : this, arguments), this;
      };
      d[e[0] + "With"] = f.fireWith;
    }), m.promise(d), a && a.call(d, d), d;
  }, when:function(a) {
    var b = 0, c = aa.call(arguments), m = c.length, d = 1 !== m || a && n.isFunction(a.promise) ? m : 0, e = 1 === d ? a : n.Deferred(), f = function(a, b, c) {
      return function(m) {
        b[a] = this;
        c[a] = 1 < arguments.length ? aa.call(arguments) : m;
        c === r ? e.notifyWith(b, c) : --d || e.resolveWith(b, c);
      };
    }, r, u, g;
    if (1 < m) {
      for (r = Array(m), u = Array(m), g = Array(m);m > b;b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(f(b, g, c)).fail(e.reject).progress(f(b, u, r)) : --d;
      }
    }
    return d || e.resolveWith(g, c), e.promise();
  }});
  var Ia;
  n.fn.ready = function(a) {
    return n.ready.promise().done(a), this;
  };
  n.extend({isReady:!1, readyWait:1, holdReady:function(a) {
    a ? n.readyWait++ : n.ready(!0);
  }, ready:function(a) {
    if (!0 === a ? !--n.readyWait : !n.isReady) {
      if (!H.body) {
        return setTimeout(n.ready);
      }
      n.isReady = !0;
      !0 !== a && 0 < --n.readyWait || (Ia.resolveWith(H, [n]), n.fn.trigger && n(H).trigger("ready").off("ready"));
    }
  }});
  n.ready.promise = function(b) {
    if (!Ia) {
      if (Ia = n.Deferred(), "complete" === H.readyState) {
        setTimeout(n.ready);
      } else {
        if (H.addEventListener) {
          H.addEventListener("DOMContentLoaded", l, !1), a.addEventListener("load", l, !1);
        } else {
          H.attachEvent("onreadystatechange", l);
          a.attachEvent("onload", l);
          var c = !1;
          try {
            c = null == a.frameElement && H.documentElement;
          } catch (m) {
          }
          c && c.doScroll && !function Oa() {
            if (!n.isReady) {
              try {
                c.doScroll("left");
              } catch (a) {
                return setTimeout(Oa, 50);
              }
              g();
              n.ready();
            }
          }();
        }
      }
    }
    return Ia.promise(b);
  };
  var ga = "undefined", gb;
  for (gb in n(B)) {
    break;
  }
  B.ownLast = "0" !== gb;
  B.inlineBlockNeedsLayout = !1;
  n(function() {
    var a, b, c = H.getElementsByTagName("body")[0];
    c && (a = H.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = H.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== ga && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (B.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a));
  });
  (function() {
    var a = H.createElement("div");
    if (null == B.deleteExpando) {
      B.deleteExpando = !0;
      try {
        delete a.test;
      } catch (b) {
        B.deleteExpando = !1;
      }
    }
  })();
  n.acceptData = function(a) {
    var b = n.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
    return 1 !== c && 9 !== c ? !1 : !b || !0 !== b && a.getAttribute("classid") === b;
  };
  var Db = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Cb = /([A-Z])/g;
  n.extend({cache:{}, noData:{"applet ":!0, "embed ":!0, "object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData:function(a) {
    return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !p(a);
  }, data:function(a, b, c) {
    return q(a, b, c);
  }, removeData:function(a, b) {
    return w(a, b);
  }, _data:function(a, b, c) {
    return q(a, b, c, !0);
  }, _removeData:function(a, b) {
    return w(a, b, !0);
  }});
  n.fn.extend({data:function(a, b) {
    var c, m, d, e = this[0], f = e && e.attributes;
    if (void 0 === a) {
      if (this.length && (d = n.data(e), 1 === e.nodeType && !n._data(e, "parsedAttrs"))) {
        for (c = f.length;c--;) {
          m = f[c].name, 0 === m.indexOf("data-") && (m = n.camelCase(m.slice(5)), h(e, m, d[m]));
        }
        n._data(e, "parsedAttrs", !0);
      }
      return d;
    }
    return "object" == typeof a ? this.each(function() {
      n.data(this, a);
    }) : 1 < arguments.length ? this.each(function() {
      n.data(this, a, b);
    }) : e ? h(e, a, n.data(e, a)) : void 0;
  }, removeData:function(a) {
    return this.each(function() {
      n.removeData(this, a);
    });
  }});
  n.extend({queue:function(a, b, c) {
    var m;
    return a ? (b = (b || "fx") + "queue", m = n._data(a, b), c && (!m || n.isArray(c) ? m = n._data(a, b, n.makeArray(c)) : m.push(c)), m || []) : void 0;
  }, dequeue:function(a, b) {
    b = b || "fx";
    var c = n.queue(a, b), m = c.length, d = c.shift(), e = n._queueHooks(a, b), f = function() {
      n.dequeue(a, b);
    };
    "inprogress" === d && (d = c.shift(), m--);
    d && ("fx" === b && c.unshift("inprogress"), delete e.stop, d.call(a, f, e));
    !m && e && e.empty.fire();
  }, _queueHooks:function(a, b) {
    var c = b + "queueHooks";
    return n._data(a, c) || n._data(a, c, {empty:n.Callbacks("once memory").add(function() {
      n._removeData(a, b + "queue");
      n._removeData(a, c);
    })});
  }});
  n.fn.extend({queue:function(a, b) {
    var c = 2;
    return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
      var c = n.queue(this, a, b);
      n._queueHooks(this, a);
      "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
    });
  }, dequeue:function(a) {
    return this.each(function() {
      n.dequeue(this, a);
    });
  }, clearQueue:function(a) {
    return this.queue(a || "fx", []);
  }, promise:function(a, b) {
    var c, m = 1, d = n.Deferred(), e = this, f = this.length, r = function() {
      --m || d.resolveWith(e, [e]);
    };
    "string" != typeof a && (b = a, a = void 0);
    for (a = a || "fx";f--;) {
      (c = n._data(e[f], a + "queueHooks")) && c.empty && (m++, c.empty.add(r));
    }
    return r(), d.promise(b);
  }});
  var Ja = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, pa = ["Top", "Right", "Bottom", "Left"], Ba = function(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  }, la = n.access = function(a, b, c, m, d, e, f) {
    var r = 0, u = a.length, g = null == c;
    if ("object" === n.type(c)) {
      for (r in d = !0, c) {
        n.access(a, b, r, c[r], !0, e, f);
      }
    } else {
      if (void 0 !== m && (d = !0, n.isFunction(m) || (f = !0), g && (f ? (b.call(a, m), b = null) : (g = b, b = function(a, b, c) {
        return g.call(n(a), c);
      })), b)) {
        for (;u > r;r++) {
          b(a[r], c, f ? m : m.call(a[r], r, b(a[r], c)));
        }
      }
    }
    return d ? a : g ? b.call(a) : u ? b(a[0], c) : e;
  }, Pa = /^(?:checkbox|radio)$/i;
  !function() {
    var a = H.createDocumentFragment(), b = H.createElement("div"), c = H.createElement("input");
    if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", B.leadingWhitespace = 3 === b.firstChild.nodeType, B.tbody = !b.getElementsByTagName("tbody").length, B.htmlSerialize = !!b.getElementsByTagName("link").length, B.html5Clone = "<:nav></:nav>" !== H.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), B.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", B.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, 
    a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", B.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, B.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
      B.noCloneEvent = !1;
    }), b.cloneNode(!0).click()), null == B.deleteExpando) {
      B.deleteExpando = !0;
      try {
        delete b.test;
      } catch (m) {
        B.deleteExpando = !1;
      }
    }
    a = b = c = null;
  }();
  (function() {
    var b, c, m = H.createElement("div");
    for (b in{submit:!0, change:!0, focusin:!0}) {
      c = "on" + b, (B[b + "Bubbles"] = c in a) || (m.setAttribute(c, "t"), B[b + "Bubbles"] = !1 === m.attributes[c].expando);
    }
  })();
  var Sa = /^(?:input|select|textarea)$/i, Nb = /^key/, Ob = /^(?:mouse|contextmenu)|click/, hb = /^(?:focusinfocus|focusoutblur)$/, ib = /^([^.]*)(?:\.(.+)|)$/;
  n.event = {global:{}, add:function(a, b, c, m, d) {
    var e, f, r, u, g, h, y, l, z, A;
    if (r = n._data(a)) {
      c.handler && (u = c, c = u.handler, d = u.selector);
      c.guid || (c.guid = n.guid++);
      (f = r.events) || (f = r.events = {});
      (h = r.handle) || (h = r.handle = function(a) {
        return typeof n === ga || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(h.elem, arguments);
      }, h.elem = a);
      b = (b || "").match(ia) || [""];
      for (r = b.length;r--;) {
        e = ib.exec(b[r]) || [], z = A = e[1], e = (e[2] || "").split(".").sort(), z && (g = n.event.special[z] || {}, z = (d ? g.delegateType : g.bindType) || z, g = n.event.special[z] || {}, y = n.extend({type:z, origType:A, data:m, handler:c, guid:c.guid, selector:d, needsContext:d && n.expr.match.needsContext.test(d), namespace:e.join(".")}, u), (l = f[z]) || (l = f[z] = [], l.delegateCount = 0, g.setup && !1 !== g.setup.call(a, m, e, h) || (a.addEventListener ? a.addEventListener(z, h, !1) : 
        a.attachEvent && a.attachEvent("on" + z, h))), g.add && (g.add.call(a, y), y.handler.guid || (y.handler.guid = c.guid)), d ? l.splice(l.delegateCount++, 0, y) : l.push(y), n.event.global[z] = !0);
      }
      a = null;
    }
  }, remove:function(a, b, c, m, d) {
    var e, f, r, u, g, h, y, l, z, A, p, q = n.hasData(a) && n._data(a);
    if (q && (h = q.events)) {
      b = (b || "").match(ia) || [""];
      for (g = b.length;g--;) {
        if (r = ib.exec(b[g]) || [], z = p = r[1], A = (r[2] || "").split(".").sort(), z) {
          y = n.event.special[z] || {};
          z = (m ? y.delegateType : y.bindType) || z;
          l = h[z] || [];
          r = r[2] && RegExp("(^|\\.)" + A.join("\\.(?:.*\\.|)") + "(\\.|$)");
          for (u = e = l.length;e--;) {
            f = l[e], !d && p !== f.origType || c && c.guid !== f.guid || r && !r.test(f.namespace) || m && m !== f.selector && ("**" !== m || !f.selector) || (l.splice(e, 1), f.selector && l.delegateCount--, y.remove && y.remove.call(a, f));
          }
          u && !l.length && (y.teardown && !1 !== y.teardown.call(a, A, q.handle) || n.removeEvent(a, z, q.handle), delete h[z]);
        } else {
          for (z in h) {
            n.event.remove(a, z + b[g], c, m, !0);
          }
        }
      }
      n.isEmptyObject(h) && (delete q.handle, n._removeData(a, "events"));
    }
  }, trigger:function(b, c, m, d) {
    var e, f, r, u, g, h, y = [m || H], l = ea.call(b, "type") ? b.type : b;
    h = ea.call(b, "namespace") ? b.namespace.split(".") : [];
    if (r = e = m = m || H, 3 !== m.nodeType && 8 !== m.nodeType && !hb.test(l + n.event.triggered) && (0 <= l.indexOf(".") && (h = l.split("."), l = h.shift(), h.sort()), f = 0 > l.indexOf(":") && "on" + l, b = b[n.expando] ? b : new n.Event(l, "object" == typeof b && b), b.isTrigger = d ? 2 : 3, b.namespace = h.join("."), b.namespace_re = b.namespace ? RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = m), c = null == c ? [b] : n.makeArray(c, 
    [b]), g = n.event.special[l] || {}, d || !g.trigger || !1 !== g.trigger.apply(m, c))) {
      if (!d && !g.noBubble && !n.isWindow(m)) {
        u = g.delegateType || l;
        for (hb.test(u + l) || (r = r.parentNode);r;r = r.parentNode) {
          y.push(r), e = r;
        }
        e === (m.ownerDocument || H) && y.push(e.defaultView || e.parentWindow || a);
      }
      for (h = 0;(r = y[h++]) && !b.isPropagationStopped();) {
        b.type = 1 < h ? u : g.bindType || l, (e = (n._data(r, "events") || {})[b.type] && n._data(r, "handle")) && e.apply(r, c), (e = f && r[f]) && e.apply && n.acceptData(r) && (b.result = e.apply(r, c), !1 === b.result && b.preventDefault());
      }
      if (b.type = l, !(d || b.isDefaultPrevented() || g._default && !1 !== g._default.apply(y.pop(), c)) && n.acceptData(m) && f && m[l] && !n.isWindow(m)) {
        (e = m[f]) && (m[f] = null);
        n.event.triggered = l;
        try {
          m[l]();
        } catch (z) {
        }
        n.event.triggered = void 0;
        e && (m[f] = e);
      }
      return b.result;
    }
  }, dispatch:function(a) {
    a = n.event.fix(a);
    var b, c, m, d, e, f = [], r = aa.call(arguments);
    b = (n._data(this, "events") || {})[a.type] || [];
    var u = n.event.special[a.type] || {};
    if (r[0] = a, a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
      f = n.event.handlers.call(this, a, b);
      for (b = 0;(d = f[b++]) && !a.isPropagationStopped();) {
        for (a.currentTarget = d.elem, e = 0;(m = d.handlers[e++]) && !a.isImmediatePropagationStopped();) {
          a.namespace_re && !a.namespace_re.test(m.namespace) || (a.handleObj = m, a.data = m.data, c = ((n.event.special[m.origType] || {}).handle || m.handler).apply(d.elem, r), void 0 === c || !1 !== (a.result = c) || (a.preventDefault(), a.stopPropagation()));
        }
      }
      return u.postDispatch && u.postDispatch.call(this, a), a.result;
    }
  }, handlers:function(a, b) {
    var c, m, d, e, f = [], r = b.delegateCount, u = a.target;
    if (r && u.nodeType && (!a.button || "click" !== a.type)) {
      for (;u != this;u = u.parentNode || this) {
        if (1 === u.nodeType && (!0 !== u.disabled || "click" !== a.type)) {
          d = [];
          for (e = 0;r > e;e++) {
            m = b[e], c = m.selector + " ", void 0 === d[c] && (d[c] = m.needsContext ? 0 <= n(c, this).index(u) : n.find(c, this, null, [u]).length), d[c] && d.push(m);
          }
          d.length && f.push({elem:u, handlers:d});
        }
      }
    }
    return r < b.length && f.push({elem:this, handlers:b.slice(r)}), f;
  }, fix:function(a) {
    if (a[n.expando]) {
      return a;
    }
    var b, c, m;
    b = a.type;
    var d = a, e = this.fixHooks[b];
    e || (this.fixHooks[b] = e = Ob.test(b) ? this.mouseHooks : Nb.test(b) ? this.keyHooks : {});
    m = e.props ? this.props.concat(e.props) : this.props;
    a = new n.Event(d);
    for (b = m.length;b--;) {
      c = m[b], a[c] = d[c];
    }
    return a.target || (a.target = d.srcElement || H), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, d) : a;
  }, props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks:{}, keyHooks:{props:["char", "charCode", "key", "keyCode"], filter:function(a, b) {
    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
  }}, mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter:function(a, b) {
    var c, m, d, e = b.button, f = b.fromElement;
    return null == a.pageX && null != b.clientX && (m = a.target.ownerDocument || H, d = m.documentElement, c = m.body, a.pageX = b.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop || 0)), !a.relatedTarget && f && (a.relatedTarget = f === a.target ? b.toElement : f), a.which || void 0 === e || (a.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 
    0), a;
  }}, special:{load:{noBubble:!0}, focus:{trigger:function() {
    if (this !== t() && this.focus) {
      try {
        return this.focus(), !1;
      } catch (a) {
      }
    }
  }, delegateType:"focusin"}, blur:{trigger:function() {
    return this === t() && this.blur ? (this.blur(), !1) : void 0;
  }, delegateType:"focusout"}, click:{trigger:function() {
    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
  }, _default:function(a) {
    return n.nodeName(a.target, "a");
  }}, beforeunload:{postDispatch:function(a) {
    void 0 !== a.result && (a.originalEvent.returnValue = a.result);
  }}}, simulate:function(a, b, c, m) {
    a = n.extend(new n.Event, c, {type:a, isSimulated:!0, originalEvent:{}});
    m ? n.event.trigger(a, null, b) : n.event.dispatch.call(b, a);
    a.isDefaultPrevented() && c.preventDefault();
  }};
  n.removeEvent = H.removeEventListener ? function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  } : function(a, b, c) {
    b = "on" + b;
    a.detachEvent && (typeof a[b] === ga && (a[b] = null), a.detachEvent(b, c));
  };
  n.Event = function(a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (!1 === a.returnValue || a.getPreventDefault && a.getPreventDefault()) ? v : s) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b);
  };
  n.Event.prototype = {isDefaultPrevented:s, isPropagationStopped:s, isImmediatePropagationStopped:s, preventDefault:function() {
    var a = this.originalEvent;
    this.isDefaultPrevented = v;
    a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
  }, stopPropagation:function() {
    var a = this.originalEvent;
    this.isPropagationStopped = v;
    a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
  }, stopImmediatePropagation:function() {
    this.isImmediatePropagationStopped = v;
    this.stopPropagation();
  }};
  n.each({mouseenter:"mouseover", mouseleave:"mouseout"}, function(a, b) {
    n.event.special[a] = {delegateType:b, bindType:b, handle:function(a) {
      var c, m = a.relatedTarget, d = a.handleObj;
      return(!m || m !== this && !n.contains(this, m)) && (a.type = d.origType, c = d.handler.apply(this, arguments), a.type = b), c;
    }};
  });
  B.submitBubbles || (n.event.special.submit = {setup:function() {
    return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
      a = a.target;
      (a = n.nodeName(a, "input") || n.nodeName(a, "button") ? a.form : void 0) && !n._data(a, "submitBubbles") && (n.event.add(a, "submit._submit", function(a) {
        a._submit_bubble = !0;
      }), n._data(a, "submitBubbles", !0));
    });
  }, postDispatch:function(a) {
    a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0));
  }, teardown:function() {
    return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit");
  }});
  B.changeBubbles || (n.event.special.change = {setup:function() {
    return Sa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) {
      "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
    }), n.event.add(this, "click._change", function(a) {
      this._just_changed && !a.isTrigger && (this._just_changed = !1);
      n.event.simulate("change", this, a, !0);
    })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
      a = a.target;
      Sa.test(a.nodeName) && !n._data(a, "changeBubbles") && (n.event.add(a, "change._change", function(a) {
        !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0);
      }), n._data(a, "changeBubbles", !0));
    });
  }, handle:function(a) {
    var b = a.target;
    return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
  }, teardown:function() {
    return n.event.remove(this, "._change"), !Sa.test(this.nodeName);
  }});
  B.focusinBubbles || n.each({focus:"focusin", blur:"focusout"}, function(a, b) {
    var c = function(a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0);
    };
    n.event.special[b] = {setup:function() {
      var m = this.ownerDocument || this, d = n._data(m, b);
      d || m.addEventListener(a, c, !0);
      n._data(m, b, (d || 0) + 1);
    }, teardown:function() {
      var m = this.ownerDocument || this, d = n._data(m, b) - 1;
      d ? n._data(m, b, d) : (m.removeEventListener(a, c, !0), n._removeData(m, b));
    }};
  });
  n.fn.extend({on:function(a, b, c, m, d) {
    var e, f;
    if ("object" == typeof a) {
      "string" != typeof b && (c = c || b, b = void 0);
      for (e in a) {
        this.on(e, b, c, a[e], d);
      }
      return this;
    }
    if (null == c && null == m ? (m = b, c = b = void 0) : null == m && ("string" == typeof b ? (m = c, c = void 0) : (m = c, c = b, b = void 0)), !1 === m) {
      m = s;
    } else {
      if (!m) {
        return this;
      }
    }
    return 1 === d && (f = m, m = function(a) {
      return n().off(a), f.apply(this, arguments);
    }, m.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
      n.event.add(this, a, m, c, b);
    });
  }, one:function(a, b, c, m) {
    return this.on(a, b, c, m, 1);
  }, off:function(a, b, c) {
    var m, d;
    if (a && a.preventDefault && a.handleObj) {
      return m = a.handleObj, n(a.delegateTarget).off(m.namespace ? m.origType + "." + m.namespace : m.origType, m.selector, m.handler), this;
    }
    if ("object" == typeof a) {
      for (d in a) {
        this.off(d, b, a[d]);
      }
      return this;
    }
    return(!1 === b || "function" == typeof b) && (c = b, b = void 0), !1 === c && (c = s), this.each(function() {
      n.event.remove(this, a, c, b);
    });
  }, trigger:function(a, b) {
    return this.each(function() {
      n.event.trigger(a, b, this);
    });
  }, triggerHandler:function(a, b) {
    var c = this[0];
    return c ? n.event.trigger(a, b, c, !0) : void 0;
  }});
  var bb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Pb = / jQuery\d+="(?:null|\d+)"/g, jb = RegExp("<(?:" + bb + ")[\\s/>]", "i"), Ta = /^\s+/, kb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, lb = /<([\w:]+)/, mb = /<tbody/i, Qb = /<|&#?\w+;/, Rb = /<(?:script|style|link)/i, Sb = /checked\s*(?:[^=]|=\s*.checked.)/i, nb = /^$|\/(?:java|ecma)script/i, 
  Eb = /^true\/(.*)/, Tb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, X = {option:[1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], area:[1, "<map>", "</map>"], param:[1, "<object>", "</object>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], _default:B.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, 
  Ua = x(H).appendChild(H.createElement("div"));
  X.optgroup = X.option;
  X.tbody = X.tfoot = X.colgroup = X.caption = X.thead;
  X.th = X.td;
  n.extend({clone:function(a, b, c) {
    var d, e, f, r, u, g = n.contains(a.ownerDocument, a);
    if (B.html5Clone || n.isXMLDoc(a) || !jb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ua.innerHTML = a.outerHTML, Ua.removeChild(f = Ua.firstChild)), !(B.noCloneEvent && B.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) {
      for (d = m(f), u = m(a), r = 0;null != (e = u[r]);++r) {
        if (d[r]) {
          var h = d[r], l = void 0, p = void 0, q = void 0;
          if (1 === h.nodeType) {
            if (l = h.nodeName.toLowerCase(), !B.noCloneEvent && h[n.expando]) {
              q = n._data(h);
              for (p in q.events) {
                n.removeEvent(h, p, q.handle);
              }
              h.removeAttribute(n.expando);
            }
            "script" === l && h.text !== e.text ? (y(h).text = e.text, z(h)) : "object" === l ? (h.parentNode && (h.outerHTML = e.outerHTML), B.html5Clone && e.innerHTML && !n.trim(h.innerHTML) && (h.innerHTML = e.innerHTML)) : "input" === l && Pa.test(e.type) ? (h.defaultChecked = h.checked = e.checked, h.value !== e.value && (h.value = e.value)) : "option" === l ? h.defaultSelected = h.selected = e.defaultSelected : ("input" === l || "textarea" === l) && (h.defaultValue = e.defaultValue);
          }
        }
      }
    }
    if (b) {
      if (c) {
        for (u = u || m(a), d = d || m(f), r = 0;null != (e = u[r]);r++) {
          C(e, d[r]);
        }
      } else {
        C(a, f);
      }
    }
    return d = m(f, "script"), 0 < d.length && A(d, !g && m(a, "script")), f;
  }, buildFragment:function(a, b, c, d) {
    for (var e, f, u, g, h, y, l, z = a.length, p = x(b), q = [], s = 0;z > s;s++) {
      if (f = a[s], f || 0 === f) {
        if ("object" === n.type(f)) {
          n.merge(q, f.nodeType ? [f] : f);
        } else {
          if (Qb.test(f)) {
            g = g || p.appendChild(b.createElement("div"));
            h = (lb.exec(f) || ["", ""])[1].toLowerCase();
            l = X[h] || X._default;
            g.innerHTML = l[1] + f.replace(kb, "<$1></$2>") + l[2];
            for (e = l[0];e--;) {
              g = g.lastChild;
            }
            if (!B.leadingWhitespace && Ta.test(f) && q.push(b.createTextNode(Ta.exec(f)[0])), !B.tbody) {
              for (e = (f = "table" !== h || mb.test(f) ? "<table>" !== l[1] || mb.test(f) ? 0 : g : g.firstChild) && f.childNodes.length;e--;) {
                n.nodeName(y = f.childNodes[e], "tbody") && !y.childNodes.length && f.removeChild(y);
              }
            }
            n.merge(q, g.childNodes);
            for (g.textContent = "";g.firstChild;) {
              g.removeChild(g.firstChild);
            }
            g = p.lastChild;
          } else {
            q.push(b.createTextNode(f));
          }
        }
      }
    }
    g && p.removeChild(g);
    B.appendChecked || n.grep(m(q, "input"), r);
    for (s = 0;f = q[s++];) {
      if ((!d || -1 === n.inArray(f, d)) && (u = n.contains(f.ownerDocument, f), g = m(p.appendChild(f), "script"), u && A(g), c)) {
        for (e = 0;f = g[e++];) {
          nb.test(f.type || "") && c.push(f);
        }
      }
    }
    return p;
  }, cleanData:function(a, b) {
    for (var c, m, d, e, f = 0, r = n.expando, u = n.cache, g = B.deleteExpando, h = n.event.special;null != (c = a[f]);f++) {
      if ((b || n.acceptData(c)) && (d = c[r], e = d && u[d])) {
        if (e.events) {
          for (m in e.events) {
            h[m] ? n.event.remove(c, m) : n.removeEvent(c, m, e.handle);
          }
        }
        u[d] && (delete u[d], g ? delete c[r] : typeof c.removeAttribute !== ga ? c.removeAttribute(r) : c[r] = null, da.push(d));
      }
    }
  }});
  n.fn.extend({text:function(a) {
    return la(this, function(a) {
      return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(a));
    }, null, a, arguments.length);
  }, append:function() {
    return this.domManip(arguments, function(a) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || u(this, a).appendChild(a);
    });
  }, prepend:function() {
    return this.domManip(arguments, function(a) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var b = u(this, a);
        b.insertBefore(a, b.firstChild);
      }
    });
  }, before:function() {
    return this.domManip(arguments, function(a) {
      this.parentNode && this.parentNode.insertBefore(a, this);
    });
  }, after:function() {
    return this.domManip(arguments, function(a) {
      this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
    });
  }, remove:function(a, b) {
    for (var c, d = a ? n.filter(a, this) : this, e = 0;null != (c = d[e]);e++) {
      b || 1 !== c.nodeType || n.cleanData(m(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && A(m(c, "script")), c.parentNode.removeChild(c));
    }
    return this;
  }, empty:function() {
    for (var a, b = 0;null != (a = this[b]);b++) {
      for (1 === a.nodeType && n.cleanData(m(a, !1));a.firstChild;) {
        a.removeChild(a.firstChild);
      }
      a.options && n.nodeName(a, "select") && (a.options.length = 0);
    }
    return this;
  }, clone:function(a, b) {
    return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
      return n.clone(this, a, b);
    });
  }, html:function(a) {
    return la(this, function(a) {
      var b = this[0] || {}, c = 0, d = this.length;
      if (void 0 === a) {
        return 1 === b.nodeType ? b.innerHTML.replace(Pb, "") : void 0;
      }
      if (!("string" != typeof a || Rb.test(a) || !B.htmlSerialize && jb.test(a) || !B.leadingWhitespace && Ta.test(a) || X[(lb.exec(a) || ["", ""])[1].toLowerCase()])) {
        a = a.replace(kb, "<$1></$2>");
        try {
          for (;d > c;c++) {
            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(m(b, !1)), b.innerHTML = a);
          }
          b = 0;
        } catch (e) {
        }
      }
      b && this.empty().append(a);
    }, null, a, arguments.length);
  }, replaceWith:function() {
    var a = arguments[0];
    return this.domManip(arguments, function(b) {
      a = this.parentNode;
      n.cleanData(m(this));
      a && a.replaceChild(b, this);
    }), a && (a.length || a.nodeType) ? this : this.remove();
  }, detach:function(a) {
    return this.remove(a, !0);
  }, domManip:function(a, b) {
    a = fa.apply([], a);
    var c, d, e, f, r = 0, u = this.length, g = this, h = u - 1, l = a[0], A = n.isFunction(l);
    if (A || 1 < u && "string" == typeof l && !B.checkClone && Sb.test(l)) {
      return this.each(function(c) {
        var m = g.eq(c);
        A && (a[0] = l.call(this, c, m.html()));
        m.domManip(a, b);
      });
    }
    if (u && (f = n.buildFragment(a, this[0].ownerDocument, !1, this), c = f.firstChild, 1 === f.childNodes.length && (f = c), c)) {
      e = n.map(m(f, "script"), y);
      for (d = e.length;u > r;r++) {
        c = f, r !== h && (c = n.clone(c, !0, !0), d && n.merge(e, m(c, "script"))), b.call(this[r], c, r);
      }
      if (d) {
        for (f = e[e.length - 1].ownerDocument, n.map(e, z), r = 0;d > r;r++) {
          c = e[r], nb.test(c.type || "") && !n._data(c, "globalEval") && n.contains(f, c) && (c.src ? n._evalUrl && n._evalUrl(c.src) : n.globalEval((c.text || c.textContent || c.innerHTML || "").replace(Tb, "")));
        }
      }
      f = c = null;
    }
    return this;
  }});
  n.each({appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, function(a, b) {
    n.fn[a] = function(a) {
      for (var c = 0, m = [], d = n(a), e = d.length - 1;e >= c;c++) {
        a = c === e ? this : this.clone(!0), n(d[c])[b](a), V.apply(m, a.get());
      }
      return this.pushStack(m);
    };
  });
  var Aa, cb = {};
  !function() {
    var a, b, c = H.createElement("div");
    c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    a = c.getElementsByTagName("a")[0];
    a.style.cssText = "float:left;opacity:.5";
    B.opacity = /^0.5/.test(a.style.opacity);
    B.cssFloat = !!a.style.cssFloat;
    c.style.backgroundClip = "content-box";
    c.cloneNode(!0).style.backgroundClip = "";
    B.clearCloneStyle = "content-box" === c.style.backgroundClip;
    a = c = null;
    B.shrinkWrapBlocks = function() {
      var a, c, m;
      if (null == b) {
        if (a = H.getElementsByTagName("body")[0], !a) {
          return;
        }
        c = H.createElement("div");
        m = H.createElement("div");
        a.appendChild(c).appendChild(m);
        b = !1;
        typeof m.style.zoom !== ga && (m.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1", m.innerHTML = "<div></div>", m.firstChild.style.width = "5px", b = 3 !== m.offsetWidth);
        a.removeChild(c);
      }
      return b;
    };
  }();
  var ob = /^margin/, Ga = RegExp("^(" + Ja + ")(?!px)[a-z%]+$", "i"), qa, ra, Ub = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (qa = function(a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null);
  }, ra = function(a, b, c) {
    var m, d, e, f, r = a.style;
    return c = c || qa(a), f = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== f || n.contains(a.ownerDocument, a) || (f = n.style(a, b)), Ga.test(f) && ob.test(b) && (m = r.width, d = r.minWidth, e = r.maxWidth, r.minWidth = r.maxWidth = r.width = f, f = c.width, r.width = m, r.minWidth = d, r.maxWidth = e)), void 0 === f ? f : f + "";
  }) : H.documentElement.currentStyle && (qa = function(a) {
    return a.currentStyle;
  }, ra = function(a, b, c) {
    var m, d, e, f, r = a.style;
    return c = c || qa(a), f = c ? c[b] : void 0, null == f && r && r[b] && (f = r[b]), Ga.test(f) && !Ub.test(b) && (m = r.left, d = a.runtimeStyle, e = d && d.left, e && (d.left = a.currentStyle.left), r.left = "fontSize" === b ? "1em" : f, f = r.pixelLeft + "px", r.left = m, e && (d.left = e)), void 0 === f ? f : f + "" || "auto";
  });
  !function() {
    function b() {
      var c, m, u = H.getElementsByTagName("body")[0];
      u && (c = H.createElement("div"), m = H.createElement("div"), c.style.cssText = g, u.appendChild(c).appendChild(m), m.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(u, null != u.style.zoom ? {zoom:1} : {}, function() {
        d = 4 === m.offsetWidth;
      }), e = !0, f = !1, r = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(m, null) || {}).top, e = "4px" === (a.getComputedStyle(m, null) || {width:"4px"}).width), u.removeChild(c), m = u = null);
    }
    var c, m, d, e, f, r, u = H.createElement("div"), g = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
    u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    c = u.getElementsByTagName("a")[0];
    c.style.cssText = "float:left;opacity:.5";
    B.opacity = /^0.5/.test(c.style.opacity);
    B.cssFloat = !!c.style.cssFloat;
    u.style.backgroundClip = "content-box";
    u.cloneNode(!0).style.backgroundClip = "";
    B.clearCloneStyle = "content-box" === u.style.backgroundClip;
    c = u = null;
    n.extend(B, {reliableHiddenOffsets:function() {
      if (null != m) {
        return m;
      }
      var a, b, c, d = H.createElement("div"), e = H.getElementsByTagName("body")[0];
      if (e) {
        return d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = H.createElement("div"), a.style.cssText = g, e.appendChild(a).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = d.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", m = c && 0 === b[0].offsetHeight, e.removeChild(a), 
        m;
      }
    }, boxSizing:function() {
      return null == d && b(), d;
    }, boxSizingReliable:function() {
      return null == e && b(), e;
    }, pixelPosition:function() {
      return null == f && b(), f;
    }, reliableMarginRight:function() {
      var b, c, m, d;
      if (null == r && a.getComputedStyle) {
        if (b = H.getElementsByTagName("body")[0], !b) {
          return;
        }
        c = H.createElement("div");
        m = H.createElement("div");
        c.style.cssText = g;
        b.appendChild(c).appendChild(m);
        d = m.appendChild(H.createElement("div"));
        d.style.cssText = m.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        d.style.marginRight = d.style.width = "0";
        m.style.width = "1px";
        r = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight);
        b.removeChild(c);
      }
      return r;
    }});
  }();
  n.swap = function(a, b, c, m) {
    var d, e = {};
    for (d in b) {
      e[d] = a.style[d], a.style[d] = b[d];
    }
    c = c.apply(a, m || []);
    for (d in b) {
      a.style[d] = e[d];
    }
    return c;
  };
  var Va = /alpha\([^)]*\)/i, Vb = /opacity\s*=\s*([^)]*)/, Wb = /^(none|table(?!-c[ea]).+)/, Fb = RegExp("^(" + Ja + ")(.*)$", "i"), Xb = RegExp("^([+-])=(" + Ja + ")", "i"), Yb = {position:"absolute", visibility:"hidden", display:"block"}, pb = {letterSpacing:0, fontWeight:400}, db = ["Webkit", "O", "Moz", "ms"];
  n.extend({cssHooks:{opacity:{get:function(a, b) {
    if (b) {
      var c = ra(a, "opacity");
      return "" === c ? "1" : c;
    }
  }}}, cssNumber:{columnCount:!0, fillOpacity:!0, fontWeight:!0, lineHeight:!0, opacity:!0, order:!0, orphans:!0, widows:!0, zIndex:!0, zoom:!0}, cssProps:{"float":B.cssFloat ? "cssFloat" : "styleFloat"}, style:function(a, b, c, m) {
    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
      var d, e, f, r = n.camelCase(b), u = a.style;
      if (b = n.cssProps[r] || (n.cssProps[r] = K(u, r)), f = n.cssHooks[b] || n.cssHooks[r], void 0 === c) {
        return f && "get" in f && void 0 !== (d = f.get(a, !1, m)) ? d : u[b];
      }
      if (e = typeof c, "string" === e && (d = Xb.exec(c)) && (c = (d[1] + 1) * d[2] + parseFloat(n.css(a, b)), e = "number"), null != c && c === c && ("number" !== e || n.cssNumber[r] || (c += "px"), B.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (u[b] = "inherit"), !(f && "set" in f && void 0 === (c = f.set(a, c, m))))) {
        try {
          u[b] = "", u[b] = c;
        } catch (g) {
        }
      }
    }
  }, css:function(a, b, c, m) {
    var d, e, f, r = n.camelCase(b);
    return b = n.cssProps[r] || (n.cssProps[r] = K(a.style, r)), f = n.cssHooks[b] || n.cssHooks[r], f && "get" in f && (e = f.get(a, !0, c)), void 0 === e && (e = ra(a, b, m)), "normal" === e && b in pb && (e = pb[b]), "" === c || c ? (d = parseFloat(e), !0 === c || n.isNumeric(d) ? d || 0 : e) : e;
  }});
  n.each(["height", "width"], function(a, b) {
    n.cssHooks[b] = {get:function(a, c, m) {
      return c ? 0 === a.offsetWidth && Wb.test(n.css(a, "display")) ? n.swap(a, Yb, function() {
        return W(a, b, m);
      }) : W(a, b, m) : void 0;
    }, set:function(a, c, m) {
      var d = m && qa(a);
      return D(a, c, m ? E(a, b, m, B.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, d), d) : 0);
    }};
  });
  B.opacity || (n.cssHooks.opacity = {get:function(a, b) {
    return Vb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
  }, set:function(a, b) {
    var c = a.style, m = a.currentStyle, d = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", e = m && m.filter || c.filter || "";
    c.zoom = 1;
    (1 <= b || "" === b) && "" === n.trim(e.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || m && !m.filter) || (c.filter = Va.test(e) ? e.replace(Va, d) : e + " " + d);
  }});
  n.cssHooks.marginRight = F(B.reliableMarginRight, function(a, b) {
    return b ? n.swap(a, {display:"inline-block"}, ra, [a, "marginRight"]) : void 0;
  });
  n.each({margin:"", padding:"", border:"Width"}, function(a, b) {
    n.cssHooks[a + b] = {expand:function(c) {
      var m = 0, d = {};
      for (c = "string" == typeof c ? c.split(" ") : [c];4 > m;m++) {
        d[a + pa[m] + b] = c[m] || c[m - 2] || c[0];
      }
      return d;
    }};
    ob.test(a) || (n.cssHooks[a + b].set = D);
  });
  n.fn.extend({css:function(a, b) {
    return la(this, function(a, b, c) {
      var m, d = {}, e = 0;
      if (n.isArray(b)) {
        c = qa(a);
        for (m = b.length;m > e;e++) {
          d[b[e]] = n.css(a, b[e], !1, c);
        }
        return d;
      }
      return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
    }, a, b, 1 < arguments.length);
  }, show:function() {
    return I(this, !0);
  }, hide:function() {
    return I(this);
  }, toggle:function(a) {
    return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
      Ba(this) ? n(this).show() : n(this).hide();
    });
  }});
  n.Tween = N;
  N.prototype = {constructor:N, init:function(a, b, c, m, d, e) {
    this.elem = a;
    this.prop = c;
    this.easing = d || "swing";
    this.options = b;
    this.start = this.now = this.cur();
    this.end = m;
    this.unit = e || (n.cssNumber[c] ? "" : "px");
  }, cur:function() {
    var a = N.propHooks[this.prop];
    return a && a.get ? a.get(this) : N.propHooks._default.get(this);
  }, run:function(a) {
    var b, c = N.propHooks[this.prop];
    return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : N.propHooks._default.set(this), this;
  }};
  N.prototype.init.prototype = N.prototype;
  N.propHooks = {_default:{get:function(a) {
    var b;
    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
  }, set:function(a) {
    n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
  }}};
  N.propHooks.scrollTop = N.propHooks.scrollLeft = {set:function(a) {
    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
  }};
  n.easing = {linear:function(a) {
    return a;
  }, swing:function(a) {
    return 0.5 - Math.cos(a * Math.PI) / 2;
  }};
  n.fx = N.prototype.init;
  n.fx.step = {};
  var ka, Ka, Zb = /^(?:toggle|show|hide)$/, qb = RegExp("^(?:([+-])=|)(" + Ja + ")([a-z%]*)$", "i"), $b = /queueHooks$/, Ha = [function(a, b, c) {
    var m, d, e, f, r, u, g, h = this, l = {}, y = a.style, z = a.nodeType && Ba(a), A = n._data(a, "fxshow");
    c.queue || (f = n._queueHooks(a, "fx"), null == f.unqueued && (f.unqueued = 0, r = f.empty.fire, f.empty.fire = function() {
      f.unqueued || r();
    }), f.unqueued++, h.always(function() {
      h.always(function() {
        f.unqueued--;
        n.queue(a, "fx").length || f.empty.fire();
      });
    }));
    1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [y.overflow, y.overflowX, y.overflowY], u = n.css(a, "display"), g = O(a.nodeName), "none" === u && (u = g), "inline" === u && "none" === n.css(a, "float") && (B.inlineBlockNeedsLayout && "inline" !== g ? y.zoom = 1 : y.display = "inline-block"));
    c.overflow && (y.overflow = "hidden", B.shrinkWrapBlocks() || h.always(function() {
      y.overflow = c.overflow[0];
      y.overflowX = c.overflow[1];
      y.overflowY = c.overflow[2];
    }));
    for (m in b) {
      if (d = b[m], Zb.exec(d)) {
        if (delete b[m], e = e || "toggle" === d, d === (z ? "hide" : "show")) {
          if ("show" !== d || !A || void 0 === A[m]) {
            continue;
          }
          z = !0;
        }
        l[m] = A && A[m] || n.style(a, m);
      }
    }
    if (!n.isEmptyObject(l)) {
      for (m in A ? "hidden" in A && (z = A.hidden) : A = n._data(a, "fxshow", {}), e && (A.hidden = !z), z ? n(a).show() : h.done(function() {
        n(a).hide();
      }), h.done(function() {
        var b;
        n._removeData(a, "fxshow");
        for (b in l) {
          n.style(a, b, l[b]);
        }
      }), l) {
        b = P(z ? A[m] : 0, m, h), m in A || (A[m] = b.start, z && (b.end = b.start, b.start = "width" === m || "height" === m ? 1 : 0));
      }
    }
  }], Ca = {"*":[function(a, b) {
    var c = this.createTween(a, b), m = c.cur(), d = qb.exec(b), e = d && d[3] || (n.cssNumber[a] ? "" : "px"), f = (n.cssNumber[a] || "px" !== e && +m) && qb.exec(n.css(c.elem, a)), r = 1, u = 20;
    if (f && f[3] !== e) {
      e = e || f[3];
      d = d || [];
      f = +m || 1;
      do {
        r = r || ".5", f /= r, n.style(c.elem, a, f + e);
      } while (r !== (r = c.cur() / m) && 1 !== r && --u);
    }
    return d && (f = c.start = +f || +m || 0, c.unit = e, c.end = d[1] ? f + (d[1] + 1) * d[2] : +d[2]), c;
  }]};
  n.Animation = n.extend(L, {tweener:function(a, b) {
    n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
    for (var c, m = 0, d = a.length;d > m;m++) {
      c = a[m], Ca[c] = Ca[c] || [], Ca[c].unshift(b);
    }
  }, prefilter:function(a, b) {
    b ? Ha.unshift(a) : Ha.push(a);
  }});
  n.speed = function(a, b, c) {
    var m = a && "object" == typeof a ? n.extend({}, a) : {complete:c || !c && b || n.isFunction(a) && a, duration:a, easing:c && b || b && !n.isFunction(b) && b};
    return m.duration = n.fx.off ? 0 : "number" == typeof m.duration ? m.duration : m.duration in n.fx.speeds ? n.fx.speeds[m.duration] : n.fx.speeds._default, (null == m.queue || !0 === m.queue) && (m.queue = "fx"), m.old = m.complete, m.complete = function() {
      n.isFunction(m.old) && m.old.call(this);
      m.queue && n.dequeue(this, m.queue);
    }, m;
  };
  n.fn.extend({fadeTo:function(a, b, c, m) {
    return this.filter(Ba).css("opacity", 0).show().end().animate({opacity:b}, a, c, m);
  }, animate:function(a, b, c, m) {
    var d = n.isEmptyObject(a), e = n.speed(b, c, m);
    b = function() {
      var b = L(this, n.extend({}, a), e);
      (d || n._data(this, "finish")) && b.stop(!0);
    };
    return b.finish = b, d || !1 === e.queue ? this.each(b) : this.queue(e.queue, b);
  }, stop:function(a, b, c) {
    var m = function(a) {
      var b = a.stop;
      delete a.stop;
      b(c);
    };
    return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
      var b = !0, d = null != a && a + "queueHooks", e = n.timers, f = n._data(this);
      if (d) {
        f[d] && f[d].stop && m(f[d]);
      } else {
        for (d in f) {
          f[d] && f[d].stop && $b.test(d) && m(f[d]);
        }
      }
      for (d = e.length;d--;) {
        e[d].elem !== this || null != a && e[d].queue !== a || (e[d].anim.stop(c), b = !1, e.splice(d, 1));
      }
      !b && c || n.dequeue(this, a);
    });
  }, finish:function(a) {
    return!1 !== a && (a = a || "fx"), this.each(function() {
      var b, c = n._data(this), m = c[a + "queue"];
      b = c[a + "queueHooks"];
      var d = n.timers, e = m ? m.length : 0;
      c.finish = !0;
      n.queue(this, a, []);
      b && b.stop && b.stop.call(this, !0);
      for (b = d.length;b--;) {
        d[b].elem === this && d[b].queue === a && (d[b].anim.stop(!0), d.splice(b, 1));
      }
      for (b = 0;e > b;b++) {
        m[b] && m[b].finish && m[b].finish.call(this);
      }
      delete c.finish;
    });
  }});
  n.each(["toggle", "show", "hide"], function(a, b) {
    var c = n.fn[b];
    n.fn[b] = function(a, m, d) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(U(b, !0), a, m, d);
    };
  });
  n.each({slideDown:U("show"), slideUp:U("hide"), slideToggle:U("toggle"), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}, fadeToggle:{opacity:"toggle"}}, function(a, b) {
    n.fn[a] = function(a, c, m) {
      return this.animate(b, a, c, m);
    };
  });
  n.timers = [];
  n.fx.tick = function() {
    var a, b = n.timers, c = 0;
    for (ka = n.now();c < b.length;c++) {
      a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    }
    b.length || n.fx.stop();
    ka = void 0;
  };
  n.fx.timer = function(a) {
    n.timers.push(a);
    a() ? n.fx.start() : n.timers.pop();
  };
  n.fx.interval = 13;
  n.fx.start = function() {
    Ka || (Ka = setInterval(n.fx.tick, n.fx.interval));
  };
  n.fx.stop = function() {
    clearInterval(Ka);
    Ka = null;
  };
  n.fx.speeds = {slow:600, fast:200, _default:400};
  n.fn.delay = function(a, b) {
    return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
      var m = setTimeout(b, a);
      c.stop = function() {
        clearTimeout(m);
      };
    });
  };
  (function() {
    var a, b, c, m, d = H.createElement("div");
    d.setAttribute("className", "t");
    d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    a = d.getElementsByTagName("a")[0];
    c = H.createElement("select");
    m = c.appendChild(H.createElement("option"));
    b = d.getElementsByTagName("input")[0];
    a.style.cssText = "top:1px";
    B.getSetAttribute = "t" !== d.className;
    B.style = /top/.test(a.getAttribute("style"));
    B.hrefNormalized = "/a" === a.getAttribute("href");
    B.checkOn = !!b.value;
    B.optSelected = m.selected;
    B.enctype = !!H.createElement("form").enctype;
    c.disabled = !0;
    B.optDisabled = !m.disabled;
    b = H.createElement("input");
    b.setAttribute("value", "");
    B.input = "" === b.getAttribute("value");
    b.value = "t";
    b.setAttribute("type", "radio");
    B.radioValue = "t" === b.value;
  })();
  var ac = /\r/g;
  n.fn.extend({val:function(a) {
    var b, c, m, d = this[0];
    if (arguments.length) {
      return m = n.isFunction(a), this.each(function(c) {
        var d;
        1 === this.nodeType && (d = m ? a.call(this, c, n(this).val()) : a, null == d ? d = "" : "number" == typeof d ? d += "" : n.isArray(d) && (d = n.map(d, function(a) {
          return null == a ? "" : a + "";
        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, d, "value") || (this.value = d));
      });
    }
    if (d) {
      return b = n.valHooks[d.type] || n.valHooks[d.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(d, "value")) ? c : (c = d.value, "string" == typeof c ? c.replace(ac, "") : null == c ? "" : c);
    }
  }});
  n.extend({valHooks:{option:{get:function(a) {
    var b = n.find.attr(a, "value");
    return null != b ? b : n.text(a);
  }}, select:{get:function(a) {
    for (var b, c = a.options, m = a.selectedIndex, d = "select-one" === a.type || 0 > m, e = d ? null : [], f = d ? m + 1 : c.length, r = 0 > m ? f : d ? m : 0;f > r;r++) {
      if (b = c[r], !(!b.selected && r !== m || (B.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && n.nodeName(b.parentNode, "optgroup"))) {
        if (a = n(b).val(), d) {
          return a;
        }
        e.push(a);
      }
    }
    return e;
  }, set:function(a, b) {
    for (var c, m, d = a.options, e = n.makeArray(b), f = d.length;f--;) {
      if (m = d[f], 0 <= n.inArray(n.valHooks.option.get(m), e)) {
        try {
          m.selected = c = !0;
        } catch (r) {
          m.scrollHeight;
        }
      } else {
        m.selected = !1;
      }
    }
    return c || (a.selectedIndex = -1), d;
  }}}});
  n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = {set:function(a, b) {
      return n.isArray(b) ? a.checked = 0 <= n.inArray(n(a).val(), b) : void 0;
    }};
    B.checkOn || (n.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });
  var ya, rb, ja = n.expr.attrHandle, Wa = /^(?:checked|selected)$/i, sa = B.getSetAttribute, La = B.input;
  n.fn.extend({attr:function(a, b) {
    return la(this, n.attr, a, b, 1 < arguments.length);
  }, removeAttr:function(a) {
    return this.each(function() {
      n.removeAttr(this, a);
    });
  }});
  n.extend({attr:function(a, b, c) {
    var m, d, e = a.nodeType;
    if (a && 3 !== e && 8 !== e && 2 !== e) {
      return typeof a.getAttribute === ga ? n.prop(a, b, c) : (1 === e && n.isXMLDoc(a) || (b = b.toLowerCase(), m = n.attrHooks[b] || (n.expr.match.bool.test(b) ? rb : ya)), void 0 === c ? m && "get" in m && null !== (d = m.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d) : null !== c ? m && "set" in m && void 0 !== (d = m.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
    }
  }, removeAttr:function(a, b) {
    var c, m, d = 0, e = b && b.match(ia);
    if (e && 1 === a.nodeType) {
      for (;c = e[d++];) {
        m = n.propFix[c] || c, n.expr.match.bool.test(c) ? La && sa || !Wa.test(c) ? a[m] = !1 : a[n.camelCase("default-" + c)] = a[m] = !1 : n.attr(a, c, ""), a.removeAttribute(sa ? c : m);
      }
    }
  }, attrHooks:{type:{set:function(a, b) {
    if (!B.radioValue && "radio" === b && n.nodeName(a, "input")) {
      var c = a.value;
      return a.setAttribute("type", b), c && (a.value = c), b;
    }
  }}}});
  rb = {set:function(a, b, c) {
    return!1 === b ? n.removeAttr(a, c) : La && sa || !Wa.test(c) ? a.setAttribute(!sa && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c;
  }};
  n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = ja[b] || n.find.attr;
    ja[b] = La && sa || !Wa.test(b) ? function(a, b, m) {
      var d, e;
      return m || (e = ja[b], ja[b] = d, d = null != c(a, b, m) ? b.toLowerCase() : null, ja[b] = e), d;
    } : function(a, b, c) {
      return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  });
  La && sa || (n.attrHooks.value = {set:function(a, b, c) {
    return n.nodeName(a, "input") ? void(a.defaultValue = b) : ya && ya.set(a, b, c);
  }});
  sa || (ya = {set:function(a, b, c) {
    var m = a.getAttributeNode(c);
    return m || a.setAttributeNode(m = a.ownerDocument.createAttribute(c)), m.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
  }}, ja.id = ja.name = ja.coords = function(a, b, c) {
    var m;
    return c ? void 0 : (m = a.getAttributeNode(b)) && "" !== m.value ? m.value : null;
  }, n.valHooks.button = {get:function(a, b) {
    var c = a.getAttributeNode(b);
    return c && c.specified ? c.value : void 0;
  }, set:ya.set}, n.attrHooks.contenteditable = {set:function(a, b, c) {
    ya.set(a, "" === b ? !1 : b, c);
  }}, n.each(["width", "height"], function(a, b) {
    n.attrHooks[b] = {set:function(a, c) {
      return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
    }};
  }));
  B.style || (n.attrHooks.style = {get:function(a) {
    return a.style.cssText || void 0;
  }, set:function(a, b) {
    return a.style.cssText = b + "";
  }});
  var bc = /^(?:input|select|textarea|button|object)$/i, cc = /^(?:a|area)$/i;
  n.fn.extend({prop:function(a, b) {
    return la(this, n.prop, a, b, 1 < arguments.length);
  }, removeProp:function(a) {
    return a = n.propFix[a] || a, this.each(function() {
      try {
        this[a] = void 0, delete this[a];
      } catch (b) {
      }
    });
  }});
  n.extend({propFix:{"for":"htmlFor", "class":"className"}, prop:function(a, b, c) {
    var m, d, e, f = a.nodeType;
    if (a && 3 !== f && 8 !== f && 2 !== f) {
      return e = 1 !== f || !n.isXMLDoc(a), e && (b = n.propFix[b] || b, d = n.propHooks[b]), void 0 !== c ? d && "set" in d && void 0 !== (m = d.set(a, c, b)) ? m : a[b] = c : d && "get" in d && null !== (m = d.get(a, b)) ? m : a[b];
    }
  }, propHooks:{tabIndex:{get:function(a) {
    var b = n.find.attr(a, "tabindex");
    return b ? parseInt(b, 10) : bc.test(a.nodeName) || cc.test(a.nodeName) && a.href ? 0 : -1;
  }}}});
  B.hrefNormalized || n.each(["href", "src"], function(a, b) {
    n.propHooks[b] = {get:function(a) {
      return a.getAttribute(b, 4);
    }};
  });
  B.optSelected || (n.propHooks.selected = {get:function(a) {
    a = a.parentNode;
    return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null;
  }});
  n.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
    n.propFix[this.toLowerCase()] = this;
  });
  B.enctype || (n.propFix.enctype = "encoding");
  var Xa = /[\t\r\n\f]/g;
  n.fn.extend({addClass:function(a) {
    var b, c, m, d, e, f = 0, r = this.length;
    b = "string" == typeof a && a;
    if (n.isFunction(a)) {
      return this.each(function(b) {
        n(this).addClass(a.call(this, b, this.className));
      });
    }
    if (b) {
      for (b = (a || "").match(ia) || [];r > f;f++) {
        if (c = this[f], m = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Xa, " ") : " ")) {
          for (e = 0;d = b[e++];) {
            0 > m.indexOf(" " + d + " ") && (m += d + " ");
          }
          m = n.trim(m);
          c.className !== m && (c.className = m);
        }
      }
    }
    return this;
  }, removeClass:function(a) {
    var b, c, m, d, e, f = 0, r = this.length;
    b = 0 === arguments.length || "string" == typeof a && a;
    if (n.isFunction(a)) {
      return this.each(function(b) {
        n(this).removeClass(a.call(this, b, this.className));
      });
    }
    if (b) {
      for (b = (a || "").match(ia) || [];r > f;f++) {
        if (c = this[f], m = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Xa, " ") : "")) {
          for (e = 0;d = b[e++];) {
            for (;0 <= m.indexOf(" " + d + " ");) {
              m = m.replace(" " + d + " ", " ");
            }
          }
          m = a ? n.trim(m) : "";
          c.className !== m && (c.className = m);
        }
      }
    }
    return this;
  }, toggleClass:function(a, b) {
    var c = typeof a;
    return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
      n(this).toggleClass(a.call(this, c, this.className, b), b);
    } : function() {
      if ("string" === c) {
        for (var b, m = 0, d = n(this), e = a.match(ia) || [];b = e[m++];) {
          d.hasClass(b) ? d.removeClass(b) : d.addClass(b);
        }
      } else {
        (c === ga || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : n._data(this, "__className__") || "");
      }
    });
  }, hasClass:function(a) {
    a = " " + a + " ";
    for (var b = 0, c = this.length;c > b;b++) {
      if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Xa, " ").indexOf(a)) {
        return!0;
      }
    }
    return!1;
  }});
  n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    n.fn[b] = function(a, c) {
      return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b);
    };
  });
  n.fn.extend({hover:function(a, b) {
    return this.mouseenter(a).mouseleave(b || a);
  }, bind:function(a, b, c) {
    return this.on(a, null, b, c);
  }, unbind:function(a, b) {
    return this.off(a, null, b);
  }, delegate:function(a, b, c, m) {
    return this.on(b, a, c, m);
  }, undelegate:function(a, b, c) {
    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
  }});
  var Ya = n.now(), Za = /\?/, dc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON = function(b) {
    if (a.JSON && a.JSON.parse) {
      return a.JSON.parse(b + "");
    }
    var c, m = null, d = n.trim(b + "");
    return d && !n.trim(d.replace(dc, function(a, b, d, e) {
      return c && b && (m = 0), 0 === m ? a : (c = d || b, m += !e - !d, "");
    })) ? Function("return " + d)() : n.error("Invalid JSON: " + b);
  };
  n.parseXML = function(b) {
    var c, m;
    if (!b || "string" != typeof b) {
      return null;
    }
    try {
      a.DOMParser ? (m = new DOMParser, c = m.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (d) {
      c = void 0;
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };
  var ta, oa, ec = /#.*$/, sb = /([?&])_=[^&]*/, fc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, gc = /^(?:GET|HEAD)$/, hc = /^\/\//, ub = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, vb = {}, Qa = {}, wb = "*/".concat("*");
  try {
    oa = location.href;
  } catch (oc) {
    oa = H.createElement("a"), oa.href = "", oa = oa.href;
  }
  ta = ub.exec(oa.toLowerCase()) || [];
  n.extend({active:0, lastModified:{}, etag:{}, ajaxSettings:{url:oa, type:"GET", isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ta[1]), global:!0, processData:!0, async:!0, contentType:"application/x-www-form-urlencoded; charset=UTF-8", accepts:{"*":wb, text:"text/plain", html:"text/html", xml:"application/xml, text/xml", json:"application/json, text/javascript"}, contents:{xml:/xml/, html:/html/, json:/json/}, responseFields:{xml:"responseXML", text:"responseText", json:"responseJSON"}, 
  converters:{"* text":String, "text html":!0, "text json":n.parseJSON, "text xml":n.parseXML}, flatOptions:{url:!0, context:!0}}, ajaxSetup:function(a, b) {
    return b ? ca(ca(a, n.ajaxSettings), b) : ca(n.ajaxSettings, a);
  }, ajaxPrefilter:R(vb), ajaxTransport:R(Qa), ajax:function(a, b) {
    function c(a, b, m, d) {
      var h, s, C, v, w = b;
      if (2 !== J) {
        J = 2;
        r && clearTimeout(r);
        g = void 0;
        f = d || "";
        t.readyState = 0 < a ? 4 : 0;
        d = 200 <= a && 300 > a || 304 === a;
        if (m) {
          C = l;
          for (var O = t, E, x, M, F, D = C.contents, K = C.dataTypes;"*" === K[0];) {
            K.shift(), void 0 === x && (x = C.mimeType || O.getResponseHeader("Content-Type"));
          }
          if (x) {
            for (F in D) {
              if (D[F] && D[F].test(x)) {
                K.unshift(F);
                break;
              }
            }
          }
          if (K[0] in m) {
            M = K[0];
          } else {
            for (F in m) {
              if (!K[0] || C.converters[F + " " + K[0]]) {
                M = F;
                break;
              }
              E || (E = F);
            }
            M = M || E;
          }
          C = M ? (M !== K[0] && K.unshift(M), m[M]) : void 0;
        }
        var W;
        a: {
          m = l;
          E = C;
          x = t;
          M = d;
          var I, N, G;
          C = {};
          O = m.dataTypes.slice();
          if (O[1]) {
            for (I in m.converters) {
              C[I.toLowerCase()] = m.converters[I];
            }
          }
          for (F = O.shift();F;) {
            if (m.responseFields[F] && (x[m.responseFields[F]] = E), !G && M && m.dataFilter && (E = m.dataFilter(E, m.dataType)), G = F, F = O.shift()) {
              if ("*" === F) {
                F = G;
              } else {
                if ("*" !== G && G !== F) {
                  if (I = C[G + " " + F] || C["* " + F], !I) {
                    for (W in C) {
                      if (N = W.split(" "), N[1] === F && (I = C[G + " " + N[0]] || C["* " + N[0]])) {
                        !0 === I ? I = C[W] : !0 !== C[W] && (F = N[0], O.unshift(N[1]));
                        break;
                      }
                    }
                  }
                  if (!0 !== I) {
                    if (I && m["throws"]) {
                      E = I(E);
                    } else {
                      try {
                        E = I(E);
                      } catch (Fa) {
                        W = {state:"parsererror", error:I ? Fa : "No conversion from " + G + " to " + F};
                        break a;
                      }
                    }
                  }
                }
              }
            }
          }
          W = {state:"success", data:E};
        }
        C = W;
        d ? (l.ifModified && (v = t.getResponseHeader("Last-Modified"), v && (n.lastModified[e] = v), v = t.getResponseHeader("etag"), v && (n.etag[e] = v)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = C.state, h = C.data, s = C.error, d = !s)) : (s = w, (a || !w) && (w = "error", 0 > a && (a = 0)));
        t.status = a;
        t.statusText = (b || w) + "";
        d ? A.resolveWith(y, [h, w, t]) : A.rejectWith(y, [t, w, s]);
        t.statusCode(q);
        q = void 0;
        u && z.trigger(d ? "ajaxSuccess" : "ajaxError", [t, l, d ? h : s]);
        p.fireWith(y, [t, w]);
        u && (z.trigger("ajaxComplete", [t, l]), --n.active || n.event.trigger("ajaxStop"));
      }
    }
    "object" == typeof a && (b = a, a = void 0);
    b = b || {};
    var m, d, e, f, r, u, g, h, l = n.ajaxSetup({}, b), y = l.context || l, z = l.context && (y.nodeType || y.jquery) ? n(y) : n.event, A = n.Deferred(), p = n.Callbacks("once memory"), q = l.statusCode || {}, s = {}, C = {}, J = 0, v = "canceled", t = {readyState:0, getResponseHeader:function(a) {
      var b;
      if (2 === J) {
        if (!h) {
          for (h = {};b = fc.exec(f);) {
            h[b[1].toLowerCase()] = b[2];
          }
        }
        b = h[a.toLowerCase()];
      }
      return null == b ? null : b;
    }, getAllResponseHeaders:function() {
      return 2 === J ? f : null;
    }, setRequestHeader:function(a, b) {
      var c = a.toLowerCase();
      return J || (a = C[c] = C[c] || a, s[a] = b), this;
    }, overrideMimeType:function(a) {
      return J || (l.mimeType = a), this;
    }, statusCode:function(a) {
      var b;
      if (a) {
        if (2 > J) {
          for (b in a) {
            q[b] = [q[b], a[b]];
          }
        } else {
          t.always(a[t.status]);
        }
      }
      return this;
    }, abort:function(a) {
      a = a || v;
      return g && g.abort(a), c(0, a), this;
    }};
    if (A.promise(t).complete = p.add, t.success = t.done, t.error = t.fail, l.url = ((a || l.url || oa) + "").replace(ec, "").replace(hc, ta[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(ia) || [""], null == l.crossDomain && (m = ub.exec(l.url.toLowerCase()), l.crossDomain = !(!m || m[1] === ta[1] && m[2] === ta[2] && (m[3] || ("http:" === m[1] ? "80" : "443")) === (ta[3] || ("http:" === ta[1] ? "80" : "443")))), l.data && 
    l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), S(vb, l, b, t), 2 === J) {
      return t;
    }
    (u = l.global) && 0 === n.active++ && n.event.trigger("ajaxStart");
    l.type = l.type.toUpperCase();
    l.hasContent = !gc.test(l.type);
    e = l.url;
    l.hasContent || (l.data && (e = l.url += (Za.test(e) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = sb.test(e) ? e.replace(sb, "$1_=" + Ya++) : e + (Za.test(e) ? "&" : "?") + "_=" + Ya++));
    l.ifModified && (n.lastModified[e] && t.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && t.setRequestHeader("If-None-Match", n.etag[e]));
    (l.data && l.hasContent && !1 !== l.contentType || b.contentType) && t.setRequestHeader("Content-Type", l.contentType);
    t.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + wb + "; q=0.01" : "") : l.accepts["*"]);
    for (d in l.headers) {
      t.setRequestHeader(d, l.headers[d]);
    }
    if (l.beforeSend && (!1 === l.beforeSend.call(y, t, l) || 2 === J)) {
      return t.abort();
    }
    v = "abort";
    for (d in{success:1, error:1, complete:1}) {
      t[d](l[d]);
    }
    if (g = S(Qa, l, b, t)) {
      t.readyState = 1;
      u && z.trigger("ajaxSend", [t, l]);
      l.async && 0 < l.timeout && (r = setTimeout(function() {
        t.abort("timeout");
      }, l.timeout));
      try {
        J = 1, g.send(s, c);
      } catch (w) {
        if (!(2 > J)) {
          throw w;
        }
        c(-1, w);
      }
    } else {
      c(-1, "No Transport");
    }
    return t;
  }, getJSON:function(a, b, c) {
    return n.get(a, b, c, "json");
  }, getScript:function(a, b) {
    return n.get(a, void 0, b, "script");
  }});
  n.each(["get", "post"], function(a, b) {
    n[b] = function(a, c, m, d) {
      return n.isFunction(c) && (d = d || m, m = c, c = void 0), n.ajax({url:a, type:b, dataType:d, data:c, success:m});
    };
  });
  n.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
    n.fn[b] = function(a) {
      return this.on(b, a);
    };
  });
  n._evalUrl = function(a) {
    return n.ajax({url:a, type:"GET", dataType:"script", async:!1, global:!1, "throws":!0});
  };
  n.fn.extend({wrapAll:function(a) {
    if (n.isFunction(a)) {
      return this.each(function(b) {
        n(this).wrapAll(a.call(this, b));
      });
    }
    if (this[0]) {
      var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
      this[0].parentNode && b.insertBefore(this[0]);
      b.map(function() {
        for (var a = this;a.firstChild && 1 === a.firstChild.nodeType;) {
          a = a.firstChild;
        }
        return a;
      }).append(this);
    }
    return this;
  }, wrapInner:function(a) {
    return this.each(n.isFunction(a) ? function(b) {
      n(this).wrapInner(a.call(this, b));
    } : function() {
      var b = n(this), c = b.contents();
      c.length ? c.wrapAll(a) : b.append(a);
    });
  }, wrap:function(a) {
    var b = n.isFunction(a);
    return this.each(function(c) {
      n(this).wrapAll(b ? a.call(this, c) : a);
    });
  }, unwrap:function() {
    return this.parent().each(function() {
      n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
    }).end();
  }});
  n.expr.filters.hidden = function(a) {
    return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !B.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"));
  };
  n.expr.filters.visible = function(a) {
    return!n.expr.filters.hidden(a);
  };
  var ic = /%20/g, Gb = /\[\]$/, xb = /\r?\n/g, jc = /^(?:submit|button|image|reset|file)$/i, kc = /^(?:input|select|textarea|keygen)/i;
  n.param = function(a, b) {
    var c, m = [], d = function(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b;
      m[m.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) {
      n.each(a, function() {
        d(this.name, this.value);
      });
    } else {
      for (c in a) {
        Y(c, a[c], b, d);
      }
    }
    return m.join("&").replace(ic, "+");
  };
  n.fn.extend({serialize:function() {
    return n.param(this.serializeArray());
  }, serializeArray:function() {
    return this.map(function() {
      var a = n.prop(this, "elements");
      return a ? n.makeArray(a) : this;
    }).filter(function() {
      var a = this.type;
      return this.name && !n(this).is(":disabled") && kc.test(this.nodeName) && !jc.test(a) && (this.checked || !Pa.test(a));
    }).map(function(a, b) {
      var c = n(this).val();
      return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
        return{name:b.name, value:a.replace(xb, "\r\n")};
      }) : {name:b.name, value:c.replace(xb, "\r\n")};
    }).get();
  }});
  n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
    var b;
    if (!(b = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && na())) {
      a: {
        try {
          b = new a.ActiveXObject("Microsoft.XMLHTTP");
          break a;
        } catch (c) {
        }
        b = void 0;
      }
    }
    return b;
  } : na;
  var lc = 0, Ma = {}, Na = n.ajaxSettings.xhr();
  a.ActiveXObject && n(a).on("unload", function() {
    for (var a in Ma) {
      Ma[a](void 0, !0);
    }
  });
  B.cors = !!Na && "withCredentials" in Na;
  (Na = B.ajax = !!Na) && n.ajaxTransport(function(a) {
    if (!a.crossDomain || B.cors) {
      var b;
      return{send:function(c, m) {
        var d, e = a.xhr(), f = ++lc;
        if (e.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
          for (d in a.xhrFields) {
            e[d] = a.xhrFields[d];
          }
        }
        a.mimeType && e.overrideMimeType && e.overrideMimeType(a.mimeType);
        a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
        for (d in c) {
          void 0 !== c[d] && e.setRequestHeader(d, c[d] + "");
        }
        e.send(a.hasContent && a.data || null);
        b = function(c, d) {
          var r, u, g;
          if (b && (d || 4 === e.readyState)) {
            if (delete Ma[f], b = void 0, e.onreadystatechange = n.noop, d) {
              4 !== e.readyState && e.abort();
            } else {
              g = {};
              r = e.status;
              "string" == typeof e.responseText && (g.text = e.responseText);
              try {
                u = e.statusText;
              } catch (h) {
                u = "";
              }
              r || !a.isLocal || a.crossDomain ? 1223 === r && (r = 204) : r = g.text ? 200 : 404;
            }
          }
          g && m(r, u, g, e.getAllResponseHeaders());
        };
        a.async ? 4 === e.readyState ? setTimeout(b) : e.onreadystatechange = Ma[f] = b : b();
      }, abort:function() {
        b && b(void 0, !0);
      }};
    }
  });
  n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents:{script:/(?:java|ecma)script/}, converters:{"text script":function(a) {
    return n.globalEval(a), a;
  }}});
  n.ajaxPrefilter("script", function(a) {
    void 0 === a.cache && (a.cache = !1);
    a.crossDomain && (a.type = "GET", a.global = !1);
  });
  n.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c = H.head || n("head")[0] || H.documentElement;
      return{send:function(m, d) {
        b = H.createElement("script");
        b.async = !0;
        a.scriptCharset && (b.charset = a.scriptCharset);
        b.src = a.url;
        b.onload = b.onreadystatechange = function(a, c) {
          (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || d(200, "success"));
        };
        c.insertBefore(b, c.firstChild);
      }, abort:function() {
        b && b.onload(void 0, !0);
      }};
    }
  });
  var yb = [], $a = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({jsonp:"callback", jsonpCallback:function() {
    var a = yb.pop() || n.expando + "_" + Ya++;
    return this[a] = !0, a;
  }});
  n.ajaxPrefilter("json jsonp", function(b, c, m) {
    var d, e, f, r = !1 !== b.jsonp && ($a.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && $a.test(b.data) && "data");
    return r || "jsonp" === b.dataTypes[0] ? (d = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, r ? b[r] = b[r].replace($a, "$1" + d) : !1 !== b.jsonp && (b.url += (Za.test(b.url) ? "&" : "?") + b.jsonp + "=" + d), b.converters["script json"] = function() {
      return f || n.error(d + " was not called"), f[0];
    }, b.dataTypes[0] = "json", e = a[d], a[d] = function() {
      f = arguments;
    }, m.always(function() {
      a[d] = e;
      b[d] && (b.jsonpCallback = c.jsonpCallback, yb.push(d));
      f && n.isFunction(e) && e(f[0]);
      f = e = void 0;
    }), "script") : void 0;
  });
  n.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a) {
      return null;
    }
    "boolean" == typeof b && (c = b, b = !1);
    b = b || H;
    var m = fb.exec(a);
    c = !c && [];
    return m ? [b.createElement(m[1])] : (m = n.buildFragment([a], b, c), c && c.length && n(c).remove(), n.merge([], m.childNodes));
  };
  var zb = n.fn.load;
  n.fn.load = function(a, b, c) {
    if ("string" != typeof a && zb) {
      return zb.apply(this, arguments);
    }
    var m, d, e, f = this, r = a.indexOf(" ");
    return 0 <= r && (m = a.slice(r, a.length), a = a.slice(0, r)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), 0 < f.length && n.ajax({url:a, type:e, dataType:"html", data:b}).done(function(a) {
      d = arguments;
      f.html(m ? n("<div>").append(n.parseHTML(a)).find(m) : a);
    }).complete(c && function(a, b) {
      f.each(c, d || [a.responseText, b, a]);
    }), this;
  };
  n.expr.filters.animated = function(a) {
    return n.grep(n.timers, function(b) {
      return a === b.elem;
    }).length;
  };
  var Ab = a.document.documentElement;
  n.offset = {setOffset:function(a, b, c) {
    var m, d, e, f, r, u, g = n.css(a, "position"), h = n(a), l = {};
    "static" === g && (a.style.position = "relative");
    r = h.offset();
    e = n.css(a, "top");
    u = n.css(a, "left");
    ("absolute" === g || "fixed" === g) && -1 < n.inArray("auto", [e, u]) ? (m = h.position(), f = m.top, d = m.left) : (f = parseFloat(e) || 0, d = parseFloat(u) || 0);
    n.isFunction(b) && (b = b.call(a, c, r));
    null != b.top && (l.top = b.top - r.top + f);
    null != b.left && (l.left = b.left - r.left + d);
    "using" in b ? b.using.call(a, l) : h.css(l);
  }};
  n.fn.extend({offset:function(a) {
    if (arguments.length) {
      return void 0 === a ? this : this.each(function(b) {
        n.offset.setOffset(this, a, b);
      });
    }
    var b, c, m = {top:0, left:0}, d = this[0], e = d && d.ownerDocument;
    if (e) {
      return b = e.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== ga && (m = d.getBoundingClientRect()), c = Z(e), {top:m.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left:m.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)}) : m;
    }
  }, position:function() {
    if (this[0]) {
      var a, b, c = {top:0, left:0}, m = this[0];
      return "fixed" === n.css(m, "position") ? b = m.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {top:b.top - c.top - n.css(m, "marginTop", !0), left:b.left - c.left - n.css(m, "marginLeft", !0)};
    }
  }, offsetParent:function() {
    return this.map(function() {
      for (var a = this.offsetParent || Ab;a && !n.nodeName(a, "html") && "static" === n.css(a, "position");) {
        a = a.offsetParent;
      }
      return a || Ab;
    });
  }});
  n.each({scrollLeft:"pageXOffset", scrollTop:"pageYOffset"}, function(a, b) {
    var c = /Y/.test(b);
    n.fn[a] = function(m) {
      return la(this, function(a, m, d) {
        var e = Z(a);
        return void 0 === d ? e ? b in e ? e[b] : e.document.documentElement[m] : a[m] : void(e ? e.scrollTo(c ? n(e).scrollLeft() : d, c ? d : n(e).scrollTop()) : a[m] = d);
      }, a, m, arguments.length, null);
    };
  });
  n.each(["top", "left"], function(a, b) {
    n.cssHooks[b] = F(B.pixelPosition, function(a, c) {
      return c ? (c = ra(a, b), Ga.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  });
  n.each({Height:"height", Width:"width"}, function(a, b) {
    n.each({padding:"inner" + a, content:b, "":"outer" + a}, function(c, m) {
      n.fn[m] = function(m, d) {
        var e = arguments.length && (c || "boolean" != typeof m), f = c || (!0 === m || !0 === d ? "margin" : "border");
        return la(this, function(b, c, m) {
          var d;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (d = b.documentElement, Math.max(b.body["scroll" + a], d["scroll" + a], b.body["offset" + a], d["offset" + a], d["client" + a])) : void 0 === m ? n.css(b, c, f) : n.style(b, c, m, f);
        }, b, e ? m : void 0, e, null);
      };
    });
  });
  n.fn.size = function() {
    return this.length;
  };
  n.fn.andSelf = n.fn.addBack;
  "function" == typeof define && define.amd && define("jquery", [], function() {
    return n;
  });
  var mc = a.jQuery, nc = a.$;
  return n.noConflict = function(b) {
    return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n;
  }, typeof b === ga && (a.jQuery = a.$ = n), n;
});
(function() {
  var a;
  a = function(a) {
    var c, d;
    return c = !1, a(function() {
      var e;
      return e = (document.body || document.documentElement).style, c = void 0 !== e.animation || void 0 !== e.WebkitAnimation || void 0 !== e.MozAnimation || void 0 !== e.MsAnimation || void 0 !== e.OAnimation, a(window).bind("keyup.vex", function(a) {
        return 27 === a.keyCode ? d.closeByEscape() : void 0;
      });
    }), d = {globalID:1, animationEndEvent:"animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend", baseClassNames:{vex:"vex", content:"vex-content", overlay:"vex-overlay", close:"vex-close", closing:"vex-closing", open:"vex-open"}, defaultOptions:{content:"", showCloseButton:!0, escapeButtonCloses:!0, overlayClosesOnClick:!0, appendLocation:"body", className:"", css:{}, overlayClassName:"", overlayCSS:{}, contentClassName:"", contentCSS:{}, closeClassName:"", closeCSS:{}}, 
    open:function(c) {
      return c = a.extend({}, d.defaultOptions, c), c.id = d.globalID, d.globalID += 1, c.$vex = a("<div>").addClass(d.baseClassNames.vex).addClass(c.className).css(c.css).data({vex:c}), c.$vexOverlay = a("<div>").addClass(d.baseClassNames.overlay).addClass(c.overlayClassName).css(c.overlayCSS).data({vex:c}), c.overlayClosesOnClick && c.$vexOverlay.bind("click.vex", function(c) {
        return c.target === this ? d.close(a(this).data().vex.id) : void 0;
      }), c.$vex.append(c.$vexOverlay), c.$vexContent = a("<div>").addClass(d.baseClassNames.content).addClass(c.contentClassName).css(c.contentCSS).append(c.content).data({vex:c}), c.$vex.append(c.$vexContent), c.showCloseButton && (c.$closeButton = a("<div>").addClass(d.baseClassNames.close).addClass(c.closeClassName).css(c.closeCSS).data({vex:c}).bind("click.vex", function() {
        return d.close(a(this).data().vex.id);
      }), c.$vexContent.append(c.$closeButton)), a(c.appendLocation).append(c.$vex), d.setupBodyClassName(c.$vex), c.afterOpen && c.afterOpen(c.$vexContent, c), setTimeout(function() {
        return c.$vexContent.trigger("vexOpen", c);
      }, 0), c.$vexContent;
    }, getAllVexes:function() {
      return a("." + d.baseClassNames.vex + ':not(".' + d.baseClassNames.closing + '") .' + d.baseClassNames.content);
    }, getVexByID:function(c) {
      return d.getAllVexes().filter(function() {
        return a(this).data().vex.id === c;
      });
    }, close:function(a) {
      var b;
      if (!a) {
        if (b = d.getAllVexes().last(), !b.length) {
          return!1;
        }
        a = b.data().vex.id;
      }
      return d.closeByID(a);
    }, closeAll:function() {
      var c;
      return c = d.getAllVexes().map(function() {
        return a(this).data().vex.id;
      }).toArray(), null != c && c.length ? (a.each(c.reverse(), function(a, b) {
        return d.closeByID(b);
      }), !0) : !1;
    }, closeByID:function(e) {
      var f, g, l, h, p;
      return g = d.getVexByID(e), g.length ? (f = g.data().vex.$vex, p = a.extend({}, g.data().vex), l = function() {
        return p.beforeClose ? p.beforeClose(g, p) : void 0;
      }, h = function() {
        return g.trigger("vexClose", p), f.remove(), p.afterClose ? p.afterClose(g, p) : void 0;
      }, c ? (l(), f.unbind(d.animationEndEvent).bind(d.animationEndEvent, function() {
        return h();
      }).addClass(d.baseClassNames.closing)) : (l(), h()), !0) : void 0;
    }, closeByEscape:function() {
      var c, f, g;
      return g = d.getAllVexes().map(function() {
        return a(this).data().vex.id;
      }).toArray(), null != g && g.length ? (f = Math.max.apply(Math, g), c = d.getVexByID(f), !0 !== c.data().vex.escapeButtonCloses ? !1 : d.closeByID(f)) : !1;
    }, setupBodyClassName:function(c) {
      return c.bind("vexOpen.vex", function() {
        return a("body").addClass(d.baseClassNames.open);
      }).bind("vexClose.vex", function() {
        return d.getAllVexes().length ? void 0 : a("body").removeClass(d.baseClassNames.open);
      });
    }, hideLoading:function() {
      return a(".vex-loading-spinner").remove();
    }, showLoading:function() {
      return d.hideLoading(), a("body").append('<div class="vex-loading-spinner ' + d.defaultOptions.className + '"></div>');
    }};
  };
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : window.vex = a(jQuery);
}).call(this);
(function() {
  var a;
  a = function(a, c) {
    var d, e;
    return null == c ? a.error("Vex is required to use vex.dialog") : (d = function(c) {
      var d;
      return d = {}, a.each(c.serializeArray(), function() {
        return d[this.name] ? (d[this.name].push || (d[this.name] = [d[this.name]]), d[this.name].push(this.value || "")) : d[this.name] = this.value || "";
      }), d;
    }, e = {}, e.buttons = {YES:{text:"OK", type:"submit", className:"vex-dialog-button-primary"}, NO:{text:"Cancel", type:"button", className:"vex-dialog-button-secondary", click:function(a) {
      return a.data().vex.value = !1, c.close(a.data().vex.id);
    }}}, e.defaultOptions = {callback:function() {
    }, afterOpen:function() {
    }, message:"Message", input:'<input name="vex" type="hidden" value="_vex-empty-value" />', value:!1, buttons:[e.buttons.YES, e.buttons.NO], showCloseButton:!1, onSubmit:function(f) {
      var g, l;
      return g = a(this), l = g.parent(), f.preventDefault(), f.stopPropagation(), l.data().vex.value = e.getFormValueOnSubmit(d(g)), c.close(l.data().vex.id);
    }, focusFirstInput:!0}, e.defaultAlertOptions = {message:"Alert", buttons:[e.buttons.YES]}, e.defaultConfirmOptions = {message:"Confirm"}, e.open = function(d) {
      var g;
      return d = a.extend({}, c.defaultOptions, e.defaultOptions, d), d.content = e.buildDialogForm(d), d.beforeClose = function(a) {
        return d.callback(a.data().vex.value);
      }, g = c.open(d), d.focusFirstInput && g.find('input[type="submit"], textarea, input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="email"], input[type="month"], input[type="number"], input[type="password"], input[type="search"], input[type="tel"], input[type="text"], input[type="time"], input[type="url"], input[type="week"]').first().focus(), g;
    }, e.alert = function(c) {
      return "string" == typeof c && (c = {message:c}), c = a.extend({}, e.defaultAlertOptions, c), e.open(c);
    }, e.confirm = function(c) {
      return "string" == typeof c ? a.error("dialog.confirm(options) requires options.callback.") : (c = a.extend({}, e.defaultConfirmOptions, c), e.open(c));
    }, e.prompt = function(c) {
      var d;
      return "string" == typeof c ? a.error("dialog.prompt(options) requires options.callback.") : (d = {message:'<label for="vex">' + (c.label || "Prompt:") + "</label>", input:'<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="' + (c.placeholder || "") + '"  value="' + (c.value || "") + '" />'}, c = a.extend({}, d, c), e.open(c));
    }, e.buildDialogForm = function(c) {
      var d, l, h;
      return d = a('<form class="vex-dialog-form" />'), h = a('<div class="vex-dialog-message" />'), l = a('<div class="vex-dialog-input" />'), d.append(h.append(c.message)).append(l.append(c.input)).append(e.buttonsToDOM(c.buttons)).bind("submit.vex", c.onSubmit), d;
    }, e.getFormValueOnSubmit = function(a) {
      return a.vex || "" === a.vex ? "_vex-empty-value" === a.vex ? !0 : a.vex : a;
    }, e.buttonsToDOM = function(d) {
      var e;
      return e = a('<div class="vex-dialog-buttons" />'), a.each(d, function(l, h) {
        return e.append(a('<input type="' + h.type + '" />').val(h.text).addClass(h.className + " vex-dialog-button " + (0 === l ? "vex-first " : "") + (l === d.length - 1 ? "vex-last " : "")).bind("click.vex", function(d) {
          return h.click ? h.click(a(this).parents("." + c.baseClassNames.content), d) : void 0;
        }));
      }), e;
    }, e);
  };
  "function" == typeof define && define.amd ? define(["jquery", "vex"], a) : "object" == typeof exports ? module.exports = a(require("jquery"), require("vex")) : window.vex.dialog = a(window.jQuery, window.vex);
}).call(this);
(function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function(a) {
  function b(b, d) {
    var e, f, g, h = b.nodeName.toLowerCase();
    return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap='#" + f + "']")[0], !!g && c(g)) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b);
  }
  function c(b) {
    return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
      return "hidden" === a.css(this, "visibility");
    }).length;
  }
  function d(a) {
    for (var b, c;a.length && a[0] !== document;) {
      if (b = a.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c)) {
        return c;
      }
      a = a.parent();
    }
    return 0;
  }
  function e() {
    this._curInst = null;
    this._keyEvent = !1;
    this._disabledInputs = [];
    this._inDialog = this._datepickerShowing = !1;
    this._mainDivId = "ui-datepicker-div";
    this._inlineClass = "ui-datepicker-inline";
    this._appendClass = "ui-datepicker-append";
    this._triggerClass = "ui-datepicker-trigger";
    this._dialogClass = "ui-datepicker-dialog";
    this._disableClass = "ui-datepicker-disabled";
    this._unselectableClass = "ui-datepicker-unselectable";
    this._currentClass = "ui-datepicker-current-day";
    this._dayOverClass = "ui-datepicker-days-cell-over";
    this.regional = [];
    this.regional[""] = {closeText:"Done", prevText:"Prev", nextText:"Next", currentText:"Today", monthNames:"January February March April May June July August September October November December".split(" "), monthNamesShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), dayNames:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), dayNamesShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "), dayNamesMin:"Su Mo Tu We Th Fr Sa".split(" "), weekHeader:"Wk", dateFormat:"mm/dd/yy", 
    firstDay:0, isRTL:!1, showMonthAfterYear:!1, yearSuffix:""};
    this._defaults = {showOn:"focus", showAnim:"fadeIn", showOptions:{}, defaultDate:null, appendText:"", buttonText:"...", buttonImage:"", buttonImageOnly:!1, hideIfNoPrevNext:!1, navigationAsDateFormat:!1, gotoCurrent:!1, changeMonth:!1, changeYear:!1, yearRange:"c-10:c+10", showOtherMonths:!1, selectOtherMonths:!1, showWeek:!1, calculateWeek:this.iso8601Week, shortYearCutoff:"+10", minDate:null, maxDate:null, duration:"fast", beforeShowDay:null, beforeShow:null, onSelect:null, onChangeMonthYear:null, 
    onClose:null, numberOfMonths:1, showCurrentAtPos:0, stepMonths:1, stepBigMonths:12, altField:"", altFormat:"", constrainInput:!0, showButtonPanel:!1, autoSize:!1, disabled:!1};
    a.extend(this._defaults, this.regional[""]);
    this.regional.en = a.extend(!0, {}, this.regional[""]);
    this.regional["en-US"] = a.extend(!0, {}, this.regional.en);
    this.dpDiv = f(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }
  function f(b) {
    return b.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseout", function() {
      a(this).removeClass("ui-state-hover");
      -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover");
      -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover");
    }).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseover", g);
  }
  function g() {
    a.datepicker._isDisabledDatepicker(x.inline ? x.dpDiv.parent()[0] : x.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"));
  }
  function l(b, c) {
    a.extend(b, c);
    for (var d in c) {
      null == c[d] && (b[d] = c[d]);
    }
    return b;
  }
  function h(a) {
    return function() {
      var b = this.element.val();
      a.apply(this, arguments);
      this._refresh();
      b !== this.element.val() && this._trigger("change");
    };
  }
  a.ui = a.ui || {};
  a.extend(a.ui, {version:"1.11.4", keyCode:{BACKSPACE:8, COMMA:188, DELETE:46, DOWN:40, END:35, ENTER:13, ESCAPE:27, HOME:36, LEFT:37, PAGE_DOWN:34, PAGE_UP:33, PERIOD:190, RIGHT:39, SPACE:32, TAB:9, UP:38}});
  a.fn.extend({scrollParent:function(b) {
    var c = this.css("position"), d = "absolute" === c, e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
    b = this.parents().filter(function() {
      var b = a(this);
      return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"));
    }).eq(0);
    return "fixed" !== c && b.length ? b : a(this[0].ownerDocument || document);
  }, uniqueId:function() {
    var a = 0;
    return function() {
      return this.each(function() {
        this.id || (this.id = "ui-id-" + ++a);
      });
    };
  }(), removeUniqueId:function() {
    return this.each(function() {
      /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id");
    });
  }});
  a.extend(a.expr[":"], {data:a.expr.createPseudo ? a.expr.createPseudo(function(b) {
    return function(c) {
      return!!a.data(c, b);
    };
  }) : function(b, c, d) {
    return!!a.data(b, d[3]);
  }, focusable:function(c) {
    return b(c, !isNaN(a.attr(c, "tabindex")));
  }, tabbable:function(c) {
    var d = a.attr(c, "tabindex"), e = isNaN(d);
    return(e || 0 <= d) && b(c, !e);
  }});
  a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
    function d(b, c, m, f) {
      return a.each(e, function() {
        c -= parseFloat(a.css(b, "padding" + this)) || 0;
        m && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0);
        f && (c -= parseFloat(a.css(b, "margin" + this)) || 0);
      }), c;
    }
    var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"], f = c.toLowerCase(), g = {innerWidth:a.fn.innerWidth, innerHeight:a.fn.innerHeight, outerWidth:a.fn.outerWidth, outerHeight:a.fn.outerHeight};
    a.fn["inner" + c] = function(b) {
      return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
        a(this).css(f, d(this, b) + "px");
      });
    };
    a.fn["outer" + c] = function(b, m) {
      return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
        a(this).css(f, d(this, b, !0, m) + "px");
      });
    };
  });
  a.fn.addBack || (a.fn.addBack = function(a) {
    return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
  });
  a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
    return function(c) {
      return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this);
    };
  }(a.fn.removeData));
  a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  a.fn.extend({focus:function(b) {
    return function(c, d) {
      return "number" == typeof c ? this.each(function() {
        var b = this;
        setTimeout(function() {
          a(b).focus();
          d && d.call(b);
        }, c);
      }) : b.apply(this, arguments);
    };
  }(a.fn.focus), disableSelection:function() {
    var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
    return function() {
      return this.bind(a + ".ui-disableSelection", function(a) {
        a.preventDefault();
      });
    };
  }(), enableSelection:function() {
    return this.unbind(".ui-disableSelection");
  }, zIndex:function(b) {
    if (void 0 !== b) {
      return this.css("zIndex", b);
    }
    if (this.length) {
      var c, d;
      for (b = a(this[0]);b.length && b[0] !== document;) {
        if (c = b.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(b.css("zIndex"), 10), !isNaN(d) && 0 !== d)) {
          return d;
        }
        b = b.parent();
      }
    }
    return 0;
  }});
  a.ui.plugin = {add:function(b, c, d) {
    var e;
    b = a.ui[b].prototype;
    for (e in d) {
      b.plugins[e] = b.plugins[e] || [], b.plugins[e].push([c, d[e]]);
    }
  }, call:function(a, b, c, d) {
    if ((b = a.plugins[b]) && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)) {
      for (d = 0;b.length > d;d++) {
        a.options[b[d][0]] && b[d][1].apply(a.element, c);
      }
    }
  }};
  var p = 0, q = Array.prototype.slice;
  a.cleanData = function(b) {
    return function(c) {
      var d, e, f;
      for (f = 0;null != (e = c[f]);f++) {
        try {
          (d = a._data(e, "events")) && d.remove && a(e).triggerHandler("remove");
        } catch (g) {
        }
      }
      b(c);
    };
  }(a.cleanData);
  a.widget = function(b, c, d) {
    var e, f, g, h, l = {}, p = b.split(".")[0];
    return b = b.split(".")[1], e = p + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
      return!!a.data(b, e);
    }, a[p] = a[p] || {}, f = a[p][b], g = a[p][b] = function(a, b) {
      return this._createWidget ? (arguments.length && this._createWidget(a, b), void 0) : new g(a, b);
    }, a.extend(g, f, {version:d.version, _proto:a.extend({}, d), _childConstructors:[]}), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, m) {
      return a.isFunction(m) ? (l[b] = function() {
        var a = function() {
          return c.prototype[b].apply(this, arguments);
        }, d = function(a) {
          return c.prototype[b].apply(this, a);
        };
        return function() {
          var b, c = this._super, e = this._superApply;
          return this._super = a, this._superApply = d, b = m.apply(this, arguments), this._super = c, this._superApply = e, b;
        };
      }(), void 0) : (l[b] = m, void 0);
    }), g.prototype = a.widget.extend(h, {widgetEventPrefix:f ? h.widgetEventPrefix || b : b}, l, {constructor:g, namespace:p, widgetName:b, widgetFullName:e}), f ? (a.each(f._childConstructors, function(b, c) {
      var m = c.prototype;
      a.widget(m.namespace + "." + m.widgetName, g, c._proto);
    }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g;
  };
  a.widget.extend = function(b) {
    for (var c, d, e = q.call(arguments, 1), f = 0, g = e.length;g > f;f++) {
      for (c in e[f]) {
        d = e[f][c], e[f].hasOwnProperty(c) && void 0 !== d && (b[c] = a.isPlainObject(d) ? a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d) : d);
      }
    }
    return b;
  };
  a.widget.bridge = function(b, c) {
    var d = c.prototype.widgetFullName || b;
    a.fn[b] = function(e) {
      var f = "string" == typeof e, g = q.call(arguments, 1), h = this;
      return f ? this.each(function() {
        var c, f = a.data(this, d);
        return "instance" === e ? (h = f, !1) : f ? a.isFunction(f[e]) && "_" !== e.charAt(0) ? (c = f[e].apply(f, g), c !== f && void 0 !== c ? (h = c && c.jquery ? h.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + e + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + e + "'");
      }) : (g.length && (e = a.widget.extend.apply(null, [e].concat(g))), this.each(function() {
        var b = a.data(this, d);
        b ? (b.option(e || {}), b._init && b._init()) : a.data(this, d, new c(e, this));
      })), h;
    };
  };
  a.Widget = function() {
  };
  a.Widget._childConstructors = [];
  a.Widget.prototype = {widgetName:"widget", widgetEventPrefix:"", defaultElement:"<div>", options:{disabled:!1, create:null}, _createWidget:function(b, c) {
    c = a(c || this.defaultElement || this)[0];
    this.element = a(c);
    this.uuid = p++;
    this.eventNamespace = "." + this.widgetName + this.uuid;
    this.bindings = a();
    this.hoverable = a();
    this.focusable = a();
    c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, {remove:function(a) {
      a.target === c && this.destroy();
    }}), this.document = a(c.style ? c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow));
    this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b);
    this._create();
    this._trigger("create", null, this._getCreateEventData());
    this._init();
  }, _getCreateOptions:a.noop, _getCreateEventData:a.noop, _create:a.noop, _init:a.noop, destroy:function() {
    this._destroy();
    this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
    this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
    this.bindings.unbind(this.eventNamespace);
    this.hoverable.removeClass("ui-state-hover");
    this.focusable.removeClass("ui-state-focus");
  }, _destroy:a.noop, widget:function() {
    return this.element;
  }, option:function(b, c) {
    var d, e, f, g = b;
    if (0 === arguments.length) {
      return a.widget.extend({}, this.options);
    }
    if ("string" == typeof b) {
      if (g = {}, d = b.split("."), b = d.shift(), d.length) {
        e = g[b] = a.widget.extend({}, this.options[b]);
        for (f = 0;d.length - 1 > f;f++) {
          e[d[f]] = e[d[f]] || {}, e = e[d[f]];
        }
        if (b = d.pop(), 1 === arguments.length) {
          return void 0 === e[b] ? null : e[b];
        }
        e[b] = c;
      } else {
        if (1 === arguments.length) {
          return void 0 === this.options[b] ? null : this.options[b];
        }
        g[b] = c;
      }
    }
    return this._setOptions(g), this;
  }, _setOptions:function(a) {
    for (var b in a) {
      this._setOption(b, a[b]);
    }
    return this;
  }, _setOption:function(a, b) {
    return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
  }, enable:function() {
    return this._setOptions({disabled:!1});
  }, disable:function() {
    return this._setOptions({disabled:!0});
  }, _on:function(b, c, d) {
    var e, f = this;
    "boolean" != typeof b && (d = c, c = b, b = !1);
    d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget());
    a.each(d, function(d, u) {
      function g() {
        return b || !0 !== f.options.disabled && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof u ? f[u] : u).apply(f, arguments) : void 0;
      }
      "string" != typeof u && (g.guid = u.guid = u.guid || g.guid || a.guid++);
      var h = d.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + f.eventNamespace;
      (h = h[2]) ? e.delegate(h, l, g) : c.bind(l, g);
    });
  }, _off:function(b, c) {
    c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
    b.unbind(c).undelegate(c);
    this.bindings = a(this.bindings.not(b).get());
    this.focusable = a(this.focusable.not(b).get());
    this.hoverable = a(this.hoverable.not(b).get());
  }, _delay:function(a, b) {
    var c = this;
    return setTimeout(function() {
      return("string" == typeof a ? c[a] : a).apply(c, arguments);
    }, b || 0);
  }, _hoverable:function(b) {
    this.hoverable = this.hoverable.add(b);
    this._on(b, {mouseenter:function(b) {
      a(b.currentTarget).addClass("ui-state-hover");
    }, mouseleave:function(b) {
      a(b.currentTarget).removeClass("ui-state-hover");
    }});
  }, _focusable:function(b) {
    this.focusable = this.focusable.add(b);
    this._on(b, {focusin:function(b) {
      a(b.currentTarget).addClass("ui-state-focus");
    }, focusout:function(b) {
      a(b.currentTarget).removeClass("ui-state-focus");
    }});
  }, _trigger:function(b, c, d) {
    var e, f = this.options[b];
    if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], b = c.originalEvent) {
      for (e in b) {
        e in c || (c[e] = b[e]);
      }
    }
    return this.element.trigger(c, d), !(a.isFunction(f) && !1 === f.apply(this.element[0], [c].concat(d)) || c.isDefaultPrevented());
  }};
  a.each({show:"fadeIn", hide:"fadeOut"}, function(b, c) {
    a.Widget.prototype["_" + b] = function(d, e, f) {
      "string" == typeof e && (e = {effect:e});
      var g, h = e ? !0 === e || "number" == typeof e ? c : e.effect || c : b;
      e = e || {};
      "number" == typeof e && (e = {duration:e});
      g = !a.isEmptyObject(e);
      e.complete = f;
      e.delay && d.delay(e.delay);
      g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
        a(this)[b]();
        f && f.call(d[0]);
        c();
      });
    };
  });
  a.widget;
  var w = !1;
  a(document).mouseup(function() {
    w = !1;
  });
  a.widget("ui.mouse", {version:"1.11.4", options:{cancel:"input,textarea,button,select,option", distance:1, delay:0}, _mouseInit:function() {
    var b = this;
    this.element.bind("mousedown." + this.widgetName, function(a) {
      return b._mouseDown(a);
    }).bind("click." + this.widgetName, function(c) {
      return!0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0;
    });
    this.started = !1;
  }, _mouseDestroy:function() {
    this.element.unbind("." + this.widgetName);
    this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
  }, _mouseDown:function(b) {
    if (!w) {
      this._mouseMoved = !1;
      this._mouseStarted && this._mouseUp(b);
      this._mouseDownEvent = b;
      var c = this, d = 1 === b.which, e = "string" == typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
      return d && !e && this._mouseCapture(b) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
        c.mouseDelayMet = !0;
      }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = !1 !== this._mouseStart(b), !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
        return c._mouseMove(a);
      }, this._mouseUpDelegate = function(a) {
        return c._mouseUp(a);
      }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), w = !0, !0)) : !0;
    }
  }, _mouseMove:function(b) {
    return this._mouseMoved && (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button || !b.which) ? this._mouseUp(b) : ((b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, b), this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted));
  }, _mouseUp:function(b) {
    return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), w = !1, !1;
  }, _mouseDistanceMet:function(a) {
    return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
  }, _mouseDelayMet:function() {
    return this.mouseDelayMet;
  }, _mouseStart:function() {
  }, _mouseDrag:function() {
  }, _mouseStop:function() {
  }, _mouseCapture:function() {
    return!0;
  }});
  (function() {
    function b(a, c, d) {
      return[parseFloat(a[0]) * (t.test(a[0]) ? c / 100 : 1), parseFloat(a[1]) * (t.test(a[1]) ? d / 100 : 1)];
    }
    function c(b) {
      var d = b[0];
      return 9 === d.nodeType ? {width:b.width(), height:b.height(), offset:{top:0, left:0}} : a.isWindow(d) ? {width:b.width(), height:b.height(), offset:{top:b.scrollTop(), left:b.scrollLeft()}} : d.preventDefault ? {width:0, height:0, offset:{top:d.pageY, left:d.pageX}} : {width:b.outerWidth(), height:b.outerHeight(), offset:b.offset()};
    }
    a.ui = a.ui || {};
    var d, e, f = Math.max, g = Math.abs, h = Math.round, l = /left|center|right/, p = /top|center|bottom/, q = /[\+\-]\d+(\.[\d]+)?%?/, s = /^\w+/, t = /%$/, v = a.fn.position;
    a.position = {scrollbarWidth:function() {
      if (void 0 !== d) {
        return d;
      }
      var b, c, m = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), e = m.children()[0];
      return a("body").append(m), b = e.offsetWidth, m.css("overflow", "scroll"), c = e.offsetWidth, b === c && (c = m[0].clientWidth), m.remove(), d = b - c;
    }, getScrollInfo:function(b) {
      var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"), d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"), c = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth;
      return{width:"scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight ? a.position.scrollbarWidth() : 0, height:c ? a.position.scrollbarWidth() : 0};
    }, getWithinInfo:function(b) {
      b = a(b || window);
      var c = a.isWindow(b[0]), d = !!b[0] && 9 === b[0].nodeType;
      return{element:b, isWindow:c, isDocument:d, offset:b.offset() || {left:0, top:0}, scrollLeft:b.scrollLeft(), scrollTop:b.scrollTop(), width:c || d ? b.width() : b.outerWidth(), height:c || d ? b.height() : b.outerHeight()};
    }};
    a.fn.position = function(d) {
      if (!d || !d.of) {
        return v.apply(this, arguments);
      }
      d = a.extend({}, d);
      var u, t, w, x, I, ba, L = a(d.of), R = a.position.getWithinInfo(d.within), S = a.position.getScrollInfo(R), ca = (d.collision || "flip").split(" "), Y = {};
      return ba = c(L), L[0].preventDefault && (d.at = "left top"), t = ba.width, w = ba.height, x = ba.offset, I = a.extend({}, x), a.each(["my", "at"], function() {
        var a, b, c = (d[this] || "").split(" ");
        1 === c.length && (c = l.test(c[0]) ? c.concat(["center"]) : p.test(c[0]) ? ["center"].concat(c) : ["center", "center"]);
        c[0] = l.test(c[0]) ? c[0] : "center";
        c[1] = p.test(c[1]) ? c[1] : "center";
        a = q.exec(c[0]);
        b = q.exec(c[1]);
        Y[this] = [a ? a[0] : 0, b ? b[0] : 0];
        d[this] = [s.exec(c[0])[0], s.exec(c[1])[0]];
      }), 1 === ca.length && (ca[1] = ca[0]), "right" === d.at[0] ? I.left += t : "center" === d.at[0] && (I.left += t / 2), "bottom" === d.at[1] ? I.top += w : "center" === d.at[1] && (I.top += w / 2), u = b(Y.at, t, w), I.left += u[0], I.top += u[1], this.each(function() {
        var c, r, l = a(this), p = l.outerWidth(), q = l.outerHeight(), s = parseInt(a.css(this, "marginLeft"), 10) || 0, v = parseInt(a.css(this, "marginTop"), 10) || 0, J = p + s + (parseInt(a.css(this, "marginRight"), 10) || 0) + S.width, O = q + v + (parseInt(a.css(this, "marginBottom"), 10) || 0) + S.height, F = a.extend({}, I), D = b(Y.my, l.outerWidth(), l.outerHeight());
        "right" === d.my[0] ? F.left -= p : "center" === d.my[0] && (F.left -= p / 2);
        "bottom" === d.my[1] ? F.top -= q : "center" === d.my[1] && (F.top -= q / 2);
        F.left += D[0];
        F.top += D[1];
        e || (F.left = h(F.left), F.top = h(F.top));
        c = {marginLeft:s, marginTop:v};
        a.each(["left", "top"], function(b, m) {
          a.ui.position[ca[b]] && a.ui.position[ca[b]][m](F, {targetWidth:t, targetHeight:w, elemWidth:p, elemHeight:q, collisionPosition:c, collisionWidth:J, collisionHeight:O, offset:[u[0] + D[0], u[1] + D[1]], my:d.my, at:d.at, within:R, elem:l});
        });
        d.using && (r = function(a) {
          var b = x.left - F.left, c = b + t - p, m = x.top - F.top, e = m + w - q, r = {target:{element:L, left:x.left, top:x.top, width:t, height:w}, element:{element:l, left:F.left, top:F.top, width:p, height:q}, horizontal:0 > c ? "left" : 0 < b ? "right" : "center", vertical:0 > e ? "top" : 0 < m ? "bottom" : "middle"};
          p > t && t > g(b + c) && (r.horizontal = "center");
          q > w && w > g(m + e) && (r.vertical = "middle");
          r.important = f(g(b), g(c)) > f(g(m), g(e)) ? "horizontal" : "vertical";
          d.using.call(this, a, r);
        });
        l.offset(a.extend(F, {using:r}));
      });
    };
    a.ui.position = {fit:{left:function(a, b) {
      var c, d = b.within, m = d.isWindow ? d.scrollLeft : d.offset.left, d = d.width, e = a.left - b.collisionPosition.marginLeft, r = m - e, g = e + b.collisionWidth - d - m;
      b.collisionWidth > d ? 0 < r && 0 >= g ? (c = a.left + r + b.collisionWidth - d - m, a.left += r - c) : a.left = 0 < g && 0 >= r ? m : r > g ? m + d - b.collisionWidth : m : 0 < r ? a.left += r : 0 < g ? a.left -= g : a.left = f(a.left - e, a.left);
    }, top:function(a, b) {
      var c, d = b.within, d = d.isWindow ? d.scrollTop : d.offset.top, m = b.within.height, e = a.top - b.collisionPosition.marginTop, r = d - e, g = e + b.collisionHeight - m - d;
      b.collisionHeight > m ? 0 < r && 0 >= g ? (c = a.top + r + b.collisionHeight - m - d, a.top += r - c) : a.top = 0 < g && 0 >= r ? d : r > g ? d + m - b.collisionHeight : d : 0 < r ? a.top += r : 0 < g ? a.top -= g : a.top = f(a.top - e, a.top);
    }}, flip:{left:function(a, b) {
      var c, d, m = b.within, e = m.offset.left + m.scrollLeft, f = m.width, m = m.isWindow ? m.scrollLeft : m.offset.left, r = a.left - b.collisionPosition.marginLeft, u = r - m, r = r + b.collisionWidth - f - m, h = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, l = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, y = -2 * b.offset[0];
      0 > u ? (c = a.left + h + l + y + b.collisionWidth - f - e, (0 > c || g(u) > c) && (a.left += h + l + y)) : 0 < r && (d = a.left - b.collisionPosition.marginLeft + h + l + y - m, (0 < d || r > g(d)) && (a.left += h + l + y));
    }, top:function(a, b) {
      var c, d, m = b.within, e = m.offset.top + m.scrollTop, f = m.height, m = m.isWindow ? m.scrollTop : m.offset.top, r = a.top - b.collisionPosition.marginTop, u = r - m, r = r + b.collisionHeight - f - m, h = "top" === b.my[1] ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, l = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, y = -2 * b.offset[1];
      0 > u ? (d = a.top + h + l + y + b.collisionHeight - f - e, (0 > d || g(u) > d) && (a.top += h + l + y)) : 0 < r && (c = a.top - b.collisionPosition.marginTop + h + l + y - m, (0 < c || r > g(c)) && (a.top += h + l + y));
    }}, flipfit:{left:function() {
      a.ui.position.flip.left.apply(this, arguments);
      a.ui.position.fit.left.apply(this, arguments);
    }, top:function() {
      a.ui.position.flip.top.apply(this, arguments);
      a.ui.position.fit.top.apply(this, arguments);
    }}};
    (function() {
      var b, c, d, m, f = document.getElementsByTagName("body")[0];
      d = document.createElement("div");
      b = document.createElement(f ? "div" : "body");
      c = {visibility:"hidden", width:0, height:0, border:0, margin:0, background:"none"};
      f && a.extend(c, {position:"absolute", left:"-1000px", top:"-1000px"});
      for (m in c) {
        b.style[m] = c[m];
      }
      b.appendChild(d);
      c = f || document.documentElement;
      c.insertBefore(b, c.firstChild);
      d.style.cssText = "position: absolute; left: 10.7432222px;";
      d = a(d).offset().left;
      e = 10 < d && 11 > d;
      b.innerHTML = "";
      c.removeChild(b);
    })();
  })();
  a.ui.position;
  a.widget("ui.draggable", a.ui.mouse, {version:"1.11.4", widgetEventPrefix:"drag", options:{addClasses:!0, appendTo:"parent", axis:!1, connectToSortable:!1, containment:!1, cursor:"auto", cursorAt:!1, grid:!1, handle:!1, helper:"original", iframeFix:!1, opacity:!1, refreshPositions:!1, revert:!1, revertDuration:500, scope:"default", scroll:!0, scrollSensitivity:20, scrollSpeed:20, snap:!1, snapMode:"both", snapTolerance:20, stack:!1, zIndex:!1, drag:null, start:null, stop:null}, _create:function() {
    "original" === this.options.helper && this._setPositionRelative();
    this.options.addClasses && this.element.addClass("ui-draggable");
    this.options.disabled && this.element.addClass("ui-draggable-disabled");
    this._setHandleClassName();
    this._mouseInit();
  }, _setOption:function(a, b) {
    this._super(a, b);
    "handle" === a && (this._removeHandleClassName(), this._setHandleClassName());
  }, _destroy:function() {
    return(this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0);
  }, _mouseCapture:function(b) {
    var c = this.options;
    return this._blurActiveElement(b), this.helper || c.disabled || 0 < a(b.target).closest(".ui-resizable-handle").length ? !1 : (this.handle = this._getHandle(b), this.handle ? (this._blockFrames(!0 === c.iframeFix ? "iframe" : c.iframeFix), !0) : !1);
  }, _blockFrames:function(b) {
    this.iframeBlocks = this.document.find(b).map(function() {
      var b = a(this);
      return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0];
    });
  }, _unblockFrames:function() {
    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
  }, _blurActiveElement:function(b) {
    var c = this.document[0];
    if (this.handleElement.is(b.target)) {
      try {
        c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur();
      } catch (d) {
      }
    }
  }, _mouseStart:function(b) {
    var c = this.options;
    return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
      return "fixed" === a(this).css("position");
    }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), !1 === this._trigger("start", b) ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._normalizeRightBottom(), this._mouseDrag(b, 
    !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0);
  }, _refreshOffsets:function(a) {
    this.offset = {top:this.positionAbs.top - this.margins.top, left:this.positionAbs.left - this.margins.left, scroll:!1, parent:this._getParentOffset(), relative:this._getRelativeOffset()};
    this.offset.click = {left:a.pageX - this.offset.left, top:a.pageY - this.offset.top};
  }, _mouseDrag:function(b, c) {
    if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
      var d = this._uiHash();
      if (!1 === this._trigger("drag", b, d)) {
        return this._mouseUp({}), !1;
      }
      this.position = d.position;
    }
    return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1;
  }, _mouseStop:function(b) {
    var c = this, d = !1;
    return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || !0 === this.options.revert || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
      !1 !== c._trigger("stop", b) && c._clear();
    }) : !1 !== this._trigger("stop", b) && this._clear(), !1;
  }, _mouseUp:function(b) {
    return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.focus(), a.ui.mouse.prototype._mouseUp.call(this, b);
  }, cancel:function() {
    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
  }, _getHandle:function(b) {
    return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0;
  }, _setHandleClassName:function() {
    this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
    this.handleElement.addClass("ui-draggable-handle");
  }, _removeHandleClassName:function() {
    this.handleElement.removeClass("ui-draggable-handle");
  }, _createHelper:function(b) {
    var c = this.options, d = a.isFunction(c.helper);
    b = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
    return b.parents("body").length || b.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && b[0] === this.element[0] && this._setPositionRelative(), b[0] === this.element[0] || /(fixed|absolute)/.test(b.css("position")) || b.css("position", "absolute"), b;
  }, _setPositionRelative:function() {
    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
  }, _adjustOffsetFromHelper:function(b) {
    "string" == typeof b && (b = b.split(" "));
    a.isArray(b) && (b = {left:+b[0], top:+b[1] || 0});
    "left" in b && (this.offset.click.left = b.left + this.margins.left);
    "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left);
    "top" in b && (this.offset.click.top = b.top + this.margins.top);
    "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
  }, _isRootNode:function(a) {
    return/(html|body)/i.test(a.tagName) || a === this.document[0];
  }, _getParentOffset:function() {
    var b = this.offsetParent.offset(), c = this.document[0];
    return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {top:0, left:0}), {top:b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left:b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)};
  }, _getRelativeOffset:function() {
    if ("relative" !== this.cssPosition) {
      return{top:0, left:0};
    }
    var a = this.element.position(), b = this._isRootNode(this.scrollParent[0]);
    return{top:a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()), left:a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())};
  }, _cacheMargins:function() {
    this.margins = {left:parseInt(this.element.css("marginLeft"), 10) || 0, top:parseInt(this.element.css("marginTop"), 10) || 0, right:parseInt(this.element.css("marginRight"), 10) || 0, bottom:parseInt(this.element.css("marginBottom"), 10) || 0};
  }, _cacheHelperProportions:function() {
    this.helperProportions = {width:this.helper.outerWidth(), height:this.helper.outerHeight()};
  }, _setContainment:function() {
    var b, c, d, e = this.options, f = this.document[0];
    return this.relativeContainer = null, e.containment ? "window" === e.containment ? (this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === 
    e.containment ? (this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : e.containment.constructor === Array ? (this.containment = e.containment, void 0) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], d && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 
    10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 
    10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c), void 0) : (this.containment = null, void 0);
  }, _convertPositionTo:function(a, b) {
    b || (b = this.position);
    var c = "absolute" === a ? 1 : -1, d = this._isRootNode(this.scrollParent[0]);
    return{top:b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c, left:b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c};
  }, _generatePosition:function(a, b) {
    var c, d, e, f, g = this.options, h = this._isRootNode(this.scrollParent[0]), l = a.pageX, p = a.pageY;
    return h && this.offset.scroll || (this.offset.scroll = {top:this.scrollParent.scrollTop(), left:this.scrollParent.scrollLeft()}), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (l = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (p = c[1] + 
    this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (l = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (p = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((p - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, p = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + 
    Math.round((l - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, l = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (l = this.originalPageX), "x" === g.axis && (p = this.originalPageY)), {top:p - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top), 
    left:l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)};
  }, _clear:function() {
    this.helper.removeClass("ui-draggable-dragging");
    this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
    this.helper = null;
    this.cancelHelperRemoval = !1;
    this.destroyOnClear && this.destroy();
  }, _normalizeRightBottom:function() {
    "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto"));
    "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"));
  }, _trigger:function(b, c, d) {
    return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d);
  }, plugins:{}, _uiHash:function() {
    return{helper:this.helper, position:this.position, originalPosition:this.originalPosition, offset:this.positionAbs};
  }});
  a.ui.plugin.add("draggable", "connectToSortable", {start:function(b, c, d) {
    var e = a.extend({}, c, {item:d.element});
    d.sortables = [];
    a(d.options.connectToSortable).each(function() {
      var c = a(this).sortable("instance");
      c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e));
    });
  }, stop:function(b, c, d) {
    var e = a.extend({}, c, {item:d.element});
    d.cancelHelperRemoval = !1;
    a.each(d.sortables, function() {
      this.isOver ? (this.isOver = 0, d.cancelHelperRemoval = !0, this.cancelHelperRemoval = !1, this._storedCSS = {position:this.placeholder.css("position"), top:this.placeholder.css("top"), left:this.placeholder.css("left")}, this._mouseStop(b), this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0, this._trigger("deactivate", b, e));
    });
  }, drag:function(b, c, d) {
    a.each(d.sortables, function() {
      var e = !1, f = this;
      f.positionAbs = d.positionAbs;
      f.helperProportions = d.helperProportions;
      f.offset.click = d.offset.click;
      f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function() {
        return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), e;
      }));
      e ? (f.isOver || (f.isOver = 1, d._parent = c.helper.parent(), f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() {
        return c.helper[0];
      }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() {
        this.refreshPositions();
      }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), c.helper.appendTo(d._parent), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), 
      d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function() {
        this.refreshPositions();
      }));
    });
  }});
  a.ui.plugin.add("draggable", "cursor", {start:function(b, c, d) {
    b = a("body");
    d = d.options;
    b.css("cursor") && (d._cursor = b.css("cursor"));
    b.css("cursor", d.cursor);
  }, stop:function(b, c, d) {
    b = d.options;
    b._cursor && a("body").css("cursor", b._cursor);
  }});
  a.ui.plugin.add("draggable", "opacity", {start:function(b, c, d) {
    b = a(c.helper);
    d = d.options;
    b.css("opacity") && (d._opacity = b.css("opacity"));
    b.css("opacity", d.opacity);
  }, stop:function(b, c, d) {
    b = d.options;
    b._opacity && a(c.helper).css("opacity", b._opacity);
  }});
  a.ui.plugin.add("draggable", "scroll", {start:function(a, b, c) {
    c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1));
    c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset());
  }, drag:function(b, c, d) {
    c = d.options;
    var e = !1, f = d.scrollParentNotHidden[0], g = d.document[0];
    f !== g && "HTML" !== f.tagName ? (c.axis && "x" === c.axis || (d.overflowOffset.top + f.offsetHeight - b.pageY < c.scrollSensitivity ? f.scrollTop = e = f.scrollTop + c.scrollSpeed : b.pageY - d.overflowOffset.top < c.scrollSensitivity && (f.scrollTop = e = f.scrollTop - c.scrollSpeed)), c.axis && "y" === c.axis || (d.overflowOffset.left + f.offsetWidth - b.pageX < c.scrollSensitivity ? f.scrollLeft = e = f.scrollLeft + c.scrollSpeed : b.pageX - d.overflowOffset.left < c.scrollSensitivity && 
    (f.scrollLeft = e = f.scrollLeft - c.scrollSpeed))) : (c.axis && "x" === c.axis || (b.pageY - a(g).scrollTop() < c.scrollSensitivity ? e = a(g).scrollTop(a(g).scrollTop() - c.scrollSpeed) : a(window).height() - (b.pageY - a(g).scrollTop()) < c.scrollSensitivity && (e = a(g).scrollTop(a(g).scrollTop() + c.scrollSpeed))), c.axis && "y" === c.axis || (b.pageX - a(g).scrollLeft() < c.scrollSensitivity ? e = a(g).scrollLeft(a(g).scrollLeft() - c.scrollSpeed) : a(window).width() - (b.pageX - a(g).scrollLeft()) < 
    c.scrollSensitivity && (e = a(g).scrollLeft(a(g).scrollLeft() + c.scrollSpeed))));
    !1 !== e && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b);
  }});
  a.ui.plugin.add("draggable", "snap", {start:function(b, c, d) {
    b = d.options;
    d.snapElements = [];
    a(b.snap.constructor !== String ? b.snap.items || ":data(ui-draggable)" : b.snap).each(function() {
      var b = a(this), c = b.offset();
      this !== d.element[0] && d.snapElements.push({item:this, width:b.outerWidth(), height:b.outerHeight(), top:c.top, left:c.left});
    });
  }, drag:function(b, c, d) {
    var e, f, g, h, l, p, q, s, t, v, w = d.options, x = w.snapTolerance, N = c.offset.left, G = N + d.helperProportions.width, U = c.offset.top, P = U + d.helperProportions.height;
    for (t = d.snapElements.length - 1;0 <= t;t--) {
      l = d.snapElements[t].left - d.margins.left, p = l + d.snapElements[t].width, q = d.snapElements[t].top - d.margins.top, s = q + d.snapElements[t].height, l - x > G || N > p + x || q - x > P || U > s + x || !a.contains(d.snapElements[t].item.ownerDocument, d.snapElements[t].item) ? (d.snapElements[t].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {snapItem:d.snapElements[t].item})), d.snapElements[t].snapping = !1) : ("inner" !== w.snapMode && 
      (e = x >= Math.abs(q - P), f = x >= Math.abs(s - U), g = x >= Math.abs(l - G), h = x >= Math.abs(p - N), e && (c.position.top = d._convertPositionTo("relative", {top:q - d.helperProportions.height, left:0}).top), f && (c.position.top = d._convertPositionTo("relative", {top:s, left:0}).top), g && (c.position.left = d._convertPositionTo("relative", {top:0, left:l - d.helperProportions.width}).left), h && (c.position.left = d._convertPositionTo("relative", {top:0, left:p}).left)), v = e || f || 
      g || h, "outer" !== w.snapMode && (e = x >= Math.abs(q - U), f = x >= Math.abs(s - P), g = x >= Math.abs(l - N), h = x >= Math.abs(p - G), e && (c.position.top = d._convertPositionTo("relative", {top:q, left:0}).top), f && (c.position.top = d._convertPositionTo("relative", {top:s - d.helperProportions.height, left:0}).top), g && (c.position.left = d._convertPositionTo("relative", {top:0, left:l}).left), h && (c.position.left = d._convertPositionTo("relative", {top:0, left:p - d.helperProportions.width}).left)), 
      !d.snapElements[t].snapping && (e || f || g || h || v) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {snapItem:d.snapElements[t].item})), d.snapElements[t].snapping = e || f || g || h || v);
    }
  }});
  a.ui.plugin.add("draggable", "stack", {start:function(b, c, d) {
    var e;
    b = a.makeArray(a(d.options.stack)).sort(function(b, c) {
      return(parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0);
    });
    b.length && (e = parseInt(a(b[0]).css("zIndex"), 10) || 0, a(b).each(function(b) {
      a(this).css("zIndex", e + b);
    }), this.css("zIndex", e + b.length));
  }});
  a.ui.plugin.add("draggable", "zIndex", {start:function(b, c, d) {
    b = a(c.helper);
    d = d.options;
    b.css("zIndex") && (d._zIndex = b.css("zIndex"));
    b.css("zIndex", d.zIndex);
  }, stop:function(b, c, d) {
    b = d.options;
    b._zIndex && a(c.helper).css("zIndex", b._zIndex);
  }});
  a.ui.draggable;
  a.widget("ui.droppable", {version:"1.11.4", widgetEventPrefix:"drop", options:{accept:"*", activeClass:!1, addClasses:!0, greedy:!1, hoverClass:!1, scope:"default", tolerance:"intersect", activate:null, deactivate:null, drop:null, out:null, over:null}, _create:function() {
    var b, c = this.options, d = c.accept;
    this.isover = !1;
    this.isout = !0;
    this.accept = a.isFunction(d) ? d : function(a) {
      return a.is(d);
    };
    this.proportions = function() {
      return arguments.length ? (b = arguments[0], void 0) : b ? b : b = {width:this.element[0].offsetWidth, height:this.element[0].offsetHeight};
    };
    this._addToManager(c.scope);
    c.addClasses && this.element.addClass("ui-droppable");
  }, _addToManager:function(b) {
    a.ui.ddmanager.droppables[b] = a.ui.ddmanager.droppables[b] || [];
    a.ui.ddmanager.droppables[b].push(this);
  }, _splice:function(a) {
    for (var b = 0;a.length > b;b++) {
      a[b] === this && a.splice(b, 1);
    }
  }, _destroy:function() {
    this._splice(a.ui.ddmanager.droppables[this.options.scope]);
    this.element.removeClass("ui-droppable ui-droppable-disabled");
  }, _setOption:function(b, c) {
    "accept" === b ? this.accept = a.isFunction(c) ? c : function(a) {
      return a.is(c);
    } : "scope" === b && (this._splice(a.ui.ddmanager.droppables[this.options.scope]), this._addToManager(c));
    this._super(b, c);
  }, _activate:function(b) {
    var c = a.ui.ddmanager.current;
    this.options.activeClass && this.element.addClass(this.options.activeClass);
    c && this._trigger("activate", b, this.ui(c));
  }, _deactivate:function(b) {
    var c = a.ui.ddmanager.current;
    this.options.activeClass && this.element.removeClass(this.options.activeClass);
    c && this._trigger("deactivate", b, this.ui(c));
  }, _over:function(b) {
    var c = a.ui.ddmanager.current;
    c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)));
  }, _out:function(b) {
    var c = a.ui.ddmanager.current;
    c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)));
  }, _drop:function(b, c) {
    var d = c || a.ui.ddmanager.current, e = !1;
    return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
      var c = a(this).droppable("instance");
      return c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(c, {offset:c.element.offset()}), c.options.tolerance, b) ? (e = !0, !1) : void 0;
    }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1) : !1;
  }, ui:function(a) {
    return{draggable:a.currentItem || a.element, helper:a.helper, position:a.position, offset:a.positionAbs};
  }});
  a.ui.intersect = function() {
    return function(a, b, c, d) {
      if (!b.offset) {
        return!1;
      }
      var e = (a.positionAbs || a.position.absolute).left + a.margins.left, f = (a.positionAbs || a.position.absolute).top + a.margins.top, g = e + a.helperProportions.width, h = f + a.helperProportions.height, l = b.offset.left, p = b.offset.top, q = l + b.proportions().width, s = p + b.proportions().height;
      switch(c) {
        case "fit":
          return e >= l && q >= g && f >= p && s >= h;
        case "intersect":
          return e + a.helperProportions.width / 2 > l && q > g - a.helperProportions.width / 2 && f + a.helperProportions.height / 2 > p && s > h - a.helperProportions.height / 2;
        case "pointer":
          a = d.pageY;
          c = b.proportions().height;
          if (p = a >= p && p + c > a) {
            d = d.pageX, b = b.proportions().width, p = d >= l && l + b > d;
          }
          return p;
        case "touch":
          return(f >= p && s >= f || h >= p && s >= h || p > f && h > s) && (e >= l && q >= e || g >= l && q >= g || l > e && g > q);
        default:
          return!1;
      }
    };
  }();
  a.ui.ddmanager = {current:null, droppables:{"default":[]}, prepareOffsets:function(b, c) {
    var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [], g = c ? c.type : null, h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
    d = 0;
    a: for (;f.length > d;d++) {
      if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
        for (e = 0;h.length > e;e++) {
          if (h[e] === f[d].element[0]) {
            f[d].proportions().height = 0;
            continue a;
          }
        }
        f[d].visible = "none" !== f[d].element.css("display");
        f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions({width:f[d].element[0].offsetWidth, height:f[d].element[0].offsetHeight}));
      }
    }
  }, drop:function(b, c) {
    var d = !1;
    return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() {
      this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)));
    }), d;
  }, dragStart:function(b, c) {
    b.element.parentsUntil("body").bind("scroll.droppable", function() {
      b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
    });
  }, drag:function(b, c) {
    b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c);
    a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
      if (!this.options.disabled && !this.greedyChild && this.visible) {
        var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance, c);
        (g = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null) && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
          return a(this).droppable("instance").options.scope === e;
        }), f.length && (d = a(f[0]).droppable("instance"), d.greedyChild = "isover" === g)), d && "isover" === g && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[g] = !0, this["isout" === g ? "isover" : "isout"] = !1, this["isover" === g ? "_over" : "_out"].call(this, c), d && "isout" === g && (d.isout = !1, d.isover = !0, d._over.call(d, c)));
      }
    });
  }, dragStop:function(b, c) {
    b.element.parentsUntil("body").unbind("scroll.droppable");
    b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
  }};
  a.ui.droppable;
  a.widget("ui.resizable", a.ui.mouse, {version:"1.11.4", widgetEventPrefix:"resize", options:{alsoResize:!1, animate:!1, animateDuration:"slow", animateEasing:"swing", aspectRatio:!1, autoHide:!1, containment:!1, ghost:!1, grid:!1, handles:"e,s,se", helper:!1, maxHeight:null, maxWidth:null, minHeight:10, minWidth:10, zIndex:90, resize:null, start:null, stop:null}, _num:function(a) {
    return parseInt(a, 10) || 0;
  }, _isNumber:function(a) {
    return!isNaN(parseInt(a, 10));
  }, _hasScroll:function(b, c) {
    if ("hidden" === a(b).css("overflow")) {
      return!1;
    }
    var d = c && "left" === c ? "scrollLeft" : "scrollTop", e = !1;
    return 0 < b[d] ? !0 : (b[d] = 1, e = 0 < b[d], b[d] = 0, e);
  }, _create:function() {
    var b, c, d, e, f, g = this, h = this.options;
    if (this.element.addClass("ui-resizable"), a.extend(this, {_aspectRatio:!!h.aspectRatio, aspectRatio:h.aspectRatio, originalElement:this.element, _proportionallyResizeElements:[], _helper:h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"), width:this.element.outerWidth(), 
    height:this.element.outerHeight(), top:this.element.css("top"), left:this.element.css("left")})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({marginLeft:this.originalElement.css("marginLeft"), marginTop:this.originalElement.css("marginTop"), marginRight:this.originalElement.css("marginRight"), marginBottom:this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft:0, marginTop:0, 
    marginRight:0, marginBottom:0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position:"static", zoom:1, display:"block"})), this.originalElement.css({margin:this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {n:".ui-resizable-n", e:".ui-resizable-e", s:".ui-resizable-s", 
    w:".ui-resizable-w", se:".ui-resizable-se", sw:".ui-resizable-sw", ne:".ui-resizable-ne", nw:".ui-resizable-nw"} : "e,s,se"), this._handles = a(), this.handles.constructor === String) {
      for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {}, c = 0;b.length > c;c++) {
        d = a.trim(b[c]), f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({zIndex:h.zIndex}), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(e);
      }
    }
    this._renderAxis = function(b) {
      var c, d, m, e;
      b = b || this.element;
      for (c in this.handles) {
        this.handles[c].constructor === String ? this.handles[c] = this.element.children(this.handles[c]).first().show() : (this.handles[c].jquery || this.handles[c].nodeType) && (this.handles[c] = a(this.handles[c]), this._on(this.handles[c], {mousedown:g._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (d = a(this.handles[c], this.element), e = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), m = ["padding", /ne|nw|n/.test(c) ? 
        "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(m, e), this._proportionallyResize()), this._handles = this._handles.add(this.handles[c]);
      }
    };
    this._renderAxis(this.element);
    this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
    this._handles.disableSelection();
    this._handles.mouseover(function() {
      g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se");
    });
    h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
      h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show());
    }).mouseleave(function() {
      h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide());
    }));
    this._mouseInit();
  }, _destroy:function() {
    this._mouseDestroy();
    var b, c = function(b) {
      a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
    };
    return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({position:b.css("position"), width:b.outerWidth(), height:b.outerHeight(), top:b.css("top"), left:b.css("left")}).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this;
  }, _mouseCapture:function(b) {
    var c, d, e = !1;
    for (c in this.handles) {
      d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
    }
    return!this.options.disabled && e;
  }, _mouseStart:function(b) {
    var c, d, e, f = this.options, g = this.element;
    return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), d = this._num(this.helper.css("top")), f.containment && (c += a(f.containment).scrollLeft() || 0, d += a(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left:c, top:d}, this.size = this._helper ? {width:this.helper.width(), height:this.helper.height()} : {width:g.width(), height:g.height()}, this.originalSize = this._helper ? {width:g.outerWidth(), height:g.outerHeight()} : 
    {width:g.width(), height:g.height()}, this.sizeDiff = {width:g.outerWidth() - g.width(), height:g.outerHeight() - g.height()}, this.originalPosition = {left:c, top:d}, this.originalMousePosition = {left:b.pageX, top:b.pageY}, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), g.addClass("ui-resizable-resizing"), 
    this._propagate("start", b), !0;
  }, _mouseDrag:function(b) {
    var c, d, e = this.originalMousePosition, f = b.pageX - e.left || 0, e = b.pageY - e.top || 0, g = this._change[this.axis];
    return this._updatePrevProperties(), g ? (c = g.apply(this, [b, f, e]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), this._applyChanges()), 
    !1) : !1;
  }, _mouseStop:function(b) {
    this.resizing = !1;
    var c, d, e, f, g, h, l, p = this.options;
    return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && this._hasScroll(c[0], "left") ? 0 : this.sizeDiff.height, f = d ? 0 : this.sizeDiff.width, g = {width:this.helper.width() - f, height:this.helper.height() - e}, h = parseInt(this.element.css("left"), 10) + (this.position.left - this.originalPosition.left) || null, l = parseInt(this.element.css("top"), 10) + (this.position.top - this.originalPosition.top) || null, p.animate || 
    this.element.css(a.extend(g, {top:l, left:h})), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !p.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1;
  }, _updatePrevProperties:function() {
    this.prevPosition = {top:this.position.top, left:this.position.left};
    this.prevSize = {width:this.size.width, height:this.size.height};
  }, _applyChanges:function() {
    var a = {};
    return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), this.helper.css(a), a;
  }, _updateVirtualBoundaries:function(a) {
    var b, c, d, e, f;
    f = this.options;
    f = {minWidth:this._isNumber(f.minWidth) ? f.minWidth : 0, maxWidth:this._isNumber(f.maxWidth) ? f.maxWidth : 1 / 0, minHeight:this._isNumber(f.minHeight) ? f.minHeight : 0, maxHeight:this._isNumber(f.maxHeight) ? f.maxHeight : 1 / 0};
    (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), d > f.minHeight && (f.minHeight = d), f.maxWidth > c && (f.maxWidth = c), f.maxHeight > e && (f.maxHeight = e));
    this._vBoundaries = f;
  }, _updateCache:function(a) {
    this.offset = this.helper.offset();
    this._isNumber(a.left) && (this.position.left = a.left);
    this._isNumber(a.top) && (this.position.top = a.top);
    this._isNumber(a.height) && (this.size.height = a.height);
    this._isNumber(a.width) && (this.size.width = a.width);
  }, _updateRatio:function(a) {
    var b = this.position, c = this.size, d = this.axis;
    return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a;
  }, _respectSize:function(a) {
    var b = this._vBoundaries, c = this.axis, d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width, e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height, f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width, g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height, h = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, p = /sw|nw|w/.test(c), c = /nw|ne|n/.test(c);
    return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), e && (a.height = b.maxHeight), f && p && (a.left = h - b.minWidth), d && p && (a.left = h - b.maxWidth), g && c && (a.top = l - b.minHeight), e && c && (a.top = l - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a;
  }, _getPaddingPlusBorderDimensions:function(a) {
    var b = 0, c = [], d = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")];
    for (a = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")];4 > b;b++) {
      c[b] = parseInt(d[b], 10) || 0, c[b] += parseInt(a[b], 10) || 0;
    }
    return{height:c[0] + c[2], width:c[1] + c[3]};
  }, _proportionallyResize:function() {
    if (this._proportionallyResizeElements.length) {
      for (var a, b = 0, c = this.helper || this.element;this._proportionallyResizeElements.length > b;b++) {
        a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({height:c.height() - this.outerDimensions.height || 0, width:c.width() - this.outerDimensions.width || 0});
      }
    }
  }, _renderProxy:function() {
    var b = this.options;
    this.elementOffset = this.element.offset();
    this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({width:this.element.outerWidth() - 1, height:this.element.outerHeight() - 1, position:"absolute", left:this.elementOffset.left + "px", top:this.elementOffset.top + "px", zIndex:++b.zIndex}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
  }, _change:{e:function(a, b) {
    return{width:this.originalSize.width + b};
  }, w:function(a, b) {
    return{left:this.originalPosition.left + b, width:this.originalSize.width - b};
  }, n:function(a, b, c) {
    return{top:this.originalPosition.top + c, height:this.originalSize.height - c};
  }, s:function(a, b, c) {
    return{height:this.originalSize.height + c};
  }, se:function(b, c, d) {
    return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]));
  }, sw:function(b, c, d) {
    return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]));
  }, ne:function(b, c, d) {
    return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]));
  }, nw:function(b, c, d) {
    return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]));
  }}, _propagate:function(b, c) {
    a.ui.plugin.call(this, b, [c, this.ui()]);
    "resize" !== b && this._trigger(b, c, this.ui());
  }, plugins:{}, ui:function() {
    return{originalElement:this.originalElement, element:this.element, helper:this.helper, position:this.position, size:this.size, originalSize:this.originalSize, originalPosition:this.originalPosition};
  }});
  a.ui.plugin.add("resizable", "animate", {stop:function(b) {
    var c = a(this).resizable("instance"), d = c.options, e = c._proportionallyResizeElements, f = e.length && /textarea/i.test(e[0].nodeName), g = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height, f = {width:c.size.width - (f ? 0 : c.sizeDiff.width), height:c.size.height - g}, g = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
    c.element.animate(a.extend(f, h && g ? {top:h, left:g} : {}), {duration:d.animateDuration, easing:d.animateEasing, step:function() {
      var d = {width:parseInt(c.element.css("width"), 10), height:parseInt(c.element.css("height"), 10), top:parseInt(c.element.css("top"), 10), left:parseInt(c.element.css("left"), 10)};
      e && e.length && a(e[0]).css({width:d.width, height:d.height});
      c._updateCache(d);
      c._propagate("resize", b);
    }});
  }});
  a.ui.plugin.add("resizable", "containment", {start:function() {
    var b, c, d, e, f, g, h, l = a(this).resizable("instance"), p = l.element, q = l.options.containment;
    (p = q instanceof a ? q.get(0) : /parent/.test(q) ? p.parent().get(0) : q) && (l.containerElement = a(p), /document/.test(q) || q === document ? (l.containerOffset = {left:0, top:0}, l.containerPosition = {left:0, top:0}, l.parentData = {element:a(document), left:0, top:0, width:a(document).width(), height:a(document).height() || document.body.parentNode.scrollHeight}) : (b = a(p), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function(a, d) {
      c[a] = l._num(b.css("padding" + d));
    }), l.containerOffset = b.offset(), l.containerPosition = b.position(), l.containerSize = {height:b.innerHeight() - c[3], width:b.innerWidth() - c[1]}, d = l.containerOffset, e = l.containerSize.height, f = l.containerSize.width, g = l._hasScroll(p, "left") ? p.scrollWidth : f, h = l._hasScroll(p) ? p.scrollHeight : e, l.parentData = {element:p, left:d.left, top:d.top, width:g, height:h}));
  }, resize:function(b) {
    var c, d, e, f = a(this).resizable("instance");
    c = f.options;
    d = f.containerOffset;
    e = f.position;
    b = f._aspectRatio || b.shiftKey;
    var g = {top:0, left:0}, h = f.containerElement, l = !0;
    h[0] !== document && /static/.test(h.css("position")) && (g = d);
    e.left < (f._helper ? d.left : 0) && (f.size.width += f._helper ? f.position.left - d.left : f.position.left - g.left, b && (f.size.height = f.size.width / f.aspectRatio, l = !1), f.position.left = c.helper ? d.left : 0);
    e.top < (f._helper ? d.top : 0) && (f.size.height += f._helper ? f.position.top - d.top : f.position.top, b && (f.size.width = f.size.height * f.aspectRatio, l = !1), f.position.top = f._helper ? d.top : 0);
    c = f.containerElement.get(0) === f.element.parent().get(0);
    e = /relative|absolute/.test(f.containerElement.css("position"));
    c && e ? (f.offset.left = f.parentData.left + f.position.left, f.offset.top = f.parentData.top + f.position.top) : (f.offset.left = f.element.offset().left, f.offset.top = f.element.offset().top);
    c = Math.abs(f.sizeDiff.width + (f._helper ? f.offset.left - g.left : f.offset.left - d.left));
    d = Math.abs(f.sizeDiff.height + (f._helper ? f.offset.top - g.top : f.offset.top - d.top));
    c + f.size.width >= f.parentData.width && (f.size.width = f.parentData.width - c, b && (f.size.height = f.size.width / f.aspectRatio, l = !1));
    d + f.size.height >= f.parentData.height && (f.size.height = f.parentData.height - d, b && (f.size.width = f.size.height * f.aspectRatio, l = !1));
    l || (f.position.left = f.prevPosition.left, f.position.top = f.prevPosition.top, f.size.width = f.prevSize.width, f.size.height = f.prevSize.height);
  }, stop:function() {
    var b = a(this).resizable("instance"), c = b.options, d = b.containerOffset, e = b.containerPosition, f = b.containerElement, g = a(b.helper), h = g.offset(), l = g.outerWidth() - b.sizeDiff.width, g = g.outerHeight() - b.sizeDiff.height;
    b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({left:h.left - e.left - d.left, width:l, height:g});
    b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({left:h.left - e.left - d.left, width:l, height:g});
  }});
  a.ui.plugin.add("resizable", "alsoResize", {start:function() {
    var b = a(this).resizable("instance").options;
    a(b.alsoResize).each(function() {
      var b = a(this);
      b.data("ui-resizable-alsoresize", {width:parseInt(b.width(), 10), height:parseInt(b.height(), 10), left:parseInt(b.css("left"), 10), top:parseInt(b.css("top"), 10)});
    });
  }, resize:function(b, c) {
    var d = a(this).resizable("instance"), e = d.originalSize, f = d.originalPosition, g = {height:d.size.height - e.height || 0, width:d.size.width - e.width || 0, top:d.position.top - f.top || 0, left:d.position.left - f.left || 0};
    a(d.options.alsoResize).each(function() {
      var b = a(this), d = a(this).data("ui-resizable-alsoresize"), m = {}, e = b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
      a.each(e, function(a, b) {
        var c = (d[b] || 0) + (g[b] || 0);
        c && 0 <= c && (m[b] = c || null);
      });
      b.css(m);
    });
  }, stop:function() {
    a(this).removeData("resizable-alsoresize");
  }});
  a.ui.plugin.add("resizable", "ghost", {start:function() {
    var b = a(this).resizable("instance"), c = b.options, d = b.size;
    b.ghost = b.originalElement.clone();
    b.ghost.css({opacity:0.25, display:"block", position:"relative", height:d.height, width:d.width, margin:0, left:0, top:0}).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : "");
    b.ghost.appendTo(b.helper);
  }, resize:function() {
    var b = a(this).resizable("instance");
    b.ghost && b.ghost.css({position:"relative", height:b.size.height, width:b.size.width});
  }, stop:function() {
    var b = a(this).resizable("instance");
    b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0));
  }});
  a.ui.plugin.add("resizable", "grid", {resize:function() {
    var b, c = a(this).resizable("instance"), d = c.options, e = c.size, f = c.originalSize, g = c.originalPosition, h = c.axis, l = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid, p = l[0] || 1, q = l[1] || 1, s = Math.round((e.width - f.width) / p) * p, e = Math.round((e.height - f.height) / q) * q, t = f.width + s, v = f.height + e, w = d.maxWidth && t > d.maxWidth, x = d.maxHeight && v > d.maxHeight, N = d.minWidth && d.minWidth > t, G = d.minHeight && d.minHeight > v;
    d.grid = l;
    N && (t += p);
    G && (v += q);
    w && (t -= p);
    x && (v -= q);
    /^(se|s|e)$/.test(h) ? (c.size.width = t, c.size.height = v) : /^(ne)$/.test(h) ? (c.size.width = t, c.size.height = v, c.position.top = g.top - e) : /^(sw)$/.test(h) ? (c.size.width = t, c.size.height = v, c.position.left = g.left - s) : ((0 >= v - q || 0 >= t - p) && (b = c._getPaddingPlusBorderDimensions(this)), 0 < v - q ? (c.size.height = v, c.position.top = g.top - e) : (v = q - b.height, c.size.height = v, c.position.top = g.top + f.height - v), 0 < t - p ? (c.size.width = t, c.position.left = 
    g.left - s) : (t = p - b.width, c.size.width = t, c.position.left = g.left + f.width - t));
  }});
  a.ui.resizable;
  a.widget("ui.selectable", a.ui.mouse, {version:"1.11.4", options:{appendTo:"body", autoRefresh:!0, distance:0, filter:"*", tolerance:"touch", selected:null, selecting:null, start:null, stop:null, unselected:null, unselecting:null}, _create:function() {
    var b, c = this;
    this.element.addClass("ui-selectable");
    this.dragged = !1;
    this.refresh = function() {
      b = a(c.options.filter, c.element[0]);
      b.addClass("ui-selectee");
      b.each(function() {
        var b = a(this), c = b.offset();
        a.data(this, "selectable-item", {element:this, $element:b, left:c.left, top:c.top, right:c.left + b.outerWidth(), bottom:c.top + b.outerHeight(), startselected:!1, selected:b.hasClass("ui-selected"), selecting:b.hasClass("ui-selecting"), unselecting:b.hasClass("ui-unselecting")});
      });
    };
    this.refresh();
    this.selectees = b.addClass("ui-selectee");
    this._mouseInit();
    this.helper = a("<div class='ui-selectable-helper'></div>");
  }, _destroy:function() {
    this.selectees.removeClass("ui-selectee").removeData("selectable-item");
    this.element.removeClass("ui-selectable ui-selectable-disabled");
    this._mouseDestroy();
  }, _mouseStart:function(b) {
    var c = this, d = this.options;
    this.opos = [b.pageX, b.pageY];
    this.options.disabled || (this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({left:b.pageX, top:b.pageY, width:0, height:0}), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
      var d = a.data(this, "selectable-item");
      d.startselected = !0;
      b.metaKey || b.ctrlKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {unselecting:d.element}));
    }), a(b.target).parents().addBack().each(function() {
      var d, e = a.data(this, "selectable-item");
      return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), e.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"), e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, {selecting:e.element}) : c._trigger("unselecting", b, {unselecting:e.element}), !1) : void 0;
    }));
  }, _mouseDrag:function(b) {
    if (this.dragged = !0, !this.options.disabled) {
      var c, d = this, e = this.options, f = this.opos[0], g = this.opos[1], h = b.pageX, l = b.pageY;
      return f > h && (c = h, h = f, f = c), g > l && (c = l, l = g, g = c), this.helper.css({left:f, top:g, width:h - f, height:l - g}), this.selectees.each(function() {
        var c = a.data(this, "selectable-item"), r = !1;
        c && c.element !== d.element[0] && ("touch" === e.tolerance ? r = !(c.left > h || f > c.right || c.top > l || g > c.bottom) : "fit" === e.tolerance && (r = c.left > f && h > c.right && c.top > g && l > c.bottom), r ? (c.selected && (c.$element.removeClass("ui-selected"), c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, d._trigger("selecting", b, {selecting:c.element}))) : 
        (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), d._trigger("unselecting", b, {unselecting:c.element}))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), 
        c.unselecting = !0, d._trigger("unselecting", b, {unselecting:c.element})))));
      }), !1;
    }
  }, _mouseStop:function(b) {
    var c = this;
    return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function() {
      var d = a.data(this, "selectable-item");
      d.$element.removeClass("ui-unselecting");
      d.unselecting = !1;
      d.startselected = !1;
      c._trigger("unselected", b, {unselected:d.element});
    }), a(".ui-selecting", this.element[0]).each(function() {
      var d = a.data(this, "selectable-item");
      d.$element.removeClass("ui-selecting").addClass("ui-selected");
      d.selecting = !1;
      d.selected = !0;
      d.startselected = !0;
      c._trigger("selected", b, {selected:d.element});
    }), this._trigger("stop", b), this.helper.remove(), !1;
  }});
  a.widget("ui.sortable", a.ui.mouse, {version:"1.11.4", widgetEventPrefix:"sort", ready:!1, options:{appendTo:"parent", axis:!1, connectWith:!1, containment:!1, cursor:"auto", cursorAt:!1, dropOnEmpty:!0, forcePlaceholderSize:!1, forceHelperSize:!1, grid:!1, handle:!1, helper:"original", items:"> *", opacity:!1, placeholder:!1, revert:!1, scroll:!0, scrollSensitivity:20, scrollSpeed:20, scope:"default", tolerance:"intersect", zIndex:1E3, activate:null, beforeStop:null, change:null, deactivate:null, 
  out:null, over:null, receive:null, remove:null, sort:null, start:null, stop:null, update:null}, _isOverAxis:function(a, b, c) {
    return a >= b && b + c > a;
  }, _isFloating:function(a) {
    return/left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"));
  }, _create:function() {
    this.containerCache = {};
    this.element.addClass("ui-sortable");
    this.refresh();
    this.offset = this.element.offset();
    this._mouseInit();
    this._setHandleClassName();
    this.ready = !0;
  }, _setOption:function(a, b) {
    this._super(a, b);
    "handle" === a && this._setHandleClassName();
  }, _setHandleClassName:function() {
    this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
    a.each(this.items, function() {
      (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
    });
  }, _destroy:function() {
    this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
    this._mouseDestroy();
    for (var a = this.items.length - 1;0 <= a;a--) {
      this.items[a].item.removeData(this.widgetName + "-item");
    }
    return this;
  }, _mouseCapture:function(b, c) {
    var d = null, e = !1, f = this;
    return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(b), a(b.target).parents().each(function() {
      return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0;
    }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), d ? !this.options.handle || c || (a(this.options.handle, d).find("*").addBack().each(function() {
      this === b.target && (e = !0);
    }), e) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1 : !1);
  }, _mouseStart:function(b, c, d) {
    var e;
    c = this.options;
    if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top:this.offset.top - this.margins.top, left:this.offset.left - this.margins.left}, a.extend(this.offset, {click:{left:b.pageX - this.offset.left, top:b.pageY - this.offset.top}, parent:this._getParentOffset(), relative:this._getRelativeOffset()}), 
    this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this.domPosition = {prev:this.currentItem.prev()[0], parent:this.currentItem.parent()[0]}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), c.containment && this._setContainment(), c.cursor && "auto" !== 
    c.cursor && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", c.cursor), this.storedStylesheet = a("<style>*{ cursor: " + c.cursor + " !important; }</style>").appendTo(e)), c.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", c.opacity)), c.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", c.zIndex)), this.scrollParent[0] !== 
    this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d) {
      for (d = this.containers.length - 1;0 <= d;d--) {
        this.containers[d]._trigger("activate", b, this._uiHash(this));
      }
    }
    return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0;
  }, _mouseDrag:function(b) {
    var c, d, e, f;
    c = this.options;
    var g = !1;
    this.position = this._generatePosition(b);
    this.positionAbs = this._convertPositionTo("absolute");
    this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
    this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = g = this.scrollParent[0].scrollTop + c.scrollSpeed : b.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = g = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - 
    b.pageX < c.scrollSensitivity ? this.scrollParent[0].scrollLeft = g = this.scrollParent[0].scrollLeft + c.scrollSpeed : b.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = g = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (b.pageY - this.document.scrollTop() < c.scrollSensitivity ? g = this.document.scrollTop(this.document.scrollTop() - c.scrollSpeed) : this.window.height() - (b.pageY - this.document.scrollTop()) < c.scrollSensitivity && (g = this.document.scrollTop(this.document.scrollTop() + 
    c.scrollSpeed)), b.pageX - this.document.scrollLeft() < c.scrollSensitivity ? g = this.document.scrollLeft(this.document.scrollLeft() - c.scrollSpeed) : this.window.width() - (b.pageX - this.document.scrollLeft()) < c.scrollSensitivity && (g = this.document.scrollLeft(this.document.scrollLeft() + c.scrollSpeed))), !1 !== g && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b));
    this.positionAbs = this._convertPositionTo("absolute");
    this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px");
    this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px");
    for (c = this.items.length - 1;0 <= c;c--) {
      if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], e) : !0)) {
        if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) {
          break;
        }
        this._rearrange(b, d);
        this._trigger("change", b, this._uiHash());
        break;
      }
    }
    return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
  }, _mouseStop:function(b, c) {
    if (b) {
      if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
        var d = this, e = this.placeholder.offset(), f = this.options.axis, g = {};
        f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft));
        f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop));
        this.reverting = !0;
        a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
          d._clear(b);
        });
      } else {
        this._clear(b, c);
      }
      return!1;
    }
  }, cancel:function() {
    if (this.dragging) {
      this._mouseUp({target:null});
      "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
      for (var b = this.containers.length - 1;0 <= b;b--) {
        this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0);
      }
    }
    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {helper:null, dragging:!1, reverting:!1, _noFinalSort:null}), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this;
  }, serialize:function(b) {
    var c = this._getItemsAsjQuery(b && b.connected), d = [];
    return b = b || {}, a(c).each(function() {
      var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
      c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]));
    }), !d.length && b.key && d.push(b.key + "="), d.join("&");
  }, toArray:function(b) {
    var c = this._getItemsAsjQuery(b && b.connected), d = [];
    return b = b || {}, c.each(function() {
      d.push(a(b.item || this).attr(b.attribute || "id") || "");
    }), d;
  }, _intersectsWith:function(a) {
    var b = this.positionAbs.left, c = b + this.helperProportions.width, d = this.positionAbs.top, e = d + this.helperProportions.height, f = a.left, g = f + a.width, h = a.top, l = h + a.height, p = this.offset.click.top, q = this.offset.click.left, q = "y" === this.options.axis || b + q > f && g > b + q, p = ("x" === this.options.axis || d + p > h && l > d + p) && q;
    return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? p : b + this.helperProportions.width / 2 > f && g > c - this.helperProportions.width / 2 && d + this.helperProportions.height / 2 > h && l > e - this.helperProportions.height / 2;
  }, _intersectsWithPointer:function(a) {
    var b = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height);
    a = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width);
    b = b && a;
    a = this._getDragVerticalDirection();
    var c = this._getDragHorizontalDirection();
    return b ? this.floating ? c && "right" === c || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1;
  }, _intersectsWithSides:function(a) {
    var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height);
    a = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width);
    var c = this._getDragVerticalDirection(), d = this._getDragHorizontalDirection();
    return this.floating && d ? "right" === d && a || "left" === d && !a : c && ("down" === c && b || "up" === c && !b);
  }, _getDragVerticalDirection:function() {
    var a = this.positionAbs.top - this.lastPositionAbs.top;
    return 0 !== a && (0 < a ? "down" : "up");
  }, _getDragHorizontalDirection:function() {
    var a = this.positionAbs.left - this.lastPositionAbs.left;
    return 0 !== a && (0 < a ? "right" : "left");
  }, refresh:function(a) {
    return this._refreshItems(a), this._setHandleClassName(), this.refreshPositions(), this;
  }, _connectWith:function() {
    var a = this.options;
    return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith;
  }, _getItemsAsjQuery:function(b) {
    function c() {
      g.push(this);
    }
    var d, e, f, g = [], h = [], l = this._connectWith();
    if (l && b) {
      for (b = l.length - 1;0 <= b;b--) {
        for (e = a(l[b], this.document[0]), d = e.length - 1;0 <= d;d--) {
          (f = a.data(e[d], this.widgetFullName)) && f !== this && !f.options.disabled && h.push([a.isFunction(f.options.items) ? f.options.items.call(f.element) : a(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f]);
        }
      }
    }
    h.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options:this.options, item:this.currentItem}) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
    for (b = h.length - 1;0 <= b;b--) {
      h[b][0].each(c);
    }
    return a(g);
  }, _removeCurrentsFromItems:function() {
    var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
    this.items = a.grep(this.items, function(a) {
      for (var c = 0;b.length > c;c++) {
        if (b[c] === a.item[0]) {
          return!1;
        }
      }
      return!0;
    });
  }, _refreshItems:function(b) {
    this.items = [];
    this.containers = [this];
    var c, d, e, f, g, h = this.items, l = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {item:this.currentItem}) : a(this.options.items, this.element), this]];
    if ((g = this._connectWith()) && this.ready) {
      for (c = g.length - 1;0 <= c;c--) {
        for (e = a(g[c], this.document[0]), d = e.length - 1;0 <= d;d--) {
          (f = a.data(e[d], this.widgetFullName)) && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {item:this.currentItem}) : a(f.options.items, f.element), f]), this.containers.push(f));
        }
      }
    }
    for (c = l.length - 1;0 <= c;c--) {
      for (b = l[c][1], e = l[c][0], d = 0, g = e.length;g > d;d++) {
        f = a(e[d]), f.data(this.widgetName + "-item", b), h.push({item:f, instance:b, width:0, height:0, left:0, top:0});
      }
    }
  }, refreshPositions:function(b) {
    this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1;
    this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
    var c, d, e, f;
    for (c = this.items.length - 1;0 <= c;c--) {
      d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
    }
    if (this.options.custom && this.options.custom.refreshContainers) {
      this.options.custom.refreshContainers.call(this);
    } else {
      for (c = this.containers.length - 1;0 <= c;c--) {
        f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
      }
    }
    return this;
  }, _createPlaceholder:function(b) {
    b = b || this;
    var c, d = b.options;
    d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {element:function() {
      var d = b.currentItem[0].nodeName.toLowerCase(), e = a("<" + d + ">", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
      return "tbody" === d ? b._createTrPlaceholder(b.currentItem.find("tr").eq(0), a("<tr>", b.document[0]).appendTo(e)) : "tr" === d ? b._createTrPlaceholder(b.currentItem, e) : "img" === d && e.attr("src", b.currentItem.attr("src")), c || e.css("visibility", "hidden"), e;
    }, update:function(a, e) {
      (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)));
    }});
    b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem));
    b.currentItem.after(b.placeholder);
    d.placeholder.update(b, b.placeholder);
  }, _createTrPlaceholder:function(b, c) {
    var d = this;
    b.children().each(function() {
      a("<td>&#160;</td>", d.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(c);
    });
  }, _contactContainers:function(b) {
    var c, d, e, f, g, h, l, p, q = f = null;
    for (c = this.containers.length - 1;0 <= c;c--) {
      a.contains(this.currentItem[0], this.containers[c].element[0]) || (this._intersectsWith(this.containers[c].containerCache) ? f && a.contains(this.containers[c].element[0], f.element[0]) || (f = this.containers[c], q = c) : this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0));
    }
    if (f) {
      if (1 === this.containers.length) {
        this.containers[q].containerCache.over || (this.containers[q]._trigger("over", b, this._uiHash(this)), this.containers[q].containerCache.over = 1);
      } else {
        c = 1E4;
        e = null;
        f = (d = f.floating || this._isFloating(this.currentItem)) ? "left" : "top";
        g = d ? "width" : "height";
        p = d ? "clientX" : "clientY";
        for (d = this.items.length - 1;0 <= d;d--) {
          a.contains(this.containers[q].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (h = this.items[d].item.offset()[f], l = !1, b[p] - h > this.items[d][g] / 2 && (l = !0), c > Math.abs(b[p] - h) && (c = Math.abs(b[p] - h), e = this.items[d], this.direction = l ? "up" : "down"));
        }
        if (e || this.options.dropOnEmpty) {
          if (this.currentContainer === this.containers[q]) {
            return this.currentContainer.containerCache.over || (this.containers[q]._trigger("over", b, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
          }
          e ? this._rearrange(b, e, null, !0) : this._rearrange(b, null, this.containers[q].element, !0);
          this._trigger("change", b, this._uiHash());
          this.containers[q]._trigger("change", b, this._uiHash(this));
          this.currentContainer = this.containers[q];
          this.options.placeholder.update(this.currentContainer, this.placeholder);
          this.containers[q]._trigger("over", b, this._uiHash(this));
          this.containers[q].containerCache.over = 1;
        }
      }
    }
  }, _createHelper:function(b) {
    var c = this.options;
    b = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
    return b.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(b[0]), b[0] === this.currentItem[0] && (this._storedCSS = {width:this.currentItem[0].style.width, height:this.currentItem[0].style.height, position:this.currentItem.css("position"), top:this.currentItem.css("top"), left:this.currentItem.css("left")}), (!b[0].style.width || c.forceHelperSize) && b.width(this.currentItem.width()), (!b[0].style.height || c.forceHelperSize) && 
    b.height(this.currentItem.height()), b;
  }, _adjustOffsetFromHelper:function(b) {
    "string" == typeof b && (b = b.split(" "));
    a.isArray(b) && (b = {left:+b[0], top:+b[1] || 0});
    "left" in b && (this.offset.click.left = b.left + this.margins.left);
    "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left);
    "top" in b && (this.offset.click.top = b.top + this.margins.top);
    "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
  }, _getParentOffset:function() {
    this.offsetParent = this.helper.offsetParent();
    var b = this.offsetParent.offset();
    return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {top:0, left:0}), {top:b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left:b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 
    10) || 0)};
  }, _getRelativeOffset:function() {
    if ("relative" === this.cssPosition) {
      var a = this.currentItem.position();
      return{top:a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left:a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()};
    }
    return{top:0, left:0};
  }, _cacheMargins:function() {
    this.margins = {left:parseInt(this.currentItem.css("marginLeft"), 10) || 0, top:parseInt(this.currentItem.css("marginTop"), 10) || 0};
  }, _cacheHelperProportions:function() {
    this.helperProportions = {width:this.helper.outerWidth(), height:this.helper.outerHeight()};
  }, _setContainment:function() {
    var b, c, d, e = this.options;
    "parent" === e.containment && (e.containment = this.helper[0].parentNode);
    "document" !== e.containment && "window" !== e.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === e.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === e.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
    /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 
    10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
  }, _convertPositionTo:function(b, c) {
    c || (c = this.position);
    var d = "absolute" === b ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, f = /(html|body)/i.test(e[0].tagName);
    return{top:c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d, left:c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d};
  }, _generatePosition:function(b) {
    var c, d, e = this.options, f = b.pageX, g = b.pageY, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(h[0].tagName);
    return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && 
    (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + 
    Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {top:g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : h.scrollTop()), left:f - this.offset.click.left - this.offset.relative.left - 
    this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : h.scrollLeft())};
  }, _rearrange:function(a, b, c, d) {
    c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling);
    var e = this.counter = this.counter ? ++this.counter : 1;
    this._delay(function() {
      e === this.counter && this.refreshPositions(!d);
    });
  }, _clear:function(a, b) {
    function c(a, b, d) {
      return function(c) {
        d._trigger(a, c, b._uiHash(b));
      };
    }
    this.reverting = !1;
    var d, e = [];
    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
      for (d in this._storedCSS) {
        "auto" !== this._storedCSS[d] && "static" !== this._storedCSS[d] || (this._storedCSS[d] = "");
      }
      this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
    } else {
      this.currentItem.show();
    }
    this.fromOutside && !b && e.push(function(a) {
      this._trigger("receive", a, this._uiHash(this.fromOutside));
    });
    !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || e.push(function(a) {
      this._trigger("update", a, this._uiHash());
    });
    this !== this.currentContainer && (b || (e.push(function(a) {
      this._trigger("remove", a, this._uiHash());
    }), e.push(function(a) {
      return function(b) {
        a._trigger("receive", b, this._uiHash(this));
      };
    }.call(this, this.currentContainer)), e.push(function(a) {
      return function(b) {
        a._trigger("update", b, this._uiHash(this));
      };
    }.call(this, this.currentContainer))));
    for (d = this.containers.length - 1;0 <= d;d--) {
      b || e.push(c("deactivate", this, this.containers[d])), this.containers[d].containerCache.over && (e.push(c("out", this, this.containers[d])), this.containers[d].containerCache.over = 0);
    }
    if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && 
    this.helper.remove(), this.helper = null), !b) {
      for (d = 0;e.length > d;d++) {
        e[d].call(this, a);
      }
      this._trigger("stop", a, this._uiHash());
    }
    return this.fromOutside = !1, !this.cancelHelperRemoval;
  }, _trigger:function() {
    !1 === a.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
  }, _uiHash:function(b) {
    var c = b || this;
    return{helper:c.helper, placeholder:c.placeholder || a([]), position:c.position, originalPosition:c.originalPosition, offset:c.positionAbs, item:c.currentItem, sender:b ? b.element : null};
  }});
  a.widget("ui.accordion", {version:"1.11.4", options:{active:0, animate:{}, collapsible:!1, event:"click", header:"> li > :first-child,> :not(li):even", heightStyle:"auto", icons:{activeHeader:"ui-icon-triangle-1-s", header:"ui-icon-triangle-1-e"}, activate:null, beforeActivate:null}, hideProps:{borderTopWidth:"hide", borderBottomWidth:"hide", paddingTop:"hide", paddingBottom:"hide", height:"hide"}, showProps:{borderTopWidth:"show", borderBottomWidth:"show", paddingTop:"show", paddingBottom:"show", 
  height:"show"}, _create:function() {
    var b = this.options;
    this.prevShow = this.prevHide = a();
    this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
    b.collapsible || !1 !== b.active && null != b.active || (b.active = 0);
    this._processPanels();
    0 > b.active && (b.active += this.headers.length);
    this._refresh();
  }, _getCreateEventData:function() {
    return{header:this.active, panel:this.active.length ? this.active.next() : a()};
  }, _createIcons:function() {
    var b = this.options.icons;
    b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons"));
  }, _destroyIcons:function() {
    this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();
  }, _destroy:function() {
    var a;
    this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
    this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
    this._destroyIcons();
    a = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
    "content" !== this.options.heightStyle && a.css("height", "");
  }, _setOption:function(a, b) {
    return "active" === a ? (this._activate(b), void 0) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || !1 !== this.options.active || this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), "disabled" === a && (this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b)), 
    void 0);
  }, _keydown:function(b) {
    if (!b.altKey && !b.ctrlKey) {
      var c = a.ui.keyCode, d = this.headers.length, e = this.headers.index(b.target), f = !1;
      switch(b.keyCode) {
        case c.RIGHT:
        ;
        case c.DOWN:
          f = this.headers[(e + 1) % d];
          break;
        case c.LEFT:
        ;
        case c.UP:
          f = this.headers[(e - 1 + d) % d];
          break;
        case c.SPACE:
        ;
        case c.ENTER:
          this._eventHandler(b);
          break;
        case c.HOME:
          f = this.headers[0];
          break;
        case c.END:
          f = this.headers[d - 1];
      }
      f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), b.preventDefault());
    }
  }, _panelKeyDown:function(b) {
    b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus();
  }, refresh:function() {
    var b = this.options;
    this._processPanels();
    !1 === b.active && !0 === b.collapsible || !this.headers.length ? (b.active = !1, this.active = a()) : !1 === b.active ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active);
    this._destroyIcons();
    this._refresh();
  }, _processPanels:function() {
    var a = this.headers, b = this.panels;
    this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
    this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
    b && (this._off(a.not(this.headers)), this._off(b.not(this.panels)));
  }, _refresh:function() {
    var b, c = this.options, d = c.heightStyle, e = this.element.parent();
    this.active = this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
    this.active.next().addClass("ui-accordion-content-active").show();
    this.headers.attr("role", "tab").each(function() {
      var b = a(this), c = b.uniqueId().attr("id"), d = b.next(), e = d.uniqueId().attr("id");
      b.attr("aria-controls", e);
      d.attr("aria-labelledby", c);
    }).next().attr("role", "tabpanel");
    this.headers.not(this.active).attr({"aria-selected":"false", "aria-expanded":"false", tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();
    this.active.length ? this.active.attr({"aria-selected":"true", "aria-expanded":"true", tabIndex:0}).next().attr({"aria-hidden":"false"}) : this.headers.eq(0).attr("tabIndex", 0);
    this._createIcons();
    this._setupEvents(c.event);
    "fill" === d ? (b = e.height(), this.element.siblings(":visible").each(function() {
      var c = a(this), d = c.css("position");
      "absolute" !== d && "fixed" !== d && (b -= c.outerHeight(!0));
    }), this.headers.each(function() {
      b -= a(this).outerHeight(!0);
    }), this.headers.next().each(function() {
      a(this).height(Math.max(0, b - a(this).innerHeight() + a(this).height()));
    }).css("overflow", "auto")) : "auto" === d && (b = 0, this.headers.next().each(function() {
      b = Math.max(b, a(this).css("height", "").height());
    }).height(b));
  }, _activate:function(b) {
    b = this._findActive(b)[0];
    b !== this.active[0] && (b = b || this.active[0], this._eventHandler({target:b, currentTarget:b, preventDefault:a.noop}));
  }, _findActive:function(b) {
    return "number" == typeof b ? this.headers.eq(b) : a();
  }, _setupEvents:function(b) {
    var c = {keydown:"_keydown"};
    b && a.each(b.split(" "), function(a, b) {
      c[b] = "_eventHandler";
    });
    this._off(this.headers.add(this.headers.next()));
    this._on(this.headers, c);
    this._on(this.headers.next(), {keydown:"_panelKeyDown"});
    this._hoverable(this.headers);
    this._focusable(this.headers);
  }, _eventHandler:function(b) {
    var c = this.options, d = this.active, e = a(b.currentTarget), f = e[0] === d[0], g = f && c.collapsible, h = g ? a() : e.next(), l = d.next(), h = {oldHeader:d, oldPanel:l, newHeader:g ? a() : e, newPanel:h};
    b.preventDefault();
    f && !c.collapsible || !1 === this._trigger("beforeActivate", b, h) || (c.active = g ? !1 : this.headers.index(e), this.active = f ? a() : e, this._toggle(h), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), 
    e.next().addClass("ui-accordion-content-active")));
  }, _toggle:function(b) {
    var c = b.newPanel, d = this.prevShow.length ? this.prevShow : b.oldPanel;
    this.prevShow.add(this.prevHide).stop(!0, !0);
    this.prevShow = c;
    this.prevHide = d;
    this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b));
    d.attr({"aria-hidden":"true"});
    d.prev().attr({"aria-selected":"false", "aria-expanded":"false"});
    c.length && d.length ? d.prev().attr({tabIndex:-1, "aria-expanded":"false"}) : c.length && this.headers.filter(function() {
      return 0 === parseInt(a(this).attr("tabIndex"), 10);
    }).attr("tabIndex", -1);
    c.attr("aria-hidden", "false").prev().attr({"aria-selected":"true", "aria-expanded":"true", tabIndex:0});
  }, _animate:function(a, b, c) {
    var d, e, f, g = this, h = 0, l = a.css("box-sizing"), p = a.length && (!b.length || a.index() < b.index()), q = this.options.animate || {}, p = p && q.down || q, s = function() {
      g._toggleComplete(c);
    };
    return "number" == typeof p && (f = p), "string" == typeof p && (e = p), e = e || p.easing || q.easing, f = f || p.duration || q.duration, b.length ? a.length ? (d = a.show().outerHeight(), b.animate(this.hideProps, {duration:f, easing:e, step:function(a, b) {
      b.now = Math.round(a);
    }}), a.hide().animate(this.showProps, {duration:f, easing:e, complete:s, step:function(a, c) {
      c.now = Math.round(a);
      "height" !== c.prop ? "content-box" === l && (h += c.now) : "content" !== g.options.heightStyle && (c.now = Math.round(d - b.outerHeight() - h), h = 0);
    }}), void 0) : b.animate(this.hideProps, f, e, s) : a.animate(this.showProps, f, e, s);
  }, _toggleComplete:function(a) {
    var b = a.oldPanel;
    b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
    b.length && (b.parent()[0].className = b.parent()[0].className);
    this._trigger("activate", null, a);
  }});
  a.widget("ui.menu", {version:"1.11.4", defaultElement:"<ul>", delay:300, options:{icons:{submenu:"ui-icon-carat-1-e"}, items:"> *", menus:"ul", position:{my:"left-1 top", at:"right top"}, role:"menu", blur:null, focus:null, select:null}, _create:function() {
    this.activeMenu = this.element;
    this.mouseHandled = !1;
    this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({role:this.options.role, tabIndex:0});
    this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
    this._on({"mousedown .ui-menu-item":function(a) {
      a.preventDefault();
    }, "click .ui-menu-item":function(b) {
      var c = a(b.target);
      !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
    }, "mouseenter .ui-menu-item":function(b) {
      if (!this.previousFilter) {
        var c = a(b.currentTarget);
        c.siblings(".ui-state-active").removeClass("ui-state-active");
        this.focus(b, c);
      }
    }, mouseleave:"collapseAll", "mouseleave .ui-menu":"collapseAll", focus:function(a, b) {
      var c = this.active || this.element.find(this.options.items).eq(0);
      b || this.focus(a, c);
    }, blur:function(b) {
      this._delay(function() {
        a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b);
      });
    }, keydown:"_keydown"});
    this.refresh();
    this._on(this.document, {click:function(a) {
      this._closeOnDocumentClick(a) && this.collapseAll(a);
      this.mouseHandled = !1;
    }});
  }, _destroy:function() {
    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
    this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
      var b = a(this);
      b.data("ui-menu-submenu-carat") && b.remove();
    });
    this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
  }, _keydown:function(b) {
    var c, d, e, f = !0;
    switch(b.keyCode) {
      case a.ui.keyCode.PAGE_UP:
        this.previousPage(b);
        break;
      case a.ui.keyCode.PAGE_DOWN:
        this.nextPage(b);
        break;
      case a.ui.keyCode.HOME:
        this._move("first", "first", b);
        break;
      case a.ui.keyCode.END:
        this._move("last", "last", b);
        break;
      case a.ui.keyCode.UP:
        this.previous(b);
        break;
      case a.ui.keyCode.DOWN:
        this.next(b);
        break;
      case a.ui.keyCode.LEFT:
        this.collapse(b);
        break;
      case a.ui.keyCode.RIGHT:
        this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
        break;
      case a.ui.keyCode.ENTER:
      ;
      case a.ui.keyCode.SPACE:
        this._activate(b);
        break;
      case a.ui.keyCode.ESCAPE:
        this.collapse(b);
        break;
      default:
        f = !1, c = this.previousFilter || "", d = String.fromCharCode(b.keyCode), e = !1, clearTimeout(this.filterTimer), d === c ? e = !0 : d = c + d, c = this._filterMenuItems(d), c = e && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c, c.length || (d = String.fromCharCode(b.keyCode), c = this._filterMenuItems(d)), c.length ? (this.focus(b, c), this.previousFilter = d, this.filterTimer = this._delay(function() {
          delete this.previousFilter;
        }, 1E3)) : delete this.previousFilter;
    }
    f && b.preventDefault();
  }, _activate:function(a) {
    this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(a) : this.select(a));
  }, refresh:function() {
    var b, c = this, d = this.options.icons.submenu;
    b = this.element.find(this.options.menus);
    this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
    b.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role, "aria-hidden":"true", "aria-expanded":"false"}).each(function() {
      var b = a(this), c = b.parent(), e = a("<span>").addClass("ui-menu-icon ui-icon " + d).data("ui-menu-submenu-carat", !0);
      c.attr("aria-haspopup", "true").prepend(e);
      b.attr("aria-labelledby", c.attr("id"));
    });
    b = b.add(this.element).find(this.options.items);
    b.not(".ui-menu-item").each(function() {
      var b = a(this);
      c._isDivider(b) && b.addClass("ui-widget-content ui-menu-divider");
    });
    b.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1, role:this._itemRole()});
    b.filter(".ui-state-disabled").attr("aria-disabled", "true");
    this.active && !a.contains(this.element[0], this.active[0]) && this.blur();
  }, _itemRole:function() {
    return{menu:"menuitem", listbox:"option"}[this.options.role];
  }, _setOption:function(a, b) {
    "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu);
    "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b);
    this._super(a, b);
  }, focus:function(a, b) {
    var c;
    this.blur(a, a && "focus" === a.type);
    this._scrollIntoView(b);
    this.active = b.first();
    c = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
    this.options.role && this.element.attr("aria-activedescendant", c.attr("id"));
    this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
    a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
      this._close();
    }, this.delay);
    c = b.children(".ui-menu");
    c.length && a && /^mouse/.test(a.type) && this._startOpening(c);
    this.activeMenu = b.parent();
    this._trigger("focus", a, {item:b});
  }, _scrollIntoView:function(b) {
    var c, d, e, f, g, h;
    this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.outerHeight(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h));
  }, blur:function(a, b) {
    b || clearTimeout(this.timer);
    this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {item:this.active}));
  }, _startOpening:function(a) {
    clearTimeout(this.timer);
    "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
      this._close();
      this._open(a);
    }, this.delay));
  }, _open:function(b) {
    var c = a.extend({of:this.active}, this.options.position);
    clearTimeout(this.timer);
    this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true");
    b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c);
  }, collapseAll:function(b, c) {
    clearTimeout(this.timer);
    this.timer = this._delay(function() {
      var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
      d.length || (d = this.element);
      this._close(d);
      this.blur(b);
      this.activeMenu = d;
    }, this.delay);
  }, _close:function(a) {
    a || (a = this.active ? this.active.parent() : this.element);
    a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active");
  }, _closeOnDocumentClick:function(b) {
    return!a(b.target).closest(".ui-menu").length;
  }, _isDivider:function(a) {
    return!/[^\-\u2014\u2013\s]/.test(a.text());
  }, collapse:function(a) {
    var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
    b && b.length && (this._close(), this.focus(a, b));
  }, expand:function(a) {
    var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
    b && b.length && (this._open(b.parent()), this._delay(function() {
      this.focus(a, b);
    }));
  }, next:function(a) {
    this._move("next", "first", a);
  }, previous:function(a) {
    this._move("prev", "last", a);
  }, isFirstItem:function() {
    return this.active && !this.active.prevAll(".ui-menu-item").length;
  }, isLastItem:function() {
    return this.active && !this.active.nextAll(".ui-menu-item").length;
  }, _move:function(a, b, c) {
    var d;
    this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0));
    d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]());
    this.focus(c, d);
  }, nextPage:function(b) {
    var c, d, e;
    return this.active ? (this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
      return c = a(this), 0 > c.offset().top - d - e;
    }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(b), void 0);
  }, previousPage:function(b) {
    var c, d, e;
    return this.active ? (this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
      return c = a(this), 0 < c.offset().top - d + e;
    }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(b), void 0);
  }, _hasScroll:function() {
    return this.element.outerHeight() < this.element.prop("scrollHeight");
  }, select:function(b) {
    this.active = this.active || a(b.target).closest(".ui-menu-item");
    var c = {item:this.active};
    this.active.has(".ui-menu").length || this.collapseAll(b, !0);
    this._trigger("select", b, c);
  }, _filterMenuItems:function(b) {
    b = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    var c = RegExp("^" + b, "i");
    return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
      return c.test(a.trim(a(this).text()));
    });
  }});
  a.widget("ui.autocomplete", {version:"1.11.4", defaultElement:"<input>", options:{appendTo:null, autoFocus:!1, delay:300, minLength:1, position:{my:"left top", at:"left bottom", collision:"none"}, source:null, change:null, close:null, focus:null, open:null, response:null, search:null, select:null}, requestIndex:0, pending:0, _create:function() {
    var b, c, d, e = this.element[0].nodeName.toLowerCase(), f = "textarea" === e, e = "input" === e;
    this.isMultiLine = f ? !0 : e ? !1 : this.element.prop("isContentEditable");
    this.valueMethod = this.element[f || e ? "val" : "text"];
    this.isNewMenu = !0;
    this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
    this._on(this.element, {keydown:function(e) {
      if (this.element.prop("readOnly")) {
        return b = !0, d = !0, c = !0, void 0;
      }
      c = d = b = !1;
      var f = a.ui.keyCode;
      switch(e.keyCode) {
        case f.PAGE_UP:
          b = !0;
          this._move("previousPage", e);
          break;
        case f.PAGE_DOWN:
          b = !0;
          this._move("nextPage", e);
          break;
        case f.UP:
          b = !0;
          this._keyEvent("previous", e);
          break;
        case f.DOWN:
          b = !0;
          this._keyEvent("next", e);
          break;
        case f.ENTER:
          this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
          break;
        case f.TAB:
          this.menu.active && this.menu.select(e);
          break;
        case f.ESCAPE:
          this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
          break;
        default:
          c = !0, this._searchTimeout(e);
      }
    }, keypress:function(d) {
      if (b) {
        return b = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault(), void 0;
      }
      if (!c) {
        var e = a.ui.keyCode;
        switch(d.keyCode) {
          case e.PAGE_UP:
            this._move("previousPage", d);
            break;
          case e.PAGE_DOWN:
            this._move("nextPage", d);
            break;
          case e.UP:
            this._keyEvent("previous", d);
            break;
          case e.DOWN:
            this._keyEvent("next", d);
        }
      }
    }, input:function(a) {
      return d ? (d = !1, a.preventDefault(), void 0) : (this._searchTimeout(a), void 0);
    }, focus:function() {
      this.selectedItem = null;
      this.previous = this._value();
    }, blur:function(a) {
      return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(a), this._change(a), void 0);
    }});
    this._initSource();
    this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance");
    this._on(this.menu.element, {mousedown:function(b) {
      b.preventDefault();
      this.cancelBlur = !0;
      this._delay(function() {
        delete this.cancelBlur;
      });
      var c = this.menu.element[0];
      a(b.target).closest(".ui-menu-item").length || this._delay(function() {
        var b = this;
        this.document.one("mousedown", function(d) {
          d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close();
        });
      });
    }, menufocus:function(b, c) {
      var d, e;
      return this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function() {
        a(b.target).trigger(b.originalEvent);
      }), void 0) : (e = c.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", b, {item:e}) && b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value), d = c.item.attr("aria-label") || e.value, d && a.trim(d).length && (this.liveRegion.children().hide(), a("<div>").text(d).appendTo(this.liveRegion)), void 0);
    }, menuselect:function(a, b) {
      var c = b.item.data("ui-autocomplete-item"), d = this.previous;
      this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
        this.previous = d;
        this.selectedItem = c;
      }));
      !1 !== this._trigger("select", a, {item:c}) && this._value(c.value);
      this.term = this._value();
      this.close(a);
      this.selectedItem = c;
    }});
    this.liveRegion = a("<span>", {role:"status", "aria-live":"assertive", "aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
    this._on(this.window, {beforeunload:function() {
      this.element.removeAttr("autocomplete");
    }});
  }, _destroy:function() {
    clearTimeout(this.searching);
    this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
    this.menu.element.remove();
    this.liveRegion.remove();
  }, _setOption:function(a, b) {
    this._super(a, b);
    "source" === a && this._initSource();
    "appendTo" === a && this.menu.element.appendTo(this._appendTo());
    "disabled" === a && b && this.xhr && this.xhr.abort();
  }, _appendTo:function() {
    var b = this.options.appendTo;
    return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b;
  }, _initSource:function() {
    var b, c, d = this;
    a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
      d(a.ui.autocomplete.filter(b, c.term));
    }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
      d.xhr && d.xhr.abort();
      d.xhr = a.ajax({url:c, data:b, dataType:"json", success:function(a) {
        e(a);
      }, error:function() {
        e([]);
      }});
    }) : this.source = this.options.source;
  }, _searchTimeout:function(a) {
    clearTimeout(this.searching);
    this.searching = this._delay(function() {
      var b = this.term === this._value(), c = this.menu.element.is(":visible"), d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
      b && (!b || c || d) || (this.selectedItem = null, this.search(null, a));
    }, this.options.delay);
  }, search:function(a, b) {
    return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : !1 !== this._trigger("search", b) ? this._search(a) : void 0;
  }, _search:function(a) {
    this.pending++;
    this.element.addClass("ui-autocomplete-loading");
    this.cancelSearch = !1;
    this.source({term:a}, this._response());
  }, _response:function() {
    var b = ++this.requestIndex;
    return a.proxy(function(a) {
      b === this.requestIndex && this.__response(a);
      this.pending--;
      this.pending || this.element.removeClass("ui-autocomplete-loading");
    }, this);
  }, __response:function(a) {
    a && (a = this._normalize(a));
    this._trigger("response", null, {content:a});
    !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close();
  }, close:function(a) {
    this.cancelSearch = !0;
    this._close(a);
  }, _close:function(a) {
    this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a));
  }, _change:function(a) {
    this.previous !== this._value() && this._trigger("change", a, {item:this.selectedItem});
  }, _normalize:function(b) {
    return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
      return "string" == typeof b ? {label:b, value:b} : a.extend({}, b, {label:b.label || b.value, value:b.value || b.label});
    });
  }, _suggest:function(b) {
    var c = this.menu.element.empty();
    this._renderMenu(c, b);
    this.isNewMenu = !0;
    this.menu.refresh();
    c.show();
    this._resizeMenu();
    c.position(a.extend({of:this.element}, this.options.position));
    this.options.autoFocus && this.menu.next();
  }, _resizeMenu:function() {
    var a = this.menu.element;
    a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()));
  }, _renderMenu:function(b, c) {
    var d = this;
    a.each(c, function(a, c) {
      d._renderItemData(b, c);
    });
  }, _renderItemData:function(a, b) {
    return this._renderItem(a, b).data("ui-autocomplete-item", b);
  }, _renderItem:function(b, c) {
    return a("<li>").text(c.label).appendTo(b);
  }, _move:function(a, b) {
    return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[a](b), void 0) : (this.search(null, b), void 0);
  }, widget:function() {
    return this.menu.element;
  }, _value:function() {
    return this.valueMethod.apply(this.element, arguments);
  }, _keyEvent:function(a, b) {
    this.isMultiLine && !this.menu.element.is(":visible") || (this._move(a, b), b.preventDefault());
  }});
  a.extend(a.ui.autocomplete, {escapeRegex:function(a) {
    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }, filter:function(b, c) {
    var d = RegExp(a.ui.autocomplete.escapeRegex(c), "i");
    return a.grep(b, function(a) {
      return d.test(a.label || a.value || a);
    });
  }});
  a.widget("ui.autocomplete", a.ui.autocomplete, {options:{messages:{noResults:"No search results.", results:function(a) {
    return a + (1 < a ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
  }}}, __response:function(b) {
    var c;
    this._superApply(arguments);
    this.options.disabled || this.cancelSearch || (c = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults, this.liveRegion.children().hide(), a("<div>").text(c).appendTo(this.liveRegion));
  }});
  a.ui.autocomplete;
  var v, s = function() {
    var b = a(this);
    setTimeout(function() {
      b.find(":ui-button").button("refresh");
    }, 1);
  }, t = function(b) {
    var c = b.name, d = b.form, e = a([]);
    return c && (c = c.replace(/'/g, "\\'"), e = d ? a(d).find("[name='" + c + "'][type=radio]") : a("[name='" + c + "'][type=radio]", b.ownerDocument).filter(function() {
      return!this.form;
    })), e;
  };
  a.widget("ui.button", {version:"1.11.4", defaultElement:"<button>", options:{disabled:null, text:!0, label:null, icons:{primary:null, secondary:null}}, _create:function() {
    this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, s);
    "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
    this._determineButtonType();
    this.hasTitle = !!this.buttonElement.attr("title");
    var b = this, c = this.options, d = "checkbox" === this.type || "radio" === this.type, e = d ? "" : "ui-state-active";
    null === c.label && (c.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html());
    this._hoverable(this.buttonElement);
    this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
      c.disabled || this === v && a(this).addClass("ui-state-active");
    }).bind("mouseleave" + this.eventNamespace, function() {
      c.disabled || a(this).removeClass(e);
    }).bind("click" + this.eventNamespace, function(a) {
      c.disabled && (a.preventDefault(), a.stopImmediatePropagation());
    });
    this._on({focus:function() {
      this.buttonElement.addClass("ui-state-focus");
    }, blur:function() {
      this.buttonElement.removeClass("ui-state-focus");
    }});
    d && this.element.bind("change" + this.eventNamespace, function() {
      b.refresh();
    });
    "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
      return c.disabled ? !1 : void 0;
    }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
      if (c.disabled) {
        return!1;
      }
      a(this).addClass("ui-state-active");
      b.buttonElement.attr("aria-pressed", "true");
      var d = b.element[0];
      t(d).not(d).map(function() {
        return a(this).button("widget")[0];
      }).removeClass("ui-state-active").attr("aria-pressed", "false");
    }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
      return c.disabled ? !1 : (a(this).addClass("ui-state-active"), v = this, b.document.one("mouseup", function() {
        v = null;
      }), void 0);
    }).bind("mouseup" + this.eventNamespace, function() {
      return c.disabled ? !1 : (a(this).removeClass("ui-state-active"), void 0);
    }).bind("keydown" + this.eventNamespace, function(b) {
      return c.disabled ? !1 : ((b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active"), void 0);
    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
      a(this).removeClass("ui-state-active");
    }), this.buttonElement.is("a") && this.buttonElement.keyup(function(b) {
      b.keyCode === a.ui.keyCode.SPACE && a(this).click();
    }));
    this._setOption("disabled", c.disabled);
    this._resetButton();
  }, _determineButtonType:function() {
    var a, b, c;
    this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
    "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", 
    c)) : this.buttonElement = this.element;
  }, widget:function() {
    return this.buttonElement;
  }, _destroy:function() {
    this.element.removeClass("ui-helper-hidden-accessible");
    this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-active ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
    this.hasTitle || this.buttonElement.removeAttr("title");
  }, _setOption:function(a, b) {
    return this._super(a, b), "disabled" === a ? (this.widget().toggleClass("ui-state-disabled", !!b), this.element.prop("disabled", !!b), b && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0);
  }, refresh:function() {
    var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
    b !== this.options.disabled && this._setOption("disabled", b);
    "radio" === this.type ? t(this.element[0]).each(function() {
      a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
    }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
  }, _resetButton:function() {
    if ("input" === this.type) {
      return this.options.label && this.element.val(this.options.label), void 0;
    }
    var b = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"), c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(), d = this.options.icons, e = d.primary && d.secondary, f = [];
    d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : f.push("ui-button-text-only");
    b.addClass(f.join(" "));
  }});
  a.widget("ui.buttonset", {version:"1.11.4", options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"}, _create:function() {
    this.element.addClass("ui-buttonset");
  }, _init:function() {
    this.refresh();
  }, _setOption:function(a, b) {
    "disabled" === a && this.buttons.button("option", a, b);
    this._super(a, b);
  }, refresh:function() {
    var b = "rtl" === this.element.css("direction"), c = this.element.find(this.options.items), d = c.filter(":ui-button");
    c.not(":ui-button").button();
    d.button("refresh");
    this.buttons = c.map(function() {
      return a(this).button("widget")[0];
    }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end();
  }, _destroy:function() {
    this.element.removeClass("ui-buttonset");
    this.buttons.map(function() {
      return a(this).button("widget")[0];
    }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
  }});
  a.ui.button;
  a.extend(a.ui, {datepicker:{version:"1.11.4"}});
  var x;
  a.extend(e.prototype, {markerClassName:"hasDatepicker", maxRows:4, _widgetDatepicker:function() {
    return this.dpDiv;
  }, setDefaults:function(a) {
    return l(this._defaults, a || {}), this;
  }, _attachDatepicker:function(b, c) {
    var d, e, f;
    d = b.nodeName.toLowerCase();
    e = "div" === d || "span" === d;
    b.id || (this.uuid += 1, b.id = "dp" + this.uuid);
    f = this._newInst(a(b), e);
    f.settings = a.extend({}, c || {});
    "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f);
  }, _newInst:function(b, c) {
    return{id:b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"), input:b, selectedDay:0, selectedMonth:0, selectedYear:0, drawMonth:0, drawYear:0, inline:c, dpDiv:c ? f(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv};
  }, _connectDatepicker:function(b, c) {
    var d = a(b);
    c.append = a([]);
    c.trigger = a([]);
    d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b));
  }, _attachments:function(b, c) {
    var d, e, f;
    d = this._get(c, "appendText");
    var g = this._get(c, "isRTL");
    c.append && c.append.remove();
    d && (c.append = a("<span class='" + this._appendClass + "'>" + d + "</span>"), b[g ? "before" : "after"](c.append));
    b.unbind("focus", this._showDatepicker);
    c.trigger && c.trigger.remove();
    d = this._get(c, "showOn");
    "focus" !== d && "both" !== d || b.focus(this._showDatepicker);
    "button" !== d && "both" !== d || (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({src:f, alt:e, title:e}) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({src:f, alt:e, title:e}) : e)), b[g ? "before" : "after"](c.trigger), c.trigger.click(function() {
      return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1;
    }));
  }, _autoSize:function(a) {
    if (this._get(a, "autoSize") && !a.inline) {
      var b, c, d, e, f = new Date(2009, 11, 20), g = this._get(a, "dateFormat");
      g.match(/[DM]/) && (b = function(a) {
        for (e = d = c = 0;a.length > e;e++) {
          a[e].length > c && (c = a[e].length, d = e);
        }
        return d;
      }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay()));
      a.input.attr("size", this._formatDate(a, f).length);
    }
  }, _inlineDatepicker:function(b, c) {
    var d = a(b);
    d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"));
  }, _dialogDatepicker:function(b, c, d, e, f) {
    var g, h, p, q, s;
    b = this._dialogInst;
    return b || (this.uuid += 1, g = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + g + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), b = this._dialogInst = this._newInst(this._dialogInput, !1), b.settings = {}, a.data(this._dialogInput[0], "datepicker", b)), l(b.settings, e || {}), c = c && c.constructor === Date ? this._formatDate(b, c) : c, this._dialogInput.val(c), this._pos = 
    f ? f.length ? f : [f.pageX, f.pageY] : null, this._pos || (h = document.documentElement.clientWidth, p = document.documentElement.clientHeight, q = document.documentElement.scrollLeft || document.body.scrollLeft, s = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + q, p / 2 - 150 + s]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), b.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), 
    this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], "datepicker", b), this;
  }, _destroyDatepicker:function(b) {
    var c, d = a(b), e = a.data(b, "datepicker");
    d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty(), x === e && (x = null));
  }, _enableDatepicker:function(b) {
    var c, d, e = a(b), f = a.data(b, "datepicker");
    e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function() {
      this.disabled = !1;
    }).end().filter("img").css({opacity:"1.0", cursor:""})) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
      return a === b ? null : a;
    }));
  }, _disableDatepicker:function(b) {
    var c, d, e = a(b), f = a.data(b, "datepicker");
    e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function() {
      this.disabled = !0;
    }).end().filter("img").css({opacity:"0.5", cursor:"default"})) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
      return a === b ? null : a;
    }), this._disabledInputs[this._disabledInputs.length] = b);
  }, _isDisabledDatepicker:function(a) {
    if (!a) {
      return!1;
    }
    for (var b = 0;this._disabledInputs.length > b;b++) {
      if (this._disabledInputs[b] === a) {
        return!0;
      }
    }
    return!1;
  }, _getInst:function(b) {
    try {
      return a.data(b, "datepicker");
    } catch (c) {
      throw "Missing instance data for this datepicker";
    }
  }, _optionDatepicker:function(b, c, d) {
    var e, f, g, h, p = this._getInst(b);
    return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? a.extend({}, a.datepicker._defaults) : p ? "all" === c ? a.extend({}, p.settings) : this._get(p, c) : null : (e = c || {}, "string" == typeof c && (e = {}, e[c] = d), p && (this._curInst === p && this._hideDatepicker(), f = this._getDateDatepicker(b, !0), g = this._getMinMaxDate(p, "min"), h = this._getMinMaxDate(p, "max"), l(p.settings, e), null !== g && void 0 !== e.dateFormat && void 0 === e.minDate && (p.settings.minDate = 
    this._formatDate(p, g)), null !== h && void 0 !== e.dateFormat && void 0 === e.maxDate && (p.settings.maxDate = this._formatDate(p, h)), "disabled" in e && (e.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(a(b), p), this._autoSize(p), this._setDate(p, f), this._updateAlternate(p), this._updateDatepicker(p)), void 0);
  }, _changeDatepicker:function(a, b, c) {
    this._optionDatepicker(a, b, c);
  }, _refreshDatepicker:function(a) {
    (a = this._getInst(a)) && this._updateDatepicker(a);
  }, _setDateDatepicker:function(a, b) {
    var c = this._getInst(a);
    c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c));
  }, _getDateDatepicker:function(a, b) {
    var c = this._getInst(a);
    return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null;
  }, _doKeyDown:function(b) {
    var c, d, e, f = a.datepicker._getInst(b.target), g = !0, h = f.dpDiv.is(".ui-datepicker-rtl");
    if (f._keyEvent = !0, a.datepicker._datepickerShowing) {
      switch(b.keyCode) {
        case 9:
          a.datepicker._hideDatepicker();
          g = !1;
          break;
        case 13:
          return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
        case 27:
          a.datepicker._hideDatepicker();
          break;
        case 33:
          a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
          break;
        case 34:
          a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
          break;
        case 35:
          (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target);
          g = b.ctrlKey || b.metaKey;
          break;
        case 36:
          (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target);
          g = b.ctrlKey || b.metaKey;
          break;
        case 37:
          (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D");
          g = b.ctrlKey || b.metaKey;
          b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
          break;
        case 38:
          (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D");
          g = b.ctrlKey || b.metaKey;
          break;
        case 39:
          (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D");
          g = b.ctrlKey || b.metaKey;
          b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
          break;
        case 40:
          (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D");
          g = b.ctrlKey || b.metaKey;
          break;
        default:
          g = !1;
      }
    } else {
      36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
    }
    g && (b.preventDefault(), b.stopPropagation());
  }, _doKeyPress:function(b) {
    var c, d, e = a.datepicker._getInst(b.target);
    return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || -1 < c.indexOf(d)) : void 0;
  }, _doKeyUp:function(b) {
    var c;
    b = a.datepicker._getInst(b.target);
    if (b.input.val() !== b.lastVal) {
      try {
        (c = a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, a.datepicker._getFormatConfig(b))) && (a.datepicker._setDateFromField(b), a.datepicker._updateAlternate(b), a.datepicker._updateDatepicker(b));
      } catch (d) {
      }
    }
    return!0;
  }, _showDatepicker:function(b) {
    if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
      var c, e, f, g, h, p;
      c = a.datepicker._getInst(b);
      a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0]));
      e = (e = a.datepicker._get(c, "beforeShow")) ? e.apply(b, [b, c]) : {};
      !1 !== e && (l(c.settings, e), c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), f = !1, a(b).parents().each(function() {
        return f |= "fixed" === a(this).css("position"), !f;
      }), g = {left:a.datepicker._pos[0], top:a.datepicker._pos[1]}, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({position:"absolute", display:"block", top:"-1000px"}), a.datepicker._updateDatepicker(c), g = a.datepicker._checkOffset(c, g, f), c.dpDiv.css({position:a.datepicker._inDialog && a.blockUI ? "static" : f ? "fixed" : "absolute", display:"none", left:g.left + "px", top:g.top + "px"}), c.inline || (h = a.datepicker._get(c, "showAnim"), p = a.datepicker._get(c, "duration"), c.dpDiv.css("z-index", 
      d(a(b)) + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[h] ? c.dpDiv.show(h, a.datepicker._get(c, "showOptions"), p) : c.dpDiv[h || "show"](h ? p : null), a.datepicker._shouldFocusInput(c) && c.input.focus(), a.datepicker._curInst = c));
    }
  }, _updateDatepicker:function(b) {
    this.maxRows = 4;
    x = b;
    b.dpDiv.empty().append(this._generateHTML(b));
    this._attachHandlers(b);
    var c, d = this._getNumberOfMonths(b), e = d[1], f = b.dpDiv.find("." + this._dayOverClass + " a");
    0 < f.length && g.apply(f.get(0));
    b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
    1 < e && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em");
    b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
    b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
    b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus();
    b.yearshtml && (c = b.yearshtml, setTimeout(function() {
      c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml);
      c = b.yearshtml = null;
    }, 0));
  }, _shouldFocusInput:function(a) {
    return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus");
  }, _checkOffset:function(b, c, d) {
    var e = b.dpDiv.outerWidth(), f = b.dpDiv.outerHeight(), g = b.input ? b.input.outerWidth() : 0, h = b.input ? b.input.outerHeight() : 0, l = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()), p = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
    return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > l && l > e ? Math.abs(c.left + e - l) : 0), c.top -= Math.min(c.top, c.top + f > p && p > f ? Math.abs(f + h) : 0), c;
  }, _findPos:function(b) {
    for (var c, d = this._getInst(b), d = this._get(d, "isRTL");b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) {
      b = b[d ? "previousSibling" : "nextSibling"];
    }
    return c = a(b).offset(), [c.left, c.top];
  }, _hideDatepicker:function(b) {
    var c, d, e, f, g = this._curInst;
    !g || b && g !== a.data(b, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), d = this._get(g, "duration"), e = function() {
      a.datepicker._tidyDialog(g);
    }, a.effects && (a.effects.effect[c] || a.effects[c]) ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]), this._lastInput = null, this._inDialog && (this._dialogInput.css({position:"absolute", left:"0", top:"-100px"}), a.blockUI && (a.unblockUI(), 
    a("body").append(this.dpDiv))), this._inDialog = !1);
  }, _tidyDialog:function(a) {
    a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
  }, _checkExternalClick:function(b) {
    if (a.datepicker._curInst) {
      b = a(b.target);
      var c = a.datepicker._getInst(b[0]);
      (b[0].id !== a.datepicker._mainDivId && 0 === b.parents("#" + a.datepicker._mainDivId).length && !(b.hasClass(a.datepicker.markerClassName) || b.closest("." + a.datepicker._triggerClass).length || !a.datepicker._datepickerShowing || a.datepicker._inDialog && a.blockUI) || b.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== c) && a.datepicker._hideDatepicker();
    }
  }, _adjustDate:function(b, c, d) {
    b = a(b);
    var e = this._getInst(b[0]);
    this._isDisabledDatepicker(b[0]) || (this._adjustInstDate(e, c + ("M" === d ? this._get(e, "showCurrentAtPos") : 0), d), this._updateDatepicker(e));
  }, _gotoToday:function(b) {
    var c;
    b = a(b);
    var d = this._getInst(b[0]);
    this._get(d, "gotoCurrent") && d.currentDay ? (d.selectedDay = d.currentDay, d.drawMonth = d.selectedMonth = d.currentMonth, d.drawYear = d.selectedYear = d.currentYear) : (c = new Date, d.selectedDay = c.getDate(), d.drawMonth = d.selectedMonth = c.getMonth(), d.drawYear = d.selectedYear = c.getFullYear());
    this._notifyChange(d);
    this._adjustDate(b);
  }, _selectMonthYear:function(b, c, d) {
    b = a(b);
    var e = this._getInst(b[0]);
    e["selected" + ("M" === d ? "Month" : "Year")] = e["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10);
    this._notifyChange(e);
    this._adjustDate(b);
  }, _selectDay:function(b, c, d, e) {
    var f, g = a(b);
    a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)));
  }, _clearDate:function(b) {
    b = a(b);
    this._selectDate(b, "");
  }, _selectDate:function(b, c) {
    var d;
    d = a(b);
    var e = this._getInst(d[0]);
    c = null != c ? c : this._formatDate(e);
    e.input && e.input.val(c);
    this._updateAlternate(e);
    (d = this._get(e, "onSelect")) ? d.apply(e.input ? e.input[0] : null, [c, e]) : e.input && e.input.trigger("change");
    e.inline ? this._updateDatepicker(e) : (this._hideDatepicker(), this._lastInput = e.input[0], "object" != typeof e.input[0] && e.input.focus(), this._lastInput = null);
  }, _updateAlternate:function(b) {
    var c, d, e, f = this._get(b, "altField");
    f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
      a(this).val(e);
    }));
  }, noWeekends:function(a) {
    a = a.getDay();
    return[0 < a && 6 > a, ""];
  }, iso8601Week:function(a) {
    var b;
    a = new Date(a.getTime());
    return a.setDate(a.getDate() + 4 - (a.getDay() || 7)), b = a.getTime(), a.setMonth(0), a.setDate(1), Math.floor(Math.round((b - a) / 864E5) / 7) + 1;
  }, parseDate:function(b, c, d) {
    if (null == b || null == c) {
      throw "Invalid arguments";
    }
    if (c = "object" == typeof c ? "" + c : c + "", "" === c) {
      return null;
    }
    var e, f, g, h, l = 0, p = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff, p = "string" != typeof p ? p : (new Date).getFullYear() % 100 + parseInt(p, 10), q = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort, s = (d ? d.dayNames : null) || this._defaults.dayNames, t = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort;
    d = (d ? d.monthNames : null) || this._defaults.monthNames;
    var v = -1, w = -1, x = -1, N = -1, G = !1, U = function(a) {
      a = b.length > e + 1 && b.charAt(e + 1) === a;
      return a && e++, a;
    }, P = function(a) {
      var b = U(a), b = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2;
      a = RegExp("^\\d{" + ("y" === a ? b : 1) + "," + b + "}");
      a = c.substring(l).match(a);
      if (!a) {
        throw "Missing number at position " + l;
      }
      return l += a[0].length, parseInt(a[0], 10);
    }, ba = function(b, d, e) {
      var f = -1;
      b = a.map(U(b) ? e : d, function(a, b) {
        return[[b, a]];
      }).sort(function(a, b) {
        return-(a[1].length - b[1].length);
      });
      if (a.each(b, function(a, b) {
        var d = b[1];
        return c.substr(l, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], l += d.length, !1) : void 0;
      }), -1 !== f) {
        return f + 1;
      }
      throw "Unknown name at position " + l;
    }, L = function() {
      if (c.charAt(l) !== b.charAt(e)) {
        throw "Unexpected literal at position " + l;
      }
      l++;
    };
    for (e = 0;b.length > e;e++) {
      if (G) {
        "'" !== b.charAt(e) || U("'") ? L() : G = !1;
      } else {
        switch(b.charAt(e)) {
          case "d":
            x = P("d");
            break;
          case "D":
            ba("D", q, s);
            break;
          case "o":
            N = P("o");
            break;
          case "m":
            w = P("m");
            break;
          case "M":
            w = ba("M", t, d);
            break;
          case "y":
            v = P("y");
            break;
          case "@":
            h = new Date(P("@"));
            v = h.getFullYear();
            w = h.getMonth() + 1;
            x = h.getDate();
            break;
          case "!":
            h = new Date((P("!") - this._ticksTo1970) / 1E4);
            v = h.getFullYear();
            w = h.getMonth() + 1;
            x = h.getDate();
            break;
          case "'":
            U("'") ? L() : G = !0;
            break;
          default:
            L();
        }
      }
    }
    if (c.length > l && (g = c.substr(l), !/^\s+/.test(g))) {
      throw "Extra/unparsed characters found in date: " + g;
    }
    if (-1 === v ? v = (new Date).getFullYear() : 100 > v && (v += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (p >= v ? 0 : -100)), -1 < N) {
      for (w = 1, x = N;!(f = this._getDaysInMonth(v, w - 1), f >= x);) {
        w++, x -= f;
      }
    }
    if (h = this._daylightSavingAdjust(new Date(v, w - 1, x)), h.getFullYear() !== v || h.getMonth() + 1 !== w || h.getDate() !== x) {
      throw "Invalid date";
    }
    return h;
  }, ATOM:"yy-mm-dd", COOKIE:"D, dd M yy", ISO_8601:"yy-mm-dd", RFC_822:"D, d M y", RFC_850:"DD, dd-M-y", RFC_1036:"D, d M y", RFC_1123:"D, d M yy", RFC_2822:"D, d M yy", RSS:"D, d M y", TICKS:"!", TIMESTAMP:"@", W3C:"yy-mm-dd", _ticksTo1970:864E9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate:function(a, b, c) {
    if (!b) {
      return "";
    }
    var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort;
    c = (c ? c.monthNames : null) || this._defaults.monthNames;
    var h = function(b) {
      b = a.length > d + 1 && a.charAt(d + 1) === b;
      return b && d++, b;
    }, l = function(a, b, c) {
      b = "" + b;
      if (h(a)) {
        for (;c > b.length;) {
          b = "0" + b;
        }
      }
      return b;
    }, p = function(a, b, c, d) {
      return h(a) ? d[b] : c[b];
    }, q = "", s = !1;
    if (b) {
      for (d = 0;a.length > d;d++) {
        if (s) {
          "'" !== a.charAt(d) || h("'") ? q += a.charAt(d) : s = !1;
        } else {
          switch(a.charAt(d)) {
            case "d":
              q += l("d", b.getDate(), 2);
              break;
            case "D":
              q += p("D", b.getDay(), e, f);
              break;
            case "o":
              q += l("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
              break;
            case "m":
              q += l("m", b.getMonth() + 1, 2);
              break;
            case "M":
              q += p("M", b.getMonth(), g, c);
              break;
            case "y":
              q += h("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
              break;
            case "@":
              q += b.getTime();
              break;
            case "!":
              q += 1E4 * b.getTime() + this._ticksTo1970;
              break;
            case "'":
              h("'") ? q += "'" : s = !0;
              break;
            default:
              q += a.charAt(d);
          }
        }
      }
    }
    return q;
  }, _possibleChars:function(a) {
    var b, c = "", d = !1, e = function(c) {
      c = a.length > b + 1 && a.charAt(b + 1) === c;
      return c && b++, c;
    };
    for (b = 0;a.length > b;b++) {
      if (d) {
        "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
      } else {
        switch(a.charAt(b)) {
          case "d":
          ;
          case "m":
          ;
          case "y":
          ;
          case "@":
            c += "0123456789";
            break;
          case "D":
          ;
          case "M":
            return null;
          case "'":
            e("'") ? c += "'" : d = !0;
            break;
          default:
            c += a.charAt(b);
        }
      }
    }
    return c;
  }, _get:function(a, b) {
    return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b];
  }, _setDateFromField:function(a, b) {
    if (a.input.val() !== a.lastVal) {
      var c = this._get(a, "dateFormat"), d = a.lastVal = a.input ? a.input.val() : null, e = this._getDefaultDate(a), f = e, g = this._getFormatConfig(a);
      try {
        f = this.parseDate(c, d, g) || e;
      } catch (h) {
        d = b ? "" : d;
      }
      a.selectedDay = f.getDate();
      a.drawMonth = a.selectedMonth = f.getMonth();
      a.drawYear = a.selectedYear = f.getFullYear();
      a.currentDay = d ? f.getDate() : 0;
      a.currentMonth = d ? f.getMonth() : 0;
      a.currentYear = d ? f.getFullYear() : 0;
      this._adjustInstDate(a);
    }
  }, _getDefaultDate:function(a) {
    return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date));
  }, _determineDate:function(b, c, d) {
    var e = function(a) {
      var b = new Date;
      return b.setDate(b.getDate() + a), b;
    }, f = function(c) {
      try {
        return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b));
      } catch (d) {
      }
      for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), e = e.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(c);l;) {
        switch(l[2] || "d") {
          case "d":
          ;
          case "D":
            e += parseInt(l[1], 10);
            break;
          case "w":
          ;
          case "W":
            e += 7 * parseInt(l[1], 10);
            break;
          case "m":
          ;
          case "M":
            g += parseInt(l[1], 10);
            e = Math.min(e, a.datepicker._getDaysInMonth(f, g));
            break;
          case "y":
          ;
          case "Y":
            f += parseInt(l[1], 10), e = Math.min(e, a.datepicker._getDaysInMonth(f, g));
        }
        l = h.exec(c);
      }
      return new Date(f, g, e);
    };
    c = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
    return c = c && "Invalid Date" == "" + c ? d : c, c && (c.setHours(0), c.setMinutes(0), c.setSeconds(0), c.setMilliseconds(0)), this._daylightSavingAdjust(c);
  }, _daylightSavingAdjust:function(a) {
    return a ? (a.setHours(12 < a.getHours() ? a.getHours() + 2 : 0), a) : null;
  }, _setDate:function(a, b, c) {
    var d = !b, e = a.selectedMonth, f = a.selectedYear;
    b = this._restrictMinMax(a, this._determineDate(a, b, new Date));
    a.selectedDay = a.currentDay = b.getDate();
    a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
    a.drawYear = a.selectedYear = a.currentYear = b.getFullYear();
    e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a);
    this._adjustInstDate(a);
    a.input && a.input.val(d ? "" : this._formatDate(a));
  }, _getDate:function(a) {
    return!a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
  }, _attachHandlers:function(b) {
    var c = this._get(b, "stepMonths"), d = "#" + b.id.replace(/\\\\/g, "\\");
    b.dpDiv.find("[data-handler]").map(function() {
      a(this).bind(this.getAttribute("data-event"), {prev:function() {
        a.datepicker._adjustDate(d, -c, "M");
      }, next:function() {
        a.datepicker._adjustDate(d, +c, "M");
      }, hide:function() {
        a.datepicker._hideDatepicker();
      }, today:function() {
        a.datepicker._gotoToday(d);
      }, selectDay:function() {
        return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
      }, selectMonth:function() {
        return a.datepicker._selectMonthYear(d, this, "M"), !1;
      }, selectYear:function() {
        return a.datepicker._selectMonthYear(d, this, "Y"), !1;
      }}[this.getAttribute("data-handler")]);
    });
  }, _generateHTML:function(a) {
    var b, c, d, e, f, g, h, l, p, q, s, t, v, w, x, G, U, P, ba, L, R, S, ca, Y, na, Z, da, aa = new Date, aa = this._daylightSavingAdjust(new Date(aa.getFullYear(), aa.getMonth(), aa.getDate())), fa = this._get(a, "isRTL");
    g = this._get(a, "showButtonPanel");
    d = this._get(a, "hideIfNoPrevNext");
    f = this._get(a, "navigationAsDateFormat");
    var V = this._getNumberOfMonths(a), Q = this._get(a, "showCurrentAtPos");
    e = this._get(a, "stepMonths");
    var ma = 1 !== V[0] || 1 !== V[1], xa = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)), ea = this._getMinMaxDate(a, "min"), ha = this._getMinMaxDate(a, "max"), Q = a.drawMonth - Q, B = a.drawYear;
    if (0 > Q && (Q += 12, B--), ha) {
      for (b = this._daylightSavingAdjust(new Date(ha.getFullYear(), ha.getMonth() - V[0] * V[1] + 1, ha.getDate())), b = ea && ea > b ? ea : b;this._daylightSavingAdjust(new Date(B, Q, 1)) > b;) {
        Q--, 0 > Q && (Q = 11, B--);
      }
    }
    a.drawMonth = Q;
    a.drawYear = B;
    b = this._get(a, "prevText");
    b = f ? this.formatDate(b, this._daylightSavingAdjust(new Date(B, Q - e, 1)), this._getFormatConfig(a)) : b;
    b = this._canAdjustMonth(a, -1, B, Q) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + b + "'><span class='ui-icon ui-icon-circle-triangle-" + (fa ? "e" : "w") + "'>" + b + "</span></a>" : d ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + b + "'><span class='ui-icon ui-icon-circle-triangle-" + (fa ? "e" : "w") + "'>" + b + "</span></a>";
    c = this._get(a, "nextText");
    c = f ? this.formatDate(c, this._daylightSavingAdjust(new Date(B, Q + e, 1)), this._getFormatConfig(a)) : c;
    d = this._canAdjustMonth(a, 1, B, Q) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (fa ? "w" : "e") + "'>" + c + "</span></a>" : d ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (fa ? "w" : "e") + "'>" + c + "</span></a>";
    e = this._get(a, "currentText");
    c = this._get(a, "gotoCurrent") && a.currentDay ? xa : aa;
    e = f ? this.formatDate(e, c, this._getFormatConfig(a)) : e;
    f = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>";
    g = g ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (fa ? f : "") + (this._isInRange(a, c) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + e + "</button>" : "") + (fa ? "" : f) + "</div>" : "";
    f = parseInt(this._get(a, "firstDay"), 10);
    f = isNaN(f) ? 0 : f;
    e = this._get(a, "showWeek");
    c = this._get(a, "dayNames");
    h = this._get(a, "dayNamesMin");
    l = this._get(a, "monthNames");
    p = this._get(a, "monthNamesShort");
    q = this._get(a, "beforeShowDay");
    s = this._get(a, "showOtherMonths");
    t = this._get(a, "selectOtherMonths");
    v = this._getDefaultDate(a);
    w = "";
    for (G = 0;V[0] > G;G++) {
      U = "";
      this.maxRows = 4;
      for (P = 0;V[1] > P;P++) {
        if (ba = this._daylightSavingAdjust(new Date(B, Q, a.selectedDay)), x = " ui-corner-all", L = "", ma) {
          if (L += "<div class='ui-datepicker-group", 1 < V[1]) {
            switch(P) {
              case 0:
                L += " ui-datepicker-group-first";
                x = " ui-corner-" + (fa ? "right" : "left");
                break;
              case V[1] - 1:
                L += " ui-datepicker-group-last";
                x = " ui-corner-" + (fa ? "left" : "right");
                break;
              default:
                L += " ui-datepicker-group-middle", x = "";
            }
          }
          L += "'>";
        }
        L += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + x + "'>" + (/all|left/.test(x) && 0 === G ? fa ? d : b : "") + (/all|right/.test(x) && 0 === G ? fa ? b : d : "") + this._generateMonthYearHeader(a, Q, B, ea, ha, 0 < G || 0 < P, l, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
        R = e ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "";
        for (x = 0;7 > x;x++) {
          S = (x + f) % 7, R += "<th scope='col'" + (5 <= (x + f + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + c[S] + "'>" + h[S] + "</span></th>";
        }
        L += R + "</tr></thead><tbody>";
        R = this._getDaysInMonth(B, Q);
        B === a.selectedYear && Q === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, R));
        x = (this._getFirstDayOfMonth(B, Q) - f + 7) % 7;
        R = Math.ceil((x + R) / 7);
        this.maxRows = R = ma ? this.maxRows > R ? this.maxRows : R : R;
        S = this._daylightSavingAdjust(new Date(B, Q, 1 - x));
        for (ca = 0;R > ca;ca++) {
          L += "<tr>";
          Y = e ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(S) + "</td>" : "";
          for (x = 0;7 > x;x++) {
            na = q ? q.apply(a.input ? a.input[0] : null, [S]) : [!0, ""], da = (Z = S.getMonth() !== Q) && !t || !na[0] || ea && ea > S || ha && S > ha, Y += "<td class='" + (5 <= (x + f + 6) % 7 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (S.getTime() === ba.getTime() && Q === a.selectedMonth && a._keyEvent || v.getTime() === S.getTime() && v.getTime() === ba.getTime() ? " " + this._dayOverClass : "") + (da ? " " + this._unselectableClass + " ui-state-disabled" : 
            "") + (Z && !s ? "" : " " + na[1] + (S.getTime() === xa.getTime() ? " " + this._currentClass : "") + (S.getTime() === aa.getTime() ? " ui-datepicker-today" : "")) + "'" + (Z && !s || !na[2] ? "" : " title='" + na[2].replace(/'/g, "&#39;") + "'") + (da ? "" : " data-handler='selectDay' data-event='click' data-month='" + S.getMonth() + "' data-year='" + S.getFullYear() + "'") + ">" + (Z && !s ? "&#xa0;" : da ? "<span class='ui-state-default'>" + S.getDate() + "</span>" : "<a class='ui-state-default" + 
            (S.getTime() === aa.getTime() ? " ui-state-highlight" : "") + (S.getTime() === xa.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + "' href='#'>" + S.getDate() + "</a>") + "</td>", S.setDate(S.getDate() + 1), S = this._daylightSavingAdjust(S);
          }
          L += Y + "</tr>";
        }
        Q++;
        11 < Q && (Q = 0, B++);
        L += "</tbody></table>" + (ma ? "</div>" + (0 < V[0] && P === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
        U += L;
      }
      w += U;
    }
    return w += g, a._keyEvent = !1, w;
  }, _generateMonthYearHeader:function(a, b, c, d, e, f, g, h) {
    var l, p, q, s = this._get(a, "changeMonth"), t = this._get(a, "changeYear"), v = this._get(a, "showMonthAfterYear"), w = "<div class='ui-datepicker-title'>", x = "";
    if (f || !s) {
      x += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
    } else {
      g = d && d.getFullYear() === c;
      l = e && e.getFullYear() === c;
      x += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
      for (p = 0;12 > p;p++) {
        (!g || p >= d.getMonth()) && (!l || e.getMonth() >= p) && (x += "<option value='" + p + "'" + (p === b ? " selected='selected'" : "") + ">" + h[p] + "</option>");
      }
      x += "</select>";
    }
    if (v || (w += x + (!f && s && t ? "" : "&#xa0;")), !a.yearshtml) {
      if (a.yearshtml = "", f || !t) {
        w += "<span class='ui-datepicker-year'>" + c + "</span>";
      } else {
        h = this._get(a, "yearRange").split(":");
        q = (new Date).getFullYear();
        g = function(a) {
          a = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? q + parseInt(a, 10) : parseInt(a, 10);
          return isNaN(a) ? q : a;
        };
        b = g(h[0]);
        h = Math.max(b, g(h[1] || ""));
        b = d ? Math.max(b, d.getFullYear()) : b;
        h = e ? Math.min(h, e.getFullYear()) : h;
        for (a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";h >= b;b++) {
          a.yearshtml += "<option value='" + b + "'" + (b === c ? " selected='selected'" : "") + ">" + b + "</option>";
        }
        a.yearshtml += "</select>";
        w += a.yearshtml;
        a.yearshtml = null;
      }
    }
    return w += this._get(a, "yearSuffix"), v && (w += (!f && s && t ? "" : "&#xa0;") + x), w += "</div>";
  }, _adjustInstDate:function(a, b, c) {
    var d = a.drawYear + ("Y" === c ? b : 0), e = a.drawMonth + ("M" === c ? b : 0);
    b = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0);
    d = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, b)));
    a.selectedDay = d.getDate();
    a.drawMonth = a.selectedMonth = d.getMonth();
    a.drawYear = a.selectedYear = d.getFullYear();
    "M" !== c && "Y" !== c || this._notifyChange(a);
  }, _restrictMinMax:function(a, b) {
    var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max"), c = c && c > b ? c : b;
    return d && c > d ? d : c;
  }, _notifyChange:function(a) {
    var b = this._get(a, "onChangeMonthYear");
    b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a]);
  }, _getNumberOfMonths:function(a) {
    a = this._get(a, "numberOfMonths");
    return null == a ? [1, 1] : "number" == typeof a ? [1, a] : a;
  }, _getMinMaxDate:function(a, b) {
    return this._determineDate(a, this._get(a, b + "Date"), null);
  }, _getDaysInMonth:function(a, b) {
    return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate();
  }, _getFirstDayOfMonth:function(a, b) {
    return(new Date(a, b, 1)).getDay();
  }, _canAdjustMonth:function(a, b, c, d) {
    var e = this._getNumberOfMonths(a);
    c = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
    return 0 > b && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth())), this._isInRange(a, c);
  }, _isInRange:function(a, b) {
    var c, d, e = this._getMinMaxDate(a, "min"), f = this._getMinMaxDate(a, "max"), g = null, h = null, l = this._get(a, "yearRange");
    return l && (c = l.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || h >= b.getFullYear());
  }, _getFormatConfig:function(a) {
    var b = this._get(a, "shortYearCutoff");
    return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {shortYearCutoff:b, dayNamesShort:this._get(a, "dayNamesShort"), dayNames:this._get(a, "dayNames"), monthNamesShort:this._get(a, "monthNamesShort"), monthNames:this._get(a, "monthNames")};
  }, _formatDate:function(a, b, c, d) {
    b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
    b = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
    return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a));
  }});
  a.fn.datepicker = function(b) {
    if (!this.length) {
      return this;
    }
    a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0);
    0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
    var c = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() {
      "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b);
    }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c));
  };
  a.datepicker = new e;
  a.datepicker.initialized = !1;
  a.datepicker.uuid = (new Date).getTime();
  a.datepicker.version = "1.11.4";
  a.datepicker;
  a.widget("ui.dialog", {version:"1.11.4", options:{appendTo:"body", autoOpen:!0, buttons:[], closeOnEscape:!0, closeText:"Close", dialogClass:"", draggable:!0, hide:null, height:"auto", maxHeight:null, maxWidth:null, minHeight:150, minWidth:150, modal:!1, position:{my:"center", at:"center", of:window, collision:"fit", using:function(b) {
    var c = a(this).css(b).offset().top;
    0 > c && a(this).css("top", b.top - c);
  }}, resizable:!0, show:null, title:null, width:300, beforeClose:null, close:null, drag:null, dragStart:null, dragStop:null, focus:null, open:null, resize:null, resizeStart:null, resizeStop:null}, sizeRelatedOptions:{buttons:!0, height:!0, maxHeight:!0, maxWidth:!0, minHeight:!0, minWidth:!0, width:!0}, resizableRelatedOptions:{maxHeight:!0, maxWidth:!0, minHeight:!0, minWidth:!0}, _create:function() {
    this.originalCss = {display:this.element[0].style.display, width:this.element[0].style.width, minHeight:this.element[0].style.minHeight, maxHeight:this.element[0].style.maxHeight, height:this.element[0].style.height};
    this.originalPosition = {parent:this.element.parent(), index:this.element.parent().children().index(this.element)};
    this.originalTitle = this.element.attr("title");
    this.options.title = this.options.title || this.originalTitle;
    this._createWrapper();
    this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
    this._createTitlebar();
    this._createButtonPane();
    this.options.draggable && a.fn.draggable && this._makeDraggable();
    this.options.resizable && a.fn.resizable && this._makeResizable();
    this._isOpen = !1;
    this._trackFocus();
  }, _init:function() {
    this.options.autoOpen && this.open();
  }, _appendTo:function() {
    var b = this.options.appendTo;
    return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0);
  }, _destroy:function() {
    var a, b = this.originalPosition;
    this._untrackInstance();
    this._destroyOverlay();
    this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
    this.uiDialog.stop(!0, !0).remove();
    this.originalTitle && this.element.attr("title", this.originalTitle);
    a = b.parent.children().eq(b.index);
    a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element);
  }, widget:function() {
    return this.uiDialog;
  }, disable:a.noop, enable:a.noop, close:function(b) {
    var c, d = this;
    if (this._isOpen && !1 !== this._trigger("beforeClose", b)) {
      if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) {
        try {
          (c = this.document[0].activeElement) && "body" !== c.nodeName.toLowerCase() && a(c).blur();
        } catch (e) {
        }
      }
      this._hide(this.uiDialog, this.options.hide, function() {
        d._trigger("close", b);
      });
    }
  }, isOpen:function() {
    return this._isOpen;
  }, moveToTop:function() {
    this._moveToTop();
  }, _moveToTop:function(b, c) {
    var d = !1, e = this.uiDialog.siblings(".ui-front:visible").map(function() {
      return+a(this).css("z-index");
    }).get(), e = Math.max.apply(null, e);
    return e >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", e + 1), d = !0), d && !c && this._trigger("focus", b), d;
  }, open:function() {
    var b = this;
    return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = a(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
      b._focusTabbable();
      b._trigger("focus");
    }), this._makeFocusTarget(), this._trigger("open"), void 0);
  }, _focusTabbable:function() {
    var a = this._focusedElement;
    a || (a = this.element.find("[autofocus]"));
    a.length || (a = this.element.find(":tabbable"));
    a.length || (a = this.uiDialogButtonPane.find(":tabbable"));
    a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable"));
    a.length || (a = this.uiDialog);
    a.eq(0).focus();
  }, _keepFocus:function(b) {
    function c() {
      var b = this.document[0].activeElement;
      this.uiDialog[0] === b || a.contains(this.uiDialog[0], b) || this._focusTabbable();
    }
    b.preventDefault();
    c.call(this);
    this._delay(c);
  }, _createWrapper:function() {
    this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({tabIndex:-1, role:"dialog"}).appendTo(this._appendTo());
    this._on(this.uiDialog, {keydown:function(b) {
      if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) {
        return b.preventDefault(), this.close(b), void 0;
      }
      if (b.keyCode === a.ui.keyCode.TAB && !b.isDefaultPrevented()) {
        var c = this.uiDialog.find(":tabbable"), d = c.filter(":first"), e = c.filter(":last");
        b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (this._delay(function() {
          e.focus();
        }), b.preventDefault()) : (this._delay(function() {
          d.focus();
        }), b.preventDefault());
      }
    }, mousedown:function(a) {
      this._moveToTop(a) && this._focusTabbable();
    }});
    this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")});
  }, _createTitlebar:function() {
    var b;
    this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
    this._on(this.uiDialogTitlebar, {mousedown:function(b) {
      a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus();
    }});
    this.uiDialogTitlebarClose = a("<button type='button'></button>").button({label:this.options.closeText, icons:{primary:"ui-icon-closethick"}, text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
    this._on(this.uiDialogTitlebarClose, {click:function(a) {
      a.preventDefault();
      this.close(a);
    }});
    b = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
    this._title(b);
    this.uiDialog.attr({"aria-labelledby":b.attr("id")});
  }, _title:function(a) {
    this.options.title || a.html("&#160;");
    a.text(this.options.title);
  }, _createButtonPane:function() {
    this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
    this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
    this._createButtons();
  }, _createButtons:function() {
    var b = this, c = this.options.buttons;
    return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (a.each(c, function(c, d) {
      var e, f;
      d = a.isFunction(d) ? {click:d, text:c} : d;
      d = a.extend({type:"button"}, d);
      e = d.click;
      d.click = function() {
        e.apply(b.element[0], arguments);
      };
      f = {icons:d.icons, text:d.showText};
      delete d.icons;
      delete d.showText;
      a("<button></button>", d).button(f).appendTo(b.uiButtonSet);
    }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0);
  }, _makeDraggable:function() {
    function b(a) {
      return{position:a.position, offset:a.offset};
    }
    var c = this, d = this.options;
    this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close", handle:".ui-dialog-titlebar", containment:"document", start:function(d, e) {
      a(this).addClass("ui-dialog-dragging");
      c._blockFrames();
      c._trigger("dragStart", d, b(e));
    }, drag:function(a, d) {
      c._trigger("drag", a, b(d));
    }, stop:function(e, f) {
      var g = f.offset.left - c.document.scrollLeft(), h = f.offset.top - c.document.scrollTop();
      d.position = {my:"left top", at:"left" + (0 <= g ? "+" : "") + g + " top" + (0 <= h ? "+" : "") + h, of:c.window};
      a(this).removeClass("ui-dialog-dragging");
      c._unblockFrames();
      c._trigger("dragStop", e, b(f));
    }});
  }, _makeResizable:function() {
    function b(a) {
      return{originalPosition:a.originalPosition, originalSize:a.originalSize, position:a.position, size:a.size};
    }
    var c = this, d = this.options, e = d.resizable, f = this.uiDialog.css("position"), e = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
    this.uiDialog.resizable({cancel:".ui-dialog-content", containment:"document", alsoResize:this.element, maxWidth:d.maxWidth, maxHeight:d.maxHeight, minWidth:d.minWidth, minHeight:this._minHeight(), handles:e, start:function(d, e) {
      a(this).addClass("ui-dialog-resizing");
      c._blockFrames();
      c._trigger("resizeStart", d, b(e));
    }, resize:function(a, d) {
      c._trigger("resize", a, b(d));
    }, stop:function(e, f) {
      var g = c.uiDialog.offset(), h = g.left - c.document.scrollLeft(), g = g.top - c.document.scrollTop();
      d.height = c.uiDialog.height();
      d.width = c.uiDialog.width();
      d.position = {my:"left top", at:"left" + (0 <= h ? "+" : "") + h + " top" + (0 <= g ? "+" : "") + g, of:c.window};
      a(this).removeClass("ui-dialog-resizing");
      c._unblockFrames();
      c._trigger("resizeStop", e, b(f));
    }}).css("position", f);
  }, _trackFocus:function() {
    this._on(this.widget(), {focusin:function(b) {
      this._makeFocusTarget();
      this._focusedElement = a(b.target);
    }});
  }, _makeFocusTarget:function() {
    this._untrackInstance();
    this._trackingInstances().unshift(this);
  }, _untrackInstance:function() {
    var b = this._trackingInstances(), c = a.inArray(this, b);
    -1 !== c && b.splice(c, 1);
  }, _trackingInstances:function() {
    var a = this.document.data("ui-dialog-instances");
    return a || (a = [], this.document.data("ui-dialog-instances", a)), a;
  }, _minHeight:function() {
    var a = this.options;
    return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height);
  }, _position:function() {
    var a = this.uiDialog.is(":visible");
    a || this.uiDialog.show();
    this.uiDialog.position(this.options.position);
    a || this.uiDialog.hide();
  }, _setOptions:function(b) {
    var c = this, d = !1, e = {};
    a.each(b, function(a, b) {
      c._setOption(a, b);
      a in c.sizeRelatedOptions && (d = !0);
      a in c.resizableRelatedOptions && (e[a] = b);
    });
    d && (this._size(), this._position());
    this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", e);
  }, _setOption:function(a, b) {
    var c, d, e = this.uiDialog;
    "dialogClass" === a && e.removeClass(this.options.dialogClass).addClass(b);
    "disabled" !== a && (this._super(a, b), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({label:"" + b}), "draggable" === a && (c = e.is(":data(ui-draggable)"), c && !b && e.draggable("destroy"), !c && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && (d = e.is(":data(ui-resizable)"), d && !b && e.resizable("destroy"), d && "string" == typeof b && 
    e.resizable("option", "handles", b), d || !1 === b || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
  }, _size:function() {
    var a, b, c, d = this.options;
    this.element.show().css({width:"auto", minHeight:0, maxHeight:"none", height:0});
    d.minWidth > d.width && (d.width = d.minWidth);
    a = this.uiDialog.css({height:"auto", width:d.width}).outerHeight();
    b = Math.max(0, d.minHeight - a);
    c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none";
    "auto" === d.height ? this.element.css({minHeight:b, maxHeight:c, height:"auto"}) : this.element.height(Math.max(0, d.height - a));
    this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
  }, _blockFrames:function() {
    this.iframeBlocks = this.document.find("iframe").map(function() {
      var b = a(this);
      return a("<div>").css({position:"absolute", width:b.outerWidth(), height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0];
    });
  }, _unblockFrames:function() {
    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
  }, _allowInteraction:function(b) {
    return a(b.target).closest(".ui-dialog").length ? !0 : !!a(b.target).closest(".ui-datepicker").length;
  }, _createOverlay:function() {
    if (this.options.modal) {
      var b = !0;
      this._delay(function() {
        b = !1;
      });
      this.document.data("ui-dialog-overlays") || this._on(this.document, {focusin:function(a) {
        b || this._allowInteraction(a) || (a.preventDefault(), this._trackingInstances()[0]._focusTabbable());
      }});
      this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
      this._on(this.overlay, {mousedown:"_keepFocus"});
      this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
    }
  }, _destroyOverlay:function() {
    if (this.options.modal && this.overlay) {
      var a = this.document.data("ui-dialog-overlays") - 1;
      a ? this.document.data("ui-dialog-overlays", a) : this.document.unbind("focusin").removeData("ui-dialog-overlays");
      this.overlay.remove();
      this.overlay = null;
    }
  }});
  a.widget("ui.progressbar", {version:"1.11.4", options:{max:100, value:0, change:null, complete:null}, min:0, _create:function() {
    this.oldValue = this.options.value = this._constrainedValue();
    this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar", "aria-valuemin":this.min});
    this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
    this._refreshValue();
  }, _destroy:function() {
    this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
    this.valueDiv.remove();
  }, value:function(a) {
    return void 0 === a ? this.options.value : (this.options.value = this._constrainedValue(a), this._refreshValue(), void 0);
  }, _constrainedValue:function(a) {
    return void 0 === a && (a = this.options.value), this.indeterminate = !1 === a, "number" != typeof a && (a = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, a));
  }, _setOptions:function(a) {
    var b = a.value;
    delete a.value;
    this._super(a);
    this.options.value = this._constrainedValue(b);
    this._refreshValue();
  }, _setOption:function(a, b) {
    "max" === a && (b = Math.max(this.min, b));
    "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b);
    this._super(a, b);
  }, _percentage:function() {
    return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
  }, _refreshValue:function() {
    var b = this.options.value, c = this._percentage();
    this.valueDiv.toggle(this.indeterminate || b > this.min).toggleClass("ui-corner-right", b === this.options.max).width(c.toFixed(0) + "%");
    this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
    this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({"aria-valuemax":this.options.max, "aria-valuenow":b}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
    this.oldValue !== b && (this.oldValue = b, this._trigger("change"));
    b === this.options.max && this._trigger("complete");
  }});
  a.widget("ui.selectmenu", {version:"1.11.4", defaultElement:"<select>", options:{appendTo:null, disabled:null, icons:{button:"ui-icon-triangle-1-s"}, position:{my:"left top", at:"left bottom", collision:"none"}, width:null, change:null, close:null, focus:null, open:null, select:null}, _create:function() {
    var a = this.element.uniqueId().attr("id");
    this.ids = {element:a, button:a + "-button", menu:a + "-menu"};
    this._drawButton();
    this._drawMenu();
    this.options.disabled && this.disable();
  }, _drawButton:function() {
    var b = this;
    this.label = a("label[for='" + this.ids.element + "']").attr("for", this.ids.button);
    this._on(this.label, {click:function(a) {
      this.button.focus();
      a.preventDefault();
    }});
    this.element.hide();
    this.button = a("<span>", {"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all", tabindex:this.options.disabled ? -1 : 0, id:this.ids.button, role:"combobox", "aria-expanded":"false", "aria-autocomplete":"list", "aria-owns":this.ids.menu, "aria-haspopup":"true"}).insertAfter(this.element);
    a("<span>", {"class":"ui-icon " + this.options.icons.button}).prependTo(this.button);
    this.buttonText = a("<span>", {"class":"ui-selectmenu-text"}).appendTo(this.button);
    this._setText(this.buttonText, this.element.find("option:selected").text());
    this._resizeButton();
    this._on(this.button, this._buttonEvents);
    this.button.one("focusin", function() {
      b.menuItems || b._refreshMenu();
    });
    this._hoverable(this.button);
    this._focusable(this.button);
  }, _drawMenu:function() {
    var b = this;
    this.menu = a("<ul>", {"aria-hidden":"true", "aria-labelledby":this.ids.button, id:this.ids.menu});
    this.menuWrap = a("<div>", {"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo());
    this.menuInstance = this.menu.menu({role:"listbox", select:function(a, c) {
      a.preventDefault();
      b._setSelection();
      b._select(c.item.data("ui-selectmenu-item"), a);
    }, focus:function(a, c) {
      var d = c.item.data("ui-selectmenu-item");
      null != b.focusIndex && d.index !== b.focusIndex && (b._trigger("focus", a, {item:d}), b.isOpen || b._select(d, a));
      b.focusIndex = d.index;
      b.button.attr("aria-activedescendant", b.menuItems.eq(d.index).attr("id"));
    }}).menu("instance");
    this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");
    this.menuInstance._off(this.menu, "mouseleave");
    this.menuInstance._closeOnDocumentClick = function() {
      return!1;
    };
    this.menuInstance._isDivider = function() {
      return!1;
    };
  }, refresh:function() {
    this._refreshMenu();
    this._setText(this.buttonText, this._getSelectedItem().text());
    this.options.width || this._resizeButton();
  }, _refreshMenu:function() {
    this.menu.empty();
    var a, b = this.element.find("option");
    b.length && (this._parseOptions(b), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), a = this._getSelectedItem(), this.menuInstance.focus(null, a), this._setAria(a.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
  }, open:function(a) {
    this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", a));
  }, _position:function() {
    this.menuWrap.position(a.extend({of:this.button}, this.options.position));
  }, close:function(a) {
    this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", a));
  }, widget:function() {
    return this.button;
  }, menuWidget:function() {
    return this.menu;
  }, _renderMenu:function(b, c) {
    var d = this, e = "";
    a.each(c, function(c, f) {
      f.optgroup !== e && (a("<li>", {"class":"ui-selectmenu-optgroup ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""), text:f.optgroup}).appendTo(b), e = f.optgroup);
      d._renderItemData(b, f);
    });
  }, _renderItemData:function(a, b) {
    return this._renderItem(a, b).data("ui-selectmenu-item", b);
  }, _renderItem:function(b, c) {
    var d = a("<li>");
    return c.disabled && d.addClass("ui-state-disabled"), this._setText(d, c.label), d.appendTo(b);
  }, _setText:function(a, b) {
    b ? a.text(b) : a.html("&#160;");
  }, _move:function(a, b) {
    var c, d = ".ui-menu-item";
    this.isOpen ? c = this.menuItems.eq(this.focusIndex) : (c = this.menuItems.eq(this.element[0].selectedIndex), d += ":not(.ui-state-disabled)");
    c = "first" === a || "last" === a ? c["first" === a ? "prevAll" : "nextAll"](d).eq(-1) : c[a + "All"](d).eq(0);
    c.length && this.menuInstance.focus(b, c);
  }, _getSelectedItem:function() {
    return this.menuItems.eq(this.element[0].selectedIndex);
  }, _toggle:function(a) {
    this[this.isOpen ? "close" : "open"](a);
  }, _setSelection:function() {
    var a;
    this.range && (window.getSelection ? (a = window.getSelection(), a.removeAllRanges(), a.addRange(this.range)) : this.range.select(), this.button.focus());
  }, _documentClick:{mousedown:function(b) {
    this.isOpen && (a(b.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(b));
  }}, _buttonEvents:{mousedown:function() {
    var a;
    window.getSelection ? (a = window.getSelection(), a.rangeCount && (this.range = a.getRangeAt(0))) : this.range = document.selection.createRange();
  }, click:function(a) {
    this._setSelection();
    this._toggle(a);
  }, keydown:function(b) {
    var c = !0;
    switch(b.keyCode) {
      case a.ui.keyCode.TAB:
      ;
      case a.ui.keyCode.ESCAPE:
        this.close(b);
        c = !1;
        break;
      case a.ui.keyCode.ENTER:
        this.isOpen && this._selectFocusedItem(b);
        break;
      case a.ui.keyCode.UP:
        b.altKey ? this._toggle(b) : this._move("prev", b);
        break;
      case a.ui.keyCode.DOWN:
        b.altKey ? this._toggle(b) : this._move("next", b);
        break;
      case a.ui.keyCode.SPACE:
        this.isOpen ? this._selectFocusedItem(b) : this._toggle(b);
        break;
      case a.ui.keyCode.LEFT:
        this._move("prev", b);
        break;
      case a.ui.keyCode.RIGHT:
        this._move("next", b);
        break;
      case a.ui.keyCode.HOME:
      ;
      case a.ui.keyCode.PAGE_UP:
        this._move("first", b);
        break;
      case a.ui.keyCode.END:
      ;
      case a.ui.keyCode.PAGE_DOWN:
        this._move("last", b);
        break;
      default:
        this.menu.trigger(b), c = !1;
    }
    c && b.preventDefault();
  }}, _selectFocusedItem:function(a) {
    var b = this.menuItems.eq(this.focusIndex);
    b.hasClass("ui-state-disabled") || this._select(b.data("ui-selectmenu-item"), a);
  }, _select:function(a, b) {
    var c = this.element[0].selectedIndex;
    this.element[0].selectedIndex = a.index;
    this._setText(this.buttonText, a.label);
    this._setAria(a);
    this._trigger("select", b, {item:a});
    a.index !== c && this._trigger("change", b, {item:a});
    this.close(b);
  }, _setAria:function(a) {
    a = this.menuItems.eq(a.index).attr("id");
    this.button.attr({"aria-labelledby":a, "aria-activedescendant":a});
    this.menu.attr("aria-activedescendant", a);
  }, _setOption:function(a, b) {
    "icons" === a && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(b.button);
    this._super(a, b);
    "appendTo" === a && this.menuWrap.appendTo(this._appendTo());
    "disabled" === a && (this.menuInstance.option("disabled", b), this.button.toggleClass("ui-state-disabled", b).attr("aria-disabled", b), this.element.prop("disabled", b), b ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0));
    "width" === a && this._resizeButton();
  }, _appendTo:function() {
    var b = this.options.appendTo;
    return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b;
  }, _toggleAttr:function() {
    this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen);
    this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen);
    this.menu.attr("aria-hidden", !this.isOpen);
  }, _resizeButton:function() {
    var a = this.options.width;
    a || (a = this.element.show().outerWidth(), this.element.hide());
    this.button.outerWidth(a);
  }, _resizeMenu:function() {
    this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
  }, _getCreateOptions:function() {
    return{disabled:this.element.prop("disabled")};
  }, _parseOptions:function(b) {
    var c = [];
    b.each(function(b, d) {
      var e = a(d), f = e.parent("optgroup");
      c.push({element:e, index:b, value:e.val(), label:e.text(), optgroup:f.attr("label") || "", disabled:f.prop("disabled") || e.prop("disabled")});
    });
    this.items = c;
  }, _destroy:function() {
    this.menuWrap.remove();
    this.button.remove();
    this.element.show();
    this.element.removeUniqueId();
    this.label.attr("for", this.ids.element);
  }});
  a.widget("ui.slider", a.ui.mouse, {version:"1.11.4", widgetEventPrefix:"slide", options:{animate:!1, distance:0, max:100, min:0, orientation:"horizontal", range:!1, step:1, value:0, values:null, change:null, slide:null, start:null, stop:null}, numPages:5, _create:function() {
    this._mouseSliding = this._keySliding = !1;
    this._animateOff = !0;
    this._handleIndex = null;
    this._detectOrientation();
    this._mouseInit();
    this._calculateNewMax();
    this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
    this._refresh();
    this._setOption("disabled", this.options.disabled);
    this._animateOff = !1;
  }, _refresh:function() {
    this._createRange();
    this._createHandles();
    this._setupEvents();
    this._refreshValue();
  }, _createHandles:function() {
    var b, c;
    b = this.options;
    var d = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), e = [];
    c = b.values && b.values.length || 1;
    d.length > c && (d.slice(c).remove(), d = d.slice(0, c));
    for (b = d.length;c > b;b++) {
      e.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
    }
    this.handles = d.add(a(e.join("")).appendTo(this.element));
    this.handle = this.handles.eq(0);
    this.handles.each(function(b) {
      a(this).data("ui-slider-handle-index", b);
    });
  }, _createRange:function() {
    var b = this.options, c = "";
    b.range ? (!0 === b.range && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0], b.values[0]] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"", bottom:""}) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === 
    b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : (this.range && this.range.remove(), this.range = null);
  }, _setupEvents:function() {
    this._off(this.handles);
    this._on(this.handles, this._handleEvents);
    this._hoverable(this.handles);
    this._focusable(this.handles);
  }, _destroy:function() {
    this.handles.remove();
    this.range && this.range.remove();
    this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
    this._mouseDestroy();
  }, _mouseCapture:function(b) {
    var c, d, e, f, g, h, l, p, q = this, s = this.options;
    return s.disabled ? !1 : (this.elementSize = {width:this.element.outerWidth(), height:this.element.outerHeight()}, this.elementOffset = this.element.offset(), c = {x:b.pageX, y:b.pageY}, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function(b) {
      var c = Math.abs(d - q.values(b));
      (e > c || e === c && (b === q._lastChangedValue || q.values(b) === s.min)) && (e = c, f = a(this), g = b);
    }), h = this._start(b, g), !1 === h ? !1 : (this._mouseSliding = !0, this._handleIndex = g, f.addClass("ui-state-active").focus(), l = f.offset(), p = !a(b.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = p ? {left:0, top:0} : {left:b.pageX - l.left - f.width() / 2, top:b.pageY - l.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)}, this.handles.hasClass("ui-state-hover") || 
    this._slide(b, g, d), this._animateOff = !0, !0));
  }, _mouseStart:function() {
    return!0;
  }, _mouseDrag:function(a) {
    var b = this._normValueFromMouse({x:a.pageX, y:a.pageY});
    return this._slide(a, this._handleIndex, b), !1;
  }, _mouseStop:function(a) {
    return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
  }, _detectOrientation:function() {
    this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
  }, _normValueFromMouse:function(a) {
    var b, c, d, e, f;
    return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, 1 < d && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f);
  }, _start:function(a, b) {
    var c = {handle:this.handles[b], value:this.value()};
    return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c);
  }, _slide:function(a, b, c) {
    var d, e, f;
    this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === b && c > d || 1 === b && d > c) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {handle:this.handles[b], value:c, values:e}), this.values(b ? 0 : 1), !1 !== f && this.values(b, c))) : c !== this.value() && (f = this._trigger("slide", a, {handle:this.handles[b], value:c}), !1 !== f && this.value(c));
  }, _stop:function(a, b) {
    var c = {handle:this.handles[b], value:this.value()};
    this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values());
    this._trigger("stop", a, c);
  }, _change:function(a, b) {
    if (!this._keySliding && !this._mouseSliding) {
      var c = {handle:this.handles[b], value:this.value()};
      this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values());
      this._lastChangedValue = b;
      this._trigger("change", a, c);
    }
  }, value:function(a) {
    return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0), void 0) : this._value();
  }, values:function(b, c) {
    var d, e, f;
    if (1 < arguments.length) {
      return this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), this._change(null, b), void 0;
    }
    if (!arguments.length) {
      return this._values();
    }
    if (!a.isArray(arguments[0])) {
      return this.options.values && this.options.values.length ? this._values(b) : this.value();
    }
    d = this.options.values;
    e = arguments[0];
    for (f = 0;d.length > f;f += 1) {
      d[f] = this._trimAlignValue(e[f]), this._change(null, f);
    }
    this._refreshValue();
  }, _setOption:function(b, c) {
    var d, e = 0;
    switch("range" === b && !0 === this.options.range && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), "disabled" === b && this.element.toggleClass("ui-state-disabled", !!c), this._super(b, c), b) {
      case "orientation":
        this._detectOrientation();
        this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
        this._refreshValue();
        this.handles.css("horizontal" === c ? "bottom" : "left", "");
        break;
      case "value":
        this._animateOff = !0;
        this._refreshValue();
        this._change(null, 0);
        this._animateOff = !1;
        break;
      case "values":
        this._animateOff = !0;
        this._refreshValue();
        for (d = 0;e > d;d += 1) {
          this._change(null, d);
        }
        this._animateOff = !1;
        break;
      case "step":
      ;
      case "min":
      ;
      case "max":
        this._animateOff = !0;
        this._calculateNewMax();
        this._refreshValue();
        this._animateOff = !1;
        break;
      case "range":
        this._animateOff = !0, this._refresh(), this._animateOff = !1;
    }
  }, _value:function() {
    return this._trimAlignValue(this.options.value);
  }, _values:function(a) {
    var b, c;
    if (arguments.length) {
      return b = this.options.values[a], this._trimAlignValue(b);
    }
    if (this.options.values && this.options.values.length) {
      b = this.options.values.slice();
      for (c = 0;b.length > c;c += 1) {
        b[c] = this._trimAlignValue(b[c]);
      }
      return b;
    }
    return[];
  }, _trimAlignValue:function(a) {
    if (this._valueMin() >= a) {
      return this._valueMin();
    }
    if (a >= this._valueMax()) {
      return this._valueMax();
    }
    var b = 0 < this.options.step ? this.options.step : 1, c = (a - this._valueMin()) % b;
    a -= c;
    return 2 * Math.abs(c) >= b && (a += 0 < c ? b : -b), parseFloat(a.toFixed(5));
  }, _calculateNewMax:function() {
    var a = this.options.max, b = this._valueMin(), c = this.options.step, a = Math.floor(+(a - b).toFixed(this._precision()) / c) * c + b;
    this.max = parseFloat(a.toFixed(this._precision()));
  }, _precision:function() {
    var a = this._precisionOf(this.options.step);
    return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a;
  }, _precisionOf:function(a) {
    a = "" + a;
    var b = a.indexOf(".");
    return-1 === b ? 0 : a.length - b - 1;
  }, _valueMin:function() {
    return this.options.min;
  }, _valueMax:function() {
    return this.max;
  }, _refreshValue:function() {
    var b, c, d, e, f, g = this.options.range, h = this.options, l = this, p = this._animateOff ? !1 : h.animate, q = {};
    this.options.values && this.options.values.length ? this.handles.each(function(d) {
      c = 100 * ((l.values(d) - l._valueMin()) / (l._valueMax() - l._valueMin()));
      q["horizontal" === l.orientation ? "left" : "bottom"] = c + "%";
      a(this).stop(1, 1)[p ? "animate" : "css"](q, h.animate);
      !0 === l.options.range && ("horizontal" === l.orientation ? (0 === d && l.range.stop(1, 1)[p ? "animate" : "css"]({left:c + "%"}, h.animate), 1 === d && l.range[p ? "animate" : "css"]({width:c - b + "%"}, {queue:!1, duration:h.animate})) : (0 === d && l.range.stop(1, 1)[p ? "animate" : "css"]({bottom:c + "%"}, h.animate), 1 === d && l.range[p ? "animate" : "css"]({height:c - b + "%"}, {queue:!1, duration:h.animate})));
      b = c;
    }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, q["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[p ? "animate" : "css"](q, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[p ? "animate" : "css"]({width:c + "%"}, h.animate), "max" === g && "horizontal" === this.orientation && this.range[p ? "animate" : "css"]({width:100 - c + "%"}, {queue:!1, duration:h.animate}), 
    "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[p ? "animate" : "css"]({height:c + "%"}, h.animate), "max" === g && "vertical" === this.orientation && this.range[p ? "animate" : "css"]({height:100 - c + "%"}, {queue:!1, duration:h.animate}));
  }, _handleEvents:{keydown:function(b) {
    var c, d, e, f = a(b.target).data("ui-slider-handle-index");
    switch(b.keyCode) {
      case a.ui.keyCode.HOME:
      ;
      case a.ui.keyCode.END:
      ;
      case a.ui.keyCode.PAGE_UP:
      ;
      case a.ui.keyCode.PAGE_DOWN:
      ;
      case a.ui.keyCode.UP:
      ;
      case a.ui.keyCode.RIGHT:
      ;
      case a.ui.keyCode.DOWN:
      ;
      case a.ui.keyCode.LEFT:
        if (b.preventDefault(), !this._keySliding && (this._keySliding = !0, a(b.target).addClass("ui-state-active"), c = this._start(b, f), !1 === c)) {
          return;
        }
      ;
    }
    switch(e = this.options.step, c = d = this.options.values && this.options.values.length ? this.values(f) : this.value(), b.keyCode) {
      case a.ui.keyCode.HOME:
        d = this._valueMin();
        break;
      case a.ui.keyCode.END:
        d = this._valueMax();
        break;
      case a.ui.keyCode.PAGE_UP:
        d = this._trimAlignValue(c + (this._valueMax() - this._valueMin()) / this.numPages);
        break;
      case a.ui.keyCode.PAGE_DOWN:
        d = this._trimAlignValue(c - (this._valueMax() - this._valueMin()) / this.numPages);
        break;
      case a.ui.keyCode.UP:
      ;
      case a.ui.keyCode.RIGHT:
        if (c === this._valueMax()) {
          return;
        }
        d = this._trimAlignValue(c + e);
        break;
      case a.ui.keyCode.DOWN:
      ;
      case a.ui.keyCode.LEFT:
        if (c === this._valueMin()) {
          return;
        }
        d = this._trimAlignValue(c - e);
    }
    this._slide(b, f, d);
  }, keyup:function(b) {
    var c = a(b.target).data("ui-slider-handle-index");
    this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), a(b.target).removeClass("ui-state-active"));
  }}});
  a.widget("ui.spinner", {version:"1.11.4", defaultElement:"<input>", widgetEventPrefix:"spin", options:{culture:null, icons:{down:"ui-icon-triangle-1-s", up:"ui-icon-triangle-1-n"}, incremental:!0, max:null, min:null, numberFormat:null, page:10, step:1, change:null, spin:null, start:null, stop:null}, _create:function() {
    this._setOption("max", this.options.max);
    this._setOption("min", this.options.min);
    this._setOption("step", this.options.step);
    "" !== this.value() && this._value(this.element.val(), !0);
    this._draw();
    this._on(this._events);
    this._refresh();
    this._on(this.window, {beforeunload:function() {
      this.element.removeAttr("autocomplete");
    }});
  }, _getCreateOptions:function() {
    var b = {}, c = this.element;
    return a.each(["min", "max", "step"], function(a, d) {
      var e = c.attr(d);
      void 0 !== e && e.length && (b[d] = e);
    }), b;
  }, _events:{keydown:function(a) {
    this._start(a) && this._keydown(a) && a.preventDefault();
  }, keyup:"_stop", focus:function() {
    this.previous = this.element.val();
  }, blur:function(a) {
    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", a), void 0);
  }, mousewheel:function(a, b) {
    if (b) {
      if (!this.spinning && !this._start(a)) {
        return!1;
      }
      this._spin((0 < b ? 1 : -1) * this.options.step, a);
      clearTimeout(this.mousewheelTimer);
      this.mousewheelTimer = this._delay(function() {
        this.spinning && this._stop(a);
      }, 100);
      a.preventDefault();
    }
  }, "mousedown .ui-spinner-button":function(b) {
    function c() {
      this.element[0] === this.document[0].activeElement || (this.element.focus(), this.previous = d, this._delay(function() {
        this.previous = d;
      }));
    }
    var d;
    d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
    b.preventDefault();
    c.call(this);
    this.cancelBlur = !0;
    this._delay(function() {
      delete this.cancelBlur;
      c.call(this);
    });
    !1 !== this._start(b) && this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b);
  }, "mouseup .ui-spinner-button":"_stop", "mouseenter .ui-spinner-button":function(b) {
    return a(b.currentTarget).hasClass("ui-state-active") ? !1 === this._start(b) ? !1 : (this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b), void 0) : void 0;
  }, "mouseleave .ui-spinner-button":"_stop"}, _draw:function() {
    var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
    this.element.attr("role", "spinbutton");
    this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
    this.buttons.height() > Math.ceil(0.5 * a.height()) && 0 < a.height() && a.height(a.height());
    this.options.disabled && this.disable();
  }, _keydown:function(b) {
    var c = this.options, d = a.ui.keyCode;
    switch(b.keyCode) {
      case d.UP:
        return this._repeat(null, 1, b), !0;
      case d.DOWN:
        return this._repeat(null, -1, b), !0;
      case d.PAGE_UP:
        return this._repeat(null, c.page, b), !0;
      case d.PAGE_DOWN:
        return this._repeat(null, -c.page, b), !0;
    }
    return!1;
  }, _uiSpinnerHtml:function() {
    return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
  }, _buttonHtml:function() {
    return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>";
  }, _start:function(a) {
    return this.spinning || !1 !== this._trigger("start", a) ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1;
  }, _repeat:function(a, b, c) {
    a = a || 500;
    clearTimeout(this.timer);
    this.timer = this._delay(function() {
      this._repeat(40, b, c);
    }, a);
    this._spin(b * this.options.step, c);
  }, _spin:function(a, b) {
    var c = this.value() || 0;
    this.counter || (this.counter = 1);
    c = this._adjustValue(c + a * this._increment(this.counter));
    this.spinning && !1 === this._trigger("spin", b, {value:c}) || (this._value(c), this.counter++);
  }, _increment:function(b) {
    var c = this.options.incremental;
    return c ? a.isFunction(c) ? c(b) : Math.floor(b * b * b / 5E4 - b * b / 500 + 17 * b / 200 + 1) : 1;
  }, _precision:function() {
    var a = this._precisionOf(this.options.step);
    return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a;
  }, _precisionOf:function(a) {
    a = "" + a;
    var b = a.indexOf(".");
    return-1 === b ? 0 : a.length - b - 1;
  }, _adjustValue:function(a) {
    var b, c, d = this.options;
    return b = null !== d.min ? d.min : 0, c = a - b, c = Math.round(c / d.step) * d.step, a = b + c, a = parseFloat(a.toFixed(this._precision())), null !== d.max && a > d.max ? d.max : null !== d.min && d.min > a ? d.min : a;
  }, _stop:function(a) {
    this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a));
  }, _setOption:function(a, b) {
    if ("culture" === a || "numberFormat" === a) {
      var c = this._parse(this.element.val());
      return this.options[a] = b, this.element.val(this._format(c)), void 0;
    }
    "max" !== a && "min" !== a && "step" !== a || "string" != typeof b || (b = this._parse(b));
    "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down));
    this._super(a, b);
    "disabled" === a && (this.widget().toggleClass("ui-state-disabled", !!b), this.element.prop("disabled", !!b), this.buttons.button(b ? "disable" : "enable"));
  }, _setOptions:h(function(a) {
    this._super(a);
  }), _parse:function(a) {
    return "string" == typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a), "" === a || isNaN(a) ? null : a;
  }, _format:function(a) {
    return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a;
  }, _refresh:function() {
    this.element.attr({"aria-valuemin":this.options.min, "aria-valuemax":this.options.max, "aria-valuenow":this._parse(this.element.val())});
  }, isValid:function() {
    var a = this.value();
    return null === a ? !1 : a === this._adjustValue(a);
  }, _value:function(a, b) {
    var c;
    "" !== a && (c = this._parse(a), null !== c && (b || (c = this._adjustValue(c)), a = this._format(c)));
    this.element.val(a);
    this._refresh();
  }, _destroy:function() {
    this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
    this.uiSpinner.replaceWith(this.element);
  }, stepUp:h(function(a) {
    this._stepUp(a);
  }), _stepUp:function(a) {
    this._start() && (this._spin((a || 1) * this.options.step), this._stop());
  }, stepDown:h(function(a) {
    this._stepDown(a);
  }), _stepDown:function(a) {
    this._start() && (this._spin((a || 1) * -this.options.step), this._stop());
  }, pageUp:h(function(a) {
    this._stepUp((a || 1) * this.options.page);
  }), pageDown:h(function(a) {
    this._stepDown((a || 1) * this.options.page);
  }), value:function(a) {
    return arguments.length ? (h(this._value).call(this, a), void 0) : this._parse(this.element.val());
  }, widget:function() {
    return this.uiSpinner;
  }});
  a.widget("ui.tabs", {version:"1.11.4", delay:300, options:{active:null, collapsible:!1, event:"click", heightStyle:"content", hide:null, show:null, activate:null, beforeActivate:null, beforeLoad:null, load:null}, _isLocal:function() {
    var a = /#.*$/;
    return function(b) {
      var c, d;
      b = b.cloneNode(!1);
      c = b.href.replace(a, "");
      d = location.href.replace(a, "");
      try {
        c = decodeURIComponent(c);
      } catch (e) {
      }
      try {
        d = decodeURIComponent(d);
      } catch (f) {
      }
      return 1 < b.hash.length && c === d;
    };
  }(), _create:function() {
    var b = this, c = this.options;
    this.running = !1;
    this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible);
    this._processTabs();
    c.active = this._initialActive();
    a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
      return b.tabs.index(a);
    }))).sort());
    this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(c.active) : a();
    this._refresh();
    this.active.length && this.load(c.active);
  }, _initialActive:function() {
    var b = this.options.active, c = this.options.collapsible, d = location.hash.substring(1);
    return null === b && (d && this.tabs.each(function(c, e) {
      return a(e).attr("aria-controls") === d ? (b = c, !1) : void 0;
    }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === b || -1 === b) && (b = this.tabs.length ? 0 : !1)), !1 !== b && (b = this.tabs.index(this.tabs.eq(b)), -1 === b && (b = c ? !1 : 0)), !c && !1 === b && this.anchors.length && (b = 0), b;
  }, _getCreateEventData:function() {
    return{tab:this.active, panel:this.active.length ? this._getPanelForTab(this.active) : a()};
  }, _tabKeydown:function(b) {
    var c = a(this.document[0].activeElement).closest("li"), d = this.tabs.index(c), e = !0;
    if (!this._handlePageNav(b)) {
      switch(b.keyCode) {
        case a.ui.keyCode.RIGHT:
        ;
        case a.ui.keyCode.DOWN:
          d++;
          break;
        case a.ui.keyCode.UP:
        ;
        case a.ui.keyCode.LEFT:
          e = !1;
          d--;
          break;
        case a.ui.keyCode.END:
          d = this.anchors.length - 1;
          break;
        case a.ui.keyCode.HOME:
          d = 0;
          break;
        case a.ui.keyCode.SPACE:
          return b.preventDefault(), clearTimeout(this.activating), this._activate(d), void 0;
        case a.ui.keyCode.ENTER:
          return b.preventDefault(), clearTimeout(this.activating), this._activate(d === this.options.active ? !1 : d), void 0;
        default:
          return;
      }
      b.preventDefault();
      clearTimeout(this.activating);
      d = this._focusNextTab(d, e);
      b.ctrlKey || b.metaKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
        this.option("active", d);
      }, this.delay));
    }
  }, _panelKeydown:function(b) {
    this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), this.active.focus());
  }, _handlePageNav:function(b) {
    return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
  }, _findNextTab:function(b, c) {
    for (var d = this.tabs.length - 1;-1 !== a.inArray((b > d && (b = 0), 0 > b && (b = d), b), this.options.disabled);) {
      b = c ? b + 1 : b - 1;
    }
    return b;
  }, _focusNextTab:function(a, b) {
    return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a;
  }, _setOption:function(a, b) {
    return "active" === a ? (this._activate(b), void 0) : "disabled" === a ? (this._setupDisabled(b), void 0) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), b || !1 !== this.options.active || this._activate(0)), "event" === a && this._setupEvents(b), "heightStyle" === a && this._setupHeightStyle(b), void 0);
  }, _sanitizeSelector:function(a) {
    return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
  }, refresh:function() {
    var b = this.options, c = this.tablist.children(":has(a[href])");
    b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
      return c.index(a);
    });
    this._processTabs();
    !1 !== b.active && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = a());
    this._refresh();
  }, _refresh:function() {
    this._setupDisabled(this.options.disabled);
    this._setupEvents(this.options.event);
    this._setupHeightStyle(this.options.heightStyle);
    this.tabs.not(this.active).attr({"aria-selected":"false", "aria-expanded":"false", tabIndex:-1});
    this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"});
    this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true", "aria-expanded":"true", tabIndex:0}), this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})) : this.tabs.eq(0).attr("tabIndex", 0);
  }, _processTabs:function() {
    var b = this, c = this.tabs, d = this.anchors, e = this.panels;
    this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(b) {
      a(this).is(".ui-state-disabled") && b.preventDefault();
    }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
      a(this).closest("li").is(".ui-state-disabled") && this.blur();
    });
    this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab", tabIndex:-1});
    this.anchors = this.tabs.map(function() {
      return a("a", this)[0];
    }).addClass("ui-tabs-anchor").attr({role:"presentation", tabIndex:-1});
    this.panels = a();
    this.anchors.each(function(c, d) {
      var e, f, g, h = a(d).uniqueId().attr("id"), l = a(d).closest("li"), p = l.attr("aria-controls");
      b._isLocal(d) ? (e = d.hash, g = e.substring(1), f = b.element.find(b._sanitizeSelector(e))) : (g = l.attr("aria-controls") || a({}).uniqueId()[0].id, e = "#" + g, f = b.element.find(e), f.length || (f = b._createPanel(g), f.insertAfter(b.panels[c - 1] || b.tablist)), f.attr("aria-live", "polite"));
      f.length && (b.panels = b.panels.add(f));
      p && l.data("ui-tabs-aria-controls", p);
      l.attr({"aria-controls":g, "aria-labelledby":h});
      f.attr("aria-labelledby", h);
    });
    this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
    c && (this._off(c.not(this.tabs)), this._off(d.not(this.anchors)), this._off(e.not(this.panels)));
  }, _getList:function() {
    return this.tablist || this.element.find("ol,ul").eq(0);
  }, _createPanel:function(b) {
    return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0);
  }, _setupDisabled:function(b) {
    a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
    for (var c, d = 0;c = this.tabs[d];d++) {
      !0 === b || -1 !== a.inArray(d, b) ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
    }
    this.options.disabled = b;
  }, _setupEvents:function(b) {
    var c = {};
    b && a.each(b.split(" "), function(a, b) {
      c[b] = "_eventHandler";
    });
    this._off(this.anchors.add(this.tabs).add(this.panels));
    this._on(!0, this.anchors, {click:function(a) {
      a.preventDefault();
    }});
    this._on(this.anchors, c);
    this._on(this.tabs, {keydown:"_tabKeydown"});
    this._on(this.panels, {keydown:"_panelKeydown"});
    this._focusable(this.tabs);
    this._hoverable(this.tabs);
  }, _setupHeightStyle:function(b) {
    var c, d = this.element.parent();
    "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
      var b = a(this), d = b.css("position");
      "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0));
    }), this.element.children().not(this.panels).each(function() {
      c -= a(this).outerHeight(!0);
    }), this.panels.each(function() {
      a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()));
    }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
      c = Math.max(c, a(this).height("").height());
    }).height(c));
  }, _eventHandler:function(b) {
    var c = this.options, d = this.active, e = a(b.currentTarget).closest("li"), f = e[0] === d[0], g = f && c.collapsible, h = g ? a() : this._getPanelForTab(e), l = d.length ? this._getPanelForTab(d) : a(), d = {oldTab:d, oldPanel:l, newTab:g ? a() : e, newPanel:h};
    b.preventDefault();
    e.hasClass("ui-state-disabled") || e.hasClass("ui-tabs-loading") || this.running || f && !c.collapsible || !1 === this._trigger("beforeActivate", b, d) || (c.active = g ? !1 : this.tabs.index(e), this.active = f ? a() : e, this.xhr && this.xhr.abort(), l.length || h.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(e), b), this._toggle(b, d));
  }, _toggle:function(b, c) {
    function d() {
      f.running = !1;
      f._trigger("activate", b, c);
    }
    function e() {
      c.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
      g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d());
    }
    var f = this, g = c.newPanel, h = c.oldPanel;
    this.running = !0;
    h.length && this.options.hide ? this._hide(h, this.options.hide, function() {
      c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
      e();
    }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e());
    h.attr("aria-hidden", "true");
    c.oldTab.attr({"aria-selected":"false", "aria-expanded":"false"});
    g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
      return 0 === a(this).attr("tabIndex");
    }).attr("tabIndex", -1);
    g.attr("aria-hidden", "false");
    c.newTab.attr({"aria-selected":"true", "aria-expanded":"true", tabIndex:0});
  }, _activate:function(b) {
    var c;
    b = this._findActive(b);
    b[0] !== this.active[0] && (b.length || (b = this.active), c = b.find(".ui-tabs-anchor")[0], this._eventHandler({target:c, currentTarget:c, preventDefault:a.noop}));
  }, _findActive:function(b) {
    return!1 === b ? a() : this.tabs.eq(b);
  }, _getIndex:function(a) {
    return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a;
  }, _destroy:function() {
    this.xhr && this.xhr.abort();
    this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
    this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
    this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
    this.tablist.unbind(this.eventNamespace);
    this.tabs.add(this.panels).each(function() {
      a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");
    });
    this.tabs.each(function() {
      var b = a(this), c = b.data("ui-tabs-aria-controls");
      c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls");
    });
    this.panels.show();
    "content" !== this.options.heightStyle && this.panels.css("height", "");
  }, enable:function(b) {
    var c = this.options.disabled;
    !1 !== c && (void 0 === b ? c = !1 : (b = this._getIndex(b), c = a.isArray(c) ? a.map(c, function(a) {
      return a !== b ? a : null;
    }) : a.map(this.tabs, function(a, c) {
      return c !== b ? c : null;
    })), this._setupDisabled(c));
  }, disable:function(b) {
    var c = this.options.disabled;
    if (!0 !== c) {
      if (void 0 === b) {
        c = !0;
      } else {
        if (b = this._getIndex(b), -1 !== a.inArray(b, c)) {
          return;
        }
        c = a.isArray(c) ? a.merge([b], c).sort() : [b];
      }
      this._setupDisabled(c);
    }
  }, load:function(b, c) {
    b = this._getIndex(b);
    var d = this, e = this.tabs.eq(b), f = e.find(".ui-tabs-anchor"), g = this._getPanelForTab(e), h = {tab:e, panel:g}, l = function(a, b) {
      "abort" === b && d.panels.stop(!1, !0);
      e.removeClass("ui-tabs-loading");
      g.removeAttr("aria-busy");
      a === d.xhr && delete d.xhr;
    };
    this._isLocal(f[0]) || (this.xhr = a.ajax(this._ajaxSettings(f, c, h)), this.xhr && "canceled" !== this.xhr.statusText && (e.addClass("ui-tabs-loading"), g.attr("aria-busy", "true"), this.xhr.done(function(a, b, e) {
      setTimeout(function() {
        g.html(a);
        d._trigger("load", c, h);
        l(e, b);
      }, 1);
    }).fail(function(a, b) {
      setTimeout(function() {
        l(a, b);
      }, 1);
    })));
  }, _ajaxSettings:function(b, c, d) {
    var e = this;
    return{url:b.attr("href"), beforeSend:function(b, f) {
      return e._trigger("beforeLoad", c, a.extend({jqXHR:b, ajaxSettings:f}, d));
    }};
  }, _getPanelForTab:function(b) {
    b = a(b).attr("aria-controls");
    return this.element.find(this._sanitizeSelector("#" + b));
  }});
  a.widget("ui.tooltip", {version:"1.11.4", options:{content:function() {
    var b = a(this).attr("title") || "";
    return a("<a>").text(b).html();
  }, hide:!0, items:"[title]:not([disabled])", position:{my:"left top+15", at:"left bottom", collision:"flipfit flip"}, show:!0, tooltipClass:null, track:!1, close:null, open:null}, _addDescribedBy:function(b, c) {
    var d = (b.attr("aria-describedby") || "").split(/\s+/);
    d.push(c);
    b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")));
  }, _removeDescribedBy:function(b) {
    var c = b.data("ui-tooltip-id"), d = (b.attr("aria-describedby") || "").split(/\s+/), c = a.inArray(c, d);
    -1 !== c && d.splice(c, 1);
    b.removeData("ui-tooltip-id");
    (d = a.trim(d.join(" "))) ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby");
  }, _create:function() {
    this._on({mouseover:"open", focusin:"open"});
    this.tooltips = {};
    this.parents = {};
    this.options.disabled && this._disable();
    this.liveRegion = a("<div>").attr({role:"log", "aria-live":"assertive", "aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
  }, _setOption:function(b, c) {
    var d = this;
    return "disabled" === b ? (this[c ? "_disable" : "_enable"](), this.options[b] = c, void 0) : (this._super(b, c), "content" === b && a.each(this.tooltips, function(a, b) {
      d._updateContent(b.element);
    }), void 0);
  }, _disable:function() {
    var b = this;
    a.each(this.tooltips, function(c, d) {
      var e = a.Event("blur");
      e.target = e.currentTarget = d.element[0];
      b.close(e, !0);
    });
    this.element.find(this.options.items).addBack().each(function() {
      var b = a(this);
      b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).removeAttr("title");
    });
  }, _enable:function() {
    this.element.find(this.options.items).addBack().each(function() {
      var b = a(this);
      b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"));
    });
  }, open:function(b) {
    var c = this, d = a(b ? b.target : this.element).closest(this.options.items);
    d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function() {
      var b, d = a(this);
      d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, c.close(b, !0));
      d.attr("title") && (d.uniqueId(), c.parents[this.id] = {element:this, title:d.attr("title")}, d.attr("title", ""));
    }), this._registerCloseHandlers(b, d), this._updateContent(d, b));
  }, _updateContent:function(a, b) {
    var c, d = this.options.content, e = this, f = b ? b.type : null;
    return "string" == typeof d ? this._open(b, a, d) : (c = d.call(a[0], function(c) {
      e._delay(function() {
        a.data("ui-tooltip-open") && (b && (b.type = f), this._open(b, a, c));
      });
    }), c && this._open(b, a, c), void 0);
  }, _open:function(b, c, d) {
    function e(a) {
      p.of = a;
      g.is(":hidden") || g.position(p);
    }
    var f, g, h, l, p = a.extend({}, this.options.position);
    if (d) {
      if (f = this._find(c)) {
        return f.tooltip.find(".ui-tooltip-content").html(d), void 0;
      }
      c.is("[title]") && (b && "mouseover" === b.type ? c.attr("title", "") : c.removeAttr("title"));
      f = this._tooltip(c);
      g = f.tooltip;
      this._addDescribedBy(c, g.attr("id"));
      g.find(".ui-tooltip-content").html(d);
      this.liveRegion.children().hide();
      d.clone ? (l = d.clone(), l.removeAttr("id").find("[id]").removeAttr("id")) : l = d;
      a("<div>").html(l).appendTo(this.liveRegion);
      this.options.track && b && /^mouse/.test(b.type) ? (this._on(this.document, {mousemove:e}), e(b)) : g.position(a.extend({of:c}, this.options.position));
      g.hide();
      this._show(g, this.options.show);
      this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
        g.is(":visible") && (e(p.of), clearInterval(h));
      }, a.fx.interval));
      this._trigger("open", b, {tooltip:g});
    }
  }, _registerCloseHandlers:function(b, c) {
    var d = {keyup:function(b) {
      b.keyCode === a.ui.keyCode.ESCAPE && (b = a.Event(b), b.currentTarget = c[0], this.close(b, !0));
    }};
    c[0] !== this.element[0] && (d.remove = function() {
      this._removeTooltip(this._find(c).tooltip);
    });
    b && "mouseover" !== b.type || (d.mouseleave = "close");
    b && "focusin" !== b.type || (d.focusout = "close");
    this._on(!0, c, d);
  }, close:function(b) {
    var c, d = this, e = a(b ? b.currentTarget : this.element), f = this._find(e);
    return f ? (c = f.tooltip, f.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && !e.attr("title") && e.attr("title", e.data("ui-tooltip-title")), this._removeDescribedBy(e), f.hiding = !0, c.stop(!0), this._hide(c, this.options.hide, function() {
      d._removeTooltip(a(this));
    }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), b && "mouseleave" === b.type && a.each(this.parents, function(b, c) {
      a(c.element).attr("title", c.title);
      delete d.parents[b];
    }), f.closing = !0, this._trigger("close", b, {tooltip:c}), f.hiding || (f.closing = !1)), void 0) : (e.removeData("ui-tooltip-open"), void 0);
  }, _tooltip:function(b) {
    var c = a("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")), d = c.uniqueId().attr("id");
    return a("<div>").addClass("ui-tooltip-content").appendTo(c), c.appendTo(this.document[0].body), this.tooltips[d] = {element:b, tooltip:c};
  }, _find:function(a) {
    return(a = a.data("ui-tooltip-id")) ? this.tooltips[a] : null;
  }, _removeTooltip:function(a) {
    a.remove();
    delete this.tooltips[a.attr("id")];
  }, _destroy:function() {
    var b = this;
    a.each(this.tooltips, function(c, d) {
      var e = a.Event("blur"), f = d.element;
      e.target = e.currentTarget = f[0];
      b.close(e, !0);
      a("#" + c).remove();
      f.data("ui-tooltip-title") && (f.attr("title") || f.attr("title", f.data("ui-tooltip-title")), f.removeData("ui-tooltip-title"));
    });
    this.liveRegion.remove();
  }});
});

