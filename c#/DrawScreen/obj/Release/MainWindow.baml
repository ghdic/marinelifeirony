   M S B A M L   `   `   `  ���� E  ADrawScreen, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null'clr-namespace:DrawScreen
DrawScreen      DrawScreen.MainWindow   \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     @d2http://schemas.microsoft.com/expression/blend/2008     Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     *localclr-namespace:DrawScreen       � 
ResizeMode$  NoResize=� � UseLayoutRounding .  � WindowStartupLocation$ CenterScreen=� � WindowState$ 	Maximized=����	#02FFFFFF � AllowsTransparency .  � WindowStyle$
 None=� � Title$ 
DrawScreen�� � Icon$ Resources/drawscreen.ico��.��� .+��� -    ��Name$ MainInkCanvas��	 �� MoveEnabled	 .  
 �� ResizeEnabled
 .   �� 
Background Z�  �� DefaultDrawingAttributes *  $System.Windows.Ink.DrawingAttributes     Color$ 	#FFFF5656��   
FitToCurve .    Height$ 5Q�   IgnorePressure .     IsHighlighter .     	StylusTip$ Ellipse=�   StylusTipTransform$ Identityx�   Width$ 5Q��� .+�� -    �Name$ Palette��$
��Left=�$	��Top=�$	��280��
 �� Top$ 15�� �� Left$ 15��.+�� $��Center=�$	��Top=�$��0,50,0,0q�.+��� -    ��Name$ PaletteGrip�����	#99595959$	��120��$��20�� �� CornerRadius$ 5�� � Cursor$ SizeAll��$
��Left=�$��0,0,30,0q��� -   $ CloseButton�����	#CCFF7774$��20��$��20��$ 5��$ No��$��Right=�� $��Center=�$��Center=�$��50,75,50,50q� J� Effect 3  -System.Windows.Media.Effects.DropShadowEffect     
BlurRadius$ 10Q�   ShadowDepth$ 5Q�   Opacity$	 0.5Q�.+��� -   $��40��$��40�����	#FF000000$ 15��$��5q�$	 Pen��
��������� -   $��40��$��40�����	#FFFFFFFF$ 15��$��5q�$	 Pen��
��������� -   $ DefaultColor��$��40��$��40�����	#FFFF0000$ 15��$��5q�$	 Pen��
�������� $	��150��.+��� ���	#4C727272$��Right=�$��Center=�$��30��$��30��$��0,0,5,0q�$ 3��._��� -   $ brushPreview��$��5��$��5�����	#FFD6D6D6$ 15��$��Center=�$��Center=��� -	   $��
5,15,35,15q� � Minimum$ 5Q�  � Maximum$  30Q�! � SmallChange$	! 0.2Q�" � LargeChange$	" 0.5Q�# �� IsMoveToPointEnabled# . $ �� IsSelectionRangeEnabled$ . |�.  % J� RenderTransformOrigin$% 0.5,0.5&�$��Center=�