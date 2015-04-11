from setuptools import setup

setup(
    name='snap',
    version='0.1',
    description='XBlock for Snap!',
    py_modules=['snap'],
    install_requires=['XBlock'],
    entry_points={
        'xblock.v1': [
            'snap = snap:SnapXBlock',
        ]
    }
)