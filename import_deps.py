#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# Copyright (C) 2005-2006 Insecure.Com LLC.
# Copyright (C) 2007-2008 Adriano Monteiro Marques
#
# Authors: Zhongjie Wang <wzj401@gmail.com>
#          Tianwei Liu <liutianweidlut@gmail.com>
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA

import os
import sys

ROOT_DIR = os.path.dirname(__file__)

execfile(os.path.join(ROOT_DIR, 'deps', 'umit-common', 'utils', 'importer.py'))
sys.path.insert(0, os.path.join(ROOT_DIR, 'deps'))
sys.path.insert(0, os.path.join(ROOT_DIR, 'deps', 'icm-common'))
sys.path.insert(0, os.path.join(ROOT_DIR, 'deps', 'umit-common'))
sys.path.insert(0, os.path.join(ROOT_DIR, 'deps', 'higwidgets'))
