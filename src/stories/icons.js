import React from 'react';
import { storiesOf } from '@kadira/storybook';

import {
    AddIcon,
    AnalyticIcon,
    BurgerIcon,
    ClearFiltersIcon,
    CloseWindowIcon,
    DownloadIcon,
    DragIcon,
    EmployeesIcon,
    FilterIcon,
    HomeIcon,
    InspectionsIcon,
    MapIcon,
    ObjectsIcon,
    PinIcon,
    PlusIcon,
    RedoIcon,
    SettingsIcon,
    UndoIcon,
    UploadIcon,
    UserIcon,
    ViewIcon,
    WayBackIcon,
    WayForwardIcon
} from '../components/icons';

import {theme} from '../assets/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('icons', [
    AddIcon,
    AnalyticIcon,
    BurgerIcon,
    ClearFiltersIcon,
    CloseWindowIcon,
    DownloadIcon,
    DragIcon,
    EmployeesIcon,
    FilterIcon,
    HomeIcon,
    InspectionsIcon,
    MapIcon,
    ObjectsIcon,
    PinIcon,
    PlusIcon,
    RedoIcon,
    SettingsIcon,
    UndoIcon,
    UploadIcon,
    UserIcon,
    ViewIcon,
    WayBackIcon,
    WayForwardIcon
])
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('add', () => (<AddIcon/>))
    .add('analytic', () => (<div><AnalyticIcon/> <AnalyticIcon isActive/></div>))
    .add('burger', () => (<BurgerIcon/>))
    .add('clear filters', () => (<ClearFiltersIcon/>))
    .add('close window', () => (<CloseWindowIcon/>))
    .add('download', () => (<DownloadIcon/>))
    .add('drag', () => (<DragIcon/>))
    .add('employees', () => (<EmployeesIcon/>))
    .add('filter', () => (<FilterIcon/>))
    .add('home', () => (<HomeIcon/>))
    .add('inspections', () => (<InspectionsIcon/>))
    .add('map', () => (<MapIcon/>))
    .add('objects', () => (<ObjectsIcon/>))
    .add('pin', () => (<PinIcon/>))
    .add('plus', () => (<PlusIcon/>))
    .add('redo', () => (<RedoIcon/>))
    .add('settings', () => (<SettingsIcon/>))
    .add('undo', () => (<UndoIcon/>))
    .add('upload', () => (<UploadIcon/>))
    .add('user', () => (<UserIcon/>))
    .add('view', () => (<ViewIcon/>))
    .add('way back', () => (<WayBackIcon/>))
    .add('way forward', () => (<WayForwardIcon/>))

    
